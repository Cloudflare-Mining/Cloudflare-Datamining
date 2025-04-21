import { eg } from '@cloudflare/util-en-garde';

export * from './account';
export * from './accountRulesets';
export * from './alert';
export * from './apiKey';
export * from './apiToken';
export * from './billing';
export * from './builds';
export * from './contentBlock';
export * from './dns';
export * from './domain';
export * from './domainResourceGroup';
export * from './zoneVersioning';
export * from './captcha';
export * from './entitlement';
export * from './flags';
export * from './graphQLSettings';
export * from './lb';
export * from './marketing';
export * from './membership';
export * from './permissions';
export * from './organization';
export * from './pageRule';
export * from './pages';
export * from './policy';
export * from './profile';
export * from './ruleset';
export * from './subscription';
export * from './two-factor';
export * from './user';
export * from './zone';
export * from './ratePlan';
export * from './servicesPlan';
export * from './settings';
export * from './spectrum';
export * from './zendesk';
export * from './railgun';
export * from './oAuthConsentApp';
export * from './phases/fields';
export * from './phases/http_ratelimit';
export * from './phases/http_request_firewall_custom';
export * from './phases/http_request_firewall_managed';
export * from './phases/http_request_redirect';
export * from './phases/magic_transit_ids_managed';
export * from './phases/magic_transit_managed';
export * from './phases/magic_transit';
export * from './phases/magic_transit_ratelimit';
export * from './phases/override';
export * from './phases/utils';
export * from './phases/ddos_l4';

export type APIResponse<
  ExpectedData = {},
  ExpectedResultInfo = PaginationInfo
> = {
  headers: Headers;
  status: number;
  body: APIResponseBody<ExpectedData, ExpectedResultInfo>;
  text: string;
  response: Response;
};

export const ApiResponseBody = eg.object({
  result: eg.any,
  success: eg.boolean,
  errors: eg.array(
    eg.object({
      code: eg.number.optional,
      message: eg.string
    })
  ),
  messages: eg.array(eg.any).optional,
  result_info: eg.any.optional
});

export type APIResponseBody<
  ExpectedData = {},
  ExpectedResultInfo = PaginationInfo
> = {
  result: ExpectedData;
  success: boolean;
  errors: APIResponseBodyError[];
  messages: any[];
  result_info?: ExpectedResultInfo;
};

export type APIResponseBodyError = {
  code?: number;
  message: string;
  // Ruleset error
  source?: {
    pointer?: string;
  };
};

export type APIResponseBodyResult = {
  id: string;
  script: string;
  etag: string;
  size: number;
  modified_on: string;
};

export type PaginationInfo = {
  next_page?: boolean;
  page: number;
  per_page: number;
  count: number;
  total_count: number;
  total_pages: number;
  cursors?: {
    before?: string;
    after?: string;
  };
};

export type PaginationData = {
  info: PaginationInfo;
  actionParameters: Array<string | number>;
  options: any;
  insertionOffset: number;
};

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

export type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;
