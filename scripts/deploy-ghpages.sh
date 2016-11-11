#!/bin/bash
cd build
git init
git config user.name "pixels-bytes"
git config user.email "adam@pixelsandbytes.co"
git add .
git commit -m "Deployed to Github Pages"
git remote add origin git@github.com:pixels-bytes/contentful-travis-github.git
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
