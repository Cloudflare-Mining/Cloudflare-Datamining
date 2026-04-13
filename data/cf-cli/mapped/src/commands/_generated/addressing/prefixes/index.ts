/**
 * prefixes command group
 * @generated from apis/addressing/schema.ts
 */
import type { CommandModule } from 'yargs';
import advertisementstatusedit from './advertisement-status-edit.js';
import advertisementstatusget from './advertisement-status-get.js';
import bgpprefixescreate from './bgp-prefixes-create.js';
import bgpprefixesedit from './bgp-prefixes-edit.js';
import bgpprefixesget from './bgp-prefixes-get.js';
import bgpprefixeslist from './bgp-prefixes-list.js';
import create from './create.js';
import delegationscreate from './delegations-create.js';
import delegationsdelete from './delegations-delete.js';
import delegationslist from './delegations-list.js';
import delete_ from './delete.js';
import edit from './edit.js';
import get from './get.js';
import list from './list.js';
import servicebindingscreate from './service-bindings-create.js';
import servicebindingsdelete from './service-bindings-delete.js';
import servicebindingsget from './service-bindings-get.js';
import servicebindingslist from './service-bindings-list.js';

const command: CommandModule = {
  command: 'prefixes',
  describe: 'BYOIP prefixes — onboard your own IP ranges, manage BGP announcements, service bindings, and delegations',

  builder: (yargs) => {
    return yargs
      .command(advertisementstatusedit)
      .command(advertisementstatusget)
      .command(bgpprefixescreate)
      .command(bgpprefixesedit)
      .command(bgpprefixesget)
      .command(bgpprefixeslist)
      .command(create)
      .command(delegationscreate)
      .command(delegationsdelete)
      .command(delegationslist)
      .command(delete_)
      .command(edit)
      .command(get)
      .command(list)
      .command(servicebindingscreate)
      .command(servicebindingsdelete)
      .command(servicebindingsget)
      .command(servicebindingslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
