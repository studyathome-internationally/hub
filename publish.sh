#!/bin/bash

rm -rf build/ 
BASE="/hub-public/" yarn build 
rm -rf gh-pages/* 
cp -r build/* gh-pages/ 
cd gh-pages/ 
git add . 
git commit -m "Publish" 
git push