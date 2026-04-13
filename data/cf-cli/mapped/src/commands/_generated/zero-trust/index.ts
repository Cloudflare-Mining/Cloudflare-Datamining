/**
 * zero-trust command
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import access from './access/index.js';
import apps from './apps/index.js';
import certificates from './certificates/index.js';
import connections from './connections/index.js';
import connectivitysettings from './connectivity-settings/index.js';
import connectors from './connectors/index.js';
import devices from './devices/index.js';
import dex from './dex/index.js';
import dlp from './dlp/index.js';
import documentfingerprints from './document-fingerprints/index.js';
import failover from './failover/index.js';
import gateway from './gateway/index.js';
import groups from './groups/index.js';
import identityproviders from './identity-providers/index.js';
import identityprovidersextra from './identity-providers-extra/index.js';
import networks from './networks/index.js';
import organizations from './organizations/index.js';
import organizationsextra from './organizations-extra/index.js';
import profiles from './profiles/index.js';
import riskscoring from './risk-scoring/index.js';
import seats from './seats/index.js';
import servicetokens from './service-tokens/index.js';
import settings from './settings/index.js';
import tunnels from './tunnels/index.js';
import users from './users/index.js';

const command: CommandModule = {
  command: 'zero-trust',
  describe:
    "Cloudflare's SASE platform — secure access, device posture, DLP, tunnels, gateway policies, and network segmentation",

  builder: (yargs) => {
    return yargs
      .command(access)
      .command(apps)
      .command(certificates)
      .command(connections)
      .command(connectivitysettings)
      .command(connectors)
      .command(devices)
      .command(dex)
      .command(dlp)
      .command(documentfingerprints)
      .command(failover)
      .command(gateway)
      .command(groups)
      .command(identityproviders)
      .command(identityprovidersextra)
      .command(networks)
      .command(organizations)
      .command(organizationsextra)
      .command(profiles)
      .command(riskscoring)
      .command(seats)
      .command(servicetokens)
      .command(settings)
      .command(tunnels)
      .command(users)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
