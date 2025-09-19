# Amazon Clone Frontend

A React-based Amazon clone application built with Vite.

## GitHub Pages Setup

To fix the "Not Found" error and enable GitHub Pages deployment, follow these steps:

### 1. Repository Settings
1. Go to your GitHub repository settings
2. Navigate to **Pages** section (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Push Your Code
Make sure all files are committed and pushed to the `main` branch:

```bash
git add .
git commit -m "Add GitHub Pages configuration"
git push origin main
```

### 3. Enable GitHub Actions
1. Go to the **Actions** tab in your repository
2. If prompted, enable GitHub Actions for your repository
3. The deployment workflow should automatically run

### 4. Verify Deployment
- Check the **Actions** tab to see if the workflow runs successfully
- Once deployed, your site will be available at: `https://[your-username].github.io/amazon-clone/`

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
amazon-clone/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── App.jsx            # Main React component
│   ├── App.css            # Component styles
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## Troubleshooting

If you still get the "Not Found" error:

1. **Check Repository Visibility**: Make sure your repository is public
2. **Verify Branch**: Ensure you're pushing to the `main` branch
3. **Check Actions**: Look at the Actions tab for any build errors
4. **Wait**: Initial deployment can take a few minutes

The error you encountered typically occurs when:
- GitHub Pages is not enabled in repository settings
- The repository doesn't have the proper GitHub Actions workflow
- The source is not set to "GitHub Actions" in Pages settings