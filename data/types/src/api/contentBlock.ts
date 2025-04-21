import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

/** A content entity that has been blocked by Trust & Safety. */
export const ContentBlock = eg.object({
  created: eg.string,
  hostname: eg.string,
  id: eg.string,
  match_subdomain: eg.boolean.optional,
  match_subpath: eg.boolean.optional,
  path: eg.string,
  protocol: eg.union([eg.literal('http'), eg.literal('https')]),
  /**
   * @deprecated
   * Use reference_type and reference_id instead
   */
  reference: eg.string.optional,
  reference_type: eg.union([
    eg.literal('abuse_report'),
    eg.literal('csam_match'),
    eg.literal('other')
  ]),
  reference_id: eg.string.optional,
  review_status: eg.union([eg.literal('no_review'), eg.literal('requested')]),
  type: eg.union([
    eg.literal('geo_block'),
    eg.literal('legal_block'),
    eg.literal('phishing_interstitial'),
    eg.literal('malware_interstitial')
  ]),
  url_query: eg.array(
    eg.object({
      key: eg.string,
      value: eg.union([eg.string, eg.null]).optional
    })
  ).optional
});

export type ContentBlock = TypeFromCodec<typeof ContentBlock>;
