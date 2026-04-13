/**
 * zones command
 * @generated from apis/zones/schema.ts
 */
import type { CommandModule } from 'yargs';
import createholdpost from './create-hold-post.js';
import createzonesubscription from './create-zone-subscription.js';
import createzonesenvironments from './create-zones-environments.js';
import createzonespost from './create-zones-post.js';
import deletezones from './delete-zones.js';
import deletezonesenvironments from './delete-zones-environments.js';
import deletezoneshold from './delete-zones-hold.js';
import editsettingsinfo from './edit-settings-info.js';
import editshieldsettings from './edit-shield-settings.js';
import editsinglesetting from './edit-single-setting.js';
import editzones from './edit-zones.js';
import editzonesenvironments from './edit-zones-environments.js';
import editzoneshold from './edit-zones-hold.js';
import getplandetails from './get-plan-details.js';
import getshieldsettings from './get-shield-settings.js';
import getsinglesetting from './get-single-setting.js';
import getsubscriptiondetails from './get-subscription-details.js';
import getzonesettings from './get-zone-settings.js';
import getzones from './get-zones.js';
import getzoneshold from './get-zones-hold.js';
import list from './list.js';
import listavailableplans from './list-available-plans.js';
import listrateplans from './list-rate-plans.js';
import listzonesenvironments from './list-zones-environments.js';
import rollback from './rollback.js';
import updateidactivation from './update-id-activation.js';
import updatezonesubscription from './update-zone-subscription.js';
import updatezonesenvironments from './update-zones-environments.js';
import aegis from './aegis/index.js';
import cachereserveclear from './cache-reserve-clear/index.js';
import fonts from './fonts/index.js';
import googletaggateway from './google-tag-gateway/index.js';
import healthchecks from './healthchecks/index.js';
import originh2maxstreams from './origin-h2-max-streams/index.js';
import originmaxhttpversion from './origin-max-http-version/index.js';
import rum from './rum/index.js';
import speedbrain from './speed-brain/index.js';
import sslautomaticmode from './ssl-automatic-mode/index.js';

const command: CommandModule = {
  command: 'zones',
  describe: 'Zones are domains on Cloudflare — list, create, and configure domain settings',

  builder: (yargs) => {
    return yargs
      .command(createholdpost)
      .command(createzonesubscription)
      .command(createzonesenvironments)
      .command(createzonespost)
      .command(deletezones)
      .command(deletezonesenvironments)
      .command(deletezoneshold)
      .command(editsettingsinfo)
      .command(editshieldsettings)
      .command(editsinglesetting)
      .command(editzones)
      .command(editzonesenvironments)
      .command(editzoneshold)
      .command(getplandetails)
      .command(getshieldsettings)
      .command(getsinglesetting)
      .command(getsubscriptiondetails)
      .command(getzonesettings)
      .command(getzones)
      .command(getzoneshold)
      .command(list)
      .command(listavailableplans)
      .command(listrateplans)
      .command(listzonesenvironments)
      .command(rollback)
      .command(updateidactivation)
      .command(updatezonesubscription)
      .command(updatezonesenvironments)
      .command(aegis)
      .command(cachereserveclear)
      .command(fonts)
      .command(googletaggateway)
      .command(healthchecks)
      .command(originh2maxstreams)
      .command(originmaxhttpversion)
      .command(rum)
      .command(speedbrain)
      .command(sslautomaticmode)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
