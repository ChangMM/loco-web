#!/bin/bash
HOSTS=("119.3.43.237")
PUBLISH_DIR=/root/builds/loco

npm run build

publish(){
   ssh root@$1 "rm -rf ${PUBLISH_DIR}/views/index.html;mkdir -p ${PUBLISH_DIR}/public;mkdir -p ${PUBLISH_DIR}/views"
   scp -r dist/* root@$1:/${PUBLISH_DIR}/public
   ssh root@$1 "rm -rf ${PUBLISH_DIR}/public/index.html"
   scp -r dist/* root@$1:/${PUBLISH_DIR}/public
   scp -r dist/index.html root@$1:/${PUBLISH_DIR}/views
}

for host in ${HOSTS[@]}
do
   publish $host
done
