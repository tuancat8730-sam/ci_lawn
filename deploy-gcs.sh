#!/bin/bash
# ============================================================
# CI Lawn — Deploy to Google Cloud Storage
# Usage: bash deploy-gcs.sh [BUCKET_NAME] [PROJECT_ID]
# ============================================================

set -e

export PATH=$HOME/google-cloud-sdk/bin:$PATH

BUCKET_NAME=${1:-"ci_lawn"}
PROJECT_ID=${2:-"ci-project-489202"}

echo ""
echo "=========================================="
echo "  CI Lawn — GCS Static Site Deploy"
echo "=========================================="
echo ""

# ── Step 1: Check auth ─────────────────────────────────────
echo "→ Checking authentication..."
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" 2>/dev/null | grep -q "@"; then
  echo "  Not logged in. Opening browser..."
  gcloud auth login --no-launch-browser
fi
echo "  ✓ Authenticated as: $(gcloud auth list --filter=status:ACTIVE --format='value(account)' 2>/dev/null | head -1)"

# ── Step 2: Set project ────────────────────────────────────
if [ -n "$PROJECT_ID" ]; then
  gcloud config set project "$PROJECT_ID"
else
  echo ""
  echo "  Available projects:"
  gcloud projects list --format="table(projectId,name)" 2>/dev/null
  echo ""
  read -rp "  Enter your Project ID: " PROJECT_ID
  gcloud config set project "$PROJECT_ID"
fi
echo "  ✓ Project set: $PROJECT_ID"

# ── Step 3: Enable required APIs ──────────────────────────
echo ""
echo "→ Enabling Cloud Storage API..."
gcloud services enable storage.googleapis.com --quiet
echo "  ✓ Storage API enabled"

# ── Step 4: Create bucket if not exists ───────────────────
echo ""
echo "→ Setting up bucket: gs://$BUCKET_NAME"
if gsutil ls "gs://$BUCKET_NAME" &>/dev/null; then
  echo "  ✓ Bucket already exists"
else
  gsutil mb -p "$PROJECT_ID" -l US "gs://$BUCKET_NAME"
  echo "  ✓ Bucket created"
fi

# ── Step 5: Configure for static website hosting ──────────
echo ""
echo "→ Configuring website settings..."
gsutil web set -m index.html -e index.html "gs://$BUCKET_NAME"
echo "  ✓ Website config set (main: index.html, 404: index.html)"

# ── Step 6: Make bucket public ─────────────────────────────
echo ""
echo "→ Making bucket publicly accessible..."
gsutil iam ch allUsers:objectViewer "gs://$BUCKET_NAME"
echo "  ✓ Public access enabled"

# ── Step 7: Set cache headers & upload files ───────────────
echo ""
echo "→ Uploading files from dist/..."

cd /home/tuancnh/code/ci_lawn/ci_lawn_web

# Upload assets with long cache (1 year) — hashed filenames never change
gsutil -m -h "Cache-Control:public, max-age=31536000, immutable" \
  cp -r dist/assets "gs://$BUCKET_NAME/"

# Upload index.html with no-cache (always fresh)
gsutil -h "Cache-Control:no-cache, no-store, must-revalidate" \
  cp dist/index.html "gs://$BUCKET_NAME/index.html"

# Upload other public files (favicon, icons, images)
gsutil -m -h "Cache-Control:public, max-age=86400" \
  rsync -r dist/ "gs://$BUCKET_NAME/" \
  --exclude "assets/**" \
  --exclude "index.html" 2>/dev/null || true

echo "  ✓ Files uploaded"

# ── Step 8: Print URLs ─────────────────────────────────────
echo ""
echo "=========================================="
echo "  ✅ DEPLOYMENT COMPLETE!"
echo "=========================================="
echo ""
echo "  Public URL:"
echo "  https://storage.googleapis.com/$BUCKET_NAME/index.html"
echo ""
echo "  GCS Website URL (if CNAME configured):"
echo "  http://$BUCKET_NAME.storage.googleapis.com"
echo ""
echo "  To update: just run this script again"
echo "=========================================="
echo ""
