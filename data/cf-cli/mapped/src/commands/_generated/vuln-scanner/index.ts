/**
 * vuln-scanner command
 * @generated from apis/vuln-scanner/schema.ts
 */
import type { CommandModule } from 'yargs';

const command: CommandModule = {
  command: 'vuln-scanner',
  describe: 'Vulnerability scanning for web applications — manage scans, credential sets, and scan reports',

  builder: (yargs) => {
    return yargs.demandCommand(1);
  },

  handler: () => {},
};

export default command;
