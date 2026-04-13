/**
 * risk-scoring command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import behavioursget from './behaviours-get.js';
import behavioursupdate from './behaviours-update.js';
import get from './get.js';
import integrationscreate from './integrations-create.js';
import integrationsdelete from './integrations-delete.js';
import integrationsget from './integrations-get.js';
import integrationslist from './integrations-list.js';
import integrationsreferencesget from './integrations-references-get.js';
import integrationsupdate from './integrations-update.js';
import reset from './reset.js';
import summaryget from './summary-get.js';

const command: CommandModule = {
  command: 'risk-scoring',
  describe: 'User and entity risk scores derived from behavior signals, used to trigger adaptive access policies',

  builder: (yargs) => {
    return yargs
      .command(behavioursget)
      .command(behavioursupdate)
      .command(get)
      .command(integrationscreate)
      .command(integrationsdelete)
      .command(integrationsget)
      .command(integrationslist)
      .command(integrationsreferencesget)
      .command(integrationsupdate)
      .command(reset)
      .command(summaryget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
