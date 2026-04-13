/**
 * content-scanning command
 * @generated from apis/content-scanning/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import disable from './disable.js';
import enable from './enable.js';
import get from './get.js';
import update from './update.js';
import payloads from './payloads/index.js';
import settings from './settings/index.js';

const command: CommandModule = {
  command: 'content-scanning',
  describe: 'Scan uploaded content in HTTP requests for malware and malicious payloads',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(disable)
      .command(enable)
      .command(get)
      .command(update)
      .command(payloads)
      .command(settings)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
