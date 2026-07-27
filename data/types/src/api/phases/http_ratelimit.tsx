// Rate Limiting HttpRateLimit

import type { Overwrite } from '../../utils';
import type { CustomActionParameters } from './http_request_firewall_custom';
import type { RuleBase, RulesetBase } from './utils';
import type { RulesetPhase } from './fields';

export type RateLimitRule = Overwrite<
  RuleBase,
  { action_parameters?: CustomActionParameters }
> & {
  ratelimit: {
    characteristics: string[];
    period: number;
    requests_per_period: number;
    mitigation_timeout?: number;
    counting_expression?: string;
    requests_to_origin?: boolean;
    rate_exceeds?: string;
    score_per_period?: number;
    score_response_header_name?: string;
  };
};

export type RateLimitRuleset = RulesetBase<RulesetPhase.HttpRateLimit> & {
  rules?: RateLimitRule[];
};
