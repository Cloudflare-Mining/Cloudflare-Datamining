/**
 * diagnostics command
 * @generated from apis/diagnostics/schema.ts
 */
import type { CommandModule } from 'yargs';
import endpointhealthchecks from './endpoint-healthchecks/index.js';
import traceroutes from './traceroutes/index.js';

const command: CommandModule = {
  command: 'diagnostics',
  describe: "Network diagnostic tools — traceroutes from Cloudflare's edge and endpoint health checks",

  builder: (yargs) => {
    return yargs.command(endpointhealthchecks).command(traceroutes).demandCommand(1);
  },

  handler: () => {},
};

export default command;
