/**
 * zero-trust resource
 * @generated from apis/zero-trust/schema.ts
 *
 * Cloudflare's SASE platform — secure access, device posture, DLP, tunnels, gateway policies, and network segmentation
 */
import type { components } from 'cloudflare-openapi';
import { APIResource, CloudflareClient } from '../../client.js';

// Type aliases from OpenAPI components
export type DigitalExperienceMonitoringWarpEventsResponse =
  components['schemas']['digital-experience-monitoring_warp_events_response'];
export type DigitalExperienceMonitoringGetCommandsResponse =
  components['schemas']['digital-experience-monitoring_get_commands_response'];
export type DigitalExperienceMonitoringPostCommandsResponse =
  components['schemas']['digital-experience-monitoring_post_commands_response'];
export type DigitalExperienceMonitoringCommandsDevicesResponse =
  components['schemas']['digital-experience-monitoring_commands_devices_response'];
export type DigitalExperienceMonitoringGetCommandsQuotaResponse =
  components['schemas']['digital-experience-monitoring_get_commands_quota_response'];
export type DigitalExperienceMonitoringColosResponse =
  components['schemas']['digital-experience-monitoring_colos_response'];
export type DigitalExperienceMonitoringHTTPDetailsResponse =
  components['schemas']['digital-experience-monitoring_http_details_response'];
export type DigitalExperienceMonitoringHTTPDetailsPercentilesResponse =
  components['schemas']['digital-experience-monitoring_http_details_percentiles_response'];
export type DigitalExperienceMonitoringTestsResponse =
  components['schemas']['digital-experience-monitoring_tests_response'];
export type DigitalExperienceMonitoringUniqueDevicesResponse =
  components['schemas']['digital-experience-monitoring_unique_devices_response'];
export type DigitalExperienceMonitoringTracerouteTestResultNetworkPathResponse =
  components['schemas']['digital-experience-monitoring_traceroute_test_result_network_path_response'];
export type DigitalExperienceMonitoringTracerouteDetailsResponse =
  components['schemas']['digital-experience-monitoring_traceroute_details_response'];
export type DigitalExperienceMonitoringTracerouteDetailsPercentilesResponse =
  components['schemas']['digital-experience-monitoring_traceroute_details_percentiles_response'];
export type DigitalExperienceMonitoringTracerouteTestNetworkPathResponse =
  components['schemas']['digital-experience-monitoring_traceroute_test_network_path_response'];
export type DigitalExperienceMonitoringDexRule = components['schemas']['digital-experience-monitoring_dex-rule'];
export type DigitalExperienceMonitoringListRulesResponse =
  components['schemas']['digital-experience-monitoring_list_rules_response'];

/**
 * Enrolled devices, WARP client profiles, posture checks, and device-level policies
 */
export class Devices extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List WARP devices. Not supported when [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/) is enabled for the account. **Deprecated**: please use one of the following endpoints instead: - GET /accounts/{account_id}/devices/physical-devices - GET /accounts/{account_id}/devices/registrations
   *
   * @see devices-list-devices
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices`);
  }

  /**
   * Fetches a single WARP device. Not supported when [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/) is enabled for the account. **Deprecated**: please use one of the following endpoints instead: - GET /accounts/{account_id}/devices/physical-devices/{device_id} - GET /accounts/{account_id}/devices/registrations/{registration_id}
   *
   * @see devices-device-details
   */
  async get(deviceId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/${deviceId}`);
  }

  /**
   * Lists WARP devices.
   *
   * @see list-devices
   */
  async devicesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/physical-devices`, {
      query: params,
    });
  }

  /**
   * Fetches a single WARP device.
   *
   * @see get-device
   */
  async devicesGet(deviceId: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/physical-devices/${deviceId}`, {
      query: params,
    });
  }

  /**
   * Deletes a WARP device.
   *
   * @see delete-device
   */
  async devicesDelete(deviceId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/devices/physical-devices/${deviceId}`);
  }

  /**
   * Revokes all WARP registrations associated with the specified device.
   *
   * @see revoke-device
   */
  async devicesRevoke(accountId: string, deviceId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/devices/physical-devices/${deviceId}/revoke`);
  }

  /**
   * Fetch the Global WARP override state.
   *
   * @see devices-resilience-retrieve-global-warp-override
   */
  async resilienceGlobalWarpOverrideGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/resilience/disconnect`);
  }

  /**
   * Sets the Global WARP override state.
   *
   * @see devices-resilience-set-global-warp-override
   */
  async resilienceGlobalWarpOverrideCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/devices/resilience/disconnect`);
  }

  /**
   * Lists WARP registrations.
   *
   * @see list-registrations
   */
  async registrationsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/registrations`, {
      query: params,
    });
  }

  /**
   * Fetches a single WARP registration.
   *
   * @see get-registration
   */
  async registrationsGet(
    registrationId: string,
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/registrations/${registrationId}`, {
      query: params,
    });
  }

  /**
   * Deletes a WARP registration.
   *
   * @see delete-registration
   */
  async registrationsDelete(registrationId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/devices/registrations/${registrationId}`);
  }

  /**
   * Deletes a list of WARP registrations.
   *
   * @see delete-registrations
   */
  async registrationsBulkDelete(accountId: string, params?: Record<string, unknown>): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/devices/registrations`, {
      query: params,
    });
  }

  /**
   * Revokes a list of WARP registrations.
   *
   * @see revoke-registrations
   */
  async registrationsRevoke(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/devices/registrations/revoke`, {
      query: params,
    });
  }

  /**
   * Unrevokes a list of WARP registrations.
   *
   * @see unrevoke-registrations
   */
  async registrationsUnrevoke(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/devices/registrations/unrevoke`, {
      query: params,
    });
  }

  /**
   * Fetch all DEX tests
   *
   * @see device-dex-test-details
   */
  async dexTestsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dex/devices/dex_tests`, {
      query: params,
    });
  }

  /**
   * Fetch a single DEX test.
   *
   * @see device-dex-test-get-device-dex-test
   */
  async dexTestsGet(accountId: string, dexTestId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dex/devices/dex_tests/${dexTestId}`);
  }

  /**
   * Create a DEX test.
   *
   * @see device-dex-test-create-device-dex-test
   */
  async dexTestsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dex/devices/dex_tests`);
  }

  /**
   * Update a DEX test.
   *
   * @see device-dex-test-update-device-dex-test
   */
  async dexTestsUpdate(accountId: string, dexTestId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/dex/devices/dex_tests/${dexTestId}`);
  }

  /**
   * Delete a Device DEX test. Returns the remaining device dex tests for the account.
   *
   * @see device-dex-test-delete-device-dex-test
   */
  async dexTestsDelete(accountId: string, dexTestId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/dex/devices/dex_tests/${dexTestId}`);
  }

  /**
   * Lists WARP Device IP profiles.
   *
   * @see list-ip-profiles
   */
  async ipProfilesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/ip-profiles`, {
      query: params,
    });
  }

  /**
   * Fetches a single WARP Device IP profile.
   *
   * @see get-ip-profile
   */
  async ipProfilesGet(accountId: string, profileId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/ip-profiles/${profileId}`);
  }

  /**
   * Creates a WARP Device IP profile. Currently, only IPv4 Device subnets can be associated.
   *
   * @see create-ip-profile
   */
  async ipProfilesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/devices/ip-profiles`);
  }

  /**
   * Updates a WARP Device IP profile. Currently, only IPv4 Device subnets can be associated.
   *
   * @see update-ip-profile
   */
  async ipProfilesUpdate(accountId: string, profileId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/devices/ip-profiles/${profileId}`);
  }

  /**
   * Delete a WARP Device IP profile.
   *
   * @see delete-ip-profile
   */
  async ipProfilesDelete(accountId: string, profileId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/devices/ip-profiles/${profileId}`);
  }

  /**
   * Fetches a list of managed networks for an account.
   *
   * @see device-managed-networks-list-device-managed-networks
   */
  async networksList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/networks`);
  }

  /**
   * Fetches details for a single managed network.
   *
   * @see device-managed-networks-device-managed-network-details
   */
  async networksGet(networkId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/networks/${networkId}`);
  }

  /**
   * Creates a new device managed network.
   *
   * @see device-managed-networks-create-device-managed-network
   */
  async networksCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/devices/networks`);
  }

  /**
   * Updates a configured device managed network.
   *
   * @see device-managed-networks-update-device-managed-network
   */
  async networksUpdate(networkId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/devices/networks/${networkId}`);
  }

  /**
   * Deletes a device managed network and fetches a list of the remaining device managed networks for an account.
   *
   * @see device-managed-networks-delete-device-managed-network
   */
  async networksDelete(networkId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/devices/networks/${networkId}`);
  }

  /**
   * Get the live status of a latest device given device_id from the device_state table
   *
   * @see devices-live-status
   */
  async fleetStatusGet(accountId: string, deviceId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dex/devices/${deviceId}/fleet-status/live`, {
      query: params,
    });
  }

  /**
   * Fetches the default device settings profile for an account.
   *
   * @see devices-get-default-device-settings-policy
   */
  async policiesDefaultGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/policy`);
  }

  /**
   * Updates the default device settings profile for an account.
   *
   * @see devices-update-default-device-settings-policy
   */
  async policiesDefaultEdit(accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/devices/policy`);
  }

  /**
   * Fetches the list of routes excluded from the WARP client's tunnel.
   *
   * @see devices-get-split-tunnel-exclude-list
   */
  async policiesDefaultExcludesGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/policy/exclude`);
  }

  /**
   * Sets the list of routes excluded from the WARP client's tunnel.
   *
   * @see devices-set-split-tunnel-exclude-list
   */
  async policiesDefaultExcludesUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/devices/policy/exclude`);
  }

  /**
   * Fetches the list of routes included in the WARP client's tunnel.
   *
   * @see devices-get-split-tunnel-include-list
   */
  async policiesDefaultIncludesGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/policy/include`);
  }

  /**
   * Sets the list of routes included in the WARP client's tunnel.
   *
   * @see devices-set-split-tunnel-include-list
   */
  async policiesDefaultIncludesUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/devices/policy/include`);
  }

  /**
   * Fetches a list of domains to bypass Gateway DNS resolution. These domains will use the specified local DNS resolver instead.
   *
   * @see devices-get-local-domain-fallback-list
   */
  async policiesDefaultFallbackDomainsGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/policy/fallback_domains`);
  }

  /**
   * Sets the list of domains to bypass Gateway DNS resolution. These domains will use the specified local DNS resolver instead.
   *
   * @see devices-set-local-domain-fallback-list
   */
  async policiesDefaultFallbackDomainsUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/devices/policy/fallback_domains`);
  }

  /**
   * Fetches device certificate provisioning.
   *
   * @see devices-get-policy-certificates
   */
  async policiesDefaultCertificatesGet(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/devices/policy/certificates`);
  }

  /**
   * Enable Zero Trust Clients to provision a certificate, containing a x509 subject, and referenced by Access device posture policies when the client visits MTLS protected domains. This facilitates device posture without a WARP session.
   *
   * @see devices-update-policy-certificates
   */
  async policiesDefaultCertificatesEdit(zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/devices/policy/certificates`);
  }

  /**
   * Fetches a list of the device settings profiles for an account.
   *
   * @see devices-list-device-settings-policies
   */
  async policiesCustomList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/policies`);
  }

  /**
   * Fetches a device settings profile by ID.
   *
   * @see devices-get-device-settings-policy-by-id
   */
  async policiesCustomGet(policyId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/policy/${policyId}`);
  }

  /**
   * Creates a device settings profile to be applied to certain devices matching the criteria.
   *
   * @see devices-create-device-settings-policy
   */
  async policiesCustomCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/devices/policy`);
  }

  /**
   * Updates a configured device settings profile.
   *
   * @see devices-update-device-settings-policy
   */
  async policiesCustomEdit(policyId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/devices/policy/${policyId}`);
  }

  /**
   * Deletes a device settings profile and fetches a list of the remaining profiles for an account.
   *
   * @see devices-delete-device-settings-policy
   */
  async policiesCustomDelete(policyId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/devices/policy/${policyId}`);
  }

  /**
   * Fetches the list of routes excluded from the WARP client's tunnel for a specific device settings profile.
   *
   * @see devices-get-split-tunnel-exclude-list-for-a-device-settings-policy
   */
  async policiesCustomExcludesGet(policyId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/policy/${policyId}/exclude`);
  }

  /**
   * Sets the list of routes excluded from the WARP client's tunnel for a specific device settings profile.
   *
   * @see devices-set-split-tunnel-exclude-list-for-a-device-settings-policy
   */
  async policiesCustomExcludesUpdate(policyId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/devices/policy/${policyId}/exclude`);
  }

  /**
   * Fetches the list of routes included in the WARP client's tunnel for a specific device settings profile.
   *
   * @see devices-get-split-tunnel-include-list-for-a-device-settings-policy
   */
  async policiesCustomIncludesGet(policyId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/policy/${policyId}/include`);
  }

  /**
   * Sets the list of routes included in the WARP client's tunnel for a specific device settings profile.
   *
   * @see devices-set-split-tunnel-include-list-for-a-device-settings-policy
   */
  async policiesCustomIncludesUpdate(policyId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/devices/policy/${policyId}/include`);
  }

  /**
   * Fetches the list of domains to bypass Gateway DNS resolution from a specified device settings profile. These domains will use the specified local DNS resolver instead.
   *
   * @see devices-get-local-domain-fallback-list-for-a-device-settings-policy
   */
  async policiesCustomFallbackDomainsGet(policyId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/policy/${policyId}/fallback_domains`);
  }

  /**
   * Sets the list of domains to bypass Gateway DNS resolution. These domains will use the specified local DNS resolver instead. This will only apply to the specified device settings profile.
   *
   * @see devices-set-local-domain-fallback-list-for-a-device-settings-policy
   */
  async policiesCustomFallbackDomainsUpdate(policyId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/devices/policy/${policyId}/fallback_domains`);
  }

  /**
   * Fetches device posture rules for a Zero Trust account.
   *
   * @see device-posture-rules-list-device-posture-rules
   */
  async postureList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/posture`);
  }

  /**
   * Fetches a single device posture rule.
   *
   * @see device-posture-rules-device-posture-rules-details
   */
  async postureGet(ruleId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/posture/${ruleId}`);
  }

  /**
   * Creates a new device posture rule.
   *
   * @see device-posture-rules-create-device-posture-rule
   */
  async postureCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/devices/posture`);
  }

  /**
   * Updates a device posture rule.
   *
   * @see device-posture-rules-update-device-posture-rule
   */
  async postureUpdate(ruleId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/devices/posture/${ruleId}`);
  }

  /**
   * Deletes a device posture rule.
   *
   * @see device-posture-rules-delete-device-posture-rule
   */
  async postureDelete(ruleId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/devices/posture/${ruleId}`);
  }

  /**
   * Fetches the list of device posture integrations for an account.
   *
   * @see device-posture-integrations-list-device-posture-integrations
   */
  async postureIntegrationsList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/posture/integration`);
  }

  /**
   * Fetches details for a single device posture integration.
   *
   * @see device-posture-integrations-device-posture-integration-details
   */
  async postureIntegrationsGet(integrationId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/posture/integration/${integrationId}`);
  }

  /**
   * Create a new device posture integration.
   *
   * @see device-posture-integrations-create-device-posture-integration
   */
  async postureIntegrationsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/devices/posture/integration`);
  }

  /**
   * Updates a configured device posture integration.
   *
   * @see device-posture-integrations-update-device-posture-integration
   */
  async postureIntegrationsEdit(integrationId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/devices/posture/integration/${integrationId}`);
  }

  /**
   * Delete a configured device posture integration.
   *
   * @see device-posture-integrations-delete-device-posture-integration
   */
  async postureIntegrationsDelete(integrationId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/devices/posture/integration/${integrationId}`);
  }

  /**
   * Revokes a list of devices. Not supported when [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/) is enabled. **Deprecated**: please use POST /accounts/{account_id}/devices/registrations/revoke instead.
   *
   * @see devices-revoke-devices
   */
  async revokeCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/devices/revoke`);
  }

  /**
   * Describes the current device settings for a Zero Trust account.
   *
   * @see zero-trust-accounts-get-device-settings-for-zero-trust-account
   */
  async settingsGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/settings`);
  }

  /**
   * Updates the current device settings for a Zero Trust account.
   *
   * @see zero-trust-accounts-update-device-settings-for-the-zero-trust-account
   */
  async settingsUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/devices/settings`);
  }

  /**
   * Patches the current device settings for a Zero Trust account.
   *
   * @see zero-trust-accounts-patch-device-settings-for-the-zero-trust-account
   */
  async settingsEdit(accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/devices/settings`);
  }

  /**
   * Resets the current device settings for a Zero Trust account.
   *
   * @see zero-trust-accounts-delete-device-settings-for-zero-trust-account
   */
  async settingsDelete(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/devices/settings`);
  }

  /**
   * Unrevokes a list of devices. Not supported when [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/) is enabled. **Deprecated**: please use POST /accounts/{account_id}/devices/registrations/unrevoke instead.
   *
   * @see devices-unrevoke-devices
   */
  async unrevokeCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/devices/unrevoke`);
  }

  /**
   * Fetches a one-time use admin override code for a device. This relies on the **Admin Override** setting being enabled in your device configuration. Not supported when [multi-user mode](https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/deployment/mdm-deployment/windows-multiuser/) is enabled for the account. **Deprecated:** please use GET /accounts/{account_id}/devices/registrations/{registration_id}/override_codes instead.
   *
   * @see devices-list-admin-override-code-for-device
   */
  async overrideCodesList(deviceId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/${deviceId}/override_codes`);
  }

  /**
   * Fetches one-time use admin override codes for a registration. This relies on the **Admin Override** setting being enabled in your device configuration.
   *
   * @see get-registration-override-codes
   */
  async overrideCodesGet(accountId: string, registrationId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/registrations/${registrationId}/override_codes`);
  }

  /**
   * Lists all deployment groups for an account. Use deployment groups to assign target WARP client versions to specific devices. This endpoint is in Beta.
   *
   * @see list-deployment-groups
   */
  async deploymentGroupsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/deployment-groups`, {
      query: params,
    });
  }

  /**
   * Creates a new deployment group. Policy IDs must be unique across all deployment groups. This endpoint is in Beta.
   *
   * @see create-deployment-group
   */
  async deploymentGroupsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/devices/deployment-groups`);
  }

  /**
   * Fetches a single deployment group by its ID. This endpoint is in Beta.
   *
   * @see get-deployment-group
   */
  async deploymentGroupsGet(accountId: string, groupId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/deployment-groups/${groupId}`);
  }

  /**
   * Updates a deployment group. Returns 409 if any newly added policy IDs already belong to another deployment group. This endpoint is in Beta.
   *
   * @see update-deployment-group
   */
  async deploymentGroupsUpdate(accountId: string, groupId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/devices/deployment-groups/${groupId}`);
  }

  /**
   * Deletes a deployment group. Associated policies no longer apply and devices stop receiving version targets. This endpoint is in Beta.
   *
   * @see delete-deployment-group
   */
  async deploymentGroupsDelete(accountId: string, groupId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/devices/deployment-groups/${groupId}`);
  }

  /**
   * Lists available WARP client versions for a specific target environment and release track. This endpoint is in Beta.
   *
   * @see list-client-versions
   */
  async clientVersionsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/client-versions`, {
      query: params,
    });
  }

  /**
   * Retrieves a list of all available target environments with their display names. This endpoint is in Beta.
   *
   * @see list-client-target-environments
   */
  async clientTargetEnvironmentsList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/devices/client-versions/target-environments`);
  }
}

/**
 * Identity provider integrations (Okta, Azure AD, etc.) used to authenticate users in Access
 */
export class IdentityProviders extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all configured identity providers.
   *
   * @see access-identity-providers-list-access-identity-providers
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/identity_providers`, {
      query: params,
    });
  }

  /**
   * Fetches a configured identity provider.
   *
   * @see access-identity-providers-get-an-access-identity-provider
   */
  async get(identityProviderId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/identity_providers/${identityProviderId}`);
  }

  /**
   * Adds a new identity provider to Access.
   *
   * @see access-identity-providers-add-an-access-identity-provider
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/identity_providers`);
  }

  /**
   * Updates a configured identity provider.
   *
   * @see access-identity-providers-update-an-access-identity-provider
   */
  async update(identityProviderId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/identity_providers/${identityProviderId}`);
  }

  /**
   * Deletes an identity provider from Access.
   *
   * @see access-identity-providers-delete-an-access-identity-provider
   */
  async delete(identityProviderId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/identity_providers/${identityProviderId}`);
  }

  /**
   * Lists SCIM Group resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).
   *
   * @see access-identity-providers-list-scim-group-resources
   */
  async scimGroupsList(
    identityProviderId: string,
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/access/identity_providers/${identityProviderId}/scim/groups`,
      {
        query: params,
      },
    );
  }

  /**
   * Lists SCIM User resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).
   *
   * @see access-identity-providers-list-scim-user-resources
   */
  async scimUsersList(
    identityProviderId: string,
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(
      `/accounts/${accountId}/access/identity_providers/${identityProviderId}/scim/users`,
      {
        query: params,
      },
    );
  }
}

/**
 * Zero Trust organization settings including login page, session duration, and user seat management
 */
export class Organizations extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the configuration for your Zero Trust organization.
   *
   * @see zero-trust-organization-get-your-zero-trust-organization
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/organizations`);
  }

  /**
   * Sets up a Zero Trust organization for your account.
   *
   * @see zero-trust-organization-create-your-zero-trust-organization
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/organizations`);
  }

  /**
   * Updates the configuration for your Zero Trust organization.
   *
   * @see zero-trust-organization-update-your-zero-trust-organization
   */
  async update(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/organizations`);
  }

  /**
   * Revokes a user's access across all applications.
   *
   * @see zero-trust-organization-revoke-all-access-tokens-for-a-user
   */
  async revokeUsers(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/organizations/revoke_user`, {
      body: { ...params },
    });
  }

  /**
   * Returns the DoH settings for your Zero Trust organization.
   *
   * @see zero-trust-organization-get-your-zero-trust-organization-doh-settings
   */
  async dohGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/organizations/doh`);
  }

  /**
   * Updates the DoH settings for your Zero Trust organization.
   *
   * @see zero-trust-organization-update-your-zero-trust-organization-doh-settings
   */
  async dohUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/organizations/doh`);
  }
}

/**
 * View and manage user seat allocations for your Zero Trust subscription
 */
export class Seats extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat` are set to false.
   *
   * @see zero-trust-seats-update-a-user-seat
   */
  async edit(accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/access/seats`);
  }
}

/**
 * Access applications, policies, certificates, service tokens, groups, bookmarks, tags, and custom pages
 */
export class Access extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all MCP portals configured for the account.
   *
   * @see mcp-portals-api-list-portals
   */
  async aiControlsMcpPortalsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/ai-controls/mcp/portals`, {
      query: params,
    });
  }

  /**
   * Creates a new MCP portal for managing AI tool access through Cloudflare Access.
   *
   * @see mcp-portals-api-create-portals
   */
  async aiControlsMcpPortalsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/ai-controls/mcp/portals`);
  }

  /**
   * Retrieves gateway configuration for MCP portals.
   *
   * @see mcp-portals-api-fetch-gateways
   */
  async aiControlsMcpPortalsRead(id: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/ai-controls/mcp/portals/${id}`);
  }

  /**
   * Updates an MCP portal configuration.
   *
   * @see mcp-portals-api-update-portals
   */
  async aiControlsMcpPortalsUpdate(id: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/ai-controls/mcp/portals/${id}`);
  }

  /**
   * Deletes an MCP portal from the account.
   *
   * @see mcp-portals-api-delete-portals
   */
  async aiControlsMcpPortalsDelete(accountId: string, id: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/ai-controls/mcp/portals/${id}`);
  }

  /**
   * Lists all MCP portals configured for the account.
   *
   * @see mcp-portals-api-list-servers
   */
  async aiControlsMcpServersList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/ai-controls/mcp/servers`, {
      query: params,
    });
  }

  /**
   * Creates a new MCP portal for managing AI tool access through Cloudflare Access.
   *
   * @see mcp-portals-api-create-servers
   */
  async aiControlsMcpServersCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/ai-controls/mcp/servers`);
  }

  /**
   * Retrieves gateway configuration for MCP portals.
   *
   * @see mcp-portals-api-fetch-servers
   */
  async aiControlsMcpServersRead(accountId: string, id: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/ai-controls/mcp/servers/${id}`);
  }

  /**
   * Updates an MCP portal configuration.
   *
   * @see mcp-portals-api-update-servers
   */
  async aiControlsMcpServersUpdate(id: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/ai-controls/mcp/servers/${id}`);
  }

  /**
   * Deletes an MCP portal from the account.
   *
   * @see mcp-portals-api-delete-servers
   */
  async aiControlsMcpServersDelete(accountId: string, id: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/ai-controls/mcp/servers/${id}`);
  }

  /**
   * Syncs an MCP server's tool catalog with the portal.
   *
   * @see mcp-portals-api-sync-server
   */
  async aiControlsMcpServersSync(id: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/ai-controls/mcp/servers/${id}/sync`);
  }

  /**
   * Lists SSH Certificate Authorities (CA).
   *
   * @see access-gateway-ca-list-SSH-ca
   */
  async gatewayCaList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/gateway_ca`);
  }

  /**
   * Adds a new SSH Certificate Authority (CA).
   *
   * @see access-gateway-ca-add-an-SSH-ca
   */
  async gatewayCaCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/gateway_ca`);
  }

  /**
   * Deletes an SSH Certificate Authority.
   *
   * @see access-gateway-ca-delete-an-SSH-ca
   */
  async gatewayCaDelete(certificateId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/gateway_ca/${certificateId}`);
  }

  /**
   * Lists and sorts an account’s targets. Filters are optional and are ANDed together.
   *
   * @see infra-targets-list
   */
  async infrastructureTargetsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/infrastructure/targets`, {
      query: params,
    });
  }

  /**
   * Retrieves details for a specific infrastructure access target, including its hostname, IP, and access configuration.
   *
   * @see infra-targets-get
   */
  async infrastructureTargetsGet(accountId: string, targetId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/infrastructure/targets/${targetId}`);
  }

  /**
   * Creates a new infrastructure access target for secure access through Cloudflare Access. Targets can be servers, databases, or other infrastructure.
   *
   * @see infra-targets-post
   */
  async infrastructureTargetsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/infrastructure/targets`);
  }

  /**
   * Updates an existing infrastructure access target's configuration, including connection parameters and access policies.
   *
   * @see infra-targets-put
   */
  async infrastructureTargetsUpdate(accountId: string, targetId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/infrastructure/targets/${targetId}`);
  }

  /**
   * Removes an infrastructure access target. The target will no longer be accessible through Cloudflare Access.
   *
   * @see infra-targets-delete
   */
  async infrastructureTargetsDelete(accountId: string, targetId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/infrastructure/targets/${targetId}`);
  }

  /**
   * Adds one or more targets.
   *
   * @see infra-targets-put-batch
   */
  async infrastructureTargetsBulkUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/infrastructure/targets/batch`);
  }

  /**
   * Removes one or more targets.
   *
   * @see infra-targets-delete-batch
   */
  async infrastructureTargetsBulkDelete(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/infrastructure/targets/batch`);
  }

  /**
   * Removes one or more targets.
   *
   * @see infra-targets-delete-batch-post
   */
  async infrastructureTargetsBulkDeleteV2(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/infrastructure/targets/batch_delete`);
  }

  /**
   * Lists all Access applications in an account.
   *
   * @see access-applications-list-access-applications
   */
  async applicationsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/apps`, {
      query: params,
    });
  }

  /**
   * Fetches information about an Access application.
   *
   * @see access-applications-get-an-access-application
   */
  async applicationsGet(appId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/apps/${appId}`);
  }

  /**
   * Adds a new application to Access.
   *
   * @see access-applications-add-an-application
   */
  async applicationsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/apps`);
  }

  /**
   * Updates an Access application.
   *
   * @see access-applications-update-an-access-application
   */
  async applicationsUpdate(appId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/apps/${appId}`);
  }

  /**
   * Deletes an application from Access.
   *
   * @see access-applications-delete-an-access-application
   */
  async applicationsDelete(appId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/apps/${appId}`);
  }

  /**
   * Revokes all tokens issued for an application.
   *
   * @see access-applications-revoke-service-tokens
   */
  async applicationsRevokeTokens(appId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/apps/${appId}/revoke_tokens`);
  }

  /**
   * Lists short-lived certificate CAs and their public keys.
   *
   * @see access-short-lived-certificate-c-as-list-short-lived-certificate-c-as
   */
  async applicationsCasList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/apps/ca`, {
      query: params,
    });
  }

  /**
   * Fetches a short-lived certificate CA and its public key.
   *
   * @see access-short-lived-certificate-c-as-get-a-short-lived-certificate-ca
   */
  async applicationsCasGet(appId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/apps/${appId}/ca`);
  }

  /**
   * Generates a new short-lived certificate CA and public key.
   *
   * @see access-short-lived-certificate-c-as-create-a-short-lived-certificate-ca
   */
  async applicationsCasCreate(appId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/apps/${appId}/ca`);
  }

  /**
   * Deletes a short-lived certificate CA.
   *
   * @see access-short-lived-certificate-c-as-delete-a-short-lived-certificate-ca
   */
  async applicationsCasDelete(appId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/apps/${appId}/ca`);
  }

  /**
   * Tests if a specific user has permission to access an application.
   *
   * @see access-applications-test-access-policies
   */
  async applicationsUserPolicyChecksList(appId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/apps/${appId}/user_policy_checks`);
  }

  /**
   * Lists Access policies configured for an application. Returns both exclusively scoped and reusable policies used by the application.
   *
   * @see access-policies-list-access-app-policies
   */
  async applicationsPoliciesList(appId: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/apps/${appId}/policies`, {
      query: params,
    });
  }

  /**
   * Fetches a single Access policy configured for an application. Returns both exclusively owned and reusable policies used by the application.
   *
   * @see access-policies-get-an-access-policy
   */
  async applicationsPoliciesGet(appId: string, policyId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/apps/${appId}/policies/${policyId}`);
  }

  /**
   * Creates a policy applying exclusive to a single application that defines the users or groups who can reach it. We recommend creating a reusable policy instead and subsequently referencing its ID in the application's 'policies' array.
   *
   * @see access-policies-create-an-access-policy
   */
  async applicationsPoliciesCreate(appId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/apps/${appId}/policies`);
  }

  /**
   * Updates an Access policy specific to an application. To update a reusable policy, use the /accounts/{account_id}/policies/{uid} endpoint.
   *
   * @see access-policies-update-an-access-policy
   */
  async applicationsPoliciesUpdate(appId: string, policyId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/apps/${appId}/policies/${policyId}`);
  }

  /**
   * Deletes an Access policy specific to an application. To delete a reusable policy, use the /accounts/{account_id}/policies/{uid} endpoint.
   *
   * @see access-policies-delete-an-access-policy
   */
  async applicationsPoliciesDelete(appId: string, policyId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/apps/${appId}/policies/${policyId}`);
  }

  /**
   * Fetches the current status of a given Access policy test.
   *
   * @see access-policy-tests-get-an-update
   */
  async applicationsPolicyTestsGet(accountId: string, policyTestId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/policy-tests/${policyTestId}`);
  }

  /**
   * Starts an Access policy test.
   *
   * @see access-policy-tests
   */
  async applicationsPolicyTestsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/policy-tests`);
  }

  /**
   * Fetches a single page of user results from an Access policy test.
   *
   * @see access-policy-tests-get-a-user-page
   */
  async applicationsPolicyTestsUsersList(
    accountId: string,
    policyTestId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/policy-tests/${policyTestId}/users`, {
      query: params,
    });
  }

  /**
   * Updates Access application settings.
   *
   * @see access-applications-put-update-access-application-settings
   */
  async applicationsSettingsUpdate(appId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/apps/${appId}/settings`);
  }

  /**
   * Updates Access application settings.
   *
   * @see access-applications-patch-update-access-application-settings
   */
  async applicationsSettingsEdit(appId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/access/apps/${appId}/settings`);
  }

  /**
   * Lists all mTLS root certificates.
   *
   * @see access-mtls-authentication-list-mtls-certificates
   */
  async certificatesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/certificates`, {
      query: params,
    });
  }

  /**
   * Fetches a single mTLS certificate.
   *
   * @see access-mtls-authentication-get-an-mtls-certificate
   */
  async certificatesGet(certificateId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/certificates/${certificateId}`);
  }

  /**
   * Adds a new mTLS root certificate to Access.
   *
   * @see access-mtls-authentication-add-an-mtls-certificate
   */
  async certificatesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/certificates`);
  }

  /**
   * Updates a configured mTLS certificate.
   *
   * @see access-mtls-authentication-update-an-mtls-certificate
   */
  async certificatesUpdate(certificateId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/certificates/${certificateId}`);
  }

  /**
   * Deletes an mTLS certificate.
   *
   * @see access-mtls-authentication-delete-an-mtls-certificate
   */
  async certificatesDelete(certificateId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/certificates/${certificateId}`);
  }

  /**
   * List all mTLS hostname settings for this account.
   *
   * @see access-mtls-authentication-list-mtls-certificates-hostname-settings
   */
  async certificatesSettingsGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/certificates/settings`);
  }

  /**
   * Updates an mTLS certificate's hostname settings.
   *
   * @see access-mtls-authentication-update-an-mtls-certificate-settings
   */
  async certificatesSettingsUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/certificates/settings`);
  }

  /**
   * Lists all Access groups.
   *
   * @see access-groups-list-access-groups
   */
  async groupsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/groups`, {
      query: params,
    });
  }

  /**
   * Fetches a single Access group.
   *
   * @see access-groups-get-an-access-group
   */
  async groupsGet(groupId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/groups/${groupId}`);
  }

  /**
   * Creates a new Access group.
   *
   * @see access-groups-create-an-access-group
   */
  async groupsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/groups`);
  }

  /**
   * Updates a configured Access group.
   *
   * @see access-groups-update-an-access-group
   */
  async groupsUpdate(groupId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/groups/${groupId}`);
  }

  /**
   * Deletes an Access group.
   *
   * @see access-groups-delete-an-access-group
   */
  async groupsDelete(groupId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/groups/${groupId}`);
  }

  /**
   * Lists all service tokens.
   *
   * @see access-service-tokens-list-service-tokens
   */
  async serviceTokensList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/service_tokens`, {
      query: params,
    });
  }

  /**
   * Fetches a single service token.
   *
   * @see access-service-tokens-get-a-service-token
   */
  async serviceTokensGet(serviceTokenId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/service_tokens/${serviceTokenId}`);
  }

  /**
   * Generates a new service token. **Note:** This is the only time you can get the Client Secret. If you lose the Client Secret, you will have to rotate the Client Secret or create a new service token.
   *
   * @see access-service-tokens-create-a-service-token
   */
  async serviceTokensCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/service_tokens`);
  }

  /**
   * Updates a configured service token.
   *
   * @see access-service-tokens-update-a-service-token
   */
  async serviceTokensUpdate(serviceTokenId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/service_tokens/${serviceTokenId}`);
  }

  /**
   * Deletes a service token.
   *
   * @see access-service-tokens-delete-a-service-token
   */
  async serviceTokensDelete(serviceTokenId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/service_tokens/${serviceTokenId}`);
  }

  /**
   * Refreshes the expiration of a service token.
   *
   * @see access-service-tokens-refresh-a-service-token
   */
  async serviceTokensRefresh(serviceTokenId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/service_tokens/${serviceTokenId}/refresh`);
  }

  /**
   * Generates a new Client Secret for a service token and revokes the old one.
   *
   * @see access-service-tokens-rotate-a-service-token
   */
  async serviceTokensRotate(serviceTokenId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/service_tokens/${serviceTokenId}/rotate`);
  }

  /**
   * Lists Bookmark applications.
   *
   * @see access-bookmark-applications-(-deprecated)-list-bookmark-applications
   */
  async bookmarksList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/bookmarks`);
  }

  /**
   * Fetches a single Bookmark application.
   *
   * @see access-bookmark-applications-(-deprecated)-get-a-bookmark-application
   */
  async bookmarksGet(bookmarkId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/bookmarks/${bookmarkId}`);
  }

  /**
   * Create a new Bookmark application.
   *
   * @see access-bookmark-applications-(-deprecated)-create-a-bookmark-application
   */
  async bookmarksCreate(bookmarkId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/bookmarks/${bookmarkId}`);
  }

  /**
   * Updates a configured Bookmark application.
   *
   * @see access-bookmark-applications-(-deprecated)-update-a-bookmark-application
   */
  async bookmarksUpdate(bookmarkId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/bookmarks/${bookmarkId}`);
  }

  /**
   * Deletes a Bookmark application.
   *
   * @see access-bookmark-applications-(-deprecated)-delete-a-bookmark-application
   */
  async bookmarksDelete(bookmarkId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/bookmarks/${bookmarkId}`);
  }

  /**
   * Gets the Access key rotation settings for an account.
   *
   * @see access-key-configuration-get-the-access-key-configuration
   */
  async keysGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/keys`);
  }

  /**
   * Updates the Access key rotation settings for an account.
   *
   * @see access-key-configuration-update-the-access-key-configuration
   */
  async keysUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/keys`);
  }

  /**
   * Perfoms a key rotation for an account.
   *
   * @see access-key-configuration-rotate-access-keys
   */
  async keysRotate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/keys/rotate`);
  }

  /**
   * Gets a list of Access authentication audit logs for an account.
   *
   * @see access-authentication-logs-get-access-authentication-logs
   */
  async logsAccessRequestsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/logs/access_requests`, {
      query: params,
    });
  }

  /**
   * Lists Access SCIM update logs that maintain a record of updates made to User and Group resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).
   *
   * @see access-scim-update-logs-list-access-scim-update-logs
   */
  async logsScimUpdatesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/logs/scim/updates`, {
      query: params,
    });
  }

  /**
   * Gets a list of users for an account.
   *
   * @see zero-trust-users-get-users
   */
  async usersList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/users`, {
      query: params,
    });
  }

  /**
   * Gets a specific user for an account.
   *
   * @see zero-trust-users-get-user
   */
  async usersGet(userId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/users/${userId}`);
  }

  /**
   * Creates a new user.
   *
   * @see zero-trust-users-create-user
   */
  async usersCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/users`);
  }

  /**
   * Updates a specific user's name for an account. Requires the user's current email as confirmation (email cannot be changed).
   *
   * @see zero-trust-users-update-user
   */
  async usersUpdate(userId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/users/${userId}`);
  }

  /**
   * Deletes a specific user for an account. This will also revoke any active seats and tokens for the user.
   *
   * @see zero-trust-users-delete-user
   */
  async usersDelete(userId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/users/${userId}`);
  }

  /**
   * Get active sessions for a single user.
   *
   * @see zero-trust-users-get-active-sessions
   */
  async usersActiveSessionsList(userId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/users/${userId}/active_sessions`);
  }

  /**
   * Get an active session for a single user.
   *
   * @see zero-trust-users-get-active-session
   */
  async usersActiveSessionsGet(userId: string, accountId: string, nonce: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/users/${userId}/active_sessions/${nonce}`);
  }

  /**
   * Get last seen identity for a single user.
   *
   * @see zero-trust-users-get-last-seen-identity
   */
  async usersLastSeenIdentityGet(userId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/users/${userId}/last_seen_identity`);
  }

  /**
   * Get all failed login attempts for a single user.
   *
   * @see zero-trust-users-get-failed-logins
   */
  async usersFailedLoginsList(userId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/users/${userId}/failed_logins`);
  }

  /**
   * List custom pages
   *
   * @see access-custom-pages-list-custom-pages
   */
  async customPagesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/custom_pages`, {
      query: params,
    });
  }

  /**
   * Fetches a custom page and also returns its HTML.
   *
   * @see access-custom-pages-get-a-custom-page
   */
  async customPagesGet(customPageId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/custom_pages/${customPageId}`);
  }

  /**
   * Create a custom page
   *
   * @see access-custom-pages-create-a-custom-page
   */
  async customPagesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/custom_pages`);
  }

  /**
   * Update a custom page
   *
   * @see access-custom-pages-update-a-custom-page
   */
  async customPagesUpdate(customPageId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/custom_pages/${customPageId}`);
  }

  /**
   * Delete a custom page
   *
   * @see access-custom-pages-delete-a-custom-page
   */
  async customPagesDelete(customPageId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/custom_pages/${customPageId}`);
  }

  /**
   * List tags
   *
   * @see access-tags-list-tags
   */
  async tagsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/tags`, {
      query: params,
    });
  }

  /**
   * Get a tag
   *
   * @see access-tags-get-a-tag
   */
  async tagsGet(accountId: string, tagName: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/tags/${tagName}`);
  }

  /**
   * Create a tag
   *
   * @see access-tags-create-tag
   */
  async tagsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/tags`);
  }

  /**
   * Update a tag
   *
   * @see access-tags-update-a-tag
   */
  async tagsUpdate(accountId: string, tagName: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/tags/${tagName}`);
  }

  /**
   * Delete a tag
   *
   * @see access-tags-delete-a-tag
   */
  async tagsDelete(accountId: string, tagName: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/tags/${tagName}`);
  }

  /**
   * Lists Access reusable policies.
   *
   * @see access-policies-list-access-reusable-policies
   */
  async policiesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/policies`, {
      query: params,
    });
  }

  /**
   * Fetches a single Access reusable policy.
   *
   * @see access-policies-get-an-access-reusable-policy
   */
  async policiesGet(accountId: string, policyId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/access/policies/${policyId}`);
  }

  /**
   * Creates a new Access reusable policy.
   *
   * @see access-policies-create-an-access-reusable-policy
   */
  async policiesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/access/policies`);
  }

  /**
   * Updates a Access reusable policy.
   *
   * @see access-policies-update-an-access-reusable-policy
   */
  async policiesUpdate(accountId: string, policyId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/policies/${policyId}`);
  }

  /**
   * Deletes an Access reusable policy.
   *
   * @see access-policies-delete-an-access-reusable-policy
   */
  async policiesDelete(accountId: string, policyId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/access/policies/${policyId}`);
  }
}

/**
 * Digital Experience Monitoring — synthetic tests, fleet-wide device metrics, and network path diagnostics
 */
export class Dex extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * List WARP configuration and enablement toggle change events by device.
   *
   * @see list-warp-change-events
   */
  async warpChangeEventsGet(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['digital-experience-monitoring_warp_events_response']> {
    return this._client.get<components['schemas']['digital-experience-monitoring_warp_events_response']>(
      `/accounts/${accountId}/dex/warp-change-events`,
      {
        query: params,
      },
    );
  }

  /**
   * Retrieves a paginated list of commands issued to devices under the specified account, optionally filtered by time range, device, or other parameters
   *
   * @see get-commands
   */
  async commandsList(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['digital-experience-monitoring_get_commands_response']> {
    return this._client.get<components['schemas']['digital-experience-monitoring_get_commands_response']>(
      `/accounts/${accountId}/dex/commands`,
      {
        query: params,
      },
    );
  }

  /**
   * Initiate commands for up to 10 devices per account
   *
   * @see post-commands
   */
  async commandsCreate(
    accountId: string,
  ): Promise<components['schemas']['digital-experience-monitoring_post_commands_response']> {
    return this._client.post<components['schemas']['digital-experience-monitoring_post_commands_response']>(
      `/accounts/${accountId}/dex/commands`,
    );
  }

  /**
   * List devices with WARP client support for remote captures which have been connected in the last 1 hour.
   *
   * @see get-commands-eligible-devices
   */
  async commandsDevicesList(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['digital-experience-monitoring_commands_devices_response']> {
    return this._client.get<components['schemas']['digital-experience-monitoring_commands_devices_response']>(
      `/accounts/${accountId}/dex/commands/devices`,
      {
        query: params,
      },
    );
  }

  /**
   * Downloads artifacts for an executed command. Bulk downloads are not supported
   *
   * @see get-commands-command-id-downloads-filename
   */
  async commandsDownloadsGet(accountId: string, commandId: string, filename: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dex/commands/${commandId}/downloads/${filename}`);
  }

  /**
   * Retrieves the current quota usage and limits for device commands within a specific account, including the time when the quota will reset
   *
   * @see get-commands-quota
   */
  async commandsQuotaGet(
    accountId: string,
  ): Promise<components['schemas']['digital-experience-monitoring_get_commands_quota_response']> {
    return this._client.get<components['schemas']['digital-experience-monitoring_get_commands_quota_response']>(
      `/accounts/${accountId}/dex/commands/quota`,
    );
  }

  /**
   * List Cloudflare colos that account's devices were connected to during a time period, sorted by usage starting from the most used colo. Colos without traffic are also returned and sorted alphabetically.
   *
   * @see dex-endpoints-list-colos
   */
  async colosList(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['digital-experience-monitoring_colos_response']> {
    return this._client.get<components['schemas']['digital-experience-monitoring_colos_response']>(
      `/accounts/${accountId}/dex/colos`,
      {
        query: params,
      },
    );
  }

  /**
   * List details for live (up to 60 minutes) devices using WARP
   *
   * @see dex-fleet-status-live
   */
  async fleetStatusLive(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dex/fleet-status/live`, {
      query: params,
    });
  }

  /**
   * List details for devices using WARP, up to 7 days
   *
   * @see dex-fleet-status-over-time
   */
  async fleetStatusOverTime(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dex/fleet-status/over-time`, {
      query: params,
    });
  }

  /**
   * List details for devices using WARP
   *
   * @see dex-fleet-status-devices
   */
  async fleetStatusDevicesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dex/fleet-status/devices`, {
      query: params,
    });
  }

  /**
   * Get test details and aggregate performance metrics for an http test for a given time period between 1 hour and 7 days.
   *
   * @see dex-endpoints-http-test-details
   */
  async httpTestsGet(
    accountId: string,
    testId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['digital-experience-monitoring_http_details_response']> {
    return this._client.get<components['schemas']['digital-experience-monitoring_http_details_response']>(
      `/accounts/${accountId}/dex/http-tests/${testId}`,
      {
        query: params,
      },
    );
  }

  /**
   * Get percentiles for an http test for a given time period between 1 hour and 7 days.
   *
   * @see dex-endpoints-http-test-percentiles
   */
  async httpTestsPercentilesGet(
    accountId: string,
    testId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['digital-experience-monitoring_http_details_percentiles_response']> {
    return this._client.get<components['schemas']['digital-experience-monitoring_http_details_percentiles_response']>(
      `/accounts/${accountId}/dex/http-tests/${testId}/percentiles`,
      {
        query: params,
      },
    );
  }

  /**
   * List DEX tests with overview metrics
   *
   * @see dex-endpoints-list-tests-overview
   */
  async testsList(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['digital-experience-monitoring_tests_response']> {
    return this._client.get<components['schemas']['digital-experience-monitoring_tests_response']>(
      `/accounts/${accountId}/dex/tests/overview`,
      {
        query: params,
      },
    );
  }

  /**
   * Returns unique count of devices that have run synthetic application monitoring tests in the past 7 days.
   *
   * @see dex-endpoints-tests-unique-devices
   */
  async testsUniqueDevicesList(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['digital-experience-monitoring_unique_devices_response']> {
    return this._client.get<components['schemas']['digital-experience-monitoring_unique_devices_response']>(
      `/accounts/${accountId}/dex/tests/unique-devices`,
      {
        query: params,
      },
    );
  }

  /**
   * Get a breakdown of hops and performance metrics for a specific traceroute test run
   *
   * @see dex-endpoints-traceroute-test-result-network-path
   */
  async tracerouteTestResultsNetworkPathGet(
    accountId: string,
    testResultId: string,
  ): Promise<components['schemas']['digital-experience-monitoring_traceroute_test_result_network_path_response']> {
    return this._client.get<
      components['schemas']['digital-experience-monitoring_traceroute_test_result_network_path_response']
    >(`/accounts/${accountId}/dex/traceroute-test-results/${testResultId}/network-path`);
  }

  /**
   * Get test details and aggregate performance metrics for an traceroute test for a given time period between 1 hour and 7 days.
   *
   * @see dex-endpoints-traceroute-test-details
   */
  async tracerouteTestsGet(
    accountId: string,
    testId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['digital-experience-monitoring_traceroute_details_response']> {
    return this._client.get<components['schemas']['digital-experience-monitoring_traceroute_details_response']>(
      `/accounts/${accountId}/dex/traceroute-tests/${testId}`,
      {
        query: params,
      },
    );
  }

  /**
   * Get percentiles for a traceroute test for a given time period between 1 hour and 7 days.
   *
   * @see dex-endpoints-traceroute-test-percentiles
   */
  async tracerouteTestsPercentiles(
    accountId: string,
    testId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['digital-experience-monitoring_traceroute_details_percentiles_response']> {
    return this._client.get<
      components['schemas']['digital-experience-monitoring_traceroute_details_percentiles_response']
    >(`/accounts/${accountId}/dex/traceroute-tests/${testId}/percentiles`, {
      query: params,
    });
  }

  /**
   * Get a breakdown of metrics by hop for individual traceroute test runs
   *
   * @see dex-endpoints-traceroute-test-network-path
   */
  async tracerouteTestsNetworkPath(
    accountId: string,
    testId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['digital-experience-monitoring_traceroute_test_network_path_response']> {
    return this._client.get<
      components['schemas']['digital-experience-monitoring_traceroute_test_network_path_response']
    >(`/accounts/${accountId}/dex/traceroute-tests/${testId}/network-path`, {
      query: params,
    });
  }

  /**
   * Get details for a DEX Rule
   *
   * @see get-dex-rule
   */
  async rulesGet(
    accountId: string,
    ruleId: string,
  ): Promise<components['schemas']['digital-experience-monitoring_dex-rule']> {
    return this._client.get<components['schemas']['digital-experience-monitoring_dex-rule']>(
      `/accounts/${accountId}/dex/rules/${ruleId}`,
    );
  }

  /**
   * Delete a DEX Rule
   *
   * @see delete-dex-rule
   */
  async rulesDelete(accountId: string, ruleId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/dex/rules/${ruleId}`);
  }

  /**
   * Update a DEX Rule
   *
   * @see update-dex-rule
   */
  async rulesUpdate(
    accountId: string,
    ruleId: string,
  ): Promise<components['schemas']['digital-experience-monitoring_dex-rule']> {
    return this._client.patch<components['schemas']['digital-experience-monitoring_dex-rule']>(
      `/accounts/${accountId}/dex/rules/${ruleId}`,
    );
  }

  /**
   * Create a DEX Rule
   *
   * @see create-dex-rule
   */
  async rulesCreate(accountId: string): Promise<components['schemas']['digital-experience-monitoring_dex-rule']> {
    return this._client.post<components['schemas']['digital-experience-monitoring_dex-rule']>(
      `/accounts/${accountId}/dex/rules`,
    );
  }

  /**
   * List DEX Rules
   *
   * @see list-dex-rules
   */
  async rulesList(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<components['schemas']['digital-experience-monitoring_list_rules_response']> {
    return this._client.get<components['schemas']['digital-experience-monitoring_list_rules_response']>(
      `/accounts/${accountId}/dex/rules`,
      {
        query: params,
      },
    );
  }
}

/**
 * Cloudflare Tunnel connections that securely expose private origins without opening inbound ports
 */
export class Tunnels extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists and filters all types of Tunnels in an account.
   *
   * @see cloudflare-tunnel-list-all-tunnels
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/tunnels`, {
      query: params,
    });
  }

  /**
   * Lists and filters Cloudflare Tunnels in an account.
   *
   * @see cloudflare-tunnel-list-cloudflare-tunnels
   */
  async cloudflaredList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cfd_tunnel`, {
      query: params,
    });
  }

  /**
   * Fetches a single Cloudflare Tunnel.
   *
   * @see cloudflare-tunnel-get-a-cloudflare-tunnel
   */
  async cloudflaredGet(accountId: string, tunnelId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cfd_tunnel/${tunnelId}`);
  }

  /**
   * Creates a new Cloudflare Tunnel in an account.
   *
   * @see cloudflare-tunnel-create-a-cloudflare-tunnel
   */
  async cloudflaredCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cfd_tunnel`);
  }

  /**
   * Updates an existing Cloudflare Tunnel.
   *
   * @see cloudflare-tunnel-update-a-cloudflare-tunnel
   */
  async cloudflaredEdit(tunnelId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/cfd_tunnel/${tunnelId}`);
  }

  /**
   * Deletes a Cloudflare Tunnel from an account.
   *
   * @see cloudflare-tunnel-delete-a-cloudflare-tunnel
   */
  async cloudflaredDelete(accountId: string, tunnelId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cfd_tunnel/${tunnelId}`);
  }

  /**
   * Gets the configuration for a remotely-managed tunnel
   *
   * @see cloudflare-tunnel-configuration-get-configuration
   */
  async cloudflaredConfigurationsGet(accountId: string, tunnelId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cfd_tunnel/${tunnelId}/configurations`);
  }

  /**
   * Adds or updates the configuration for a remotely-managed tunnel.
   *
   * @see cloudflare-tunnel-configuration-put-configuration
   */
  async cloudflaredConfigurationsUpdate(accountId: string, tunnelId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/cfd_tunnel/${tunnelId}/configurations`);
  }

  /**
   * Fetches connection details for a Cloudflare Tunnel.
   *
   * @see cloudflare-tunnel-list-cloudflare-tunnel-connections
   */
  async cloudflaredConnectionsGet(accountId: string, tunnelId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cfd_tunnel/${tunnelId}/connections`);
  }

  /**
   * Removes a connection (aka Cloudflare Tunnel Connector) from a Cloudflare Tunnel independently of its current state. If no connector id (client_id) is provided all connectors will be removed. We recommend running this command after rotating tokens.
   *
   * @see cloudflare-tunnel-clean-up-cloudflare-tunnel-connections
   */
  async cloudflaredConnectionsDelete(
    accountId: string,
    tunnelId: string,
    params?: Record<string, unknown>,
  ): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/cfd_tunnel/${tunnelId}/connections`, {
      query: params,
    });
  }

  /**
   * Gets the token used to associate cloudflared with a specific tunnel.
   *
   * @see cloudflare-tunnel-get-a-cloudflare-tunnel-token
   */
  async cloudflaredTokenGet(accountId: string, tunnelId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cfd_tunnel/${tunnelId}/token`);
  }

  /**
   * Fetches connector and connection details for a Cloudflare Tunnel.
   *
   * @see cloudflare-tunnel-get-cloudflare-tunnel-connector
   */
  async cloudflaredConnectorsGet(accountId: string, tunnelId: string, connectorId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/cfd_tunnel/${tunnelId}/connectors/${connectorId}`);
  }

  /**
   * Gets a management token used to access the management resources (i.e. Streaming Logs) of a tunnel.
   *
   * @see cloudflare-tunnel-get-a-cloudflare-tunnel-management-token
   */
  async cloudflaredManagementCreate(accountId: string, tunnelId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/cfd_tunnel/${tunnelId}/management`);
  }

  /**
   * Lists and filters Warp Connector Tunnels in an account.
   *
   * @see cloudflare-tunnel-list-warp-connector-tunnels
   */
  async warpConnectorList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/warp_connector`, {
      query: params,
    });
  }

  /**
   * Fetches a single Warp Connector Tunnel.
   *
   * @see cloudflare-tunnel-get-a-warp-connector-tunnel
   */
  async warpConnectorGet(accountId: string, tunnelId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/warp_connector/${tunnelId}`);
  }

  /**
   * Creates a new Warp Connector Tunnel in an account.
   *
   * @see cloudflare-tunnel-create-a-warp-connector-tunnel
   */
  async warpConnectorCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/warp_connector`);
  }

  /**
   * Updates an existing Warp Connector Tunnel.
   *
   * @see cloudflare-tunnel-update-a-warp-connector-tunnel
   */
  async warpConnectorEdit(accountId: string, tunnelId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/warp_connector/${tunnelId}`);
  }

  /**
   * Deletes a Warp Connector Tunnel from an account.
   *
   * @see cloudflare-tunnel-delete-a-warp-connector-tunnel
   */
  async warpConnectorDelete(accountId: string, tunnelId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/warp_connector/${tunnelId}`);
  }

  /**
   * Gets the token used to associate warp device with a specific Warp Connector tunnel.
   *
   * @see cloudflare-tunnel-get-a-warp-connector-tunnel-token
   */
  async warpConnectorTokenGet(accountId: string, tunnelId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/warp_connector/${tunnelId}/token`);
  }
}

/**
 * Account-level connectivity defaults for WARP, IPv6, and ICMP proxy behavior
 */
export class ConnectivitySettings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Gets the Zero Trust Connectivity Settings for the given account.
   *
   * @see zero-trust-accounts-get-connectivity-settings
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/zerotrust/connectivity_settings`);
  }

  /**
   * Updates the Zero Trust Connectivity Settings for the given account.
   *
   * @see zero-trust-accounts-patch-connectivity-settings
   */
  async edit(accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/zerotrust/connectivity_settings`);
  }
}

/**
 * Data Loss Prevention — detection profiles, custom patterns, datasets, and entry scanning rules
 */
export class Dlp extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all DLP datasets configured for the account, including custom word lists and EDM datasets.
   *
   * @see dlp-datasets-read-all
   */
  async datasetsList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/datasets`);
  }

  /**
   * Retrieves detailed information about a specific DLP dataset, including its type, status, and entry count.
   *
   * @see dlp-datasets-read
   */
  async datasetsGet(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/datasets/${datasetId}`);
  }

  /**
   * Creates a new DLP (Data Loss Prevention) dataset for storing custom detection patterns. Datasets can contain exact match data, word lists, or EDM (Exact Data Match) configurations.
   *
   * @see dlp-datasets-create
   */
  async datasetsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/datasets`);
  }

  /**
   * Updates the configuration of an existing DLP dataset, such as its name, description, or detection settings.
   *
   * @see dlp-datasets-update
   */
  async datasetsUpdate(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/dlp/datasets/${datasetId}`);
  }

  /**
   * This deletes all versions of the dataset.
   *
   * @see dlp-datasets-delete
   */
  async datasetsDelete(accountId: string, datasetId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/dlp/datasets/${datasetId}`);
  }

  /**
   * Creates a new version of a DLP dataset, allowing you to stage changes before activation. Used for single-column EDM and custom word lists.
   *
   * @see dlp-datasets-create-version
   */
  async datasetsUploadCreate(accountId: string, datasetId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/datasets/${datasetId}/upload`);
  }

  /**
   * This is used for single-column EDMv1 and Custom Word Lists. The EDM format can only be created in the Cloudflare dashboard. For other clients, this operation can only be used for non-secret Custom Word Lists. The body must be a UTF-8 encoded, newline (NL or CRNL) separated list of words to be matched.
   *
   * @see dlp-datasets-upload-version
   */
  async datasetsUploadEdit(accountId: string, datasetId: string, version: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/datasets/${datasetId}/upload/${version}`);
  }

  /**
   * This is used for multi-column EDMv2 datasets. The EDMv2 format can only be created in the Cloudflare dashboard. The columns in the response appear in the same order as in the request.
   *
   * @see dlp-datasets-define-columns
   */
  async datasetsVersionsCreate(accountId: string, datasetId: string, version: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/datasets/${datasetId}/versions/${version}`);
  }

  /**
   * This is used for multi-column EDMv2 datasets. The EDMv2 format can only be created in the Cloudflare dashboard.
   *
   * @see dlp-datasets-upload-dataset-column
   */
  async datasetsVersionsEntriesCreate(
    accountId: string,
    datasetId: string,
    version: string,
    entryId: string,
  ): Promise<unknown> {
    return this._client.post<unknown>(
      `/accounts/${accountId}/dlp/datasets/${datasetId}/versions/${version}/entries/${entryId}`,
    );
  }

  /**
   * Validates whether this pattern is a valid regular expression. Rejects it if the regular expression is too complex or can match an unbounded-length string. The regex will be rejected if it uses `*` or `+`. Bound the maximum number of characters that can be matched using a range, e.g. `{1,100}`.
   *
   * @see dlp-pattern-validate
   */
  async patternsValidate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/patterns/validate`);
  }

  /**
   * Gets the current payload logging configuration for DLP, showing whether matched content is being logged.
   *
   * @see dlp-payload-log-get
   */
  async payloadLogsGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/payload_log`);
  }

  /**
   * Enables or disables payload logging for DLP matches. When enabled, matched content is stored for review.
   *
   * @see dlp-payload-log-put
   */
  async payloadLogsUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/dlp/payload_log`);
  }

  /**
   * Retrieves the email provider mapping configuration for DLP email scanning.
   *
   * @see dlp-email-scanner-get-account-mapping
   */
  async emailAccountMappingGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/email/account_mapping`);
  }

  /**
   * Creates a mapping between a Cloudflare account and an email provider for DLP email scanning integration.
   *
   * @see dlp-email-scanner-create-account-mapping
   */
  async emailAccountMappingCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/email/account_mapping`);
  }

  /**
   * Lists all email scanner rules for an account.
   *
   * @see dlp-email-scanner-list-all-rules
   */
  async emailRulesList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/email/rules`);
  }

  /**
   * Gets detailed configuration for a specific DLP email scanning rule, including detection patterns and actions.
   *
   * @see dlp-email-scanner-get-rule
   */
  async emailRulesGet(accountId: string, ruleId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/email/rules/${ruleId}`);
  }

  /**
   * Creates a new DLP email scanning rule that defines what content patterns to detect in email messages and what actions to take.
   *
   * @see dlp-email-scanner-create-rule
   */
  async emailRulesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/email/rules`);
  }

  /**
   * Modifies an existing DLP email scanning rule, updating detection patterns, conditions, or actions.
   *
   * @see dlp-email-scanner-update-rule
   */
  async emailRulesUpdate(accountId: string, ruleId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/dlp/email/rules/${ruleId}`);
  }

  /**
   * Removes a DLP email scanning rule. The rule will no longer be applied to email messages.
   *
   * @see dlp-email-scanner-delete-rule
   */
  async emailRulesDelete(accountId: string, ruleId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/dlp/email/rules/${ruleId}`);
  }

  /**
   * Reorders DLP email scanning rules by updating their priority values. Higher priority rules are evaluated first.
   *
   * @see dlp-email-scanner-update-rule-priorities
   */
  async emailRulesBulkEdit(accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/dlp/email/rules`);
  }

  /**
   * Lists all DLP profiles in an account.
   *
   * @see dlp-profiles-list-all-profiles
   */
  async profilesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/profiles`, {
      query: params,
    });
  }

  /**
   * Fetches a DLP profile by ID.
   *
   * @see dlp-profiles-get-dlp-profile
   */
  async profilesGet(accountId: string, profileId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/profiles/${profileId}`);
  }

  /**
   * Fetches a custom DLP profile by id.
   *
   * @see dlp-profiles-get-custom-profile
   */
  async profilesCustomGet(accountId: string, profileId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/profiles/custom/${profileId}`);
  }

  /**
   * Creates a DLP custom profile.
   *
   * @see dlp-profiles-create-custom-profiles
   */
  async profilesCustomCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/profiles/custom`);
  }

  /**
   * Updates a DLP custom profile.
   *
   * @see dlp-profiles-update-custom-profile
   */
  async profilesCustomUpdate(accountId: string, profileId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/dlp/profiles/custom/${profileId}`);
  }

  /**
   * Deletes a DLP custom profile.
   *
   * @see dlp-profiles-delete-custom-profile
   */
  async profilesCustomDelete(accountId: string, profileId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/dlp/profiles/custom/${profileId}`);
  }

  /**
   * This is similar to `get_predefined` but only returns entries that are enabled. This is needed for our terraform API Fetches a predefined DLP profile by id.
   *
   * @see dlp-profiles-get-predefined-profile-config
   */
  async profilesPredefinedGet(accountId: string, profileId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/profiles/predefined/${profileId}/config`);
  }

  /**
   * This is similar to `update_predefined` but only returns entries that are enabled. This is needed for our terraform API Creates a DLP predefined profile. Only supports enabling/disabling entries.
   *
   * @see dlp-profiles-create-predefined-profile-config
   */
  async profilesPredefinedCreate(accountId: string, profileId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/profiles/predefined/${profileId}/config`);
  }

  /**
   * This is similar to `update_predefined` but only returns entries that are enabled. This is needed for our terraform API Updates a DLP predefined profile. Only supports enabling/disabling entries.
   *
   * @see dlp-profiles-update-predefined-profile-config
   */
  async profilesPredefinedUpdate(accountId: string, profileId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/dlp/profiles/predefined/${profileId}/config`);
  }

  /**
   * This is a no-op as predefined profiles can't be deleted but is needed for our generated terraform API.
   *
   * @see dlp-profiles-delete-predefined-profile
   */
  async profilesPredefinedDelete(accountId: string, profileId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/dlp/profiles/predefined/${profileId}`);
  }

  /**
   * Retrieves current DLP usage limits and quotas for the account, including maximum allowed counts and current usage for custom entries, dataset cells, and document fingerprints.
   *
   * @see dlp-limits-get
   */
  async limitsList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/limits`);
  }

  /**
   * Lists all DLP entries in an account.
   *
   * @see dlp-entries-list-all-entries
   */
  async entriesList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/entries`);
  }

  /**
   * Fetches a DLP entry by ID.
   *
   * @see dlp-entries-get-dlp-entry
   */
  async entriesGet(accountId: string, entryId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/entries/${entryId}`);
  }

  /**
   * Creates a DLP custom entry.
   *
   * @see dlp-entries-create-entry
   */
  async entriesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/entries`);
  }

  /**
   * Updates a DLP entry.
   *
   * @see dlp-entries-update-entry
   */
  async entriesUpdate(accountId: string, entryId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/dlp/entries/${entryId}`);
  }

  /**
   * Deletes a DLP custom entry.
   *
   * @see dlp-entries-delete-entry
   */
  async entriesDelete(accountId: string, entryId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/dlp/entries/${entryId}`);
  }

  /**
   * Creates a DLP custom entry.
   *
   * @see dlp-entries-create-entry
   */
  async entriesCustomCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/entries`);
  }

  /**
   * Updates a DLP custom entry.
   *
   * @see dlp-entries-update-custom-entry
   */
  async entriesCustomUpdate(accountId: string, entryId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/dlp/entries/custom/${entryId}`);
  }

  /**
   * Deletes a DLP custom entry.
   *
   * @see dlp-entries-delete-entry
   */
  async entriesCustomDelete(accountId: string, entryId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/dlp/entries/${entryId}`);
  }

  /**
   * Fetches a DLP entry by ID.
   *
   * @see dlp-entries-get-dlp-entry
   */
  async entriesCustomGet(accountId: string, entryId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/entries/${entryId}`);
  }

  /**
   * Lists all DLP entries in an account.
   *
   * @see dlp-entries-list-all-entries
   */
  async entriesCustomList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/entries`);
  }

  /**
   * Predefined entries can't be created, this will update an existing predefined entry. This is needed for our generated terraform API.
   *
   * @see dlp-entries-create-predefined-entry
   */
  async entriesPredefinedCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/entries/predefined`);
  }

  /**
   * Updates a DLP entry.
   *
   * @see dlp-entries-update-predefined-entry
   */
  async entriesPredefinedUpdate(accountId: string, entryId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/dlp/entries/predefined/${entryId}`);
  }

  /**
   * This is a no-op as predefined entires can't be deleted but is needed for our generated terraform API.
   *
   * @see dlp-entries-delete-predefined-entry
   */
  async entriesPredefinedDelete(accountId: string, entryId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/dlp/entries/predefined/${entryId}`);
  }

  /**
   * Fetches a DLP entry by ID.
   *
   * @see dlp-entries-get-dlp-entry
   */
  async entriesPredefinedGet(accountId: string, entryId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/entries/${entryId}`);
  }

  /**
   * Lists all DLP entries in an account.
   *
   * @see dlp-entries-list-all-entries
   */
  async entriesPredefinedList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/entries`);
  }

  /**
   * Integration entries can't be created, this will update an existing integration entry. This is needed for our generated terraform API.
   *
   * @see dlp-entries-create-integration-entry
   */
  async entriesIntegrationCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/entries/integration`);
  }

  /**
   * Updates a DLP entry.
   *
   * @see dlp-entries-update-integration-entry
   */
  async entriesIntegrationUpdate(accountId: string, entryId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/dlp/entries/integration/${entryId}`);
  }

  /**
   * This is a no-op as integration entires can't be deleted but is needed for our generated terraform API.
   *
   * @see dlp-entries-delete-integration-entry
   */
  async entriesIntegrationDelete(accountId: string, entryId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/dlp/entries/integration/${entryId}`);
  }

  /**
   * Fetches a DLP entry by ID.
   *
   * @see dlp-entries-get-dlp-entry
   */
  async entriesIntegrationGet(accountId: string, entryId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/entries/${entryId}`);
  }

  /**
   * Lists all DLP entries in an account.
   *
   * @see dlp-entries-list-all-entries
   */
  async entriesIntegrationList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/entries`);
  }
}

/**
 * Secure Web Gateway — DNS, HTTP, and network filtering rules, proxy settings, certificates, and logging
 */
export class Gateway extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieve information about the current Zero Trust account.
   *
   * @see zero-trust-accounts-get-zero-trust-account-information
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway`);
  }

  /**
   * Create a Zero Trust account for an existing Cloudflare account.
   *
   * @see zero-trust-accounts-create-zero-trust-account
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/gateway`);
  }

  /**
   * Retrieve all Zero Trust Audit SSH and SSH with Access for Infrastructure settings for an account.
   *
   * @see zero-trust-get-audit-ssh-settings
   */
  async auditSshSettingsGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/audit_ssh_settings`);
  }

  /**
   * Update Zero Trust Audit SSH and SSH with Access for Infrastructure settings for an account.
   *
   * @see zero-trust-update-audit-ssh-settings
   */
  async auditSshSettingsUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/gateway/audit_ssh_settings`);
  }

  /**
   * Rotate the SSH account seed that generates the host key identity when connecting through the Cloudflare SSH Proxy.
   *
   * @see zero-trust-rotate-ssh-account-seed
   */
  async auditSshSettingsRotateSeed(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/gateway/audit_ssh_settings/rotate_seed`);
  }

  /**
   * List all categories.
   *
   * @see zero-trust-gateway-categories-list-categories
   */
  async categoriesList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/categories`);
  }

  /**
   * List all application and application type mappings.
   *
   * @see zero-trust-gateway-application-and-application-type-mappings-list-application-and-application-type-mappings
   */
  async appTypesList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/app_types`);
  }

  /**
   * Retrieve the current Zero Trust account configuration.
   *
   * @see zero-trust-accounts-get-zero-trust-account-configuration
   */
  async configurationsGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/configuration`);
  }

  /**
   * Update the current Zero Trust account configuration.
   *
   * @see zero-trust-accounts-update-zero-trust-account-configuration.
   */
  async configurationsUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/gateway/configuration`);
  }

  /**
   * Update (PATCH) a single subcollection of settings such as `antivirus`, `tls_decrypt`, `activity_log`, `block_page`, `browser_isolation`, `fips`, `body_scanning`, or `certificate` without updating the entire configuration object. This endpoint returns an error if any settings collection lacks proper configuration.
   *
   * @see zero-trust-accounts-patch-zero-trust-account-configuration
   */
  async configurationsEdit(accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/gateway/configuration`);
  }

  /**
   * Retrieve the current Zero Trust certificate configuration.
   *
   * @see zero-trust-accounts-get-zero-trust-certificate-configuration
   */
  async configurationsCustomCertificateGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/configuration/custom_certificate`);
  }

  /**
   * Fetch all Zero Trust lists for an account.
   *
   * @see zero-trust-lists-list-zero-trust-lists
   */
  async listsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/lists`, {
      query: params,
    });
  }

  /**
   * Fetch a single Zero Trust list.
   *
   * @see zero-trust-lists-zero-trust-list-details
   */
  async listsGet(listId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/lists/${listId}`);
  }

  /**
   * Creates a new Zero Trust list.
   *
   * @see zero-trust-lists-create-zero-trust-list
   */
  async listsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/gateway/lists`);
  }

  /**
   * Updates a configured Zero Trust list. Skips updating list items if not included in the payload. A non empty list items will overwrite the existing list.
   *
   * @see zero-trust-lists-update-zero-trust-list
   */
  async listsUpdate(listId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/gateway/lists/${listId}`);
  }

  /**
   * Appends or removes an item from a configured Zero Trust list.
   *
   * @see zero-trust-lists-patch-zero-trust-list
   */
  async listsEdit(listId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/gateway/lists/${listId}`);
  }

  /**
   * Deletes a Zero Trust list.
   *
   * @see zero-trust-lists-delete-zero-trust-list
   */
  async listsDelete(listId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/gateway/lists/${listId}`);
  }

  /**
   * Fetch all items in a single Zero Trust list.
   *
   * @see zero-trust-lists-zero-trust-list-items
   */
  async listsItemsList(listId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/lists/${listId}/items`);
  }

  /**
   * List Zero Trust Gateway locations for an account.
   *
   * @see zero-trust-gateway-locations-list-zero-trust-gateway-locations
   */
  async locationsList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/locations`);
  }

  /**
   * Get a single Zero Trust Gateway location.
   *
   * @see zero-trust-gateway-locations-zero-trust-gateway-location-details
   */
  async locationsGet(locationId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/locations/${locationId}`);
  }

  /**
   * Create a new Zero Trust Gateway location.
   *
   * @see zero-trust-gateway-locations-create-zero-trust-gateway-location
   */
  async locationsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/gateway/locations`);
  }

  /**
   * Update a configured Zero Trust Gateway location.
   *
   * @see zero-trust-gateway-locations-update-zero-trust-gateway-location
   */
  async locationsUpdate(locationId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/gateway/locations/${locationId}`);
  }

  /**
   * Delete a configured Zero Trust Gateway location.
   *
   * @see zero-trust-gateway-locations-delete-zero-trust-gateway-location
   */
  async locationsDelete(locationId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/gateway/locations/${locationId}`);
  }

  /**
   * Retrieve the current logging settings for the Zero Trust account.
   *
   * @see zero-trust-accounts-get-logging-settings-for-the-zero-trust-account
   */
  async loggingGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/logging`);
  }

  /**
   * Update logging settings for the current Zero Trust account.
   *
   * @see zero-trust-accounts-update-logging-settings-for-the-zero-trust-account
   */
  async loggingUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/gateway/logging`);
  }

  /**
   * List all Zero Trust Gateway proxy endpoints for an account.
   *
   * @see zero-trust-gateway-proxy-endpoints-list-proxy-endpoints
   */
  async proxyEndpointsList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/proxy_endpoints`);
  }

  /**
   * Get a single Zero Trust Gateway proxy endpoint.
   *
   * @see zero-trust-gateway-proxy-endpoints-proxy-endpoint-details
   */
  async proxyEndpointsGet(proxyEndpointId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/proxy_endpoints/${proxyEndpointId}`);
  }

  /**
   * Create a new Zero Trust Gateway proxy endpoint.
   *
   * @see zero-trust-gateway-proxy-endpoints-create-proxy-endpoint
   */
  async proxyEndpointsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/gateway/proxy_endpoints`);
  }

  /**
   * Update a configured Zero Trust Gateway proxy endpoint.
   *
   * @see zero-trust-gateway-proxy-endpoints-update-proxy-endpoint
   */
  async proxyEndpointsEdit(proxyEndpointId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/gateway/proxy_endpoints/${proxyEndpointId}`);
  }

  /**
   * Delete a configured Zero Trust Gateway proxy endpoint.
   *
   * @see zero-trust-gateway-proxy-endpoints-delete-proxy-endpoint
   */
  async proxyEndpointsDelete(proxyEndpointId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/gateway/proxy_endpoints/${proxyEndpointId}`);
  }

  /**
   * List Zero Trust Gateway rules for an account.
   *
   * @see zero-trust-gateway-rules-list-zero-trust-gateway-rules
   */
  async rulesList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/rules`);
  }

  /**
   * Get a single Zero Trust Gateway rule.
   *
   * @see zero-trust-gateway-rules-zero-trust-gateway-rule-details
   */
  async rulesGet(ruleId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/rules/${ruleId}`);
  }

  /**
   * Create a new Zero Trust Gateway rule.
   *
   * @see zero-trust-gateway-rules-create-zero-trust-gateway-rule
   */
  async rulesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/gateway/rules`);
  }

  /**
   * Update a configured Zero Trust Gateway rule.
   *
   * @see zero-trust-gateway-rules-update-zero-trust-gateway-rule
   */
  async rulesUpdate(ruleId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/gateway/rules/${ruleId}`);
  }

  /**
   * Delete a Zero Trust Gateway rule.
   *
   * @see zero-trust-gateway-rules-delete-zero-trust-gateway-rule
   */
  async rulesDelete(ruleId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/gateway/rules/${ruleId}`);
  }

  /**
   * List Zero Trust Gateway rules for the parent account of an account in the MSP configuration.
   *
   * @see zero-trust-gateway-rules-list-zero-trust-gateway-rules-tenant
   */
  async rulesListTenant(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/rules/tenant`);
  }

  /**
   * Resets the expiration of a Zero Trust Gateway Rule if its duration elapsed and it has a default duration. The Zero Trust Gateway Rule must have values for both `expiration.expires_at` and `expiration.duration`.
   *
   * @see zero-trust-gateway-rules-reset-expiration-zero-trust-gateway-rule
   */
  async rulesResetExpiration(ruleId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/gateway/rules/${ruleId}/reset_expiration`);
  }

  /**
   * List all Zero Trust certificates for an account.
   *
   * @see zero-trust-certificates-list-zero-trust-certificates
   */
  async certificatesList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/certificates`);
  }

  /**
   * Get a single Zero Trust certificate.
   *
   * @see zero-trust-certificates-zero-trust-certificate-details
   */
  async certificatesGet(certificateId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/certificates/${certificateId}`);
  }

  /**
   * Create a new Zero Trust certificate.
   *
   * @see zero-trust-certificates-create-zero-trust-certificate
   */
  async certificatesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/gateway/certificates`);
  }

  /**
   * Delete a gateway-managed Zero Trust certificate. You must deactivate the certificate from the edge (inactive) before deleting it.
   *
   * @see zero-trust-certificates-delete-zero-trust-certificate
   */
  async certificatesDelete(certificateId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/gateway/certificates/${certificateId}`);
  }

  /**
   * Bind a single Zero Trust certificate to the edge.
   *
   * @see zero-trust-certificates-activate-zero-trust-certificate
   */
  async certificatesActivate(certificateId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/gateway/certificates/${certificateId}/activate`);
  }

  /**
   * Unbind a single Zero Trust certificate from the edge.
   *
   * @see zero-trust-certificates-deactivate-zero-trust-certificate
   */
  async certificatesDeactivate(certificateId: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/gateway/certificates/${certificateId}/deactivate`);
  }

  /**
   * List all Zero Trust Gateway PAC files for an account.
   *
   * @see zero-trust-gateway-pacfiles-list
   */
  async pacfilesList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/pacfiles`);
  }

  /**
   * Get a single Zero Trust Gateway PAC file.
   *
   * @see zero-trust-gateway-pacfiles-details
   */
  async pacfilesGet(pacfileId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/pacfiles/${pacfileId}`);
  }

  /**
   * Create a new Zero Trust Gateway PAC file.
   *
   * @see zero-trust-gateway-pacfiles-create-pacfile
   */
  async pacfilesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/gateway/pacfiles`);
  }

  /**
   * Update a configured Zero Trust Gateway PAC file.
   *
   * @see zero-trust-gateway-pacfiles-update
   */
  async pacfilesUpdate(pacfileId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/gateway/pacfiles/${pacfileId}`);
  }

  /**
   * Delete a configured Zero Trust Gateway PAC file.
   *
   * @see zero-trust-gateway-pacfiles-delete
   */
  async pacfilesDelete(pacfileId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/gateway/pacfiles/${pacfileId}`);
  }
}

/**
 * Private network routing — virtual networks, IP routes, and subnet-level policies for Tunnel traffic
 */
export class Networks extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists and filters private network routes in an account.
   *
   * @see tunnel-route-list-tunnel-routes
   */
  async routesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/teamnet/routes`, {
      query: params,
    });
  }

  /**
   * Get a private network route in an account.
   *
   * @see tunnel-route-get-tunnel-route
   */
  async routesGet(accountId: string, routeId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/teamnet/routes/${routeId}`);
  }

  /**
   * Routes a private network through a Cloudflare Tunnel.
   *
   * @see tunnel-route-create-a-tunnel-route
   */
  async routesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/teamnet/routes`);
  }

  /**
   * Updates an existing private network route in an account. The fields that are meant to be updated should be provided in the body of the request.
   *
   * @see tunnel-route-update-a-tunnel-route
   */
  async routesEdit(routeId: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/teamnet/routes/${routeId}`);
  }

  /**
   * Deletes a private network route from an account.
   *
   * @see tunnel-route-delete-a-tunnel-route
   */
  async routesDelete(routeId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/teamnet/routes/${routeId}`);
  }

  /**
   * Fetches routes that contain the given IP address.
   *
   * @see tunnel-route-get-tunnel-route-by-ip
   */
  async routesIpsGet(ip: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/teamnet/routes/ip/${ip}`, {
      query: params,
    });
  }

  /**
   * Routes a private network through a Cloudflare Tunnel. The CIDR in `ip_network_encoded` must be written in URL-encoded format.
   *
   * @see tunnel-route-create-a-tunnel-route-with-cidr
   */
  async routesNetworksCreate(ipNetworkEncoded: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/teamnet/routes/network/${ipNetworkEncoded}`);
  }

  /**
   * Updates an existing private network route in an account. The CIDR in `ip_network_encoded` must be written in URL-encoded format.
   *
   * @see tunnel-route-update-a-tunnel-route-with-cidr
   */
  async routesNetworksEdit(ipNetworkEncoded: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/teamnet/routes/network/${ipNetworkEncoded}`);
  }

  /**
   * Deletes a private network route from an account. The CIDR in `ip_network_encoded` must be written in URL-encoded format. If no virtual_network_id is provided it will delete the route from the default vnet. If no tun_type is provided it will fetch the type from the tunnel_id or if that is missing it will assume Cloudflare Tunnel as default. If tunnel_id is provided it will delete the route from that tunnel, otherwise it will delete the route based on the vnet and tun_type.
   *
   * @see tunnel-route-delete-a-tunnel-route-with-cidr
   */
  async routesNetworksDelete(
    ipNetworkEncoded: string,
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/teamnet/routes/network/${ipNetworkEncoded}`, {
      query: params,
    });
  }

  /**
   * Lists and filters virtual networks in an account.
   *
   * @see tunnel-virtual-network-list-virtual-networks
   */
  async virtualNetworksList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/teamnet/virtual_networks`, {
      query: params,
    });
  }

  /**
   * Get a virtual network.
   *
   * @see tunnel-virtual-network-get
   */
  async virtualNetworksGet(accountId: string, virtualNetworkId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/teamnet/virtual_networks/${virtualNetworkId}`);
  }

  /**
   * Adds a new virtual network to an account.
   *
   * @see tunnel-virtual-network-create-a-virtual-network
   */
  async virtualNetworksCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/teamnet/virtual_networks`);
  }

  /**
   * Updates an existing virtual network.
   *
   * @see tunnel-virtual-network-update
   */
  async virtualNetworksEdit(accountId: string, virtualNetworkId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/teamnet/virtual_networks/${virtualNetworkId}`);
  }

  /**
   * Deletes an existing virtual network.
   *
   * @see tunnel-virtual-network-delete
   */
  async virtualNetworksDelete(virtualNetworkId: string, accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/teamnet/virtual_networks/${virtualNetworkId}`);
  }

  /**
   * Lists and filters subnets in an account.
   *
   * @see zero-trust-networks-subnets-list
   */
  async subnetsList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/zerotrust/subnets`, {
      query: params,
    });
  }

  /**
   * Create a WARP IP assignment subnet. Currently, only IPv4 subnets can be created. **Network constraints:** - The network must be within one of the following private IP ranges: - `10.0.0.0/8` (RFC 1918) - `172.16.0.0/12` (RFC 1918) - `192.168.0.0/16` (RFC 1918) - `100.64.0.0/10` (RFC 6598 - CGNAT) - The subnet must have a prefix length of `/24` or larger (e.g., `/16`, `/20`, `/24` are valid; `/25`, `/28` are not)
   *
   * @see zero-trust-networks-subnet-create-warp
   */
  async subnetsWarpCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/zerotrust/subnets/warp`);
  }

  /**
   * Get a WARP IP assignment subnet.
   *
   * @see zero-trust-networks-subnet-get-warp
   */
  async subnetsWarpGet(accountId: string, subnetId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/zerotrust/subnets/warp/${subnetId}`);
  }

  /**
   * Updates a WARP IP assignment subnet. **Update constraints:** - The `network` field cannot be modified for WARP subnets. Only `name`, `comment`, and `is_default_network` can be updated. - IPv6 subnets cannot be updated
   *
   * @see zero-trust-networks-subnet-update-warp
   */
  async subnetsWarpEdit(accountId: string, subnetId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/zerotrust/subnets/warp/${subnetId}`);
  }

  /**
   * Delete a WARP IP assignment subnet. This operation is idempotent - deleting an already-deleted or non-existent subnet will return success with a null result.
   *
   * @see zero-trust-networks-subnet-delete-warp
   */
  async subnetsWarpDelete(accountId: string, subnetId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/zerotrust/subnets/warp/${subnetId}`);
  }

  /**
   * Updates the Cloudflare Source subnet of the given address family
   *
   * @see zero-trust-networks-subnet-update-cloudflare-source
   */
  async subnetsCloudflareSourceUpdate(accountId: string, addressFamily: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/zerotrust/subnets/cloudflare_source/${addressFamily}`);
  }

  /**
   * Lists and filters hostname routes in an account.
   *
   * @see zero-trust-networks-route-hostname-list
   */
  async hostnameRoutesList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/zerotrust/routes/hostname`, {
      query: params,
    });
  }

  /**
   * Get a hostname route.
   *
   * @see zero-trust-networks-route-hostname-get
   */
  async hostnameRoutesGet(accountId: string, hostnameRouteId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/zerotrust/routes/hostname/${hostnameRouteId}`);
  }

  /**
   * Create a hostname route.
   *
   * @see zero-trust-networks-route-hostname-create
   */
  async hostnameRoutesCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/zerotrust/routes/hostname`);
  }

  /**
   * Updates a hostname route.
   *
   * @see zero-trust-networks-route-hostname-update
   */
  async hostnameRoutesEdit(accountId: string, hostnameRouteId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/zerotrust/routes/hostname/${hostnameRouteId}`);
  }

  /**
   * Delete a hostname route.
   *
   * @see zero-trust-networks-route-hostname-delete
   */
  async hostnameRoutesDelete(accountId: string, hostnameRouteId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/zerotrust/routes/hostname/${hostnameRouteId}`);
  }
}

/**
 * User and entity risk scores derived from behavior signals, used to trigger adaptive access policies
 */
export class RiskScoring extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Retrieves the detailed risk score breakdown for a specific user, including contributing factors.
   *
   * @see dlp-risk-score-summary-get-for-user
   */
  async get(accountId: string, userId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/zt_risk_scoring/${userId}`);
  }

  /**
   * Resets risk scores for specified users, clearing their accumulated risk history.
   *
   * @see dlp-risk-score-reset-post
   */
  async reset(accountId: string, userId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/zt_risk_scoring/${userId}/reset`);
  }

  /**
   * Retrieves configured risk score behaviors that define how user actions affect their overall risk score.
   *
   * @see dlp-risk-score-behaviors-get
   */
  async behavioursGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/zt_risk_scoring/behaviors`);
  }

  /**
   * Updates risk score behavior configurations, defining weights and thresholds for risk calculation.
   *
   * @see dlp-risk-score-behaviors-put
   */
  async behavioursUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/zt_risk_scoring/behaviors`);
  }

  /**
   * Gets an aggregate summary of risk scores across the account, including distribution and trends.
   *
   * @see dlp-risk-score-summary-get
   */
  async summaryGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/zt_risk_scoring/summary`);
  }

  /**
   * Lists all configured Zero Trust risk score integrations for the account.
   *
   * @see dlp-zt-risk-score-integration-list
   */
  async integrationsList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/zt_risk_scoring/integrations`);
  }

  /**
   * Gets configuration details for a specific Zero Trust risk score integration.
   *
   * @see dlp-zt-risk-score-integration-get
   */
  async integrationsGet(accountId: string, integrationId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/zt_risk_scoring/integrations/${integrationId}`);
  }

  /**
   * Creates a new Zero Trust risk score integration, connecting external risk signals to Cloudflare's risk scoring system.
   *
   * @see dlp-zt-risk-score-integration-create
   */
  async integrationsCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/zt_risk_scoring/integrations`);
  }

  /**
   * Overwrite the reference_id, tenant_url, and active values with the ones provided.
   *
   * @see dlp-zt-risk-score-integration-update
   */
  async integrationsUpdate(accountId: string, integrationId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/zt_risk_scoring/integrations/${integrationId}`);
  }

  /**
   * Removes a Zero Trust risk score integration, disconnecting the external risk signal source.
   *
   * @see dlp-zt-risk-score-integration-delete
   */
  async integrationsDelete(accountId: string, integrationId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/zt_risk_scoring/integrations/${integrationId}`);
  }

  /**
   * Retrieves a Zero Trust risk score integration using its external reference ID.
   *
   * @see dlp-zt-risk-score-integration-get-by-reference-id
   */
  async integrationsReferencesGet(accountId: string, referenceId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/zt_risk_scoring/integrations/reference_id/${referenceId}`);
  }
}

/**
 * Apps operations
 */
export class Apps extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Converts an application-scoped policy to a reusable policy. The policy will no longer be exclusively scoped to the application. Further updates to the policy should go through the /accounts/{account_id}/policies/{uid} endpoint.
   *
   * @see access-policies-convert-reusable
   */
  async policiesMakeReusableUpdate(appId: string, policyId: string, accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/access/apps/${appId}/policies/${policyId}/make_reusable`);
  }

  /**
   * Retrieve the statuses of your applications.
   *
   * @see zero-trust-applications-review-status-list
   */
  async reviewStatusList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/gateway/apps/review_status`);
  }

  /**
   * Update the statuses of your applications.
   *
   * @see zero-trust-applications-review-status-update
   */
  async reviewStatusUpdate(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/gateway/apps/review_status`);
  }

  /**
   * List all Access Applications in a zone.
   *
   * @see zone-level-access-applications-list-access-applications
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/apps`);
  }

  /**
   * Adds a new application to Access.
   *
   * @see zone-level-access-applications-add-a-bookmark-application
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/access/apps`);
  }

  /**
   * Lists short-lived certificate CAs and their public keys.
   *
   * @see zone-level-access-short-lived-certificate-c-as-list-short-lived-certificate-c-as
   */
  async caList(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/apps/ca`);
  }

  /**
   * Deletes an application from Access.
   *
   * @see zone-level-access-applications-delete-an-access-application
   */
  async delete(appId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/access/apps/${appId}`);
  }

  /**
   * Fetches information about an Access application.
   *
   * @see zone-level-access-applications-get-an-access-application
   */
  async get(appId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/apps/${appId}`);
  }

  /**
   * Updates an Access application.
   *
   * @see zone-level-access-applications-update-a-bookmark-application
   */
  async update(appId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/access/apps/${appId}`);
  }

  /**
   * Deletes a short-lived certificate CA.
   *
   * @see zone-level-access-short-lived-certificate-c-as-delete-a-short-lived-certificate-ca
   */
  async caDelete(appId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/access/apps/${appId}/ca`);
  }

  /**
   * Fetches a short-lived certificate CA and its public key.
   *
   * @see zone-level-access-short-lived-certificate-c-as-get-a-short-lived-certificate-ca
   */
  async caGet(appId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/apps/${appId}/ca`);
  }

  /**
   * Generates a new short-lived certificate CA and public key.
   *
   * @see zone-level-access-short-lived-certificate-c-as-create-a-short-lived-certificate-ca
   */
  async caCreate(appId: string, zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/access/apps/${appId}/ca`);
  }

  /**
   * Lists Access policies configured for an application.
   *
   * @see zone-level-access-policies-list-access-policies
   */
  async policiesList(appId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/apps/${appId}/policies`);
  }

  /**
   * Create a new Access policy for an application.
   *
   * @see zone-level-access-policies-create-an-access-policy
   */
  async policiesCreate(appId: string, zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/access/apps/${appId}/policies`);
  }

  /**
   * Delete an Access policy.
   *
   * @see zone-level-access-policies-delete-an-access-policy
   */
  async policiesDelete(policyId: string, appId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/access/apps/${appId}/policies/${policyId}`);
  }

  /**
   * Fetches a single Access policy.
   *
   * @see zone-level-access-policies-get-an-access-policy
   */
  async policiesGet(policyId: string, appId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/apps/${appId}/policies/${policyId}`);
  }

  /**
   * Update a configured Access policy.
   *
   * @see zone-level-access-policies-update-an-access-policy
   */
  async policiesUpdate(policyId: string, appId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/access/apps/${appId}/policies/${policyId}`);
  }

  /**
   * Revokes all tokens issued for an application.
   *
   * @see zone-level-access-applications-revoke-service-tokens
   */
  async revokeTokensCreate(appId: string, zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/access/apps/${appId}/revoke_tokens`);
  }

  /**
   * Updates application settings.
   *
   * @see zone-level-access-applications-patch-update-access-application-settings
   */
  async settingsEdit(appId: string, zoneId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/zones/${zoneId}/access/apps/${appId}/settings`);
  }

  /**
   * Updates application settings.
   *
   * @see zone-level-access-applications-put-update-access-application-settings
   */
  async settingsUpdate(appId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/access/apps/${appId}/settings`);
  }

  /**
   * Tests if a specific user has permission to access an application.
   *
   * @see zone-level-access-applications-test-access-policies
   */
  async userPolicyChecksGet(appId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/apps/${appId}/user_policy_checks`);
  }
}

/**
 * Users operations
 */
export class Users extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Deletes a specific MFA device for a user. This action is only available if MFA is turned on for the organization.
   *
   * @see zero-trust-users-delete-mfa-authenticator
   */
  async mfaAuthenticatorsDelete(userId: string, accountId: string, authenticatorId: string): Promise<void> {
    return this._client.delete<void>(
      `/accounts/${accountId}/access/users/${userId}/mfa_authenticators/${authenticatorId}`,
    );
  }
}

/**
 * Document Fingerprints operations
 */
export class DocumentFingerprints extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all document fingerprints configured for DLP scanning in the account.
   *
   * @see dlp-document-fingerprints-read-all
   */
  async getFingerprintsAll(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/document_fingerprints`);
  }

  /**
   * Creates a new document fingerprint for DLP scanning. Document fingerprints detect documents that are structurally similar to the uploaded sample.
   *
   * @see dlp-document-fingerprints-create
   */
  async createDocumentFingerprints(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/document_fingerprints`);
  }

  /**
   * Removes a document fingerprint from DLP configuration. Documents matching this fingerprint will no longer be detected.
   *
   * @see dlp-document-fingerprints-delete
   */
  async delete(accountId: string, documentFingerprintId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/dlp/document_fingerprints/${documentFingerprintId}`);
  }

  /**
   * Retrieve data about a specific document fingerprint.
   *
   * @see dlp-document-fingerprints-read
   */
  async getDocumentFingerprints(accountId: string, documentFingerprintId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/document_fingerprints/${documentFingerprintId}`);
  }

  /**
   * Updates metadata for an existing document fingerprint, such as its name or description.
   *
   * @see dlp-document-fingerprints-update
   */
  async createV2(accountId: string, documentFingerprintId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/document_fingerprints/${documentFingerprintId}`);
  }

  /**
   * Uploads a new document to create or update a fingerprint. The document structure is analyzed to enable detection of similar documents.
   *
   * @see dlp-document-fingerprints-upload
   */
  async update(accountId: string, documentFingerprintId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/dlp/document_fingerprints/${documentFingerprintId}`);
  }
}

/**
 * Profiles operations
 */
export class Profiles extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all DLP custom profiles in an account.
   *
   * @see dlp-profiles-list-all-custom-profiles
   */
  async customList(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/profiles/custom`);
  }

  /**
   * Creates a DLP predefined profile. Only supports enabling/disabling entries.
   *
   * @see dlp-profiles-create-predefined-profile
   */
  async predefinedCreate(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/dlp/profiles/predefined`);
  }

  /**
   * Fetches a predefined DLP profile by id.
   *
   * @see dlp-profiles-get-predefined-profile
   */
  async predefinedGet(accountId: string, profileId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/profiles/predefined/${profileId}`);
  }

  /**
   * Updates a DLP predefined profile. Only supports enabling/disabling entries.
   *
   * @see dlp-profiles-update-predefined-profile
   */
  async predefinedUpdate(accountId: string, profileId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/dlp/profiles/predefined/${profileId}`);
  }
}

/**
 * Settings operations
 */
export class Settings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Delete (reset) DLP account-level settings to initial values.
   *
   * @see dlp-settings-delete
   */
  async delete(accountId: string): Promise<void> {
    return this._client.delete<void>(`/accounts/${accountId}/dlp/settings`);
  }

  /**
   * Get DLP account-level settings.
   *
   * @see dlp-settings-get
   */
  async get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/dlp/settings`);
  }

  /**
   * Missing fields keep their existing values.
   *
   * @see dlp-settings-edit
   */
  async edit(accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/dlp/settings`);
  }

  /**
   * Missing fields are reset to initial (unconfigured) values.
   *
   * @see dlp-settings-update
   */
  async update(accountId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/dlp/settings`);
  }
}

/**
 * Connections operations
 */
export class Connections extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches connection details for a WARP Connector Tunnel.
   *
   * @see cloudflare-tunnel-list-warp-connector-tunnel-connections
   */
  async list(accountId: string, tunnelId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/warp_connector/${tunnelId}/connections`);
  }
}

/**
 * Connectors operations
 */
export class Connectors extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Fetches connector and connection details for a WARP Connector Tunnel.
   *
   * @see cloudflare-tunnel-get-warp-connector-tunnel-connector
   */
  async get(accountId: string, tunnelId: string, connectorId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/warp_connector/${tunnelId}/connectors/${connectorId}`);
  }
}

/**
 * Failover operations
 */
export class Failover extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Triggers a manual failover for a specific WARP Connector Tunnel, setting the specified client as the active connector. The tunnel must be configured for high availability (HA) and the client must be linked to the tunnel.
   *
   * @see cloudflare-tunnel-manual-failover-warp-connector-tunnel
   */
  async update(accountId: string, tunnelId: string): Promise<unknown> {
    return this._client.put<unknown>(`/accounts/${accountId}/warp_connector/${tunnelId}/failover`);
  }
}

/**
 * Certificates operations
 */
export class Certificates extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all mTLS certificates.
   *
   * @see zone-level-access-mtls-authentication-list-mtls-certificates
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/certificates`);
  }

  /**
   * Adds a new mTLS root certificate to Access.
   *
   * @see zone-level-access-mtls-authentication-add-an-mtls-certificate
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/access/certificates`);
  }

  /**
   * List all mTLS hostname settings for this zone.
   *
   * @see zone-level-access-mtls-authentication-list-mtls-certificates-hostname-settings
   */
  async settingsList(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/certificates/settings`);
  }

  /**
   * Updates an mTLS certificate's hostname settings.
   *
   * @see zone-level-access-mtls-authentication-update-an-mtls-certificate-settings
   */
  async settingsUpdate(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/access/certificates/settings`);
  }

  /**
   * Deletes an mTLS certificate.
   *
   * @see zone-level-access-mtls-authentication-delete-an-mtls-certificate
   */
  async delete(certificateId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/access/certificates/${certificateId}`);
  }

  /**
   * Fetches a single mTLS certificate.
   *
   * @see zone-level-access-mtls-authentication-get-an-mtls-certificate
   */
  async get(certificateId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/certificates/${certificateId}`);
  }

  /**
   * Updates a configured mTLS certificate.
   *
   * @see zone-level-access-mtls-authentication-update-an-mtls-certificate
   */
  async update(certificateId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/access/certificates/${certificateId}`);
  }
}

/**
 * Groups operations
 */
export class Groups extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all Access groups.
   *
   * @see zone-level-access-groups-list-access-groups
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/groups`);
  }

  /**
   * Creates a new Access group.
   *
   * @see zone-level-access-groups-create-an-access-group
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/access/groups`);
  }

  /**
   * Deletes an Access group.
   *
   * @see zone-level-access-groups-delete-an-access-group
   */
  async delete(groupId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/access/groups/${groupId}`);
  }

  /**
   * Fetches a single Access group.
   *
   * @see zone-level-access-groups-get-an-access-group
   */
  async get(groupId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/groups/${groupId}`);
  }

  /**
   * Updates a configured Access group.
   *
   * @see zone-level-access-groups-update-an-access-group
   */
  async update(groupId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/access/groups/${groupId}`);
  }
}

/**
 * Identity Providers (additional) operations
 */
export class IdentityProvidersExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all configured identity providers.
   *
   * @see zone-level-access-identity-providers-list-access-identity-providers
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/identity_providers`);
  }

  /**
   * Adds a new identity provider to Access.
   *
   * @see zone-level-access-identity-providers-add-an-access-identity-provider
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/access/identity_providers`);
  }

  /**
   * Deletes an identity provider from Access.
   *
   * @see zone-level-access-identity-providers-delete-an-access-identity-provider
   */
  async delete(identityProviderId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/access/identity_providers/${identityProviderId}`);
  }

  /**
   * Fetches a configured identity provider.
   *
   * @see zone-level-access-identity-providers-get-an-access-identity-provider
   */
  async get(identityProviderId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/identity_providers/${identityProviderId}`);
  }

  /**
   * Updates a configured identity provider.
   *
   * @see zone-level-access-identity-providers-update-an-access-identity-provider
   */
  async update(identityProviderId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/access/identity_providers/${identityProviderId}`);
  }
}

/**
 * Organizations (additional) operations
 */
export class OrganizationsExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Returns the configuration for your Zero Trust organization.
   *
   * @see zone-level-zero-trust-organization-get-your-zero-trust-organization
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/organizations`);
  }

  /**
   * Sets up a Zero Trust organization for your account.
   *
   * @see zone-level-zero-trust-organization-create-your-zero-trust-organization
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/access/organizations`);
  }

  /**
   * Updates the configuration for your Zero Trust organization.
   *
   * @see zone-level-zero-trust-organization-update-your-zero-trust-organization
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/access/organizations`);
  }

  /**
   * Revokes a user's access across all applications.
   *
   * @see zone-level-zero-trust-organization-revoke-all-access-tokens-for-a-user
   */
  async revokeUserCreate(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/access/organizations/revoke_user`);
  }
}

/**
 * Service Tokens operations
 */
export class ServiceTokens extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all service tokens.
   *
   * @see zone-level-access-service-tokens-list-service-tokens
   */
  async list(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/service_tokens`);
  }

  /**
   * Generates a new service token. **Note:** This is the only time you can get the Client Secret. If you lose the Client Secret, you will have to create a new service token.
   *
   * @see zone-level-access-service-tokens-create-a-service-token
   */
  async create(zoneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/zones/${zoneId}/access/service_tokens`);
  }

  /**
   * Deletes a service token.
   *
   * @see zone-level-access-service-tokens-delete-a-service-token
   */
  async delete(serviceTokenId: string, zoneId: string): Promise<void> {
    return this._client.delete<void>(`/zones/${zoneId}/access/service_tokens/${serviceTokenId}`);
  }

  /**
   * Fetches a single service token.
   *
   * @see zone-level-access-service-tokens-get-a-service-token
   */
  async get(serviceTokenId: string, zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/access/service_tokens/${serviceTokenId}`);
  }

  /**
   * Updates a configured service token.
   *
   * @see zone-level-access-service-tokens-update-a-service-token
   */
  async update(serviceTokenId: string, zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/access/service_tokens/${serviceTokenId}`);
  }
}

/**
 * Cloudflare's SASE platform — secure access, device posture, DLP, tunnels, gateway policies, and network segmentation
 */
export class ZeroTrust extends APIResource {
  readonly devices: Devices;
  readonly identityproviders: IdentityProviders;
  readonly organizations: Organizations;
  readonly seats: Seats;
  readonly access: Access;
  readonly dex: Dex;
  readonly tunnels: Tunnels;
  readonly connectivitysettings: ConnectivitySettings;
  readonly dlp: Dlp;
  readonly gateway: Gateway;
  readonly networks: Networks;
  readonly riskscoring: RiskScoring;
  readonly apps: Apps;
  readonly users: Users;
  readonly documentfingerprints: DocumentFingerprints;
  readonly profiles: Profiles;
  readonly settings: Settings;
  readonly connections: Connections;
  readonly connectors: Connectors;
  readonly failover: Failover;
  readonly certificates: Certificates;
  readonly groups: Groups;
  readonly identityprovidersextra: IdentityProvidersExtra;
  readonly organizationsextra: OrganizationsExtra;
  readonly servicetokens: ServiceTokens;

  constructor(client: CloudflareClient) {
    super(client);
    this.devices = new Devices(client);
    this.identityproviders = new IdentityProviders(client);
    this.organizations = new Organizations(client);
    this.seats = new Seats(client);
    this.access = new Access(client);
    this.dex = new Dex(client);
    this.tunnels = new Tunnels(client);
    this.connectivitysettings = new ConnectivitySettings(client);
    this.dlp = new Dlp(client);
    this.gateway = new Gateway(client);
    this.networks = new Networks(client);
    this.riskscoring = new RiskScoring(client);
    this.apps = new Apps(client);
    this.users = new Users(client);
    this.documentfingerprints = new DocumentFingerprints(client);
    this.profiles = new Profiles(client);
    this.settings = new Settings(client);
    this.connections = new Connections(client);
    this.connectors = new Connectors(client);
    this.failover = new Failover(client);
    this.certificates = new Certificates(client);
    this.groups = new Groups(client);
    this.identityprovidersextra = new IdentityProvidersExtra(client);
    this.organizationsextra = new OrganizationsExtra(client);
    this.servicetokens = new ServiceTokens(client);
  }
}
