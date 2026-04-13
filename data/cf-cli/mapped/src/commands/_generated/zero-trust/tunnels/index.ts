/**
 * tunnels command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import cloudflaredconfigurationsget from './cloudflared-configurations-get.js';
import cloudflaredconfigurationsupdate from './cloudflared-configurations-update.js';
import cloudflaredconnectionsdelete from './cloudflared-connections-delete.js';
import cloudflaredconnectionsget from './cloudflared-connections-get.js';
import cloudflaredconnectorsget from './cloudflared-connectors-get.js';
import cloudflaredcreate from './cloudflared-create.js';
import cloudflareddelete from './cloudflared-delete.js';
import cloudflarededit from './cloudflared-edit.js';
import cloudflaredget from './cloudflared-get.js';
import cloudflaredlist from './cloudflared-list.js';
import cloudflaredmanagementcreate from './cloudflared-management-create.js';
import cloudflaredtokenget from './cloudflared-token-get.js';
import list from './list.js';
import warpconnectorcreate from './warp-connector-create.js';
import warpconnectordelete from './warp-connector-delete.js';
import warpconnectoredit from './warp-connector-edit.js';
import warpconnectorget from './warp-connector-get.js';
import warpconnectorlist from './warp-connector-list.js';
import warpconnectortokenget from './warp-connector-token-get.js';

const command: CommandModule = {
  command: 'tunnels',
  describe: 'Cloudflare Tunnel connections that securely expose private origins without opening inbound ports',

  builder: (yargs) => {
    return yargs
      .command(cloudflaredconfigurationsget)
      .command(cloudflaredconfigurationsupdate)
      .command(cloudflaredconnectionsdelete)
      .command(cloudflaredconnectionsget)
      .command(cloudflaredconnectorsget)
      .command(cloudflaredcreate)
      .command(cloudflareddelete)
      .command(cloudflarededit)
      .command(cloudflaredget)
      .command(cloudflaredlist)
      .command(cloudflaredmanagementcreate)
      .command(cloudflaredtokenget)
      .command(list)
      .command(warpconnectorcreate)
      .command(warpconnectordelete)
      .command(warpconnectoredit)
      .command(warpconnectorget)
      .command(warpconnectorlist)
      .command(warpconnectortokenget)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
