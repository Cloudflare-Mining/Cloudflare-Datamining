/**
 * settings-extra command group
 * @generated from apis/email-security/schema.ts
 */
import type { CommandModule } from 'yargs';
import allowpoliciesbatchcreate from './allow-policies-batch-create.js';
import blocksendersbatchcreate from './block-senders-batch-create.js';
import sendingdomainrestrictionsbatchcreate from './sending-domain-restrictions-batch-create.js';
import trusteddomainsbatchcreate from './trusted-domains-batch-create.js';

const command: CommandModule = {
  command: 'settings-extra',
  describe: 'Settings (additional) operations',

  builder: (yargs) => {
    return yargs
      .command(allowpoliciesbatchcreate)
      .command(blocksendersbatchcreate)
      .command(sendingdomainrestrictionsbatchcreate)
      .command(trusteddomainsbatchcreate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
