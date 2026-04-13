/**
 * analytics command group
 * @generated from apis/spectrum/schema.ts
 */
import type { CommandModule } from 'yargs';
import aggregatescurrentsget from './aggregates-currents-get.js';
import eventsbytimesget from './events-bytimes-get.js';
import eventssummariesget from './events-summaries-get.js';

const command: CommandModule = {
  command: 'analytics',
  describe: 'Real-time and historical connection analytics for Spectrum applications',

  builder: (yargs) => {
    return yargs.command(aggregatescurrentsget).command(eventsbytimesget).command(eventssummariesget).demandCommand(1);
  },

  handler: () => {},
};

export default command;
