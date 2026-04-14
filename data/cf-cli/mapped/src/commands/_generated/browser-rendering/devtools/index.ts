/**
 * devtools command group
 * @generated from apis/browser-rendering/schema.ts
 */
import type { CommandModule } from 'yargs';
import acquire from './acquire.js';
import browseracquire from './browser-acquire.js';
import browserdelete from './browser-delete.js';
import browserget from './browser-get.js';
import jsonactivate from './json-activate.js';
import jsonget from './json-get.js';
import jsonlist from './json-list.js';
import jsonnew from './json-new.js';
import jsonprotocol from './json-protocol.js';
import jsontarget from './json-target.js';
import jsonversion from './json-version.js';
import pageget from './page-get.js';
import sessiondetails from './session-details.js';
import sessionlist from './session-list.js';

const command: CommandModule = {
  command: 'devtools',
  describe: 'Chrome DevTools Protocol endpoints for browser automation and debugging',

  builder: (yargs) => {
    return yargs
      .command(acquire)
      .command(browseracquire)
      .command(browserdelete)
      .command(browserget)
      .command(jsonactivate)
      .command(jsonget)
      .command(jsonlist)
      .command(jsonnew)
      .command(jsonprotocol)
      .command(jsontarget)
      .command(jsonversion)
      .command(pageget)
      .command(sessiondetails)
      .command(sessionlist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
