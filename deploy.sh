#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate to build output directory
cd dist

git init
git add -A
git commit -m "deploy"
git push -f git@github.com:vertcitron/divide-challenge.git main:gh-pages
cd -
