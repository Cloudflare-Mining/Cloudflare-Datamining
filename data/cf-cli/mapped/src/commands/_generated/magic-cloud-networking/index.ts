/**
 * magic-cloud-networking command
 * @generated from apis/magic-cloud-networking/schema.ts
 */
import type { CommandModule } from 'yargs';
import catalogsyncs from './catalog-syncs/index.js';
import cloudintegrations from './cloud-integrations/index.js';
import onramps from './on-ramps/index.js';
import resources from './resources/index.js';

const command: CommandModule = {
  command: 'magic-cloud-networking',
  describe: 'Multi-cloud networking — discover cloud resources, manage on-ramps, and automate cross-cloud connectivity',

  builder: (yargs) => {
    return yargs.command(catalogsyncs).command(cloudintegrations).command(onramps).command(resources).demandCommand(1);
  },

  handler: () => {},
};

export default command;
