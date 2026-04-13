/**
 * stream command
 * @generated from apis/stream/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import audiotracks from './audio-tracks/index.js';
import captions from './captions/index.js';
import clip from './clip/index.js';
import copy from './copy/index.js';
import directupload from './direct-upload/index.js';
import downloads from './downloads/index.js';
import downloadsextra from './downloads-extra/index.js';
import embed from './embed/index.js';
import keys from './keys/index.js';
import liveinputs from './live-inputs/index.js';
import liveinputsextra from './live-inputs-extra/index.js';
import token from './token/index.js';
import videos from './videos/index.js';
import watermarks from './watermarks/index.js';
import webhooks from './webhooks/index.js';

const command: CommandModule = {
  command: 'stream',
  describe: 'Video encoding, storage, and delivery — upload, live-stream, clip, caption, and embed video at scale',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(audiotracks)
      .command(captions)
      .command(clip)
      .command(copy)
      .command(directupload)
      .command(downloads)
      .command(downloadsextra)
      .command(embed)
      .command(keys)
      .command(liveinputs)
      .command(liveinputsextra)
      .command(token)
      .command(videos)
      .command(watermarks)
      .command(webhooks)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
