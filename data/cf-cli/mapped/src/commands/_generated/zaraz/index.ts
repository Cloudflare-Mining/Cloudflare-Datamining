/**
 * zaraz command
 * @generated from apis/zaraz/schema.ts
 */
import type { CommandModule } from 'yargs';
import update from './update.js';
import config from './config/index.js';
import default_ from './default/index.js';
import export_ from './export/index.js';
import history from './history/index.js';
import publish from './publish/index.js';
import workflow from './workflow/index.js';

const command: CommandModule = {
  command: 'zaraz',
  describe:
    "Server-side tag manager — load third-party tools (analytics, pixels, etc.) from Cloudflare's edge without client-side JS",

  builder: (yargs) => {
    return yargs
      .command(update)
      .command(config)
      .command(default_)
      .command(export_)
      .command(history)
      .command(publish)
      .command(workflow)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
