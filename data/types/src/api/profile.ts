export interface TwoFactorQRCode {
  qrcode: TwoFactorQRCode | string;
  secret: string;
}

export interface TwoFactorRecoveryCodes {
  two_factor_recovery_codes?: TwoFactorRecoveryCodes;
  recoveryCodes?: string[];
}

export type TwoFactorRecoveryCodesInfo = {
  flow_completed?: boolean;
  code_count?: string;
};

export type TwoFactorSecurityKeysMeta = {
  webauthn: Array<securityKeyMeta>;
};

export type securityKeyMeta = {
  custom_name: string;
  id: string;
  created: string;
  last_used: string;
};
