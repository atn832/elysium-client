# rm -rf build
cp -rf public_html/* build
rm -rf build/js/*

jsx --non-strict-es6module public_html/ built_jsx/
node makebubbles.js

if [ "$1" == "prod" ]; then
    webpack built_jsx/js/app_prod.js
elif [ "$1" == "prod_pub" ]; then
    webpack -p built_jsx/js/app_prod_pub.js
elif [ "$1" == "dev" ]; then
    webpack built_jsx/js/app_local.js
else
    webpack built_jsx/js/app_static.js
fi

rm -rf build/bower_components/moment
rm -rf build/bower_components/moment-timezone
rm -rf build/css
rm build/bower_components/react/JSXTransformer.js
rm build/bower_components/react/react.*
