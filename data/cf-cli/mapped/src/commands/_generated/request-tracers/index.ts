/**
 * request-tracers command
 * @generated from apis/request-tracers/schema.ts
 */
import type { CommandModule } from 'yargs';
import traces from './traces/index.js';

const command: CommandModule = {
  command: 'request-tracers',
  describe: "Trace how a request would be processed through Cloudflare's rules and configuration pipeline",

  builder: (yargs) => {
    return yargs.command(traces).demandCommand(1);
  },

  handler: () => {},
};

export default command;
