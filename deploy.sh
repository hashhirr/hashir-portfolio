#!/bin/bash

# Build the project
npm run build

# Create a new branch for deployment
git checkout -b gh-pages

# Remove all files except dist
git rm -rf .
git checkout HEAD -- dist/

# Move dist contents to root
mv dist/* .
rmdir dist

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push origin gh-pages --force

# Go back to main branch
git checkout main
git branch -D gh-pages

echo "Deployment completed! Your site should be available at https://your-github-username.github.io/Hashir-Qureshi-Portfolio/" 
