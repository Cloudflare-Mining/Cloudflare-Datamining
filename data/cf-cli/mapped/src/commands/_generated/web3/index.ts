/**
 * web3 command
 * @generated from apis/web3/schema.ts
 */
import type { CommandModule } from 'yargs';
import hostnames from './hostnames/index.js';

const command: CommandModule = {
  command: 'web3',
  describe: 'Web3 gateways — serve IPFS and Ethereum content through custom hostnames on Cloudflare',

  builder: (yargs) => {
    return yargs.command(hostnames).demandCommand(1);
  },

  handler: () => {},
};

export default command;
