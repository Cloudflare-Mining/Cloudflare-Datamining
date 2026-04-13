/**
 * scans command group
 * @generated from apis/url-scanner/schema.ts
 */
import type { CommandModule } from 'yargs';
import bulkcreate from './bulk-create.js';
import create from './create.js';
import dom from './dom.js';
import get from './get.js';
import har from './har.js';
import list from './list.js';
import screenshot from './screenshot.js';

const command: CommandModule = {
  command: 'scans',
  describe: 'URL scan requests and results — submit URLs for analysis and retrieve threat verdicts',

  builder: (yargs) => {
    return yargs
      .command(bulkcreate)
      .command(create)
      .command(dom)
      .command(get)
      .command(har)
      .command(list)
      .command(screenshot)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
