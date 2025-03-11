# 🚀 Static Website Deployment to AWS S3

This project uses **GitHub Actions** to automate the deployment of a static website to an AWS S3 bucket.

## 📂 Project Structure
```
.
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions workflow for deployment
├── index.html              # Main HTML file
├── css/                    # Stylesheets
├── js/                     # JavaScript files
└── README.md               # Project documentation
```

## ⚙️ AWS Setup
1. **Create an S3 Bucket**
   - Bucket Name: `staticwebsitetarcin`
   - Region: `us-east-1`
   - Enable static website hosting.
   
2. **Set Bucket Policy**
Ensure the following policy is attached to allow public read access:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::staticwebsitetarcin/*"
        }
    ]
}
```

3. **Create IAM User**
   - Assign programmatic access.
   - Attach policies to allow full S3 access for the specific bucket.

4. **Configure GitHub Secrets**
   - `AWS_ACCESS_KEY_ID`: Your AWS access key.
   - `AWS_SECRET_ACCESS_KEY`: Your AWS secret key.

## 🚀 Deployment Workflow

The deployment is handled automatically through GitHub Actions whenever changes are pushed to the `main` branch.

### GitHub Action Workflow (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Deploy to S3
        run: |
          aws s3 sync . s3://staticwebsitetarcin --delete
```

## ✅ How to Deploy
1. Commit your changes:
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```
2. The GitHub Action will automatically deploy the updated files to S3.

## 🧩 Troubleshooting
- **Access Denied**: Ensure the IAM user has the correct permissions and that the bucket policy allows public read access.
- **ACL Errors**: Ensure that ACLs are not used since the bucket has ACLs disabled.

## 📄 License
This project is licensed under the [MIT License](LICENSE).

---

For more information, contact [Your Name](mailto:your-email@example.com).


