/**
 * networks command group
 * @generated from apis/zero-trust/schema.ts
 */
import type { CommandModule } from 'yargs';
import hostnameroutescreate from './hostname-routes-create.js';
import hostnameroutesdelete from './hostname-routes-delete.js';
import hostnameroutesedit from './hostname-routes-edit.js';
import hostnameroutesget from './hostname-routes-get.js';
import hostnamerouteslist from './hostname-routes-list.js';
import routescreate from './routes-create.js';
import routesdelete from './routes-delete.js';
import routesedit from './routes-edit.js';
import routesget from './routes-get.js';
import routesipsget from './routes-ips-get.js';
import routeslist from './routes-list.js';
import routesnetworkscreate from './routes-networks-create.js';
import routesnetworksdelete from './routes-networks-delete.js';
import routesnetworksedit from './routes-networks-edit.js';
import subnetscloudflaresourceupdate from './subnets-cloudflare-source-update.js';
import subnetslist from './subnets-list.js';
import subnetswarpcreate from './subnets-warp-create.js';
import subnetswarpdelete from './subnets-warp-delete.js';
import subnetswarpedit from './subnets-warp-edit.js';
import subnetswarpget from './subnets-warp-get.js';
import virtualnetworkscreate from './virtual-networks-create.js';
import virtualnetworksdelete from './virtual-networks-delete.js';
import virtualnetworksedit from './virtual-networks-edit.js';
import virtualnetworksget from './virtual-networks-get.js';
import virtualnetworkslist from './virtual-networks-list.js';

const command: CommandModule = {
  command: 'networks',
  describe: 'Private network routing — virtual networks, IP routes, and subnet-level policies for Tunnel traffic',

  builder: (yargs) => {
    return yargs
      .command(hostnameroutescreate)
      .command(hostnameroutesdelete)
      .command(hostnameroutesedit)
      .command(hostnameroutesget)
      .command(hostnamerouteslist)
      .command(routescreate)
      .command(routesdelete)
      .command(routesedit)
      .command(routesget)
      .command(routesipsget)
      .command(routeslist)
      .command(routesnetworkscreate)
      .command(routesnetworksdelete)
      .command(routesnetworksedit)
      .command(subnetscloudflaresourceupdate)
      .command(subnetslist)
      .command(subnetswarpcreate)
      .command(subnetswarpdelete)
      .command(subnetswarpedit)
      .command(subnetswarpget)
      .command(virtualnetworkscreate)
      .command(virtualnetworksdelete)
      .command(virtualnetworksedit)
      .command(virtualnetworksget)
      .command(virtualnetworkslist)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
