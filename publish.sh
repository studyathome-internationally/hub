#!/bin/bash

BASEPATH="/"
DOMAIN="hub.studyathome.technikum-wien.at"

if [[ -z "$1" ]] ; then
    rm -rf build/ 
    BASE=$BASEPATH yarn build 
    mv gh-pages/next next-backup
    rm -rf gh-pages/* 
    cp -r build/* gh-pages/ 
    mv next-backup gh-pages/next 
    cd gh-pages/
    echo $DOMAIN > CNAME
    git add . 
    git commit -m "docs: release hub" 
    git push
else
    if [[ "$1" == "next" ]] ; then
        rm -rf build/ 
        BASE=$BASEPATH"next/" yarn build 
        rm -rf gh-pages/next
        cp -r build gh-pages/next
        cd gh-pages/next
        echo $DOMAIN > CNAME
        git add . 
        git commit -m "docs: release hub" 
        git push
    fi
fi