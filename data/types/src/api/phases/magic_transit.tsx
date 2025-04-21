import { RulesetPhase, RulesetKind } from './fields';
import { ActionParameterSkip } from './http_request_firewall_managed';
import { AccountEntrypointType, RuleBase, RulesetBase } from './utils';

export type MagicTransitRules = RuleBase<Omit<ActionParameterSkip, 'rules'>> & {
  logging: { enabled: boolean };
  id: string;
  ip_type: 'ipv4' | 'ipv6';
};

export type MagicTransitRuleset = RulesetBase<
  RulesetPhase.MagicTransit,
  RulesetKind.Root
> & {
  rules?: MagicTransitRules[];
  id: string;
};

export type EntrypointMagicTransitRuleset = AccountEntrypointType<
  RulesetPhase.MagicTransit,
  ActionParameterSkip
>;
