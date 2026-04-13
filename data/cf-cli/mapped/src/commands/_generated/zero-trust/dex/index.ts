/**
 * dex command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import coloslist from './colos-list.js';
import commandscreate from './commands-create.js';
import commandsdeviceslist from './commands-devices-list.js';
import commandsdownloadsget from './commands-downloads-get.js';
import commandslist from './commands-list.js';
import commandsquotaget from './commands-quota-get.js';
import fleetstatusdeviceslist from './fleet-status-devices-list.js';
import fleetstatuslive from './fleet-status-live.js';
import fleetstatusovertime from './fleet-status-over-time.js';
import httptestsget from './http-tests-get.js';
import httptestspercentilesget from './http-tests-percentiles-get.js';
import rulescreate from './rules-create.js';
import rulesdelete from './rules-delete.js';
import rulesget from './rules-get.js';
import ruleslist from './rules-list.js';
import rulesupdate from './rules-update.js';
import testslist from './tests-list.js';
import testsuniquedeviceslist from './tests-unique-devices-list.js';
import traceroutetestresultsnetworkpathget from './traceroute-test-results-network-path-get.js';
import traceroutetestsget from './traceroute-tests-get.js';
import traceroutetestsnetworkpath from './traceroute-tests-network-path.js';
import traceroutetestspercentiles from './traceroute-tests-percentiles.js';
import warpchangeeventsget from './warp-change-events-get.js';

const command: CommandModule = {
  command: 'dex',
  describe: 'Digital Experience Monitoring — synthetic tests, fleet-wide device metrics, and network path diagnostics',

  builder: (yargs) => {
    return yargs
      .command(coloslist)
      .command(commandscreate)
      .command(commandsdeviceslist)
      .command(commandsdownloadsget)
      .command(commandslist)
      .command(commandsquotaget)
      .command(fleetstatusdeviceslist)
      .command(fleetstatuslive)
      .command(fleetstatusovertime)
      .command(httptestsget)
      .command(httptestspercentilesget)
      .command(rulescreate)
      .command(rulesdelete)
      .command(rulesget)
      .command(ruleslist)
      .command(rulesupdate)
      .command(testslist)
      .command(testsuniquedeviceslist)
      .command(traceroutetestresultsnetworkpathget)
      .command(traceroutetestsget)
      .command(traceroutetestsnetworkpath)
      .command(traceroutetestspercentiles)
      .command(warpchangeeventsget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
