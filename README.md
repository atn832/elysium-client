elysium-client
==============

Setup
=====

```
npm install
npm install -g reload
npm install -g react-tools
npm install -g bower
```
Then from public_html:
`bower install`

Run
===

`./build.sh [prod|dev|empty string for static]` to build

`./deploy.sh [pub|empty string for private]` to deploy

`reload -p 8081` from build to serve locally
