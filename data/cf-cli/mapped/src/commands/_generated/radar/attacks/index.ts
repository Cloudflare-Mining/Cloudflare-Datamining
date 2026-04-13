/**
 * attacks command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import layer3summarybitrate from './layer3-summary-bitrate.js';
import layer3summaryduration from './layer3-summary-duration.js';
import layer3summaryindustry from './layer3-summary-industry.js';
import layer3summaryipversion from './layer3-summary-ip-version.js';
import layer3summaryprotocol from './layer3-summary-protocol.js';
import layer3summaryv2 from './layer3-summary-v2.js';
import layer3summaryvector from './layer3-summary-vector.js';
import layer3summaryvertical from './layer3-summary-vertical.js';
import layer3timeseries from './layer3-timeseries.js';
import layer3timeseriesgroupsbitrate from './layer3-timeseries-groups-bitrate.js';
import layer3timeseriesgroupsduration from './layer3-timeseries-groups-duration.js';
import layer3timeseriesgroupsindustry from './layer3-timeseries-groups-industry.js';
import layer3timeseriesgroupsipversion from './layer3-timeseries-groups-ip-version.js';
import layer3timeseriesgroupsprotocol from './layer3-timeseries-groups-protocol.js';
import layer3timeseriesgroupsv2 from './layer3-timeseries-groups-v2.js';
import layer3timeseriesgroupsvector from './layer3-timeseries-groups-vector.js';
import layer3timeseriesgroupsvertical from './layer3-timeseries-groups-vertical.js';
import layer3topattacks from './layer3-top-attacks.js';
import layer3topindustry from './layer3-top-industry.js';
import layer3toplocationsorigin from './layer3-top-locations-origin.js';
import layer3toplocationstarget from './layer3-top-locations-target.js';
import layer3topvertical from './layer3-top-vertical.js';
import layer7summaryhttpmethod from './layer7-summary-http-method.js';
import layer7summaryhttpversion from './layer7-summary-http-version.js';
import layer7summaryindustry from './layer7-summary-industry.js';
import layer7summaryipversion from './layer7-summary-ip-version.js';
import layer7summarymanagedrules from './layer7-summary-managed-rules.js';
import layer7summarymitigationproduct from './layer7-summary-mitigation-product.js';
import layer7summaryv2 from './layer7-summary-v2.js';
import layer7summaryvertical from './layer7-summary-vertical.js';
import layer7timeseries from './layer7-timeseries.js';
import layer7timeseriesgroupshttpmethod from './layer7-timeseries-groups-http-method.js';
import layer7timeseriesgroupshttpversion from './layer7-timeseries-groups-http-version.js';
import layer7timeseriesgroupsindustry from './layer7-timeseries-groups-industry.js';
import layer7timeseriesgroupsipversion from './layer7-timeseries-groups-ip-version.js';
import layer7timeseriesgroupsmanagedrules from './layer7-timeseries-groups-managed-rules.js';
import layer7timeseriesgroupsmitigationproduct from './layer7-timeseries-groups-mitigation-product.js';
import layer7timeseriesgroupsv2 from './layer7-timeseries-groups-v2.js';
import layer7timeseriesgroupsvertical from './layer7-timeseries-groups-vertical.js';
import layer7topasesorigin from './layer7-top-ases-origin.js';
import layer7topattacks from './layer7-top-attacks.js';
import layer7topindustry from './layer7-top-industry.js';
import layer7toplocationsorigin from './layer7-top-locations-origin.js';
import layer7toplocationstarget from './layer7-top-locations-target.js';
import layer7topvertical from './layer7-top-vertical.js';

const command: CommandModule = {
  command: 'attacks',
  describe: 'DDoS and application-layer attack trends, vectors, and target analysis',

  builder: (yargs) => {
    return yargs
      .command(layer3summarybitrate)
      .command(layer3summaryduration)
      .command(layer3summaryindustry)
      .command(layer3summaryipversion)
      .command(layer3summaryprotocol)
      .command(layer3summaryv2)
      .command(layer3summaryvector)
      .command(layer3summaryvertical)
      .command(layer3timeseries)
      .command(layer3timeseriesgroupsbitrate)
      .command(layer3timeseriesgroupsduration)
      .command(layer3timeseriesgroupsindustry)
      .command(layer3timeseriesgroupsipversion)
      .command(layer3timeseriesgroupsprotocol)
      .command(layer3timeseriesgroupsv2)
      .command(layer3timeseriesgroupsvector)
      .command(layer3timeseriesgroupsvertical)
      .command(layer3topattacks)
      .command(layer3topindustry)
      .command(layer3toplocationsorigin)
      .command(layer3toplocationstarget)
      .command(layer3topvertical)
      .command(layer7summaryhttpmethod)
      .command(layer7summaryhttpversion)
      .command(layer7summaryindustry)
      .command(layer7summaryipversion)
      .command(layer7summarymanagedrules)
      .command(layer7summarymitigationproduct)
      .command(layer7summaryv2)
      .command(layer7summaryvertical)
      .command(layer7timeseries)
      .command(layer7timeseriesgroupshttpmethod)
      .command(layer7timeseriesgroupshttpversion)
      .command(layer7timeseriesgroupsindustry)
      .command(layer7timeseriesgroupsipversion)
      .command(layer7timeseriesgroupsmanagedrules)
      .command(layer7timeseriesgroupsmitigationproduct)
      .command(layer7timeseriesgroupsv2)
      .command(layer7timeseriesgroupsvertical)
      .command(layer7topasesorigin)
      .command(layer7topattacks)
      .command(layer7topindustry)
      .command(layer7toplocationsorigin)
      .command(layer7toplocationstarget)
      .command(layer7topvertical)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
