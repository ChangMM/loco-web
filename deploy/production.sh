#!/bin/bash
HOSTS=("120.92.180.30")
PUBLISH_DIR=/data/builds/larp-server

publish(){
   ssh larp@$1 -p 21860 "rm -rf ${PUBLISH_DIR}/views/index.html;mkdir -p ${PUBLISH_DIR}/public;mkdir -p ${PUBLISH_DIR}/views"
   scp -P 21860 -r dist/* larp@$1:/${PUBLISH_DIR}/public
   ssh larp@$1 -p 21860 "rm -rf ${PUBLISH_DIR}/public/index.html"
   scp -P 21860 -r dist/* larp@$1:/${PUBLISH_DIR}/public
   scp -P 21860 -r dist/index.html larp@$1:/${PUBLISH_DIR}/views
}


for host in ${HOSTS[@]}
do
   publish $host
done
