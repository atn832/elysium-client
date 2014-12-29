if [ "$1" == "pub" ]; then
    ./build.sh prod_pub
    HOST=s.wafrat.com
    DESTINATION=/var/www/html/Elysium
else
    ./build.sh prod
    HOST=m.wafrat.com
    DESTINATION=/var/www/html/E
fi
tar -zcvf e.tar.gz -C build .
scp -r e.tar.gz root@$HOST:/root/
ssh root@$HOST "tar -zxf /root/e.tar.gz -C $DESTINATION"
