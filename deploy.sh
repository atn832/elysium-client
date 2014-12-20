if [ "$1" == "pub" ]; then
    ./build.sh prod_pub
    tar -zcvf e.tar.gz -C build .
    scp -r e.tar.gz root@s.wafrat.com:/root/
    ssh root@s.wafrat.com "tar -zxvf /root/e.tar.gz -C /var/www/html/Elysium"
else
    ./build.sh prod
    scp -r build/* root@m.wafrat.com:/var/www/html/E
fi
