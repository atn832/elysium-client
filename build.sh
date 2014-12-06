# rm -rf build
cp -rf public_html/* build
jsx public_html/ built_jsx/
if [ "$1" == "prod" ]; then
    webpack built_jsx/js/app_prod.js
elif [ "$1" == "dev" ]; then
    webpack built_jsx/js/app_local.js
else
    webpack built_jsx/js/app_static.js
fi
