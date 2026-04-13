/**
 * abuse-reports command
 * @generated from apis/abuse-reports/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import get from './get.js';
import list from './list.js';
import emails from './emails/index.js';
import mitigations from './mitigations/index.js';

const command: CommandModule = {
  command: 'abuse-reports',
  describe:
    'Submit and track abuse reports for phishing, malware, and other policy violations on Cloudflare-proxied sites',

  builder: (yargs) => {
    return yargs.command(create).command(get).command(list).command(emails).command(mitigations).demandCommand(1);
  },

  handler: () => {},
};

export default command;
