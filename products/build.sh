#!/bin/bash
echo "Starting build for expunge-assist project..."

MAIN_DIR=$PWD
LANDING_DIR="$MAIN_DIR/landing-page"
STATEMENT_DIR="$MAIN_DIR/statement-generator"

# prepare unified folder
rm -rf $MAIN_DIR/builds
mkdir -p $MAIN_DIR/builds

# build each project and move them into the unified folder
cd $LANDING_DIR && npm i && npm run build
mv $LANDING_DIR/public/ $MAIN_DIR/builds/landing-bundle/
# mv $MAIN_DIR/builds/landing-bundle/public/static/ $MAIN_DIR/builds/static/


cd $STATEMENT_DIR && npm i && npm run build
mv $STATEMENT_DIR/build/ $MAIN_DIR/builds/statement-bundle/
# mv $STATEMENT_DIR/builds/statement-bundle/build/static/ $MAIN_DIR/builds/static/

echo "Finished unified expunge-assist build."
