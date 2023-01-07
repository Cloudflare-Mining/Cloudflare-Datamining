# 📣 cli

> Description

A cli for yelling about things (like release notifications) in chat.

This library was created as an alternative to doing raw curl calls in CI
scripts.

## Installation

```sh
$ npm install @cloudflare/megaphone
```

## Usage

```sh
$ megaphone --bot eve "Releasing a thing!"  # or...
$ megaphone -b eve "Releasing a thing!"

# Specify a specific thread or threadKey as defined here:
# https://developers.google.com/chat/api/reference/rest/v1/spaces.messages/create#query-parameters
$ megaphone --bot eve --thread <thread_id> "Releasing a thing!"
```

### Configuration

In order to get meaningful results about the state of internationalization of a
repo, there are some configuration that the `i18n` command relies on.

The the first thing the `i18n` command does is to locate the `i18n.config.js`
config file closest to the directory from which the command is run.

The config file is expected to have a shape like:

```js
module.exports = {
{
  bots: {
    alice: 'https://chat.googleapis.com/v1/spaces/AAAAqKuBJzw/messages?key=<alice_key>&token=<some_token>',
    bob: 'https://chat.googleapis.com/v1/spaces/AAAAqKuBJzw/messages?key=<alice_key>&token=<some_token>'
  },
  threads: {
    deployment: "spaces/<space_id>/threads/<thread_id>"
  }
};
```

The `bots` object contains key-value pairs of bot names and the webhook url
associated with each. These urls can be found in gchat. Note that webhook urls
are specific to a space.

The `threads` object contains key-value pairs of thread ids and the associated
gchat threadKey.