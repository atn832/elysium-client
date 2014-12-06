# rm -rf build
cp -rf public_html/* build
jsx public_html/js/ built_jsx/
if [ "$1" == "prod" ]; then
    webpack built_jsx/app_prod.js
elif [ "$1" == "dev" ]; then
    webpack built_jsx/app_local.js
else
    webpack built_jsx/app_static.js
fi
