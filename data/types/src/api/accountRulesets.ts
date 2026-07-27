import type {
  AccountEntrypointType,
  EntrypointOverrideActionParameters,
  RulesetPhaseType
} from './phases/utils';
import type { ElementType } from './account';
import type {
  CustomActionParameters,
  CustomRuleset
} from './phases/http_request_firewall_custom';
import type { RateLimitRuleset } from './phases/http_ratelimit';
import type {
  AccountRedirectRuleset,
  RedirectActionParameters
} from './phases/http_request_redirect';
import type {
  ActionParameterSkip,
  ManagedRule,
  ManagedRuleset
} from './phases/http_request_firewall_managed';
import type { MagicTransitRuleset } from './phases/magic_transit';
import type { AccountMagicIdsRuleset } from './phases/magic_transit_ids_managed';
import type { DDoSl4Ruleset } from './phases/ddos_l4';
import type { MagicManagedRuleset } from './phases/magic_transit_managed';
import type { Actions, RulesetPhase } from './phases/fields';
import type { MagicTransitRateLimitRuleset } from './phases/magic_transit_ratelimit';

// Generics
export type GenericRuleset =
  | RulesetPhaseType
  | CustomRuleset
  | RateLimitRuleset
  | ManagedRuleset
  | AccountMagicIdsRuleset
  | MagicTransitRuleset
  | MagicTransitRateLimitRuleset
  | MagicManagedRuleset
  | DDoSl4Ruleset
  | AccountRedirectRuleset;

export type AccountRulesetByPhase<
  PhaseType = RulesetPhase,
  ActionParameter = EntrypointOverrideActionParameters
> = RulesetPhaseType<PhaseType, ActionParameter>;

export type AccountRulesetsByPhase = {
  [RulesetPhase.HttpRequestFirewallCustom]: AccountRulesetByPhase<
    RulesetPhase.HttpRequestFirewallCustom,
    CustomActionParameters
  >;
  [RulesetPhase.HttpRateLimit]: AccountRulesetByPhase<
    RulesetPhase.HttpRateLimit,
    RateLimitRuleset
  >;
  [RulesetPhase.HttpRequestFirewallManaged]: AccountRulesetByPhase<
    RulesetPhase.HttpRequestFirewallManaged,
    ManagedRuleset
  >;
  [RulesetPhase.HttpRequestRedirect]: AccountRulesetByPhase<
    RulesetPhase.HttpRequestRedirect,
    RedirectActionParameters
  >;
  [RulesetPhase.MagicManaged]: AccountRulesetByPhase<
    RulesetPhase.MagicManaged,
    MagicManagedRuleset
  >;
  [RulesetPhase.MagicTransit]: AccountRulesetByPhase<
    RulesetPhase.MagicTransit,
    MagicTransitRuleset
  >;
  [RulesetPhase.MagicTransitRateLimit]: AccountRulesetByPhase<
    RulesetPhase.MagicTransitRateLimit,
    MagicTransitRateLimitRuleset
  >;
  [RulesetPhase.MagicIDS]: AccountRulesetByPhase<RulesetPhase.MagicIDS, {}>;
};

export type RulesetPhaseKeyType = keyof AccountRulesetsEntrypointByPhase;
export type RuleByPhase<Phase extends RulesetPhaseKeyType> = ElementType<
  AccountRulesetsByPhase[Phase]['rules']
>;

export type AccountRulesetsEntrypointByPhase = {
  [RulesetPhase.HttpRequestFirewallCustom]: AccountEntrypointType<
    RulesetPhase.HttpRequestFirewallCustom,
    CustomActionParameters
  >;
  [RulesetPhase.HttpRateLimit]: AccountEntrypointType<RulesetPhase.HttpRateLimit>;
  [RulesetPhase.HttpRequestFirewallManaged]: AccountEntrypointType<
    RulesetPhase.HttpRequestFirewallManaged,
    ActionParameterSkip,
    Actions.Skip | Actions.Execute,
    ManagedRule
  >;
  [RulesetPhase.HttpRequestRedirect]: AccountEntrypointType<RulesetPhase.HttpRequestRedirect>;
  [RulesetPhase.MagicManaged]: AccountEntrypointType<RulesetPhase.MagicManaged>;
  [RulesetPhase.MagicTransit]: AccountEntrypointType<RulesetPhase.MagicTransit>;
  [RulesetPhase.MagicTransitRateLimit]: AccountEntrypointType<RulesetPhase.MagicTransitRateLimit>;
  [RulesetPhase.MagicIDS]: AccountEntrypointType<RulesetPhase.MagicIDS>;
};

export type GenericRule = ElementType<GenericRuleset['rules']> & {
  enabled: boolean;
  label?: string;
};

export type WafRulesets = CustomRuleset | RateLimitRuleset | ManagedRuleset;
export type WafRule = ElementType<WafRulesets['rules']>;
