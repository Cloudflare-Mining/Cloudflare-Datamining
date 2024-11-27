# Cloudflare-R2

This is a wrapper of the AWS S3 client library, designed to provide a user-friendly and efficient way to interact with Cloudflare R2 API in Node.js

### Why make this library?

-   As of the writing of this README, there is no official Node.js library for Cloudflare R2.
-   Interacting with object storage APIs, especially Cloudflare R2, should be simple and straightforward.

> ⚠ This library is currently in development and may not be ready for production use. It is subject to change and may contain bugs or other issues. Please use it at your own risk.

## Installation

#### npm

```bash
npm install node-cloudflare-r2
```

#### pnpm

```bash
pnpm install node-cloudflare-r2
```

> It is highly recommended that you use a specific version number in your installation to anticipate any breaking changes that may occur in future releases. For example: \
> `npm install node-cloudflare-r2@0.4.0` \
> or \
> `pnpm install node-cloudflare-r2@0.4.0` \
> \
> Check the latest version number in the [release page](https://github.com/f2face/cloudflare-r2/releases).

## Examples

### Basic usage

```javascript
import { R2 } from 'node-cloudflare-r2';

// Initialize R2
const r2 = new R2({
    accountId: '<YOUR_ACCOUNT_ID>',
    accessKeyId: '<YOUR_R2_ACCESS_KEY_ID>',
    secretAccessKey: '<YOUR_R2_SECRET_ACCESS_KEY>',
});

// Initialize bucket instance
const bucket = r2.bucket('<BUCKET_NAME>');

// [Optional] Provide the public URL(s) of your bucket, if its public access is allowed.
bucket.provideBucketPublicUrl('https://pub-xxxxxxxxxxxxxxxxxxxxxxxxx.r2.dev');

// Check if the bucket exists
console.log(await bucket.exists()); // true
```

### Upload local file (simple)

```javascript
const upload = await bucket.uploadFile('/path/to/file', 'destination_file_name.ext');
console.log(upload);
/*
{
    objectKey: 'destination_file_name.ext',
    uri: 'destination_file_name.ext',
    publicUrl: 'https://pub-xxxxxxxxxxxxxxxxxxxxxxxxx.r2.dev/destination_file_name.ext',
    publicUrls: ['https://pub-xxxxxxxxxxxxxxxxxxxxxxxxx.r2.dev/destination_file_name.ext'],
    etag: '',
    versionId: '',
    }
*/
```

### Generate signed URL with expiration time

```javascript
// Generate signed link that expires after 3600 seconds.
const signedUrl = await bucket.getObjectSignedUrl('destination_file_name.ext', 3600);
console.log(signedUrl);
/*
https://bucket-name.cloudflare-account-id.r2.cloudflarestorage.com/destination_file_name.ext?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=...&X-Amz-Date=...&X-Amz-Expires=60&X-Amz-Signature=...&X-Amz-SignedHeaders=host&x-id=GetObject
*/
```

### Upload string or binary data or stream

```javascript
// Upload text content
const content = 'Lorem ipsum';
const uploadContent = await bucket.upload(content, 'lorem-ipsum.txt');
```

```javascript
import { createReadStream } from 'fs';

// Upload from fs.createReadStream()
const stream = createReadStream('/path/to/file');
const uploadStream = await bucket.upload(stream, 'destination_file_name2.ext');
```

### Upload stream (advanced)

This `bucket.uploadStream()` method allows uploading big file or piping stream or stdout directly to your bucket (using multipart upload internally).

```javascript
// Let's say, you want to record a live stream and pipe it directly to your bucket.
import { spawn } from 'child_process';

const streamlink = spawn('streamlink', ['--stdout', '<LIVE_STREAM_HLS_URL>', 'best']);
const uploadLiveStreamVideo = await bucket.uploadStream(streamlink.stdout, 'my_live_stream.ts');
```

## Credits

Thanks to all [contributors](https://github.com/f2face/cloudflare-r2/graphs/contributors) who have helped improve this project.
