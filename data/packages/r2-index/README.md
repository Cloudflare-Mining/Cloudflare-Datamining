# R2Index

R2Index is a package that makes handling Cloudflare R2 event notifications a bit easier.

Only works in combination with Cloudflare Workers and Miniflare.


## Installation

Install index with npm (or pnpm)

```bash
  npm install --save r2-index
```


## Usage

R2Index works in all the handlers that Workers supports (such as fetch, queue, ..etc).

Note: For queue batches, we currently do not support batch inserts. But we are working on this.

```typescript
import R2Index, { D1Provider, type R2IndexNotificationPayload } from 'r2-index';

export default {
    async queue(batch: MessageBatch<R2IndexNotificationPayload>, env: Env, ctx: ExecutionContext): Promise<void> {
        const r2Index = new R2Index({
            accountIds: ['3f4b7e3dcab231cbfdaa90a6a28bd548'],
            bucketNames: ['my-bucket'],
            allowedActions: ['PutObject', 'CopyObject', 'DeleteObject'],
            provider: new D1Provider(env.D1_DATABASE)
        });

        for(const message of batch.messages) {
            // Wait until the message has been processed, or else retry
            try {
                await r2Index.handleNotification(message.body);
                message.ack();
            } catch(e) {
                console.error(e);
                message.retry();
            }

            // or you can use waitUntil if you don't want to retry messages.
            ctx.waitUntil(
                r2Index.handleNotification(message.body)
            );
        }
    },
};
```


## API

#### Config

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `accountIds` | `string[]` | Optional. Enter string account ids that are allowed. |
| `allowedActions` | `R2IndexNotificationActions[]` | Optional. Enter the action types that are allowed. |
| `bucketNames` | `string[]` | Optional. Bucket names that are allowed. |
| `throw` | `boolean` | Optional. Set if R2Index should throw on errors, caused by one of the 3 settings from above. |
| `provider` | `R2IndexProvider` | Required. The desired provider to handle storage. |

#### Typings

| Parameter | Description                       |
| :-------- | :-------------------------------- |
| `R2IndexNotificationActions` | PutObject, CopyObject, CompleteMultipartUpload, DeleteObject or LifecycleDeletion |


## License

[MIT](https://choosealicense.com/licenses/mit/)

