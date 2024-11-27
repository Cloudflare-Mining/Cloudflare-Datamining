# netlify-purge-cloudflare-on-deploy
Automatically purge Cloudflare cache on Netlify deploy.

## NOTES:
* Strictly this plugin triggers the cache purge before deploy (but after build), as this is the only functionality Netlify provides.
* Cloudflare supports two methods of authentication.  API TOKEN (Recommended) and API KEY (Legacy).
* In the event the plugin finds both API Token and API Key environment variables, it will default to using API Token as this is the recommended method of authentication.

## API TOKEN Authentication (Recommended, granular security controls)
From Cloudflare, you'll need:
* Your Zone ID. Go to your Cloudflare dashboard, enter your website, and look in the bottom right hand corner under 'API'.
* An API Token

#### API TOKEN - Instructions for creating new Cloudflare API Token
1.  In Cloudflare, navigate to My Profile --> API Tokens
2.  Click Create Token Button
3.  Click Custom Token Section --> Create Custom Token --> Get Started Button
4.  On the Create Custom Token Page:
    * Token Name --> Netlify Purge Cache Token (or anything other name that is meaningful to you)
    * Permissions --> Zone --> Cache Purge --> Purge
    * Click Continue to Summary button
5.  Click Create Token Button
6.  Record the API Token to your password safe of choice.  This is the last time you will have an opportunity to see this token.

#### API TOKEN - Instructions for configuring Netlify
In Netlify, go to Settings -> Build & Deploy -> Environment -> Environment variables and set up:
* CLOUDFLARE_ZONE_ID
* CLOUDFLARE_API_TOKEN

## API KEY Authentication (Legacy, full account access)
It is recommended you use API Token authentication instead.  Please see above for instructions.  From Cloudflare, you'll need:
* Your Cloudflare email address.
* Your Zone ID. Go to your Cloudflare dashboard, enter your website, and look in the bottom right hand corner under 'API'.
* Your Cloudflare API key.

#### API KEY - Instructions for finding your Cloudflare API Key
1.  In Cloudflare, navigate to My Profile --> API Tokens
2.  Below the API Tokens section, you will see the API Keys section
3.  Click the View button to the right of Global API Key
4.  Authenticate again using your CLoudflare account password and hCaptcha
5.  Your API Key is revealed.  No need to record this as you can access it anytime again in the future.


#### API KEY - Instructions for configuring Netlify
In Netlify, go to Settings -> Build & Deploy -> Environment -> Environment variables and set up:
* CLOUDFLARE_ZONE_ID
* CLOUDFLARE_API_KEY
* CLOUDFLARE_EMAIL



## Build failure with 'Bad request'
Check you set up your environment variables properly.

## netlify.toml template

    [[plugins]]
    package = "./plugins/netlify-purge-cloudflare-on-deploy"
