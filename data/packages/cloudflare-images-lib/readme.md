
### Features

- Cloudflare Images Upload with image URL
- Cloudflare Images Upload with image base64 string

Important : **The second key is private dont use it on public.**

**CF_ACCOUNT_ID**
CloudFlare Dashboard > Images >Overview >(on right side) Developer Resources > Account ID

**CF_API_TOKEN**
CloudFlare Dashboard > (Top Right  Profile Icon) My profile > (Left Side) API Tokens > Create Token > Read and write to Cloudflare Stream and Images (User Template) > Continue to summary > Create Token 


#### base64 Upload


```javascript
import Uploader from "cloudflare-images-lib"
const uploader = new Uploader(
    'CF_ACCOUNT_ID',
    'CF_API_TOKEN'
)

    await uploader
        .fromBase64(
            'iVBORw...ORK5CYII=', // base64 string without data:***/***;base64 tag
            'test1234', // filename (optional if you dont provide random string will be generated)
            'png' // (optional default : png)
        )
        .then((res) => console.log(res.data))
        .catch((err) => {
            console.log(err)
        })
```

#### URL Upload

```javascript
import Uploader from "cloudflare-images-lib"
const uploader = new Uploader(
    'CF_ACCOUNT_ID',
    'CF_API_TOKEN'
)
    await uploader
        .fromURL(
            'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg'
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
```

#### Example Response

```javascript
{
  result: {
    id: '2e8fe0d7******200',
    filename: 'marg*******0.jpg',
    uploaded: '2023-0****62Z',
    requireSignedURLs: false,
    variants: [
      'https://imagedelivery.net/3PeG***********/public'
    ]
  },
  success: true,
  errors: [],
  messages: []
}
```
Notes:
##### This is not an Offical Library