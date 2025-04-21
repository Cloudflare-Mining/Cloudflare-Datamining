import { eg, TypeFromCodec } from '@cloudflare/util-en-garde';

export const NotificationScope = eg.union([
  eg.literal('login'),
  eg.literal('logout-login')
]);

export type NotificationScope = TypeFromCodec<typeof NotificationScope>;

export const Notification = eg.object({
  id: eg.string,
  type: eg.string.optional,
  title: eg.string,
  body: eg.string.optional,
  footerText: eg.string.optional,
  footerLinkText: eg.string.optional,
  footerLinkUrl: eg.string.optional,
  dismissible: eg.boolean,
  scope: eg.string.optional
});

export type Notification = TypeFromCodec<typeof Notification>;

export const LoginBanner = eg.object({
  id: eg.string,
  header: eg.string,
  description: eg.string,
  ctaText: eg.string,
  ctaLink: eg.string,
  darkBackgroundImageUrl: eg.string.optional,
  lightBackgroundImageUrl: eg.string,
  displayGraphicsUrl: eg.string.optional,
  visible: eg.boolean,
  weight: eg.string.optional,
  createdAt: eg.number,
  updatedAt: eg.number,
  entryID: eg.string.optional
});
export type LoginBanner = TypeFromCodec<typeof LoginBanner>;
