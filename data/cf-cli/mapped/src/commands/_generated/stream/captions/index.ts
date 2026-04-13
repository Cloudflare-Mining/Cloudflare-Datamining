/**
 * captions command group
 * @generated from apis/stream/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import languagecreate from './language-create.js';
import languagedelete from './language-delete.js';
import languageget from './language-get.js';
import languageupdate from './language-update.js';
import languagevttget from './language-vtt-get.js';

const command: CommandModule = {
  command: 'captions',
  describe: 'Upload, generate, or retrieve captions and subtitles for videos in multiple languages',

  builder: (yargs) => {
    return yargs
      .command(get)
      .command(languagecreate)
      .command(languagedelete)
      .command(languageget)
      .command(languageupdate)
      .command(languagevttget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
