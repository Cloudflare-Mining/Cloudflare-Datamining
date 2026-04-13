/**
 * Generated CLI commands
 * @generated
 */
import type { CommandModule } from 'yargs';
import abuseReports from './abuse-reports/index.js';
import accounts from './accounts/index.js';
import acm from './acm/index.js';
import addressing from './addressing/index.js';
import ai from './ai/index.js';
import aiGateway from './ai-gateway/index.js';
import aiSearch from './ai-search/index.js';
import alerting from './alerting/index.js';
import analytics from './analytics/index.js';
import apiGateway from './api-gateway/index.js';
import argo from './argo/index.js';
import auditLogs from './audit-logs/index.js';
import billing from './billing/index.js';
import botManagement from './bot-management/index.js';
import botnetFeed from './botnet-feed/index.js';
import brandProtection from './brand-protection/index.js';
import browserRendering from './browser-rendering/index.js';
import builds from './builds/index.js';
import cache from './cache/index.js';
import calls from './calls/index.js';
import certificateAuthorities from './certificate-authorities/index.js';
import clientCertificates from './client-certificates/index.js';
import cloudConnector from './cloud-connector/index.js';
import cloudforceOne from './cloudforce-one/index.js';
import connectivity from './connectivity/index.js';
import contentScanning from './content-scanning/index.js';
import customCertificates from './custom-certificates/index.js';
import customHostnames from './custom-hostnames/index.js';
import customNameservers from './custom-nameservers/index.js';
import customPages from './custom-pages/index.js';
import d1 from './d1/index.js';
import dcvDelegation from './dcv-delegation/index.js';
import diagnostics from './diagnostics/index.js';
import dns from './dns/index.js';
import dnsFirewall from './dns-firewall/index.js';
import durableObjects from './durable-objects/index.js';
import emailRouting from './email-routing/index.js';
import emailSecurity from './email-security/index.js';
import filters from './filters/index.js';
import firewall from './firewall/index.js';
import fraud from './fraud/index.js';
import healthchecks from './healthchecks/index.js';
import hostnames from './hostnames/index.js';
import hyperdrive from './hyperdrive/index.js';
import iam from './iam/index.js';
import images from './images/index.js';
import intel from './intel/index.js';
import ips from './ips/index.js';
import keylessCertificates from './keyless-certificates/index.js';
import kv from './kv/index.js';
import leakedCredentialChecks from './leaked-credential-checks/index.js';
import loadBalancers from './load-balancers/index.js';
import logpush from './logpush/index.js';
import magicCloudNetworking from './magic-cloud-networking/index.js';
import magicNetworkMonitoring from './magic-network-monitoring/index.js';
import magicTransit from './magic-transit/index.js';
import managedTransforms from './managed-transforms/index.js';
import memberships from './memberships/index.js';
import mtlsCertificates from './mtls-certificates/index.js';
import networkInterconnects from './network-interconnects/index.js';
import organizations from './organizations/index.js';
import originCaCertificates from './origin-ca-certificates/index.js';
import originPostQuantumEncryption from './origin-post-quantum-encryption/index.js';
import originTlsClientAuth from './origin-tls-client-auth/index.js';
import pageRules from './page-rules/index.js';
import pageShield from './page-shield/index.js';
import pages from './pages/index.js';
import pipelines from './pipelines/index.js';
import queues from './queues/index.js';
import r2 from './r2/index.js';
import r2DataCatalog from './r2-data-catalog/index.js';
import radar from './radar/index.js';
import rateLimits from './rate-limits/index.js';
import realtimeKit from './realtime-kit/index.js';
import registrar from './registrar/index.js';
import requestTracers from './request-tracers/index.js';
import resourceSharing from './resource-sharing/index.js';
import resourceTagging from './resource-tagging/index.js';
import rules from './rules/index.js';
import rulesets from './rulesets/index.js';
import rum from './rum/index.js';
import schemaValidation from './schema-validation/index.js';
import scim from './scim/index.js';
import scm from './scm/index.js';
import secretsStore from './secrets-store/index.js';
import securityCenter from './security-center/index.js';
import securityTxt from './security-txt/index.js';
import snippets from './snippets/index.js';
import spectrum from './spectrum/index.js';
import speed from './speed/index.js';
import ssl from './ssl/index.js';
import stream from './stream/index.js';
import tenants from './tenants/index.js';
import tokenValidation from './token-validation/index.js';
import turnstile from './turnstile/index.js';
import urlNormalization from './url-normalization/index.js';
import urlScanner from './url-scanner/index.js';
import user from './user/index.js';
import vectorize from './vectorize/index.js';
import vulnScanner from './vuln-scanner/index.js';
import waitingRooms from './waiting-rooms/index.js';
import web3 from './web3/index.js';
import workers from './workers/index.js';
import workersForPlatforms from './workers-for-platforms/index.js';
import zaraz from './zaraz/index.js';
import zeroTrust from './zero-trust/index.js';
import zones from './zones/index.js';

export interface GeneratedCommand {
  command: CommandModule;
  hideCommand: boolean;
}

export const generatedCommands: GeneratedCommand[] = [
  { command: abuseReports, hideCommand: true },
  { command: accounts, hideCommand: false },
  { command: acm, hideCommand: true },
  { command: addressing, hideCommand: true },
  { command: ai, hideCommand: true },
  { command: aiGateway, hideCommand: true },
  { command: aiSearch, hideCommand: true },
  { command: alerting, hideCommand: true },
  { command: analytics, hideCommand: true },
  { command: apiGateway, hideCommand: true },
  { command: argo, hideCommand: true },
  { command: auditLogs, hideCommand: true },
  { command: billing, hideCommand: true },
  { command: botManagement, hideCommand: true },
  { command: botnetFeed, hideCommand: true },
  { command: brandProtection, hideCommand: true },
  { command: browserRendering, hideCommand: true },
  { command: builds, hideCommand: true },
  { command: cache, hideCommand: true },
  { command: calls, hideCommand: true },
  { command: certificateAuthorities, hideCommand: true },
  { command: clientCertificates, hideCommand: true },
  { command: cloudConnector, hideCommand: true },
  { command: cloudforceOne, hideCommand: true },
  { command: connectivity, hideCommand: true },
  { command: contentScanning, hideCommand: true },
  { command: customCertificates, hideCommand: true },
  { command: customHostnames, hideCommand: true },
  { command: customNameservers, hideCommand: true },
  { command: customPages, hideCommand: true },
  { command: d1, hideCommand: true },
  { command: dcvDelegation, hideCommand: true },
  { command: diagnostics, hideCommand: true },
  { command: dns, hideCommand: false },
  { command: dnsFirewall, hideCommand: true },
  { command: durableObjects, hideCommand: true },
  { command: emailRouting, hideCommand: true },
  { command: emailSecurity, hideCommand: true },
  { command: filters, hideCommand: true },
  { command: firewall, hideCommand: true },
  { command: fraud, hideCommand: true },
  { command: healthchecks, hideCommand: true },
  { command: hostnames, hideCommand: true },
  { command: hyperdrive, hideCommand: true },
  { command: iam, hideCommand: true },
  { command: images, hideCommand: true },
  { command: intel, hideCommand: true },
  { command: ips, hideCommand: true },
  { command: keylessCertificates, hideCommand: true },
  { command: kv, hideCommand: true },
  { command: leakedCredentialChecks, hideCommand: true },
  { command: loadBalancers, hideCommand: true },
  { command: logpush, hideCommand: true },
  { command: magicCloudNetworking, hideCommand: true },
  { command: magicNetworkMonitoring, hideCommand: true },
  { command: magicTransit, hideCommand: true },
  { command: managedTransforms, hideCommand: true },
  { command: memberships, hideCommand: true },
  { command: mtlsCertificates, hideCommand: true },
  { command: networkInterconnects, hideCommand: true },
  { command: organizations, hideCommand: true },
  { command: originCaCertificates, hideCommand: true },
  { command: originPostQuantumEncryption, hideCommand: true },
  { command: originTlsClientAuth, hideCommand: true },
  { command: pageRules, hideCommand: true },
  { command: pageShield, hideCommand: true },
  { command: pages, hideCommand: true },
  { command: pipelines, hideCommand: true },
  { command: queues, hideCommand: true },
  { command: r2, hideCommand: true },
  { command: r2DataCatalog, hideCommand: true },
  { command: radar, hideCommand: true },
  { command: rateLimits, hideCommand: true },
  { command: realtimeKit, hideCommand: true },
  { command: registrar, hideCommand: false },
  { command: requestTracers, hideCommand: true },
  { command: resourceSharing, hideCommand: true },
  { command: resourceTagging, hideCommand: true },
  { command: rules, hideCommand: true },
  { command: rulesets, hideCommand: true },
  { command: rum, hideCommand: true },
  { command: schemaValidation, hideCommand: true },
  { command: scim, hideCommand: true },
  { command: scm, hideCommand: true },
  { command: secretsStore, hideCommand: true },
  { command: securityCenter, hideCommand: true },
  { command: securityTxt, hideCommand: true },
  { command: snippets, hideCommand: true },
  { command: spectrum, hideCommand: true },
  { command: speed, hideCommand: true },
  { command: ssl, hideCommand: true },
  { command: stream, hideCommand: true },
  { command: tenants, hideCommand: true },
  { command: tokenValidation, hideCommand: true },
  { command: turnstile, hideCommand: true },
  { command: urlNormalization, hideCommand: true },
  { command: urlScanner, hideCommand: true },
  { command: user, hideCommand: true },
  { command: vectorize, hideCommand: true },
  { command: vulnScanner, hideCommand: true },
  { command: waitingRooms, hideCommand: true },
  { command: web3, hideCommand: true },
  { command: workers, hideCommand: true },
  { command: workersForPlatforms, hideCommand: true },
  { command: zaraz, hideCommand: true },
  { command: zeroTrust, hideCommand: true },
  { command: zones, hideCommand: false },
];
