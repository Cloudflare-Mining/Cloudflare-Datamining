/**
 * http command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import asesbotclassget from './ases-bot-class-get.js';
import asesbrowserfamilyget from './ases-browser-family-get.js';
import asesdevicetypeget from './ases-device-type-get.js';
import asesget from './ases-get.js';
import aseshttpmethodget from './ases-http-method-get.js';
import aseshttpprotocolget from './ases-http-protocol-get.js';
import asesipversionget from './ases-ip-version-get.js';
import asesosget from './ases-os-get.js';
import asestlsversionget from './ases-tls-version-get.js';
import locationsbotclassget from './locations-bot-class-get.js';
import locationsbrowserfamilyget from './locations-browser-family-get.js';
import locationsdevicetypeget from './locations-device-type-get.js';
import locationsget from './locations-get.js';
import locationshttpmethodget from './locations-http-method-get.js';
import locationshttpprotocolget from './locations-http-protocol-get.js';
import locationsipversionget from './locations-ip-version-get.js';
import locationsosget from './locations-os-get.js';
import locationstlsversionget from './locations-tls-version-get.js';
import summarybotclass from './summary-bot-class.js';
import summarydevicetype from './summary-device-type.js';
import summaryhttpprotocol from './summary-http-protocol.js';
import summaryhttpversion from './summary-http-version.js';
import summaryipversion from './summary-ip-version.js';
import summaryos from './summary-os.js';
import summarypostquantum from './summary-post-quantum.js';
import summarytlsversion from './summary-tls-version.js';
import summaryv2 from './summary-v2.js';
import timeseries from './timeseries.js';
import timeseriesgroupsbotclass from './timeseries-groups-bot-class.js';
import timeseriesgroupsbrowser from './timeseries-groups-browser.js';
import timeseriesgroupsbrowserfamily from './timeseries-groups-browser-family.js';
import timeseriesgroupsdevicetype from './timeseries-groups-device-type.js';
import timeseriesgroupshttpprotocol from './timeseries-groups-http-protocol.js';
import timeseriesgroupshttpversion from './timeseries-groups-http-version.js';
import timeseriesgroupsipversion from './timeseries-groups-ip-version.js';
import timeseriesgroupsos from './timeseries-groups-os.js';
import timeseriesgroupspostquantum from './timeseries-groups-post-quantum.js';
import timeseriesgroupstlsversion from './timeseries-groups-tls-version.js';
import timeseriesgroupsv2 from './timeseries-groups-v2.js';
import topbrowser from './top-browser.js';
import topbrowserfamily from './top-browser-family.js';

const command: CommandModule = {
  command: 'http',
  describe: 'HTTP protocol trends — TLS versions, HTTP versions, browser share, and OS distribution',

  builder: (yargs) => {
    return yargs
      .command(asesbotclassget)
      .command(asesbrowserfamilyget)
      .command(asesdevicetypeget)
      .command(asesget)
      .command(aseshttpmethodget)
      .command(aseshttpprotocolget)
      .command(asesipversionget)
      .command(asesosget)
      .command(asestlsversionget)
      .command(locationsbotclassget)
      .command(locationsbrowserfamilyget)
      .command(locationsdevicetypeget)
      .command(locationsget)
      .command(locationshttpmethodget)
      .command(locationshttpprotocolget)
      .command(locationsipversionget)
      .command(locationsosget)
      .command(locationstlsversionget)
      .command(summarybotclass)
      .command(summarydevicetype)
      .command(summaryhttpprotocol)
      .command(summaryhttpversion)
      .command(summaryipversion)
      .command(summaryos)
      .command(summarypostquantum)
      .command(summarytlsversion)
      .command(summaryv2)
      .command(timeseries)
      .command(timeseriesgroupsbotclass)
      .command(timeseriesgroupsbrowser)
      .command(timeseriesgroupsbrowserfamily)
      .command(timeseriesgroupsdevicetype)
      .command(timeseriesgroupshttpprotocol)
      .command(timeseriesgroupshttpversion)
      .command(timeseriesgroupsipversion)
      .command(timeseriesgroupsos)
      .command(timeseriesgroupspostquantum)
      .command(timeseriesgroupstlsversion)
      .command(timeseriesgroupsv2)
      .command(topbrowser)
      .command(topbrowserfamily)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
