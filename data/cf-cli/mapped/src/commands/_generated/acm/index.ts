/**
 * acm command
 * @generated from apis/acm/schema.ts
 */
import type { CommandModule } from 'yargs';
import customtruststore from './custom-trust-store/index.js';
import totaltls from './total-tls/index.js';

const command: CommandModule = {
  command: 'acm',
  describe: 'Advanced Certificate Manager — Total TLS auto-issuance and custom origin trust store certificates',

  builder: (yargs) => {
    return yargs.command(customtruststore).command(totaltls).demandCommand(1);
  },

  handler: () => {},
};

export default command;
