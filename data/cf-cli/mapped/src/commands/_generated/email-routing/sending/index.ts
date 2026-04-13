/**
 * sending command group
 * @generated from apis/email-routing/schema.ts
 */
import type { CommandModule } from 'yargs';
import sendcreate from './send-create.js';
import sendrawcreate from './send-raw-create.js';
import subdomainscreate from './subdomains-create.js';
import subdomainsdelete from './subdomains-delete.js';
import subdomainsdnsget from './subdomains-dns-get.js';
import subdomainsget from './subdomains-get.js';
import subdomainslist from './subdomains-list.js';
import subdomainspreviewcreate from './subdomains-preview-create.js';

const command: CommandModule = {
  command: 'sending',
  describe: 'Sending operations',

  builder: (yargs) => {
    return yargs
      .command(sendcreate)
      .command(sendrawcreate)
      .command(subdomainscreate)
      .command(subdomainsdelete)
      .command(subdomainsdnsget)
      .command(subdomainsget)
      .command(subdomainslist)
      .command(subdomainspreviewcreate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
