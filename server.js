const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const NODE_ENV = "production"
const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});


// location / {

//     proxy_cache abroadinquiry;
//     proxy_no_cache 0;
//     proxy_cache_bypass 0;
//     proxy_cache_valid 200 301 302 60m;
//     proxy_cache_valid 404 1m;
//     proxy_cache_use_stale error timeout http_429 http_500 http_502 http_503 http_504;
//     proxy_cache_background_update on;
//     proxy_cache_revalidate on;
//     proxy_cache_min_uses 1;
//     proxy_cache_lock on;

//     include /usr/local/apps/nginx/etc/conf.d/proxy.conf;
//     proxy_pass $webuzoproxy;
// }




// server {
// 	listen		199.192.31.117:443 ssl;
// 	server_name	abroadtickets.com *.abroadtickets.com;
// 	# The Document Root
// 	root		/home/abroadinquiry/public_html/abroadtickets; 
// 	ssl_certificate				/var/webuzo/users/abroadinquiry/ssl/abroadtickets.com-combined.pem;
// 	ssl_certificate_key			/var/webuzo/users/abroadinquiry/ssl/abroadtickets.com.key;
// 	ssl_dhparam				    /etc/ssl/private/dhparam.pem;
	
// 	set $fpmsocket /usr/local/apps/php73/var/fpm-abroadinquiry.sock;
	
	
// 	set $webuzoproxy https://199.192.31.117:8082;
	
	
// 	location / {
	 
// 		 proxy_pass http:localhost;
//     	 proxy_http_version 1.1;
//    		 proxy_set_header Upgrade $http_upgrade;
//    		 proxy_set_header Connection 'upgrade';
//    		 proxy_set_header Host $host;
//    		 proxy_cache_bypass $http_upgrade;
// 	}
// 	error_log	/usr/local/apps/nginx/var/log/abroadtickets.com.err;
// 	access_log	/usr/local/apps/nginx/var/log/abroadtickets.com.log main;
	
	
	
	
	
// 	#webmail access from /webmail
// 	location ^~ /webmail {
// 		proxy_set_header Host $host;
// 		proxy_set_header Connection keep-alive;
// 		proxy_set_header X-Original-URI $request_uri;
// 		rewrite ^/webmail$ /webmail/ permanent;
// 		proxy_pass https://127.0.0.1:2003/mail/;
// 	}
	
// 	set $noindex @maintenance;
// 	include		/usr/local/apps/nginx/etc/conf.d/common;
// }

