// Rate Limiting HttpRateLimit

import { Overwrite } from '../../utils';
import { CustomActionParameters } from './http_request_firewall_custom';
import { RuleBase, RulesetBase } from './utils';
import { RulesetPhase } from './fields';

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
  };
};

export type RateLimitRuleset = RulesetBase<RulesetPhase.HttpRateLimit> & {
  rules?: RateLimitRule[];
};
