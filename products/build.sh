#!/bin/bash
echo "Starting build for expunge-assist project..."

# get latest and install
git checkout . && git clean -df && git pull && npm install

# build the multiple parts of the app
git checkout ./landing-page && npm run build
git checkout ./statement-generator && npm run build

# bring the build to a unified location
mv ./landing-page/build ../build/landing-bundle
mv ./statement-generator/build ../build/statement-bundle

echo "Finished unified expunge-assist build."
