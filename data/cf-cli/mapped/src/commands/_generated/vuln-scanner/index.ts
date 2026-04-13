/**
 * vuln-scanner command
 * @generated from apis/vuln-scanner/schema.ts
 */
import type { CommandModule } from 'yargs';
import credentialsets from './credential-sets/index.js';
import scans from './scans/index.js';
import targetenvironments from './target-environments/index.js';

const command: CommandModule = {
  command: 'vuln-scanner',
  describe: 'Vulnerability scanning for web applications — manage scans, credential sets, and scan reports',

  builder: (yargs) => {
    return yargs.command(credentialsets).command(scans).command(targetenvironments).demandCommand(1);
  },

  handler: () => {},
};

export default command;
