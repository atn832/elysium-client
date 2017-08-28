rm -rf build/

node makebubbles.js

if [ "$1" == "prod" ]; then
    cp src/js/app_prod.js src/index.js
elif [ "$1" == "prod_pub" ]; then
    cp src/js/app_prod_pub.js src/index.js
elif [ "$1" == "dev" ]; then
    cp src/js/app_local.js src/index.js
else
    cp src/js/app_static.js src/index.js
fi

npm run build
