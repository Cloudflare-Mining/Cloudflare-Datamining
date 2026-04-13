/**
 * scan command group
 * @generated from apis/url-scanner/schema.ts
 */
import type { CommandModule } from 'yargs';
import create from './create.js';
import geturlscannerscan from './get-urlscanner-scan.js';
import geturlscannerscans from './get-urlscanner-scans.js';
import harget from './har-get.js';
import screenshotget from './screenshot-get.js';

const command: CommandModule = {
  command: 'scan',
  describe: 'Scan operations',

  builder: (yargs) => {
    return yargs
      .command(create)
      .command(geturlscannerscan)
      .command(geturlscannerscans)
      .command(harget)
      .command(screenshotget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
