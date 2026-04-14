/**
 * radar resource
 * @generated from apis/radar/schema.ts
 *
 * Internet-wide traffic intelligence — BGP, DNS, HTTP trends, attack data, and network quality insights
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * AI inference trends and model usage statistics across the Cloudflare network
 */
export class AI extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Converts uploaded files into Markdown format using Workers AI.
   *
   * @see workers-ai-post-to-markdown
   */
  async toMarkdownCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/tomarkdown`);
  }

  /**
   * Retrieves an aggregated summary of unique accounts using Workers AI inference grouped by the specified dimension.
   *
   * @see radar-get-ai-inference-summary
   */
  async inferenceSummaryV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/inference/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of unique accounts using Workers AI inference, grouped by the specified dimension over time.
   *
   * @see radar-get-ai-inference-timeseries-group
   */
  async inferenceTimeseriesGroupsV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/inference/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of unique accounts by model.
   *
   * @see radar-get-ai-inference-summary-by-model
   */
  async inferenceSummaryModel(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/inference/summary/model`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of unique accounts by task.
   *
   * @see radar-get-ai-inference-summary-by-task
   */
  async inferenceSummaryTask(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/inference/summary/task`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of unique accounts by model over time.
   *
   * @see radar-get-ai-inference-timeseries-group-by-model
   */
  async inferenceTimeseriesGroupsSummaryModel(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/inference/timeseries_groups/model`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of unique accounts by task over time.
   *
   * @see radar-get-ai-inference-timeseries-group-by-task
   */
  async inferenceTimeseriesGroupsSummaryTask(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/inference/timeseries_groups/task`, {
      query: params,
    });
  }

  /**
   * Retrieves an aggregated summary of AI bots HTTP requests grouped by the specified dimension.
   *
   * @see radar-get-ai-bots-summary
   */
  async botsSummaryV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/bots/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves AI bots HTTP request volume over time.
   *
   * @see radar-get-ai-bots-timeseries
   */
  async botsTimeseries(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/bots/timeseries`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests from AI bots, grouped by the specified dimension over time.
   *
   * @see radar-get-ai-bots-timeseries-group
   */
  async botsTimeseriesGroups(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/bots/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of traffic by AI user agent.
   *
   * @see radar-get-ai-bots-summary-by-user-agent
   */
  async botsSummaryUserAgent(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/bots/summary/user_agent`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of traffic by AI user agent over time.
   *
   * @see radar-get-ai-bots-timeseries-group-by-user-agent
   */
  async timeseriesGroupsUserAgent(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/bots/timeseries_groups/user_agent`, {
      query: params,
    });
  }

  /**
   * Retrieves an aggregated summary of AI bots HTTP requests grouped by the specified dimension.
   *
   * @see radar-get-ai-bots-summary
   */
  async timeseriesGroupsSummary(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/bots/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves AI bots HTTP request volume over time.
   *
   * @see radar-get-ai-bots-timeseries
   */
  async timeseriesGroupsTimeseries(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/bots/timeseries`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests from AI bots, grouped by the specified dimension over time.
   *
   * @see radar-get-ai-bots-timeseries-group
   */
  async timeseriesGroupsTimeseriesGroups(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/bots/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the overall median HTML-to-markdown reduction ratio for AI agent requests over the given date range.
   *
   * @see radar-get-ai-markdown-for-agents-summary
   */
  async markdownForAgentsSummary(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/markdown_for_agents/summary`, {
      query: params,
    });
  }

  /**
   * Retrieves the median HTML-to-markdown reduction ratio over time for AI agent requests.
   *
   * @see radar-get-ai-markdown-for-agents-timeseries
   */
  async markdownForAgentsTimeseries(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ai/markdown_for_agents/timeseries`, {
      query: params,
    });
  }
}

/**
 * Agent readiness summary statistics across the Cloudflare network
 */
export class AgentReadiness extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns a summary of AI agent readiness scores across scanned domains, grouped by the specified dimension. Data is sourced from weekly bulk scans. All values are raw domain counts.
   *
   * @see radar-get-agent-readiness-summary
   */
  async summary(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/agent_readiness/summary/${dimension}`, {
      query: params,
    });
  }
}

/**
 * Certificate Transparency log monitoring and newly-issued certificate discovery
 */
export class Ct extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves an aggregated summary of certificates grouped by the specified dimension.
   *
   * @see radar-get-ct-summary
   */
  async summary(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ct/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves certificate volume over time.
   *
   * @see radar-get-ct-timeseries
   */
  async timeseries(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ct/timeseries`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of certificates grouped by the specified dimension over time.
   *
   * @see radar-get-ct-timeseries-group
   */
  async timeseriesGroups(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ct/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the requested CA information.
   *
   * @see radar-get-certificate-authority-details
   */
  async authoritiesGet(caSlug: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ct/authorities/${caSlug}`, {
      query: params,
    });
  }

  /**
   * Retrieves a list of certificate authorities.
   *
   * @see radar-get-certificate-authorities
   */
  async authoritiesList(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ct/authorities`, {
      query: params,
    });
  }

  /**
   * Retrieves the requested certificate log information.
   *
   * @see radar-get-certificate-log-details
   */
  async logsGet(logSlug: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ct/logs/${logSlug}`, {
      query: params,
    });
  }

  /**
   * Retrieves a list of certificate logs.
   *
   * @see radar-get-certificate-logs
   */
  async logsList(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ct/logs`, {
      query: params,
    });
  }
}

/**
 * Radar annotations marking significant Internet events (outages, cable cuts, etc.)
 */
export class Annotations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the latest annotations.
   *
   * @see radar-get-annotations
   */
  async list(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/annotations`, {
      query: params,
    });
  }

  /**
   * Retrieves the latest Internet outages and anomalies.
   *
   * @see radar-get-annotations-outages
   */
  async outagesGet(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/annotations/outages`, {
      query: params,
    });
  }

  /**
   * Retrieves the number of outages by location.
   *
   * @see radar-get-annotations-outages-top
   */
  async outagesLocations(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/annotations/outages/locations`, {
      query: params,
    });
  }
}

/**
 * BGP routing data — prefix announcements, AS-level stats, route leaks, and hijack events
 */
export class Bgp extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves BGP updates over time. When requesting updates for an autonomous system, only BGP updates of type announcement are returned.
   *
   * @see radar-get-bgp-timeseries
   */
  async timeseries(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/timeseries`, {
      query: params,
    });
  }

  /**
   * Retrieves the BGP route leak events.
   *
   * @see radar-get-bgp-route-leak-events
   */
  async leaksEventsList(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/leaks/events`, {
      query: params,
    });
  }

  /**
   * Retrieves the top network prefixes by BGP updates.
   *
   * @see radar-get-bgp-top-prefixes
   */
  async topPrefixes(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/top/prefixes`, {
      query: params,
    });
  }

  /**
   * Retrieves the top autonomous systems by BGP updates (announcements only).
   *
   * @see radar-get-bgp-top-ases
   */
  async topAsesGet(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/top/ases`, {
      query: params,
    });
  }

  /**
   * Retrieves the full list of autonomous systems on the global routing table ordered by announced prefixes count. The data comes from public BGP MRT data archives and updates every 2 hours.
   *
   * @see radar-get-bgp-top-asns-by-prefixes
   */
  async topAsesPrefixes(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/top/ases/prefixes`, {
      query: params,
    });
  }

  /**
   * Retrieves the BGP hijack events.
   *
   * @see radar-get-bgp-hijacks-events
   */
  async hijacksEventsList(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/hijacks/events`, {
      query: params,
    });
  }

  /**
   * Retrieves all Multi-Origin AS (MOAS) prefixes in the global routing tables.
   *
   * @see radar-get-bgp-pfx2as-moas
   */
  async routesMoas(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/routes/moas`, {
      query: params,
    });
  }

  /**
   * Retrieves the prefix-to-ASN mapping from global routing tables.
   *
   * @see radar-get-bgp-pfx2as
   */
  async routesPfx2as(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/routes/pfx2as`, {
      query: params,
    });
  }

  /**
   * Retrieves the BGP routing table stats.
   *
   * @see radar-get-bgp-routes-stats
   */
  async routesStats(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/routes/stats`, {
      query: params,
    });
  }

  /**
   * Retrieves all ASes in the current global routing tables with routing statistics.
   *
   * @see radar-get-bgp-routes-asns
   */
  async routesAses(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/routes/ases`, {
      query: params,
    });
  }

  /**
   * Retrieves real-time BGP routes for a prefix, using public real-time data collectors (RouteViews and RIPE RIS).
   *
   * @see radar-get-bgp-routes-realtime
   */
  async routesRealtime(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/routes/realtime`, {
      query: params,
    });
  }

  /**
   * Retrieves time series data for the announced IP space count, represented as the number of IPv4 /24s and IPv6 /48s, for a given ASN.
   *
   * @see radar-get-bgp-ips-timeseries
   */
  async ipsTimeseries(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/ips/timeseries`, {
      query: params,
    });
  }

  /**
   * Retrieves current or historical ASPA (Autonomous System Provider Authorization) objects. ASPA objects define which ASNs are authorized upstream providers for a customer ASN.
   *
   * @see radar-get-bgp-rpki-aspa-snapshot
   */
  async rpkiAspaSnapshot(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/rpki/aspa/snapshot`, {
      query: params,
    });
  }

  /**
   * Retrieves ASPA (Autonomous System Provider Authorization) changes over time. Returns daily aggregated changes including additions, removals, and modifications of ASPA objects.
   *
   * @see radar-get-bgp-rpki-aspa-changes
   */
  async rpkiAspaChanges(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/rpki/aspa/changes`, {
      query: params,
    });
  }

  /**
   * Retrieves ASPA (Autonomous System Provider Authorization) object count over time. Supports filtering by RIR or location (country code) to generate multiple named series. If no RIR or location filter is specified, returns total count.
   *
   * @see radar-get-bgp-rpki-aspa-timeseries
   */
  async rpkiAspaTimeseries(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bgp/rpki/aspa/timeseries`, {
      query: params,
    });
  }
}

/**
 * Internet-wide bot traffic trends, categories, and distribution statistics
 */
export class Bots extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves a list of bots.
   *
   * @see radar-get-bots
   */
  async list(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bots`, {
      query: params,
    });
  }

  /**
   * Retrieves the requested bot information.
   *
   * @see radar-get-bot-details
   */
  async get(botSlug: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bots/${botSlug}`, {
      query: params,
    });
  }

  /**
   * Retrieves an aggregated summary of bots HTTP requests grouped by the specified dimension.
   *
   * @see radar-get-bots-summary
   */
  async summary(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bots/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves bots HTTP request volume over time.
   *
   * @see radar-get-bots-timeseries
   */
  async timeseries(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bots/timeseries`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests from bots, grouped by the specified dimension over time.
   *
   * @see radar-get-bots-timeseries-group
   */
  async timeseriesGroups(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bots/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves an aggregated summary of HTTP requests from crawlers, grouped by the specified dimension.
   *
   * @see radar-get-crawlers-summary
   */
  async webCrawlersSummary(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bots/crawlers/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests from crawlers, grouped by the specified dimension over time.
   *
   * @see radar-get-crawlers-timeseries-group
   */
  async webCrawlersTimeseriesGroups(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/bots/crawlers/timeseries_groups/${dimension}`, {
      query: params,
    });
  }
}

/**
 * Downloadable Radar datasets for offline analysis and research
 */
export class Datasets extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves a list of datasets.
   *
   * @see radar-get-reports-datasets
   */
  async list(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/datasets`, {
      query: params,
    });
  }

  /**
   * Retrieves the CSV content of a given dataset by alias or ID. When getting the content by alias the latest dataset is returned, optionally filtered by the latest available at a given date.
   *
   * @see radar-get-reports-dataset-download
   */
  async get(alias: string): Promise<unknown> {
    return this._client.get<unknown>(`/radar/datasets/${alias}`);
  }

  /**
   * Retrieves an URL to download a single dataset.
   *
   * @see radar-post-reports-dataset-download-url
   */
  async download(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/radar/datasets/download`, {
      body: { ...params },
    });
  }
}

/**
 * Global DNS query trends — top domains, resolver stats, and DNSSEC adoption
 */
export class DNS extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the distribution of DNS queries by the specified dimension.
   *
   * @see radar-get-dns-summary
   */
  async summaryV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves normalized query volume to the 1.1.1.1 DNS resolver over time.
   *
   * @see radar-get-dns-timeseries
   */
  async timeseries(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/timeseries`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries grouped by dimension over time.
   *
   * @see radar-get-dns-timeseries-group
   */
  async timeseriesGroupsV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top autonomous systems by DNS queries made to 1.1.1.1 DNS resolver.
   *
   * @see radar-get-dns-top-ases
   */
  async topAses(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/top/ases`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations by DNS queries made to 1.1.1.1 DNS resolver.
   *
   * @see radar-get-dns-top-locations
   */
  async topLocations(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/top/locations`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by cache status.
   *
   * @see radar-get-dns-summary-by-cache-hit-status
   */
  async summaryCacheHit(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/summary/cache_hit`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS responses by DNSSEC (DNS Security Extensions) support.
   *
   * @see radar-get-dns-summary-by-dnssec
   */
  async summaryDnssec(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/summary/dnssec`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by DNSSEC (DNS Security Extensions) client awareness.
   *
   * @see radar-get-dns-summary-by-dnssec-awareness
   */
  async summaryDnssecAware(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/summary/dnssec_aware`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNSSEC-validated answers by end-to-end security status.
   *
   * @see radar-get-dns-summary-by-dnssec-e2e-version
   */
  async summaryDnssecE2e(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/summary/dnssec_e2e`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by IP version.
   *
   * @see radar-get-dns-summary-by-ip-version
   */
  async summaryIpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/summary/ip_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by matching answers.
   *
   * @see radar-get-dns-summary-by-matching-answer-status
   */
  async summaryMatchingAnswer(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/summary/matching_answer`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by DNS transport protocol.
   *
   * @see radar-get-dns-summary-by-protocol
   */
  async summaryProtocol(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/summary/protocol`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by type.
   *
   * @see radar-get-dns-summary-by-query-type
   */
  async summaryQueryType(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/summary/query_type`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by response code.
   *
   * @see radar-get-dns-summary-by-response-code
   */
  async summaryResponseCode(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/summary/response_code`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by minimum response TTL.
   *
   * @see radar-get-dns-summary-by-response-ttl
   */
  async summaryResponseTtl(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/summary/response_ttl`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by cache status over time.
   *
   * @see radar-get-dns-timeseries-group-by-cache-hit-status
   */
  async timeseriesGroupsCacheHit(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/timeseries_groups/cache_hit`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS responses by DNSSEC (DNS Security Extensions) support over time.
   *
   * @see radar-get-dns-timeseries-group-by-dnssec
   */
  async timeseriesGroupsDnssec(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/timeseries_groups/dnssec`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by DNSSEC (DNS Security Extensions) client awareness over time.
   *
   * @see radar-get-dns-timeseries-group-by-dnssec-awareness
   */
  async timeseriesGroupsDnssecAware(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/timeseries_groups/dnssec_aware`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNSSEC-validated answers by end-to-end security status over time.
   *
   * @see radar-get-dns-timeseries-group-by-dnssec-e2e-version
   */
  async timeseriesGroupsDnssecE2e(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/timeseries_groups/dnssec_e2e`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by IP version over time.
   *
   * @see radar-get-dns-timeseries-group-by-ip-version
   */
  async timeseriesGroupsIpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/timeseries_groups/ip_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by matching answers over time.
   *
   * @see radar-get-dns-timeseries-group-by-matching-answer-status
   */
  async timeseriesGroupsMatchingAnswer(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/timeseries_groups/matching_answer`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by DNS transport protocol over time.
   *
   * @see radar-get-dns-timeseries-group-by-protocol
   */
  async timeseriesGroupsProtocol(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/timeseries_groups/protocol`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by type over time.
   *
   * @see radar-get-dns-timeseries-group-by-query-type
   */
  async timeseriesGroupsQueryType(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/timeseries_groups/query_type`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by response code over time.
   *
   * @see radar-get-dns-timeseries-group-by-response-code
   */
  async timeseriesGroupsResponseCode(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/timeseries_groups/response_code`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries by minimum answer TTL over time.
   *
   * @see radar-get-dns-timeseries-group-by-response-ttl
   */
  async timeseriesGroupsResponseTtl(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/dns/timeseries_groups/response_ttl`, {
      query: params,
    });
  }
}

/**
 * Network-layer traffic flow data and volumetric trend analysis
 */
export class Netflows extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves network traffic (NetFlows) over time.
   *
   * @see radar-get-netflows-timeseries
   */
  async timeseries(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/netflows/timeseries`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of network traffic (NetFlows) by HTTP vs other protocols.
   *
   * @see radar-get-netflows-summary-deprecated
   */
  async summary(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/netflows/summary`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of network traffic (NetFlows) by the specified dimension.
   *
   * @see radar-get-netflows-summary
   */
  async summaryV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/netflows/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of NetFlows traffic, grouped by the specified dimension over time.
   *
   * @see radar-get-netflows-timeseries-group
   */
  async timeseriesGroups(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/netflows/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top autonomous systems by network traffic (NetFlows).
   *
   * @see radar-get-netflows-top-ases
   */
  async topAses(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/netflows/top/ases`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations by network traffic (NetFlows).
   *
   * @see radar-get-netflows-top-locations
   */
  async topLocations(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/netflows/top/locations`, {
      query: params,
    });
  }
}

/**
 * Post-quantum encryption adoption and deployment trends across the Internet
 */
export class PostQuantum extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns a summary of origin post-quantum data grouped by the specified dimension.
   *
   * @see radar-get-origin-post-quantum-summary
   */
  async originSummary(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/post_quantum/origin/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Returns a timeseries of origin post-quantum data grouped by the specified dimension.
   *
   * @see radar-get-origin-post-quantum-timeseries-groups
   */
  async originTimeseriesGroups(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/post_quantum/origin/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Tests whether a hostname or IP address supports Post-Quantum (PQ) TLS key exchange. Returns information about the negotiated key exchange algorithm and whether it uses PQ cryptography.
   *
   * @see radar-get-post-quantum-tls-support
   */
  async tlsSupport(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/post_quantum/tls/support`, {
      query: params,
    });
  }
}

/**
 * Search Radar data across IPs, ASNs, domains, and locations
 */
export class Search extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Searches for locations, autonomous systems, reports, bots, certificate logs, certificate authorities, industries and verticals. Location names can be localized by sending an `Accept-Language` HTTP header with a BCP 47 language tag (e.g., `Accept-Language: pt-PT`). The full quality-value chain is supported (e.g., `pt-PT,pt;q=0.9,en;q=0.8`).
   *
   * @see radar-get-search-global
   */
  async global(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/search/global`, {
      query: params,
    });
  }
}

/**
 * Catalog of known good bots (Googlebot, Bingbot, etc.) and their traffic patterns
 */
export class VerifiedBots extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the top verified bots by HTTP requests, with owner and category.
   *
   * @see radar-get-verified-bots-top-by-http-requests
   */
  async topBots(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/verified_bots/top/bots`, {
      query: params,
    });
  }

  /**
   * Retrieves the top verified bot categories by HTTP requests, along with their corresponding percentage, over the total verified bot HTTP requests.
   *
   * @see radar-get-verified-bots-top-categories-by-http-requests
   */
  async topCategories(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/verified_bots/top/categories`, {
      query: params,
    });
  }
}

/**
 * AS112 DNS sinkhole statistics — reverse DNS query volumes for private address space
 */
export class As112 extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the AS112 DNS queries over time.
   *
   * @see radar-get-dns-as112-timeseries
   */
  async timeseries(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/timeseries`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of AS112 queries by the specified dimension.
   *
   * @see radar-get-dns-as112-summary
   */
  async summaryV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of AS112 queries grouped by dimension over time.
   *
   * @see radar-get-dns-as112-timeseries-group
   */
  async timeseriesGroupsV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries to AS112 by DNSSEC (DNS Security Extensions) support.
   *
   * @see radar-get-dns-as112-timeseries-by-dnssec
   */
  async summaryDnssec(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/summary/dnssec`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries to AS112 by EDNS (Extension Mechanisms for DNS) support.
   *
   * @see radar-get-dns-as112-timeseries-by-edns
   */
  async summaryEdns(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/summary/edns`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries to AS112 by IP version.
   *
   * @see radar-get-dns-as112-timeseries-by-ip-version
   */
  async summaryIpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/summary/ip_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries to AS112 by protocol.
   *
   * @see radar-get-dns-as112-timeseries-by-protocol
   */
  async summaryProtocol(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/summary/protocol`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of DNS queries to AS112 by type.
   *
   * @see radar-get-dns-as112-timeseries-by-query-type
   */
  async summaryQueryType(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/summary/query_type`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of AS112 DNS requests classified by response code.
   *
   * @see radar-get-dns-as112-timeseries-by-response-codes
   */
  async summaryResponseCodes(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/summary/response_codes`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of AS112 DNS requests classified by protocol over time.
   *
   * @see radar-get-dns-as112-timeseries-group-by-protocol
   */
  async timeseriesGroupsProtocol(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/timeseries_groups/protocol`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of AS112 DNS queries by type over time.
   *
   * @see radar-get-dns-as112-timeseries-group-by-query-type
   */
  async timeseriesGroupsQueryType(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/timeseries_groups/query_type`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of AS112 DNS requests classified by response code over time.
   *
   * @see radar-get-dns-as112-timeseries-group-by-response-codes
   */
  async timeseriesGroupsResponseCodes(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/timeseries_groups/response_codes`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of AS112 DNS queries by DNSSEC (DNS Security Extensions) support over time.
   *
   * @see radar-get-dns-as112-timeseries-group-by-dnssec
   */
  async timeseriesGroupsDnssec(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/timeseries_groups/dnssec`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of AS112 DNS queries by EDNS (Extension Mechanisms for DNS) support over time.
   *
   * @see radar-get-dns-as112-timeseries-group-by-edns
   */
  async timeseriesGroupsEdns(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/timeseries_groups/edns`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of AS112 DNS queries by IP version over time.
   *
   * @see radar-get-dns-as112-timeseries-group-by-ip-version
   */
  async timeseriesGroupsIpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/timeseries_groups/ip_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations by AS112 DNS queries.
   *
   * @see radar-get-dns-as112-top-locations
   */
  async topLocations(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/top/locations`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations of DNS queries to AS112 with DNSSEC (DNS Security Extensions) support.
   *
   * @see radar-get-dns-as112-top-locations-by-dnssec
   */
  async topDnssec(dnssec: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/top/locations/dnssec/${dnssec}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations of DNS queries to AS112 with EDNS (Extension Mechanisms for DNS) support.
   *
   * @see radar-get-dns-as112-top-locations-by-edns
   */
  async topEdns(edns: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/top/locations/edns/${edns}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations of DNS queries to AS112 for an IP version.
   *
   * @see radar-get-dns-as112-top-locations-by-ip-version
   */
  async topIpVersion(ipVersion: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/as112/top/locations/ip_version/${ipVersion}`, {
      query: params,
    });
  }
}

/**
 * Email security trends — DMARC/SPF/DKIM adoption, spam, and phishing statistics
 */
export class Email extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the distribution of email routing metrics by the specified dimension.
   *
   * @see radar-get-email-routing-summary
   */
  async routingSummaryV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/routing/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of email routing metrics grouped by dimension over time.
   *
   * @see radar-get-email-routing-timeseries-group
   */
  async routingTimeseriesGroupsV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/routing/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by ARC (Authenticated Received Chain) validation.
   *
   * @see radar-get-email-routing-summary-by-arc
   */
  async routingSummaryArc(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/routing/summary/arc`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by DKIM (DomainKeys Identified Mail) validation.
   *
   * @see radar-get-email-routing-summary-by-dkim
   */
  async routingSummaryDkim(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/routing/summary/dkim`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by DMARC (Domain-based Message Authentication, Reporting and Conformance) validation.
   *
   * @see radar-get-email-routing-summary-by-dmarc
   */
  async routingSummaryDmarc(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/routing/summary/dmarc`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by encryption status (encrypted vs. not-encrypted).
   *
   * @see radar-get-email-routing-summary-by-encrypted
   */
  async routingSummaryEncrypted(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/routing/summary/encrypted`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by IP version.
   *
   * @see radar-get-email-routing-summary-by-ip-version
   */
  async routingSummaryIpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/routing/summary/ip_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by SPF (Sender Policy Framework) validation.
   *
   * @see radar-get-email-routing-summary-by-spf
   */
  async routingSummarySpf(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/routing/summary/spf`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by ARC (Authenticated Received Chain) validation over time.
   *
   * @see radar-get-email-routing-timeseries-group-by-arc
   */
  async routingTimeseriesGroupsArc(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/routing/timeseries_groups/arc`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by DKIM (DomainKeys Identified Mail) validation over time.
   *
   * @see radar-get-email-routing-timeseries-group-by-dkim
   */
  async routingTimeseriesGroupsDkim(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/routing/timeseries_groups/dkim`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by DMARC (Domain-based Message Authentication, Reporting and Conformance) validation over time.
   *
   * @see radar-get-email-routing-timeseries-group-by-dmarc
   */
  async routingTimeseriesGroupsDmarc(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/routing/timeseries_groups/dmarc`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by encryption status (encrypted vs. not-encrypted) over time.
   *
   * @see radar-get-email-routing-timeseries-group-by-encrypted
   */
  async routingTimeseriesGroupsEncrypted(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/routing/timeseries_groups/encrypted`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by IP version over time.
   *
   * @see radar-get-email-routing-timeseries-group-by-ip-version
   */
  async routingTimeseriesGroupsIpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/routing/timeseries_groups/ip_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by SPF (Sender Policy Framework) validation over time.
   *
   * @see radar-get-email-routing-timeseries-group-by-spf
   */
  async routingTimeseriesGroupsSpf(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/routing/timeseries_groups/spf`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of email security metrics by the specified dimension.
   *
   * @see radar-get-email-security-summary
   */
  async securitySummaryV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of email security metrics grouped by dimension over time.
   *
   * @see radar-get-email-security-timeseries-group
   */
  async securityTimeseriesGroupsV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top TLDs by number of email messages.
   *
   * @see radar-get-email-security-top-tlds-by-messages
   */
  async securityTopTldsGet(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/top/tlds`, {
      query: params,
    });
  }

  /**
   * Retrieves the top TLDs by emails classified as malicious or not.
   *
   * @see radar-get-email-security-top-tlds-by-malicious
   */
  async securityTopTldsMaliciousGet(malicious: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/top/tlds/malicious/${malicious}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top TLDs by emails classified as spam or not.
   *
   * @see radar-get-email-security-top-tlds-by-spam
   */
  async securityTopTldsSpamGet(spam: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/top/tlds/spam/${spam}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top TLDs by emails classified as spoof or not.
   *
   * @see radar-get-email-security-top-tlds-by-spoof
   */
  async securityTopTldsSpoofGet(spoof: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/top/tlds/spoof/${spoof}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by ARC (Authenticated Received Chain) validation.
   *
   * @see radar-get-email-security-summary-by-arc
   */
  async securitySummaryArc(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/summary/arc`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by DKIM (DomainKeys Identified Mail) validation.
   *
   * @see radar-get-email-security-summary-by-dkim
   */
  async securitySummaryDkim(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/summary/dkim`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by DMARC (Domain-based Message Authentication, Reporting and Conformance) validation.
   *
   * @see radar-get-email-security-summary-by-dmarc
   */
  async securitySummaryDmarc(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/summary/dmarc`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by malicious classification.
   *
   * @see radar-get-email-security-summary-by-malicious
   */
  async securitySummaryMalicious(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/summary/malicious`, {
      query: params,
    });
  }

  /**
   * Retrieves the proportion of emails by spam classification (spam vs. non-spam).
   *
   * @see radar-get-email-security-summary-by-spam
   */
  async securitySummarySpam(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/summary/spam`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by SPF (Sender Policy Framework) validation.
   *
   * @see radar-get-email-security-summary-by-spf
   */
  async securitySummarySpf(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/summary/spf`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by threat categories.
   *
   * @see radar-get-email-security-summary-by-threat-category
   */
  async securitySummaryThreatCategory(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/summary/threat_category`, {
      query: params,
    });
  }

  /**
   * Retrieves the proportion of emails by spoof classification (spoof vs. non-spoof).
   *
   * @see radar-get-email-security-summary-by-spoof
   */
  async securitySummarySpoof(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/summary/spoof`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by TLS version.
   *
   * @see radar-get-email-security-summary-by-tls-version
   */
  async securitySummaryTlsVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/summary/tls_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by ARC (Authenticated Received Chain) validation over time.
   *
   * @see radar-get-email-security-timeseries-group-by-arc
   */
  async securityTimeseriesGroupsArc(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/timeseries_groups/arc`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by DKIM (DomainKeys Identified Mail) validation over time.
   *
   * @see radar-get-email-security-timeseries-group-by-dkim
   */
  async securityTimeseriesGroupsDkim(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/timeseries_groups/dkim`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by DMARC (Domain-based Message Authentication, Reporting and Conformance) validation over time.
   *
   * @see radar-get-email-security-timeseries-group-by-dmarc
   */
  async securityTimeseriesGroupsDmarc(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/timeseries_groups/dmarc`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by malicious classification over time.
   *
   * @see radar-get-email-security-timeseries-group-by-malicious
   */
  async securityTimeseriesGroupsMalicious(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/timeseries_groups/malicious`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by spam classification (spam vs. non-spam) over time.
   *
   * @see radar-get-email-security-timeseries-group-by-spam
   */
  async securityTimeseriesGroupsSpam(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/timeseries_groups/spam`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by SPF (Sender Policy Framework) validation over time.
   *
   * @see radar-get-email-security-timeseries-group-by-spf
   */
  async securityTimeseriesGroupsSpf(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/timeseries_groups/spf`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by threat category over time.
   *
   * @see radar-get-email-security-timeseries-group-by-threat-category
   */
  async securityTimeseriesGroupsThreatCategory(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/timeseries_groups/threat_category`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by spoof classification (spoof vs. non-spoof) over time.
   *
   * @see radar-get-email-security-timeseries-group-by-spoof
   */
  async securityTimeseriesGroupsSpoof(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/timeseries_groups/spoof`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of emails by TLS version over time.
   *
   * @see radar-get-email-security-timeseries-group-by-tls-version
   */
  async securityTimeseriesGroupsTlsVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/email/security/timeseries_groups/tls_version`, {
      query: params,
    });
  }
}

/**
 * DDoS and application-layer attack trends, vectors, and target analysis
 */
export class Attacks extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the distribution of layer 3 attacks by the specified dimension.
   *
   * @see radar-get-attacks-layer3-summary
   */
  async layer3SummaryV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves layer 3 attacks over time.
   *
   * @see radar-get-attacks-layer3-timeseries-by-bytes
   */
  async layer3Timeseries(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/timeseries`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks grouped by dimension over time.
   *
   * @see radar-get-attacks-layer3-timeseries-group
   */
  async layer3TimeseriesGroupsV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks by bitrate.
   *
   * @see radar-get-attacks-layer3-summary-by-bitrate
   */
  async layer3SummaryBitrate(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/summary/bitrate`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks by duration.
   *
   * @see radar-get-attacks-layer3-summary-by-duration
   */
  async layer3SummaryDuration(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/summary/duration`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks by IP version.
   *
   * @see radar-get-attacks-layer3-summary-by-ip-version
   */
  async layer3SummaryIpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/summary/ip_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks by protocol.
   *
   * @see radar-get-attacks-layer3-summary-by-protocol
   */
  async layer3SummaryProtocol(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/summary/protocol`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks by vector.
   *
   * @see radar-get-attacks-layer3-summary-by-vector
   */
  async layer3SummaryVector(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/summary/vector`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks by targeted industry.
   *
   * @see radar-get-attacks-layer3-summary-by-industry
   */
  async layer3SummaryIndustry(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/summary/industry`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks by targeted vertical.
   *
   * @see radar-get-attacks-layer3-summary-by-vertical
   */
  async layer3SummaryVertical(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/summary/vertical`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks by targeted industry over time.
   *
   * @see radar-get-attacks-layer3-timeseries-group-by-industry
   */
  async layer3TimeseriesGroupsIndustry(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/timeseries_groups/industry`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks by IP version over time.
   *
   * @see radar-get-attacks-layer3-timeseries-group-by-ip-version
   */
  async layer3TimeseriesGroupsIpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/timeseries_groups/ip_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks by protocol over time.
   *
   * @see radar-get-attacks-layer3-timeseries-group-by-protocol
   */
  async layer3TimeseriesGroupsProtocol(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/timeseries_groups/protocol`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks by vector over time.
   *
   * @see radar-get-attacks-layer3-timeseries-group-by-vector
   */
  async layer3TimeseriesGroupsVector(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/timeseries_groups/vector`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks by targeted vertical over time.
   *
   * @see radar-get-attacks-layer3-timeseries-group-by-vertical
   */
  async layer3TimeseriesGroupsVertical(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/timeseries_groups/vertical`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks by bitrate over time.
   *
   * @see radar-get-attacks-layer3-timeseries-group-by-bitrate
   */
  async layer3TimeseriesGroupsBitrate(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/timeseries_groups/bitrate`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 3 attacks by duration over time.
   *
   * @see radar-get-attacks-layer3-timeseries-group-by-duration
   */
  async layer3TimeseriesGroupsDuration(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/timeseries_groups/duration`, {
      query: params,
    });
  }

  /**
   * Retrieves the top layer 3 attacks from origin to target location. Values are a percentage out of the total layer 3 attacks (with billing country). You can optionally limit the number of attacks by origin/target location (useful if all the top attacks are from or to the same location).
   *
   * @see radar-get-attacks-layer3-top-attacks
   */
  async layer3TopAttacks(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/top/attacks`, {
      query: params,
    });
  }

  /**
   * This endpoint is deprecated. To continue getting this data, switch to the summary by industry endpoint.
   *
   * @see radar-get-attacks-layer3-top-industries
   */
  async layer3TopIndustry(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/top/industry`, {
      query: params,
    });
  }

  /**
   * This endpoint is deprecated. To continue getting this data, switch to the summary by vertical endpoint.
   *
   * @see radar-get-attacks-layer3-top-verticals
   */
  async layer3TopVertical(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/top/vertical`, {
      query: params,
    });
  }

  /**
   * Retrieves the origin locations of layer 3 attacks.
   *
   * @see radar-get-attacks-layer3-top-origin-locations
   */
  async layer3TopLocationsOrigin(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/top/locations/origin`, {
      query: params,
    });
  }

  /**
   * Retrieves the target locations of layer 3 attacks.
   *
   * @see radar-get-attacks-layer3-top-target-locations
   */
  async layer3TopLocationsTarget(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer3/top/locations/target`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by the specified dimension.
   *
   * @see radar-get-attacks-layer7-summary
   */
  async layer7SummaryV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves layer 7 attacks over time.
   *
   * @see radar-get-attacks-layer7-timeseries
   */
  async layer7Timeseries(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/timeseries`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks grouped by dimension over time.
   *
   * @see radar-get-attacks-layer7-timeseries-group
   */
  async layer7TimeseriesGroupsV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by IP version.
   *
   * @see radar-get-attacks-layer7-summary-by-ip-version
   */
  async layer7SummaryIpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/summary/ip_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by HTTP method.
   *
   * @see radar-get-attacks-layer7-summary-by-http-method
   */
  async layer7SummaryHttpMethod(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/summary/http_method`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by HTTP version.
   *
   * @see radar-get-attacks-layer7-summary-by-http-version
   */
  async layer7SummaryHttpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/summary/http_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by managed rules.
   *
   * @see radar-get-attacks-layer7-summary-by-managed-rules
   */
  async layer7SummaryManagedRules(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/summary/managed_rules`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by mitigation product.
   *
   * @see radar-get-attacks-layer7-summary-by-mitigation-product
   */
  async layer7SummaryMitigationProduct(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/summary/mitigation_product`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by targeted industry.
   *
   * @see radar-get-attacks-layer7-summary-by-industry
   */
  async layer7SummaryIndustry(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/summary/industry`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by targeted vertical.
   *
   * @see radar-get-attacks-layer7-summary-by-vertical
   */
  async layer7SummaryVertical(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/summary/vertical`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by targeted industry over time.
   *
   * @see radar-get-attacks-layer7-timeseries-group-by-industry
   */
  async layer7TimeseriesGroupsIndustry(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/timeseries_groups/industry`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by IP version used over time.
   *
   * @see radar-get-attacks-layer7-timeseries-group-by-ip-version
   */
  async layer7TimeseriesGroupsIpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/timeseries_groups/ip_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by targeted vertical over time.
   *
   * @see radar-get-attacks-layer7-timeseries-group-by-vertical
   */
  async layer7TimeseriesGroupsVertical(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/timeseries_groups/vertical`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by HTTP method over time.
   *
   * @see radar-get-attacks-layer7-timeseries-group-by-http-method
   */
  async layer7TimeseriesGroupsHttpMethod(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/timeseries_groups/http_method`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by HTTP version over time.
   *
   * @see radar-get-attacks-layer7-timeseries-group-by-http-version
   */
  async layer7TimeseriesGroupsHttpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/timeseries_groups/http_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by managed rules over time.
   *
   * @see radar-get-attacks-layer7-timeseries-group-by-managed-rules
   */
  async layer7TimeseriesGroupsManagedRules(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/timeseries_groups/managed_rules`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of layer 7 attacks by mitigation product over time.
   *
   * @see radar-get-attacks-layer7-timeseries-group-by-mitigation-product
   */
  async layer7TimeseriesGroupsMitigationProduct(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/timeseries_groups/mitigation_product`, {
      query: params,
    });
  }

  /**
   * Retrieves the top attacks from origin to target location. Values are percentages of the total layer 7 attacks (with billing country). The attack magnitude can be defined by the number of mitigated requests or by the number of zones affected. You can optionally limit the number of attacks by origin/target location (useful if all the top attacks are from or to the same location).
   *
   * @see radar-get-attacks-layer7-top-attacks
   */
  async layer7TopAttacks(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/top/attacks`, {
      query: params,
    });
  }

  /**
   * This endpoint is deprecated. To continue getting this data, switch to the summary by industry endpoint.
   *
   * @see radar-get-attacks-layer7-top-industries
   */
  async layer7TopIndustry(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/top/industry`, {
      query: params,
    });
  }

  /**
   * This endpoint is deprecated. To continue getting this data, switch to the summary by vertical endpoint.
   *
   * @see radar-get-attacks-layer7-top-verticals
   */
  async layer7TopVertical(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/top/vertical`, {
      query: params,
    });
  }

  /**
   * Retrieves the top origin locations of layer 7 attacks. Values are percentages of the total layer 7 attacks, with the origin location determined by the client IP address.
   *
   * @see radar-get-attacks-layer7-top-origin-location
   */
  async layer7TopLocationsOrigin(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/top/locations/origin`, {
      query: params,
    });
  }

  /**
   * Retrieves the top target locations of and by layer 7 attacks. Values are a percentage out of the total layer 7 attacks. The target location is determined by the attacked zone's billing country, when available.
   *
   * @see radar-get-attacks-layer7-top-target-location
   */
  async layer7TopLocationsTarget(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/top/locations/target`, {
      query: params,
    });
  }

  /**
   * Retrieves the top origin autonomous systems of layer 7 attacks. Values are percentages of the total layer 7 attacks, with the origin autonomous systems determined by the client IP address.
   *
   * @see radar-get-attacks-layer7-top-origin-as
   */
  async layer7TopAsesOrigin(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/attacks/layer7/top/ases/origin`, {
      query: params,
    });
  }
}

/**
 * Look up ASNs, IPs, domains, and locations with metadata and traffic summaries
 */
export class Entities extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves IP address information.
   *
   * @see radar-get-entities-ip
   */
  async get(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/entities/ip`, {
      query: params,
    });
  }

  /**
   * Retrieves a list of autonomous systems.
   *
   * @see radar-get-entities-asn-list
   */
  async asnsList(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/entities/asns`, {
      query: params,
    });
  }

  /**
   * Retrieves the requested autonomous system information. (A confidence level below `5` indicates a low level of confidence in the traffic data - normally this happens because Cloudflare has a small amount of traffic from/to this AS). Population estimates come from APNIC (refer to https://labs.apnic.net/?p=526).
   *
   * @see radar-get-entities-asn-by-id
   */
  async asnsGet(asn: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/entities/asns/${asn}`, {
      query: params,
    });
  }

  /**
   * Retrieves AS-level relationship for given networks.
   *
   * @see radar-get-asns-rel
   */
  async asnsRel(asn: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/entities/asns/${asn}/rel`, {
      query: params,
    });
  }

  /**
   * Retrieves Internet Routing Registry AS-SETs that an AS is a member of.
   *
   * @see radar-get-asns-as-set
   */
  async asnsAsSet(asn: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/entities/asns/${asn}/as_set`, {
      query: params,
    });
  }

  /**
   * Retrieves the requested autonomous system information based on IP address. Population estimates come from APNIC (refer to https://labs.apnic.net/?p=526).
   *
   * @see radar-get-entities-asn-by-ip
   */
  async asnsIp(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/entities/asns/ip`, {
      query: params,
    });
  }

  /**
   * Retrieves a ranked list of Autonomous Systems based on their presence in the Cloudflare Botnet Threat Feed. Rankings can be sorted by offense count or number of bad IPs. Optionally compare to a previous date to see rank changes.
   *
   * @see radar-get-as-botnet-threat-feed
   */
  async asnsBotnetThreatFeed(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/entities/asns/botnet_threat_feed`, {
      query: params,
    });
  }

  /**
   * Retrieves a list of locations.
   *
   * @see radar-get-entities-locations
   */
  async locationsList(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/entities/locations`, {
      query: params,
    });
  }

  /**
   * Retrieves the requested location information. (A confidence level below `5` indicates a low level of confidence in the traffic data - normally this happens because Cloudflare has a small amount of traffic from/to this location).
   *
   * @see radar-get-entities-location-by-alpha2
   */
  async locationsGet(location: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/entities/locations/${location}`, {
      query: params,
    });
  }
}

/**
 * Geographic location metadata used for regional traffic analysis
 */
export class Geolocations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves a list of geolocations. Geolocation names can be localized by sending an `Accept-Language` HTTP header with a BCP 47 language tag (e.g., `Accept-Language: pt-PT`). The full quality-value chain is supported (e.g., `pt-PT,pt;q=0.9,en;q=0.8`).
   *
   * @see radar-get-geolocations
   */
  async list(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/geolocations`, {
      query: params,
    });
  }

  /**
   * Retrieves the requested Geolocation information. Geolocation names can be localized by sending an `Accept-Language` HTTP header with a BCP 47 language tag (e.g., `Accept-Language: pt-PT`). The full quality-value chain is supported (e.g., `pt-PT,pt;q=0.9,en;q=0.8`).
   *
   * @see radar-get-geolocation-details
   */
  async get(geoId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/geolocations/${geoId}`, {
      query: params,
    });
  }
}

/**
 * HTTP protocol trends — TLS versions, HTTP versions, browser share, and OS distribution
 */
export class HTTP extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the distribution of HTTP requests by the specified dimension.
   *
   * @see radar-get-http-summary
   */
  async summaryV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the HTTP requests over time.
   *
   * @see radar-get-http-timeseries
   */
  async timeseries(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/timeseries`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests grouped by dimension.
   *
   * @see radar-get-http-timeseries-group
   */
  async timeseriesGroupsV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations by HTTP requests.
   *
   * @see radar-get-http-top-locations-by-http-requests
   */
  async locationsGet(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/locations`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations, by HTTP requests, of the requested bot class.
   *
   * @see radar-get-http-top-locations-by-bot-class
   */
  async locationsBotClassGet(botClass: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/locations/bot_class/${botClass}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations, by HTTP requests, of the requested device type.
   *
   * @see radar-get-http-top-locations-by-device-type
   */
  async locationsDeviceTypeGet(deviceType: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/locations/device_type/${deviceType}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations, by HTTP requests, of the requested HTTP protocol.
   *
   * @see radar-get-http-top-locations-by-http-protocol
   */
  async locationsHttpProtocolGet(httpProtocol: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/locations/http_protocol/${httpProtocol}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations, by HTTP requests, of the requested HTTP version.
   *
   * @see radar-get-http-top-locations-by-http-version
   */
  async locationsHttpMethodGet(httpVersion: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/locations/http_version/${httpVersion}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations, by HTTP requests, of the requested IP version.
   *
   * @see radar-get-http-top-locations-by-ip-version
   */
  async locationsIpVersionGet(ipVersion: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/locations/ip_version/${ipVersion}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations, by HTTP requests, of the requested operating system.
   *
   * @see radar-get-http-top-locations-by-operating-system
   */
  async locationsOsGet(os: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/locations/os/${os}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations, by HTTP requests, of the requested TLS protocol version.
   *
   * @see radar-get-http-top-locations-by-tls-version
   */
  async locationsTlsVersionGet(tlsVersion: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/locations/tls_version/${tlsVersion}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations, by HTTP requests, of the requested browser family.
   *
   * @see radar-get-http-top-locations-by-browser-family
   */
  async locationsBrowserFamilyGet(browserFamily: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/locations/browser_family/${browserFamily}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top autonomous systems by HTTP requests.
   *
   * @see radar-get-http-top-ases-by-http-requests
   */
  async asesGet(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/ases`, {
      query: params,
    });
  }

  /**
   * Retrieves the top autonomous systems, by HTTP requests, of the requested bot class.
   *
   * @see radar-get-http-top-ases-by-bot-class
   */
  async asesBotClassGet(botClass: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/ases/bot_class/${botClass}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top autonomous systems, by HTTP requests, of the requested device type.
   *
   * @see radar-get-http-top-ases-by-device-type
   */
  async asesDeviceTypeGet(deviceType: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/ases/device_type/${deviceType}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top autonomous systems, by HTTP requests, of the requested HTTP protocol.
   *
   * @see radar-get-http-top-ases-by-http-protocol
   */
  async asesHttpProtocolGet(httpProtocol: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/ases/http_protocol/${httpProtocol}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top autonomous systems, by HTTP requests, of the requested HTTP version.
   *
   * @see radar-get-http-top-ases-by-http-version
   */
  async asesHttpMethodGet(httpVersion: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/ases/http_version/${httpVersion}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top autonomous systems, by HTTP requests, of the requested IP version.
   *
   * @see radar-get-http-top-ases-by-ip-version
   */
  async asesIpVersionGet(ipVersion: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/ases/ip_version/${ipVersion}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top autonomous systems, by HTTP requests, of the requested operating system.
   *
   * @see radar-get-http-top-ases-by-operating-system
   */
  async asesOsGet(os: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/ases/os/${os}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top autonomous systems, by HTTP requests, of the requested TLS protocol version.
   *
   * @see radar-get-http-top-ases-by-tls-version
   */
  async asesTlsVersionGet(tlsVersion: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/ases/tls_version/${tlsVersion}`, {
      query: params,
    });
  }

  /**
   * Retrieves the top autonomous systems, by HTTP requests, of the requested browser family.
   *
   * @see radar-get-http-top-ases-by-browser-family
   */
  async asesBrowserFamilyGet(browserFamily: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/ases/browser_family/${browserFamily}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of bot-generated HTTP requests to genuine human traffic, as classified by Cloudflare. Visit https://developers.cloudflare.com/radar/concepts/bot-classes/ for more information.
   *
   * @see radar-get-http-summary-by-bot-class
   */
  async summaryBotClass(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/summary/bot_class`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests generated by mobile, desktop, and other types of devices.
   *
   * @see radar-get-http-summary-by-device-type
   */
  async summaryDeviceType(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/summary/device_type`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by HTTP protocol (HTTP vs. HTTPS).
   *
   * @see radar-get-http-summary-by-http-protocol
   */
  async summaryHttpProtocol(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/summary/http_protocol`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by HTTP version.
   *
   * @see radar-get-http-summary-by-http-version
   */
  async summaryHttpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/summary/http_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by IP version.
   *
   * @see radar-get-http-summary-by-ip-version
   */
  async summaryIpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/summary/ip_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by operating system (Windows, macOS, Android, iOS, and others).
   *
   * @see radar-get-http-summary-by-operating-system
   */
  async summaryOs(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/summary/os`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by TLS version.
   *
   * @see radar-get-http-summary-by-tls-version
   */
  async summaryTlsVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/summary/tls_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by post-quantum support.
   *
   * @see radar-get-http-summary-by-post-quantum
   */
  async summaryPostQuantum(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/summary/post_quantum`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by TLS version over time.
   *
   * @see radar-get-http-timeseries-group-by-tls-version
   */
  async timeseriesGroupsTlsVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/timeseries_groups/tls_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests classified as automated or human over time. Visit https://developers.cloudflare.com/radar/concepts/bot-classes/ for more information.
   *
   * @see radar-get-http-timeseries-group-by-bot-class
   */
  async timeseriesGroupsBotClass(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/timeseries_groups/bot_class`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by user agent over time.
   *
   * @see radar-get-http-timeseries-group-by-browsers
   */
  async timeseriesGroupsBrowser(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/timeseries_groups/browser`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by user agent family over time.
   *
   * @see radar-get-http-timeseries-group-by-browser-families
   */
  async timeseriesGroupsBrowserFamily(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/timeseries_groups/browser_family`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by device type over time.
   *
   * @see radar-get-http-timeseries-group-by-device-type
   */
  async timeseriesGroupsDeviceType(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/timeseries_groups/device_type`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by HTTP protocol (HTTP vs. HTTPS) over time.
   *
   * @see radar-get-http-timeseries-group-by-http-protocol
   */
  async timeseriesGroupsHttpProtocol(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/timeseries_groups/http_protocol`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by HTTP version over time.
   *
   * @see radar-get-http-timeseries-group-by-http-version
   */
  async timeseriesGroupsHttpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/timeseries_groups/http_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by IP version over time.
   *
   * @see radar-get-http-timeseries-group-by-ip-version
   */
  async timeseriesGroupsIpVersion(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/timeseries_groups/ip_version`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by operating system over time.
   *
   * @see radar-get-http-timeseries-group-by-operating-system
   */
  async timeseriesGroupsOs(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/timeseries_groups/os`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP requests by post-quantum support over time.
   *
   * @see radar-get-http-timeseries-group-by-post-quantum
   */
  async timeseriesGroupsPostQuantum(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/timeseries_groups/post_quantum`, {
      query: params,
    });
  }

  /**
   * Retrieves the top user agents by HTTP requests.
   *
   * @see radar-get-http-top-browsers
   */
  async topBrowser(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/browser`, {
      query: params,
    });
  }

  /**
   * Retrieves the top user agents, aggregated in families, by HTTP requests.
   *
   * @see radar-get-http-top-browser-families
   */
  async topBrowserFamily(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/http/top/browser_family`, {
      query: params,
    });
  }
}

/**
 * Internet connection quality metrics — speed, latency, and jitter by geography and ASN
 */
export class Quality extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves a summary (percentiles) of bandwidth, latency, or DNS response time from the Radar Internet Quality Index (IQI).
   *
   * @see radar-get-quality-index-summary
   */
  async iqiSummary(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/quality/iqi/summary`, {
      query: params,
    });
  }

  /**
   * Retrieves a time series (percentiles) of bandwidth, latency, or DNS response time from the Radar Internet Quality Index (IQI).
   *
   * @see radar-get-quality-index-timeseries-group
   */
  async iqiTimeseriesGroups(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/quality/iqi/timeseries_groups`, {
      query: params,
    });
  }

  /**
   * Retrieves a summary of bandwidth, latency, jitter, and packet loss, from the previous 90 days of Cloudflare Speed Test data.
   *
   * @see radar-get-quality-speed-summary
   */
  async speedSummary(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/quality/speed/summary`, {
      query: params,
    });
  }

  /**
   * Retrieves a histogram from the previous 90 days of Cloudflare Speed Test data, split into fixed bandwidth (Mbps), latency (ms), or jitter (ms) buckets.
   *
   * @see radar-get-quality-speed-histogram
   */
  async speedHistogram(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/quality/speed/histogram`, {
      query: params,
    });
  }

  /**
   * Retrieves the top autonomous systems by bandwidth, latency, jitter, or packet loss, from the previous 90 days of Cloudflare Speed Test data.
   *
   * @see radar-get-quality-speed-top-ases
   */
  async speedTopAses(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/quality/speed/top/ases`, {
      query: params,
    });
  }

  /**
   * Retrieves the top locations by bandwidth, latency, jitter, or packet loss, from the previous 90 days of Cloudflare Speed Test data.
   *
   * @see radar-get-quality-speed-top-locations
   */
  async speedTopLocations(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/quality/speed/top/locations`, {
      query: params,
    });
  }
}

/**
 * Top domain rankings based on DNS query popularity across the Cloudflare network
 */
export class Ranking extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves domains rank over time.
   *
   * @see radar-get-ranking-domain-timeseries
   */
  async timeseriesGroups(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ranking/timeseries_groups`, {
      query: params,
    });
  }

  /**
   * Retrieves the top or trending domains based on their rank. Popular domains are domains of broad appeal based on how people use the Internet. Trending domains are domains that are generating a surge in interest. For more information on top domains, see https://blog.cloudflare.com/radar-domain-rankings/.
   *
   * @see radar-get-ranking-top-domains
   */
  async top(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ranking/top`, {
      query: params,
    });
  }

  /**
   * Retrieves domain rank details. Cloudflare provides an ordered rank for the top 100 domains, but for the remainder it only provides ranking buckets like top 200 thousand, top one million, etc.. These are available through Radar datasets endpoints.
   *
   * @see radar-get-ranking-domain-details
   */
  async domainGet(domain: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ranking/domain/${domain}`, {
      query: params,
    });
  }

  /**
   * Retrieves Internet Services rank update changes over time.
   *
   * @see radar-get-ranking-internet-services-timeseries
   */
  async internetServicesTimeseriesGroups(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ranking/internet_services/timeseries_groups`, {
      query: params,
    });
  }

  /**
   * Retrieves top Internet services based on their rank.
   *
   * @see radar-get-ranking-top-internet-services
   */
  async internetServicesTop(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ranking/internet_services/top`, {
      query: params,
    });
  }

  /**
   * Retrieves the list of Internet services categories.
   *
   * @see radar-get-ranking-internet-services-categories
   */
  async internetServicesCategories(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/ranking/internet_services/categories`, {
      query: params,
    });
  }
}

/**
 * Detected traffic anomalies and unusual patterns in Internet traffic flows
 */
export class TrafficAnomalies extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the latest Internet traffic anomalies, which are signals that might indicate an outage. These alerts are automatically detected by Radar and manually verified by our team.
   *
   * @see radar-get-traffic-anomalies
   */
  async get(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/traffic_anomalies`, {
      query: params,
    });
  }

  /**
   * Retrieves the sum of Internet traffic anomalies, grouped by location. These anomalies are signals that might indicate an outage, automatically detected by Radar and manually verified by our team.
   *
   * @see radar-get-traffic-anomalies-top
   */
  async locationsGet(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/traffic_anomalies/locations`, {
      query: params,
    });
  }
}

/**
 * TCP connection reset and timeout statistics indicating network health issues
 */
export class TCPResetsTimeouts extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the distribution of connection stage by TCP connections terminated within the first 10 packets by a reset or timeout.
   *
   * @see radar-get-tcp-resets-timeouts-summary
   */
  async summary(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/tcp_resets_timeouts/summary`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of connection stage by TCP connections terminated within the first 10 packets by a reset or timeout over time.
   *
   * @see radar-get-tcp-resets-timeouts-timeseries-group
   */
  async timeseriesGroups(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/tcp_resets_timeouts/timeseries_groups`, {
      query: params,
    });
  }
}

/**
 * Robots.txt adoption and crawler directive trends across the web
 */
export class RobotsTxt extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the top domain categories by the number of robots.txt files parsed.
   *
   * @see radar-get-robots-txt-top-domain-categories-by-files-parsed
   */
  async topDomainCategories(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/robots_txt/top/domain_categories`, {
      query: params,
    });
  }

  /**
   * Retrieves the top user agents on robots.txt files.
   *
   * @see radar-get-robots-txt-top-user-agents-by-directive
   */
  async topUserAgentsDirective(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/robots_txt/top/user_agents/directive`, {
      query: params,
    });
  }
}

/**
 * Leaked credential detection trends and exposure statistics
 */
export class LeakedCredentials extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves an aggregated summary of HTTP authentication requests grouped by the specified dimension.
   *
   * @see radar-get-leaked-credential-checks-summary
   */
  async summaryV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/leaked_credential_checks/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP authentication requests, grouped by the specified dimension over time.
   *
   * @see radar-get-leaked-credential-checks-timeseries-group
   */
  async timeseriesGroupsV2(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/leaked_credential_checks/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP authentication requests by bot class.
   *
   * @see radar-get-leaked-credential-checks-summary-by-bot-class
   */
  async summaryBotClass(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/leaked_credential_checks/summary/bot_class`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP authentication requests by compromised credential status.
   *
   * @see radar-get-leaked-credential-checks-summary-by-compromised
   */
  async summaryCompromised(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/leaked_credential_checks/summary/compromised`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP authentication requests by bot class over time.
   *
   * @see radar-get-leaked-credential-checks-timeseries-group-by-bot-class
   */
  async timeseriesGroupsBotClass(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/leaked_credential_checks/timeseries_groups/bot_class`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of HTTP authentication requests by compromised credential status over time.
   *
   * @see radar-get-leaked-credential-checks-timeseries-group-by-compromised
   */
  async timeseriesGroupsCompromised(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/leaked_credential_checks/timeseries_groups/compromised`, {
      query: params,
    });
  }
}

/**
 * Origins operations
 */
export class Origins extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves a list of origins with their regions.
   *
   * @see radar-get-origins
   */
  async getRadarOrigins(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/origins`, {
      query: params,
    });
  }

  /**
   * Retrieves an aggregated summary of origin metrics grouped by the specified dimension.
   *
   * @see radar-get-origins-summary
   */
  async summaryGet(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/origins/summary/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the time series of origin metrics for the specified origin.
   *
   * @see radar-get-origins-timeseries
   */
  async timeseriesGet(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/origins/timeseries`, {
      query: params,
    });
  }

  /**
   * Retrieves the distribution of origin metrics grouped by the specified dimension over time.
   *
   * @see radar-get-origins-timeseries-group
   */
  async timeseriesGroupsGet(dimension: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/origins/timeseries_groups/${dimension}`, {
      query: params,
    });
  }

  /**
   * Retrieves the requested origin information with its regions.
   *
   * @see radar-get-origin-details
   */
  async getOriginDetails(slug: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/origins/${slug}`, {
      query: params,
    });
  }
}

/**
 * Tlds operations
 */
export class Tlds extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves a list of TLDs.
   *
   * @see radar-get-tlds
   */
  async getRadarTlds(params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/tlds`, {
      query: params,
    });
  }

  /**
   * Retrieves the requested TLD information.
   *
   * @see radar-get-tld-details
   */
  async getTldDetails(tld: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/radar/tlds/${tld}`, {
      query: params,
    });
  }
}

/**
 * Internet-wide traffic intelligence — BGP, DNS, HTTP trends, attack data, and network quality insights
 */
export class Radar extends APIResource {
  readonly ai: AI;
  readonly agentreadiness: AgentReadiness;
  readonly ct: Ct;
  readonly annotations: Annotations;
  readonly bgp: Bgp;
  readonly bots: Bots;
  readonly datasets: Datasets;
  readonly dns: DNS;
  readonly netflows: Netflows;
  readonly postquantum: PostQuantum;
  readonly search: Search;
  readonly verifiedbots: VerifiedBots;
  readonly as112: As112;
  readonly email: Email;
  readonly attacks: Attacks;
  readonly entities: Entities;
  readonly geolocations: Geolocations;
  readonly http: HTTP;
  readonly quality: Quality;
  readonly ranking: Ranking;
  readonly trafficanomalies: TrafficAnomalies;
  readonly tcpresetstimeouts: TCPResetsTimeouts;
  readonly robotstxt: RobotsTxt;
  readonly leakedcredentials: LeakedCredentials;
  readonly origins: Origins;
  readonly tlds: Tlds;

  constructor(client: CloudflareClient) {
    super(client);
    this.ai = new AI(client);
    this.agentreadiness = new AgentReadiness(client);
    this.ct = new Ct(client);
    this.annotations = new Annotations(client);
    this.bgp = new Bgp(client);
    this.bots = new Bots(client);
    this.datasets = new Datasets(client);
    this.dns = new DNS(client);
    this.netflows = new Netflows(client);
    this.postquantum = new PostQuantum(client);
    this.search = new Search(client);
    this.verifiedbots = new VerifiedBots(client);
    this.as112 = new As112(client);
    this.email = new Email(client);
    this.attacks = new Attacks(client);
    this.entities = new Entities(client);
    this.geolocations = new Geolocations(client);
    this.http = new HTTP(client);
    this.quality = new Quality(client);
    this.ranking = new Ranking(client);
    this.trafficanomalies = new TrafficAnomalies(client);
    this.tcpresetstimeouts = new TCPResetsTimeouts(client);
    this.robotstxt = new RobotsTxt(client);
    this.leakedcredentials = new LeakedCredentials(client);
    this.origins = new Origins(client);
    this.tlds = new Tlds(client);
  }
}
