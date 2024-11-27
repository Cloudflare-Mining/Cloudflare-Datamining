CloudFlare Express
=========

Express middleware for restoring visitors IP after being proxied through cloudflare.

I couldn't find a simple cloudflare module so I made one instead.

## Usage

```sh
$ npm install cloudflare-express --save
```

```javascript
var cloudflare = require('cloudflare-express');
```
Assuming: 
```javascript
var express = require('express');
var app = express();
```
Then you just need to use this as a middleware, (preferably before any other middleware is used.)
```javascript
  app.use(cloudflare.restore());
```

You can access the users original ip address by using the cf_ip property that is now set on all request objects in their routes.

```javascript
router.get('/test', function(req,res,next){
  res.send("Your IP is: "+req.cf_ip);
});
```
###Options
To update the Cloudflare IP list on startup, pass update_on_start:true.
This will grab the latest IP list from Cloudflare and save it to your cloudflare_ip.json file.
 ```javascript
 	app.use(cloudflare.restore({update_on_start:true}))
 ```

## Notes 
* If the cf-connecting-ip header is missing or the req.ip is not on the cloudflare IP list, the cf_ip property will be set to req.ip.
* If you're running behind an additional reverse proxy such an nginx, you may need to pass the trust proxy option to the express app. You can see more on how to do this at: http://expressjs.com/api.html#app-settings.

##Tests
```bash
npm test
```

## Dependencies
* range_check@0.0.4
* request@^2.72.0"


