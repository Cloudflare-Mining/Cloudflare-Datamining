/**
 * spectrum command
 * @generated from apis/spectrum/schema.ts
 */
import type { CommandModule } from 'yargs';
import analytics from './analytics/index.js';
import apps from './apps/index.js';

const command: CommandModule = {
  command: 'spectrum',
  describe: "Proxy and protect arbitrary TCP/UDP applications through Cloudflare's network with DDoS mitigation",

  builder: (yargs) => {
    return yargs.command(analytics).command(apps).demandCommand(1);
  },

  handler: () => {},
};

export default command;
