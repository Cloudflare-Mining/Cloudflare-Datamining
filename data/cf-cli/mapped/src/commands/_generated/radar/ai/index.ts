/**
 * ai command group
 * @generated from apis/radar/schema.ts
 */
import type { CommandModule } from 'yargs';
import botssummaryuseragent from './bots-summary-user-agent.js';
import botssummaryv2 from './bots-summary-v2.js';
import botstimeseries from './bots-timeseries.js';
import botstimeseriesgroups from './bots-timeseries-groups.js';
import inferencesummarymodel from './inference-summary-model.js';
import inferencesummarytask from './inference-summary-task.js';
import inferencesummaryv2 from './inference-summary-v2.js';
import inferencetimeseriesgroupssummarymodel from './inference-timeseries-groups-summary-model.js';
import inferencetimeseriesgroupssummarytask from './inference-timeseries-groups-summary-task.js';
import inferencetimeseriesgroupsv2 from './inference-timeseries-groups-v2.js';
import timeseriesgroupssummary from './timeseries-groups-summary.js';
import timeseriesgroupstimeseries from './timeseries-groups-timeseries.js';
import timeseriesgroupstimeseriesgroups from './timeseries-groups-timeseries-groups.js';
import timeseriesgroupsuseragent from './timeseries-groups-user-agent.js';
import tomarkdowncreate from './to-markdown-create.js';

const command: CommandModule = {
  command: 'ai',
  describe: 'AI inference trends and model usage statistics across the Cloudflare network',

  builder: (yargs) => {
    return yargs
      .command(botssummaryuseragent)
      .command(botssummaryv2)
      .command(botstimeseries)
      .command(botstimeseriesgroups)
      .command(inferencesummarymodel)
      .command(inferencesummarytask)
      .command(inferencesummaryv2)
      .command(inferencetimeseriesgroupssummarymodel)
      .command(inferencetimeseriesgroupssummarytask)
      .command(inferencetimeseriesgroupsv2)
      .command(timeseriesgroupssummary)
      .command(timeseriesgroupstimeseries)
      .command(timeseriesgroupstimeseriesgroups)
      .command(timeseriesgroupsuseragent)
      .command(tomarkdowncreate)
      .demandCommand(1);
  },

  handler: () => {},
};

export default command;
