import { ElementType } from '../account';
import { BypassProducts, ContentType, RulesetPhase } from './fields';
import { RulesetPhaseType } from './utils';

export type CustomActionParameters = {
  id: string;
  ruleset?: 'current';
  phases?: RulesetPhase[];
  products?: BypassProducts[];
  response: {
    status_code: number;
    content: string;
    content_type: ContentType;
  };
};

export type CustomRuleset = RulesetPhaseType<
  RulesetPhase.HttpRequestFirewallCustom,
  CustomActionParameters
>;
export type CustomRule = ElementType<CustomRuleset['rules']>;
