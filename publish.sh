#!/bin/bash

if [[ -z "$1" ]] ; then
    rm -rf build/ 
    BASE="/hub-public/" yarn build 
    mv gh-pages/next next-backup
    rm -rf gh-pages/* 
    cp -r build/* gh-pages/ 
    mv next-backup gh-pages/next 
    cd gh-pages/ 
    git add . 
    git commit -m "Publish" 
    git push
else
    if [[ "$1" == "next" ]] ; then
        rm -rf build/ 
        BASE="/hub-public/next/" yarn build 
        rm -rf gh-pages/next/* 
        cp -r build gh-pages/next
        cd gh-pages/next 
        git add . 
        git commit -m "Publish" 
        git push
    fi
fi