import { RulesetPhase, RulesetKind } from './fields';

import { ActionParameterSkip } from './http_request_firewall_managed';
import { AccountEntrypointType, RuleBase, RulesetBase } from './utils';

export type MagicTransitRateLimitRules = RuleBase<
  Omit<ActionParameterSkip, 'rules'>
> & {
  logging: { enabled: boolean };
  id: string;
  ratelimit: {
    period: number;
    packets_per_period: number;
  };
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
