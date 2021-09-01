#!/bin/bash

BASEPATH="/"
DOMAIN="hub.studyathome.technikum-wien.at"

if [[ -z "$1" ]] ; then
    rm -rf build/ 
    mkdir gh-pages
    BASE=$BASEPATH yarn build 
    mv gh-pages/next next-backup
    rm -rf gh-pages/* 
    cp -r build/* gh-pages/ 
    mv next-backup gh-pages/next 
    cd gh-pages/
    echo $DOMAIN > CNAME
    cd ..
#    git add . 
#    git commit -m "docs: release hub" 
#    git push
    scp -r gh-pages/* study-deploy@studyathome.technikum-wien.at:/var/www/html/hub-public/
#   the subfolders must have the r and x permission set in order to be accessible by the webserver. This should already be set correctly
#   ssh study-deploy@studyathome.technikum-wien.at chmod -R 755 /var/www/html/hub-public/
else
    if [[ "$1" == "next" ]] ; then
        rm -rf build/ 
        mkdir gh-pages
        BASE=$BASEPATH"next/" yarn build 
        rm -rf gh-pages/next
        cp -r build gh-pages/next
        cd gh-pages/next
        echo $DOMAIN > CNAME
        cd ../..
#       git add . 
#       git commit -m "docs: release hub" 
#       git push
        scp -r gh-pages/* study-deploy@studyathome.technikum-wien.at:/var/www/html/hub-public/
#       the subfolders must have the r and x permission set in order to be accessible by the webserver. This should already be set correctly
#       ssh study-deploy@studyathome.technikum-wien.at chmod -R 755 /var/www/html/hub-public/
    fi
fi