# Gatsby Plugin: Purge CloudFlare Cache

This plugin sends a request to the CloudFlare API, optionally only doing so when an arbitrary condition is fulfilled.

## Options

### token: string!

A CloudFlare API token for your site with permissions to purge cache.

A word of warning: don't just stick your token in here as a string if others can see your code! Grab your token from `process.env` and use `dotenv` to make that easier while developing.

### zoneId: string!

The CloudFlare Zone ID for your site (find it on the Web UI dashboard)

### condition: (api, options) => boolean

If provided, this function will be run during `onPreInit` and its return value will determine whether the plugin will proceed. 
This is most obviously useful for situations where you only want to clear cache after a production deploy.

If `condition` returns false, this application won't check for the required options.

While they aren't necessarily needed, the Gatsby API is provided to this function in case it's needed.

### headers: object = {}

This object will be merged onto the default headers for the request sent to CloudFlare. This is completely optional- the plugin handles the basics like `authorization` by default.

### body: object = { purge_everything: true }

This object will be the JSON body of the request sent to CloudFlare. Uses `purge_everything` by default because this plugin doesn't have any special logic to determine changed resources.
