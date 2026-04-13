/**
 * asn command group
 * @generated from apis/botnet-feed/schema.ts
 */
import type { CommandModule } from 'yargs';
import dayreport from './day-report.js';
import fullreport from './full-report.js';

const command: CommandModule = {
  command: 'asn',
  describe: 'ASN-level botnet activity data showing networks with known C2 infrastructure',

  builder: (yargs) => {
    return yargs.command(dayreport).command(fullreport).demandCommand(1);
  },

  handler: () => {},
};

export default command;
