/**
 * registrations command group
 * @generated from apis/registrar/schema.ts
 */
import type { CommandModule } from 'yargs';
import createdomainregistration from './create-domain-registration.js';
import createregistrationlro from './create-registration-lro.js';
import editdomainregistration from './edit-domain-registration.js';
import editregistrationlro from './edit-registration-lro.js';
import get from './get.js';
import list from './list.js';
import registrationstatusget from './registration-status-get.js';
import updatestatusget from './update-status-get.js';

const command: CommandModule = {
  command: 'registrations',
  describe: 'Registrations operations',

  builder: (yargs) => {
    return yargs
      .command(createdomainregistration)
      .command(createregistrationlro)
      .command(editdomainregistration)
      .command(editregistrationlro)
      .command(get)
      .command(list)
      .command(registrationstatusget)
      .command(updatestatusget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
