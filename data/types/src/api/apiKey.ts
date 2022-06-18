import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const ApiKey = eg.object({
  password: eg.string,
  'h-captcha-response': eg.string.optional,
  cf_challenge_response: eg.string.optional
});

export type ApiKey = TypeFromCodec<typeof ApiKey>;
