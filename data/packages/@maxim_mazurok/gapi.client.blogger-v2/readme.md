# TypeScript typings for Blogger API v2

The Blogger API provides access to posts, comments and pages of a Blogger blog.
For detailed description please check [documentation](https://developers.google.com/blogger/docs/3.0/getting_started).

## Installing

Install typings for Blogger API:

```
npm install @types/gapi.client.blogger-v2 --save-dev
```

## Usage

You need to initialize Google API client in your code:

```typescript
gapi.load('client', () => {
  // now we can use gapi.client
  // ...
});
```

Then load api client wrapper:

```typescript
gapi.client.load(
  'https://blogger.googleapis.com/$discovery/rest?version=v2',
  () => {
    // now we can use:
    // gapi.client.blogger
  }
);
```

```typescript
// Deprecated, use discovery document URL, see https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md#----gapiclientloadname----version----callback--
gapi.client.load('blogger', 'v2', () => {
  // now we can use:
  // gapi.client.blogger
});
```

Don't forget to authenticate your client before sending any request to resources:

```typescript
// declare client_id registered in Google Developers Console
var client_id = '',
  scope = [
    // Manage your Blogger account
    'https://www.googleapis.com/auth/blogger',
  ],
  immediate = true;
// ...

gapi.auth.authorize(
  {client_id: client_id, scope: scope, immediate: immediate},
  authResult => {
    if (authResult && !authResult.error) {
      /* handle successful authorization */
    } else {
      /* handle authorization error */
    }
  }
);
```

After that you can use Blogger API resources: <!-- TODO: make this work for multiple namespaces -->

```typescript
/*
Gets a blog by id.
*/
await gapi.client.blogger.blogs.get({blogId: 'blogId'});

/*
Lists blogs by user id, possibly filtered.
*/
await gapi.client.blogger.blogs.list({userId: 'userId'});

/*
Gets a comment by blog id, post id and comment id.
*/
await gapi.client.blogger.comments.get({
  blogId: 'blogId',
  commentId: 'commentId',
  postId: 'postId',
});

/*
Lists comments.
*/
await gapi.client.blogger.comments.list({blogId: 'blogId', postId: 'postId'});

/*
Gets a page by blog id and page id.
*/
await gapi.client.blogger.pages.get({blogId: 'blogId', pageId: 'pageId'});

/*
Lists pages.
*/
await gapi.client.blogger.pages.list({blogId: 'blogId'});

/*
Gets a post by blog id and post id
*/
await gapi.client.blogger.posts.get({blogId: 'blogId', postId: 'postId'});

/*
Lists posts.
*/
await gapi.client.blogger.posts.list({blogId: 'blogId'});

/*
Gets a user by user id.
*/
await gapi.client.blogger.users.get({userId: 'userId'});
```
