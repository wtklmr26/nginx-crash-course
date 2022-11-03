# Install nginx on Mac
```
brew isntall nginx
```

# Configuration
```
cp ./nginx.conf /usr/local/etc/nginx/
```

# nginx Command
### start
```
nginx
```

### reload
```
nginx -s reload
```

# Browse
http://localhost:8080


# Check load balancer
```
cd ./server

sh serve.sh
```

Then go to: http://localhost:8080
