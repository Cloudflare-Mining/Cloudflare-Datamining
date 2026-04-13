/**
 * waf command group
 * @generated from apis/firewall/schema.ts
 */
import type { CommandModule } from 'yargs';
import overridescreate from './overrides-create.js';
import overridesdelete from './overrides-delete.js';
import overridesget from './overrides-get.js';
import overrideslist from './overrides-list.js';
import overridesupdate from './overrides-update.js';
import packagesget from './packages-get.js';
import packagesgroupsedit from './packages-groups-edit.js';
import packagesgroupsget from './packages-groups-get.js';
import packagesgroupslist from './packages-groups-list.js';
import packageslist from './packages-list.js';
import packagesrulesedit from './packages-rules-edit.js';
import packagesrulesget from './packages-rules-get.js';
import packagesruleslist from './packages-rules-list.js';

const command: CommandModule = {
  command: 'waf',
  describe: 'Legacy WAF managed rule packages, rule groups, individual rules, and override configurations',

  builder: (yargs) => {
    return yargs
      .command(overridescreate)
      .command(overridesdelete)
      .command(overridesget)
      .command(overrideslist)
      .command(overridesupdate)
      .command(packagesget)
      .command(packagesgroupsedit)
      .command(packagesgroupsget)
      .command(packagesgroupslist)
      .command(packageslist)
      .command(packagesrulesedit)
      .command(packagesrulesget)
      .command(packagesruleslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
