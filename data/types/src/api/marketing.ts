import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const NotificationScope = eg.union([
  eg.literal('login'),
  eg.literal('logout-login')
]);

export type NotificationScope = TypeFromCodec<typeof NotificationScope>;

export const Notification = eg.object({
  id: eg.string,
  title: eg.string,
  body: eg.string.optional,
  footerText: eg.string.optional,
  footerLinkText: eg.string.optional,
  footerLinkUrl: eg.string.optional,
  dismissible: eg.boolean,
  scope: eg.string.optional
});

export type Notification = TypeFromCodec<typeof Notification>;
