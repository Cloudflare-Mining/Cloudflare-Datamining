import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const GraphQLNodeName = eg.union([
  eg.literal('firewallEventsAdaptive'),
  eg.literal('firewallEventsAdaptiveByTimeGroups'),
  eg.literal('firewallEventsAdaptiveGroups'),
  eg.literal('httpRequestsAdaptiveGroups'),
  eg.literal('imageResizingRequests1mGroups'),
  eg.literal('loadBalancingRequestsAdaptive'),
  eg.literal('loadBalancingRequestsAdaptiveGroups'),
  eg.literal('healthCheckEventsAdaptive'),
  eg.literal('healthCheckEventsAdaptiveGroups'),
  eg.literal('nelReportsAdaptiveGroups'),
  eg.literal('waitingRoomAnalyticsAdaptiveGroups'),
  eg.literal('cacheReserveRequestsAdaptiveGroups'),
  eg.literal('httpRequestsOverviewAdaptiveGroups'),
  eg.literal('advancedDnsProtectionNetworkAnalyticsAdaptiveGroups'),
  eg.literal('dosdNetworkAnalyticsAdaptiveGroups'),
  eg.literal('dosdAttackAnalyticsGroups'),
  eg.literal('flowtrackdNetworkAnalyticsAdaptiveGroups'),
  eg.literal('magicTransitNetworkAnalyticsAdaptiveGroups'),
  eg.literal('magicFirewallNetworkAnalyticsAdaptiveGroups'),
  eg.literal('spectrumNetworkAnalyticsAdaptiveGroups')
]);

export type GraphQLNodeName = TypeFromCodec<typeof GraphQLNodeName>;

export const GraphQLSetting = eg.object({
  enabled: eg.boolean,
  maxDuration: eg.number,
  maxNumberOfFields: eg.number.optional,
  maxPageSize: eg.number,
  notOlderThan: eg.number,
  availableFields: eg.array(eg.string).optional
});

export type GraphQLSetting = TypeFromCodec<typeof GraphQLSetting>;

export const GraphQLSettings = eg.record(GraphQLNodeName, GraphQLSetting);

export type GraphQLSettings = TypeFromCodec<typeof GraphQLSettings>;
