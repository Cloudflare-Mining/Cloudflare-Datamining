import { eg, type TypeFromCodec } from '@cloudflare/util-en-garde';

export const CaptchaChallenge = eg.object({
  challenge_required: eg.boolean,
  key: eg.string,
  challenge_provider: eg.string,
  widget_mode: eg.union([eg.literal('visible'), eg.literal('invisible')])
    .optional,
  captcha_challenge_jwt: eg.string.optional
});

export type CaptchaChallenge = TypeFromCodec<typeof CaptchaChallenge>;
