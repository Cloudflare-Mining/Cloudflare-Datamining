/**
 * dns command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import summarycachehit from './summary-cache-hit.js';
import summarydnssec from './summary-dnssec.js';
import summarydnssecaware from './summary-dnssec-aware.js';
import summarydnssece2e from './summary-dnssec-e2e.js';
import summaryipversion from './summary-ip-version.js';
import summarymatchinganswer from './summary-matching-answer.js';
import summaryprotocol from './summary-protocol.js';
import summaryquerytype from './summary-query-type.js';
import summaryresponsecode from './summary-response-code.js';
import summaryresponsettl from './summary-response-ttl.js';
import summaryv2 from './summary-v2.js';
import timeseries from './timeseries.js';
import timeseriesgroupscachehit from './timeseries-groups-cache-hit.js';
import timeseriesgroupsdnssec from './timeseries-groups-dnssec.js';
import timeseriesgroupsdnssecaware from './timeseries-groups-dnssec-aware.js';
import timeseriesgroupsdnssece2e from './timeseries-groups-dnssec-e2e.js';
import timeseriesgroupsipversion from './timeseries-groups-ip-version.js';
import timeseriesgroupsmatchinganswer from './timeseries-groups-matching-answer.js';
import timeseriesgroupsprotocol from './timeseries-groups-protocol.js';
import timeseriesgroupsquerytype from './timeseries-groups-query-type.js';
import timeseriesgroupsresponsecode from './timeseries-groups-response-code.js';
import timeseriesgroupsresponsettl from './timeseries-groups-response-ttl.js';
import timeseriesgroupsv2 from './timeseries-groups-v2.js';
import topases from './top-ases.js';
import toplocations from './top-locations.js';

const command: CommandModule = {
  command: 'dns',
  describe: 'Global DNS query trends — top domains, resolver stats, and DNSSEC adoption',

  builder: (yargs) => {
    return yargs
      .command(summarycachehit)
      .command(summarydnssec)
      .command(summarydnssecaware)
      .command(summarydnssece2e)
      .command(summaryipversion)
      .command(summarymatchinganswer)
      .command(summaryprotocol)
      .command(summaryquerytype)
      .command(summaryresponsecode)
      .command(summaryresponsettl)
      .command(summaryv2)
      .command(timeseries)
      .command(timeseriesgroupscachehit)
      .command(timeseriesgroupsdnssec)
      .command(timeseriesgroupsdnssecaware)
      .command(timeseriesgroupsdnssece2e)
      .command(timeseriesgroupsipversion)
      .command(timeseriesgroupsmatchinganswer)
      .command(timeseriesgroupsprotocol)
      .command(timeseriesgroupsquerytype)
      .command(timeseriesgroupsresponsecode)
      .command(timeseriesgroupsresponsettl)
      .command(timeseriesgroupsv2)
      .command(topases)
      .command(toplocations)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
