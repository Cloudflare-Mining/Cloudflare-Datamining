/**
 * expression-template command group
 * @generated from apis/api-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import fallthroughcreate from './fallthrough-create.js';

const command: CommandModule = {
  command: 'expression-template',
  describe: 'Reusable expression templates for API Gateway rule configurations',

  builder: (yargs) => {
    return yargs.command(fallthroughcreate).demandCommand(1);
  },

  handler: () => {},
};

export default command;
