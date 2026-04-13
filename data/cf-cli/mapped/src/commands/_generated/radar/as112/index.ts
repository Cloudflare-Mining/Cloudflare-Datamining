/**
 * as112 command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import summarydnssec from './summary-dnssec.js';
import summaryedns from './summary-edns.js';
import summaryipversion from './summary-ip-version.js';
import summaryprotocol from './summary-protocol.js';
import summaryquerytype from './summary-query-type.js';
import summaryresponsecodes from './summary-response-codes.js';
import summaryv2 from './summary-v2.js';
import timeseries from './timeseries.js';
import timeseriesgroupsdnssec from './timeseries-groups-dnssec.js';
import timeseriesgroupsedns from './timeseries-groups-edns.js';
import timeseriesgroupsipversion from './timeseries-groups-ip-version.js';
import timeseriesgroupsprotocol from './timeseries-groups-protocol.js';
import timeseriesgroupsquerytype from './timeseries-groups-query-type.js';
import timeseriesgroupsresponsecodes from './timeseries-groups-response-codes.js';
import timeseriesgroupsv2 from './timeseries-groups-v2.js';
import topdnssec from './top-dnssec.js';
import topedns from './top-edns.js';
import topipversion from './top-ip-version.js';
import toplocations from './top-locations.js';

const command: CommandModule = {
  command: 'as112',
  describe: 'AS112 DNS sinkhole statistics — reverse DNS query volumes for private address space',

  builder: (yargs) => {
    return yargs
      .command(summarydnssec)
      .command(summaryedns)
      .command(summaryipversion)
      .command(summaryprotocol)
      .command(summaryquerytype)
      .command(summaryresponsecodes)
      .command(summaryv2)
      .command(timeseries)
      .command(timeseriesgroupsdnssec)
      .command(timeseriesgroupsedns)
      .command(timeseriesgroupsipversion)
      .command(timeseriesgroupsprotocol)
      .command(timeseriesgroupsquerytype)
      .command(timeseriesgroupsresponsecodes)
      .command(timeseriesgroupsv2)
      .command(topdnssec)
      .command(topedns)
      .command(topipversion)
      .command(toplocations)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
