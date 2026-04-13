/**
 * origin-post-quantum-encryption command
 * @generated from apis/origin-post-quantum-encryption/schema.ts
 */
import type { CommandModule } from 'yargs';
import get from './get.js';
import update from './update.js';

const command: CommandModule = {
  command: 'origin-post-quantum-encryption',
  describe: 'Enable post-quantum key exchange for connections between Cloudflare and your origin server',

  builder: (yargs) => {
    return yargs.command(get).command(update).demandCommand(1);
  },

  handler: () => {},
};

export default command;
