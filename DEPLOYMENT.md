# Deployment Guide - Repave Website

This guide covers deploying the Repave website to Google Cloud Run using Cloud Build.

## Prerequisites

1. **Google Cloud Project**: `repave-prod`
2. **Artifact Registry Repository**: `container` in `asia-southeast1`
3. **gcloud CLI** installed and authenticated

## One-Time Setup

### 1. Enable Required APIs

```bash
gcloud config set project repave-prod

gcloud services enable \
  cloudbuild.googleapis.com \
  run.googleapis.com \
  artifactregistry.googleapis.com \
  containerregistry.googleapis.com
```

### 2. Create Artifact Registry Repository (if not exists)

```bash
gcloud artifacts repositories create container \
  --repository-format=docker \
  --location=asia-southeast1 \
  --description="Docker container images"
```

### 3. Grant Cloud Build Permissions

```bash
# Get the Cloud Build service account
PROJECT_NUMBER=$(gcloud projects describe repave-prod --format="value(projectNumber)")
CLOUD_BUILD_SA="${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com"

# Grant Cloud Run Admin role
gcloud projects add-iam-policy-binding repave-prod \
  --member="serviceAccount:${CLOUD_BUILD_SA}" \
  --role="roles/run.admin"

# Grant Service Account User role
gcloud projects add-iam-policy-binding repave-prod \
  --member="serviceAccount:${CLOUD_BUILD_SA}" \
  --role="roles/iam.serviceAccountUser"

# Grant Artifact Registry Writer role
gcloud projects add-iam-policy-binding repave-prod \
  --member="serviceAccount:${CLOUD_BUILD_SA}" \
  --role="roles/artifactregistry.writer"
```

### 4. Configure Docker Authentication

```bash
gcloud auth configure-docker asia-southeast1-docker.pkg.dev
```

## Manual Deployment

### Deploy from Local Machine

```bash
# Submit build to Cloud Build
gcloud builds submit \
  --config=cloudbuild.yaml \
  --project=repave-prod
```

### Deploy Specific Commit

```bash
# With commit SHA
gcloud builds submit \
  --config=cloudbuild.yaml \
  --substitutions=COMMIT_SHA=$(git rev-parse --short HEAD) \
  --project=repave-prod
```

## Automated Deployment (CI/CD)

### Option 1: Cloud Build Trigger (GitHub)

1. **Connect GitHub Repository**:
   ```bash
   gcloud beta builds triggers create github \
     --repo-name=repave-website2 \
     --repo-owner=YOUR_GITHUB_USERNAME \
     --branch-pattern="^main$" \
     --build-config=cloudbuild.yaml \
     --project=repave-prod
   ```

2. **Trigger builds** automatically on push to `main` branch

### Option 2: Cloud Build Trigger (Manual)

Create trigger via Console:
1. Go to Cloud Build → Triggers
2. Click "Create Trigger"
3. Configure:
   - **Name**: `deploy-repave-website`
   - **Event**: Push to branch
   - **Source**: Connect your repository
   - **Branch**: `^main$`
   - **Configuration**: Cloud Build configuration file
   - **Location**: `cloudbuild.yaml`

## Verify Deployment

### Check Cloud Run Service

```bash
# Get service URL
gcloud run services describe repave-website \
  --region=asia-southeast1 \
  --project=repave-prod \
  --format="value(status.url)"
```

### View Logs

```bash
# Cloud Build logs
gcloud builds list --limit=5 --project=repave-prod

# Cloud Run logs
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=repave-website" \
  --limit=50 \
  --project=repave-prod
```

### Test the Deployment

```bash
# Get the service URL
SERVICE_URL=$(gcloud run services describe repave-website \
  --region=asia-southeast1 \
  --project=repave-prod \
  --format="value(status.url)")

# Test it
curl -I $SERVICE_URL
```

## Custom Domain Setup

### 1. Map Custom Domain

```bash
gcloud run domain-mappings create \
  --service=repave-website \
  --domain=repave.io \
  --region=asia-southeast1 \
  --project=repave-prod
```

### 2. Configure DNS

Follow the instructions from the domain mapping output to add DNS records.

## Environment Variables

To update environment variables:

```bash
gcloud run services update repave-website \
  --update-env-vars KEY=VALUE \
  --region=asia-southeast1 \
  --project=repave-prod
```

## Rollback

### Rollback to Previous Revision

```bash
# List revisions
gcloud run revisions list \
  --service=repave-website \
  --region=asia-southeast1 \
  --project=repave-prod

# Rollback to specific revision
gcloud run services update-traffic repave-website \
  --to-revisions=REVISION_NAME=100 \
  --region=asia-southeast1 \
  --project=repave-prod
```

## Cost Optimization

The current configuration:
- **Min instances**: 0 (scales to zero when not in use)
- **Max instances**: 10
- **Memory**: 512Mi
- **CPU**: 1

Adjust in `cloudbuild.yaml` as needed.

## Troubleshooting

### Build Fails

```bash
# View build logs
gcloud builds log BUILD_ID --project=repave-prod
```

### Service Not Accessible

Check IAM permissions and ensure `--allow-unauthenticated` is set.

### Image Not Found

Verify Artifact Registry:
```bash
gcloud artifacts docker images list \
  asia-southeast1-docker.pkg.dev/repave-prod/container/repave-website \
  --project=repave-prod
```

## Resources

- [Cloud Run Documentation](https://cloud.google.com/run/docs)
- [Cloud Build Documentation](https://cloud.google.com/build/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
