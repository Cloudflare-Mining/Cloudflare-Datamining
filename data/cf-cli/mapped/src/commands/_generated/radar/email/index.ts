/**
 * email command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import routingsummaryarc from './routing-summary-arc.js';
import routingsummarydkim from './routing-summary-dkim.js';
import routingsummarydmarc from './routing-summary-dmarc.js';
import routingsummaryencrypted from './routing-summary-encrypted.js';
import routingsummaryipversion from './routing-summary-ip-version.js';
import routingsummaryspf from './routing-summary-spf.js';
import routingsummaryv2 from './routing-summary-v2.js';
import routingtimeseriesgroupsarc from './routing-timeseries-groups-arc.js';
import routingtimeseriesgroupsdkim from './routing-timeseries-groups-dkim.js';
import routingtimeseriesgroupsdmarc from './routing-timeseries-groups-dmarc.js';
import routingtimeseriesgroupsencrypted from './routing-timeseries-groups-encrypted.js';
import routingtimeseriesgroupsipversion from './routing-timeseries-groups-ip-version.js';
import routingtimeseriesgroupsspf from './routing-timeseries-groups-spf.js';
import routingtimeseriesgroupsv2 from './routing-timeseries-groups-v2.js';
import securitysummaryarc from './security-summary-arc.js';
import securitysummarydkim from './security-summary-dkim.js';
import securitysummarydmarc from './security-summary-dmarc.js';
import securitysummarymalicious from './security-summary-malicious.js';
import securitysummaryspam from './security-summary-spam.js';
import securitysummaryspf from './security-summary-spf.js';
import securitysummaryspoof from './security-summary-spoof.js';
import securitysummarythreatcategory from './security-summary-threat-category.js';
import securitysummarytlsversion from './security-summary-tls-version.js';
import securitysummaryv2 from './security-summary-v2.js';
import securitytimeseriesgroupsarc from './security-timeseries-groups-arc.js';
import securitytimeseriesgroupsdkim from './security-timeseries-groups-dkim.js';
import securitytimeseriesgroupsdmarc from './security-timeseries-groups-dmarc.js';
import securitytimeseriesgroupsmalicious from './security-timeseries-groups-malicious.js';
import securitytimeseriesgroupsspam from './security-timeseries-groups-spam.js';
import securitytimeseriesgroupsspf from './security-timeseries-groups-spf.js';
import securitytimeseriesgroupsspoof from './security-timeseries-groups-spoof.js';
import securitytimeseriesgroupsthreatcategory from './security-timeseries-groups-threat-category.js';
import securitytimeseriesgroupstlsversion from './security-timeseries-groups-tls-version.js';
import securitytimeseriesgroupsv2 from './security-timeseries-groups-v2.js';
import securitytoptldsget from './security-top-tlds-get.js';
import securitytoptldsmaliciousget from './security-top-tlds-malicious-get.js';
import securitytoptldsspamget from './security-top-tlds-spam-get.js';
import securitytoptldsspoofget from './security-top-tlds-spoof-get.js';

const command: CommandModule = {
  command: 'email',
  describe: 'Email security trends — DMARC/SPF/DKIM adoption, spam, and phishing statistics',

  builder: (yargs) => {
    return yargs
      .command(routingsummaryarc)
      .command(routingsummarydkim)
      .command(routingsummarydmarc)
      .command(routingsummaryencrypted)
      .command(routingsummaryipversion)
      .command(routingsummaryspf)
      .command(routingsummaryv2)
      .command(routingtimeseriesgroupsarc)
      .command(routingtimeseriesgroupsdkim)
      .command(routingtimeseriesgroupsdmarc)
      .command(routingtimeseriesgroupsencrypted)
      .command(routingtimeseriesgroupsipversion)
      .command(routingtimeseriesgroupsspf)
      .command(routingtimeseriesgroupsv2)
      .command(securitysummaryarc)
      .command(securitysummarydkim)
      .command(securitysummarydmarc)
      .command(securitysummarymalicious)
      .command(securitysummaryspam)
      .command(securitysummaryspf)
      .command(securitysummaryspoof)
      .command(securitysummarythreatcategory)
      .command(securitysummarytlsversion)
      .command(securitysummaryv2)
      .command(securitytimeseriesgroupsarc)
      .command(securitytimeseriesgroupsdkim)
      .command(securitytimeseriesgroupsdmarc)
      .command(securitytimeseriesgroupsmalicious)
      .command(securitytimeseriesgroupsspam)
      .command(securitytimeseriesgroupsspf)
      .command(securitytimeseriesgroupsspoof)
      .command(securitytimeseriesgroupsthreatcategory)
      .command(securitytimeseriesgroupstlsversion)
      .command(securitytimeseriesgroupsv2)
      .command(securitytoptldsget)
      .command(securitytoptldsmaliciousget)
      .command(securitytoptldsspamget)
      .command(securitytoptldsspoofget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
