/**
 * dynamic-routing command group
 * @generated from apis/ai-gateway/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import createdeployment from './create-deployment.js';
import createversion from './create-version.js';
import delete_ from './delete.js';
import get from './get.js';
import getversion from './get-version.js';
import list from './list.js';
import listdeployments from './list-deployments.js';
import listversions from './list-versions.js';
import update from './update.js';

const command: CommandModule = {
  command: 'dynamic-routing',
  describe: 'Route requests across multiple AI providers with fallback, load-balancing, and versioned deployments',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(createdeployment)
      .command(createversion)
      .command(delete_)
      .command(get)
      .command(getversion)
      .command(list)
      .command(listdeployments)
      .command(listversions)
      .command(update)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
