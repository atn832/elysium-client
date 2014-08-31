tar -zcvf e2.tar.gz public_html/
scp e2.tar.gz atn@m.wafrat.com:~/
ssh -t atn@m.wafrat.com 'sudo ./deploy2.sh'

