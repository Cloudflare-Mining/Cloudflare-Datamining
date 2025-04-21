import { RulesetPhase, RulesetKind } from './fields';

import { ActionParameterSkip } from './http_request_firewall_managed';
import { AccountEntrypointType, RuleBase, RulesetBase } from './utils';

export enum RateLimitParamType  {
  bits = 'bits',
 packets = 'packets'
}

export type MagicTransitRateLimitRules = RuleBase<
  Omit<ActionParameterSkip, 'rules'>
> & {
  logging: { enabled: boolean };
  id: string;
  ratelimit: {
    period: number;
    type?: RateLimitParamType;
    value?: number;
    packets_per_period?: number;
    bits_per_period?: number;
  };
  expression_colo: string;
  expression_remaining: string;
};

export type MagicTransitRateLimitRuleset = RulesetBase<
  RulesetPhase.MagicTransitRateLimit,
  RulesetKind.Root
> & {
  rules?: MagicTransitRateLimitRules[];
  id: string;
};

export type EntrypointMagicTransitRateLimitRuleset = AccountEntrypointType<
  RulesetPhase.MagicTransitRateLimit,
  ActionParameterSkip
>;
