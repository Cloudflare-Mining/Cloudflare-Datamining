{
	always_use_https_description: 'Redirect all requests with scheme "http" to "https". This applies to all http requests to the zone.',
	always_use_https_disabled: "**SSL** must be enabled in order to use this feature",
	always_use_https_help: `#### Always use HTTPS
Reply to all requests for URLs that use "http" with a 301 redirect to the equivalent "https" URL. If you only want to redirect for a subset of requests, consider creating an "Always use HTTPS" page rule.`,
	always_use_https_title: "Always Use HTTPS",
	automatic_https_rewrites_description: 'Automatic HTTPS Rewrites helps fix mixed content by changing "http" to "https" for all resources or links on your web site that can be served with HTTPS.',
	automatic_https_rewrites_help: `#### Why Should I use Automatic HTTPS Rewrites?
If your site contains links or references to HTTP URLs that are also available securely via HTTPS, Automatic HTTPS Rewrites can help. If you connect to your site over HTTPS and the lock icon is not present, or has a yellow warning triangle on it, your site may contain references to HTTP assets ("mixed content").

Mixed content is often due to factors not under the website owner's control such as embedded third-party content or complex content management systems. By rewriting URLs from "http" to "https", Automatic HTTPS Rewrites simplifies the task of making your entire website available over HTTPS, helping to eliminate mixed content errors and ensuring that all data loaded by your website is protected from eavesdropping and tampering.

#### Does Automatic HTTPS Rewrites fix all mixed content errors?
No. Only URLs that are known to support HTTPS will be rewritten. We use data from EFF's HTTPS Everywhere and Chrome's HSTS preload list, among others, to identify which domains support HTTPS. If your zone is not on one of these lists, only active content will be rewritten. Passive content (such as images) will not be rewritten and will still cause mixed content errors.`,
	automatic_https_rewrites_title: "Automatic HTTPS Rewrites",
	automatic_https_rewrites_api_title_get: "Get Automatic HTTPS Rewrites setting",
	automatic_https_rewrites_api_title_patch: "Change Automatic HTTPS Rewrites setting",
	crypto_custom_hostnames_card_title: "Custom Hostnames",
	crypto_custom_hostnames_contact_csup: "Contact your Customer Success Manager to enable SSL for SaaS",
	crypto_custom_hostnames_controls_add_button: "Add Custom Hostname",
	crypto_custom_hostnames_controls_enable: "Enable Cloudflare for SaaS",
	crypto_custom_hostnames_create_modal_input_origin_server_error: "Please enter an origin server",
	crypto_custom_hostnames_create_modal_input_origin_server_placeholder: "Origin Server to add, e.g. origin.example.com",
	crypto_custom_hostnames_default: "Default",
	crypto_custom_hostnames_details_modal_description_cname: "As soon as the CNAME listed in the table below is in place, the SSL certificates will be issued and deployed. Please allow a few minutes after the CNAME record has been added before attempting to connect via HTTPS.",
	crypto_custom_hostnames_details_modal_description_txt: "As soon as the TXT listed in the table below is in place, the SSL certificates will be issued and deployed. Please allow a few minutes after the TXT record has been added before attempting to connect via HTTPS.",
	crypto_custom_hostnames_details_modal_description_email: "An approval email has been sent to the email addresses listed in the table below. Once at least one recipient follows the emailed link and completes the approval, the SSL certificates will be issued and deployed. Please allow a few minutes after the approval has been completed before attempting to connect via HTTPS.",
	crypto_custom_hostnames_details_modal_description_http: "As soon as the HTTP token is in place on %{hostname}, the SSL certificates will be issued and deployed. Please allow a few minutes after the HTTP token has been added before attempting to connect via HTTPS.",
	crypto_custom_hostnames_origin_server: "Origin Server",
	crypto_custom_hostnames_search_input_placeholder: "Search by hostname",
	crypto_custom_hostnames_table_custom_hostnames: "Custom Hostname",
	crypto_custom_hostnames_table_empty: "No custom hostnames.",
	custom_hostnames_card_body: "Manage the hostnames and SSL certificates for third-parties that CNAME to your domain.",
	custom_hostnames_card_body_quota: "<0>You are currently using %{used} of %{allocated} of your Custom Hostnames.</0> If you require more, please contact your Customer Success Manager.",
	custom_hostnames_card_help_drawer: `#### What are Custom Hostnames?
Custom hostnames are third party hostnames that CNAME to your domain in order to receive the performance and security benefits of Cloudflare. Before you can use this feature your account must be configured with assistance from Cloudflare. If you are not yet an Enterprise customer, please fill our the [Enterprise contact form](https://www.cloudflare.com/plans/enterprise/contact/) and someone will be in touch shortly. If you already are an Enterprise customer, please contact your Customer Success Manager.

#### How do I set up custom hostnames?
For help setting up and validating custom hostnames, refer to [our SSL for SasS Documentation](https://developers.cloudflare.com/ssl/ssl-for-saas).

#### What does the refresh button do?
The refresh button can be used to request that Cloudflare check the status of the certificate issuance. Statuses transition automatically from Initializing to Pending Validation to Pending Issuance to Pending Deployment and then to Active. For uploaded certificates, statuses transition from Initializing to Pending Deployment and then to Active.

#### What happens if I exceed my custom hostname quota?
If you exceed your quota you will no longer be able to issue additional certificates. You will need to contact your Customer Success Manager to have this quota increased.`,
	custom_hostnames_card_fallback_origin_label: "Fallback Origin",
	custom_hostnames_card_fallback_origin_description: "Custom Hostnames will not complete verification until your Fallback Origin is active.",
	custom_hostnames_card_fallback_origin_example: "Enter a hostname under your zone to act as the default origin server for your hostnames, e.g. fallback.%{zoneName} . The Fallback Origin needs to be a proxied DNS record in your zone.",
	custom_hostnames_card_fallback_origin_status: "Fallback Origin status: ",
	custom_hostnames_card_fallback_origin_setup_warning: "You must set up the Fallback Origin before adding a new Custom Hostname.",
	custom_hostnames_card_fallback_origin_valid_domain: "You must use a valid domain name.",
	custom_hostnames_card_fallback_origin_valid_zone: "You must use a hostname that is a part of your zone.",
	custom_hostnames_card_fallback_origin_add_button: "Add Fallback Origin",
	custom_hostnames_fallback_origin_update_modal_title: "Update Fallback Origin",
	custom_hostnames_fallback_origin_update_modal_description: "Are you sure you want to change Fallback Origin from %{old} to %{new}? This will change the default origin that custom hostnames are routed to.",
	custom_hostnames_fallback_origin_delete_modal_title: "Delete Fallback Origin: %{fallback_origin}",
	custom_hostnames_fallback_origin_delete_modal_description: "Upon deletion, %{fallback_origin} will not receive requests from any of my custom hostnames.",
	custom_hostnames_fallback_origin_delete_modal_confirmation: "I understand that %{fallback_origin} will no longer serve traffic for all of my custom hostnames.",
	custom_hostnames_fallback_origin_delete_modal_description_after: "Fallback Origin %{fallback_origin} has been deleted",
	custom_hostnames_table_ssl_tls_certificate_status: "Certificate status",
	custom_hostnames_table_expires_on: "Expires on",
	custom_hostnames_table_hostname_status: "Hostname status",
	custom_hostnames_table_origin_server: "Origin server",
	custom_hostnames_table_expires_on_cloudflare: "Cloudflare",
	custom_hostnames_table_expires_on_cloudflare_tooltip: "Managed by Cloudflare",
	custom_hostnames_provisioned: "Provisioned",
	hostname_status_moved: "Moved",
	hostname_status_active_redeploying: "Active (re-deploying)",
	custom_csr_card_title: "Certificate Signing Request (CSR)",
	custom_csr_card_body: "Generate a CSR to obtain a certificate from the CA of your choice while maintaining control of the private key on Cloudflare.",
	custom_csr_table_empty: 'You currently have no CSR generated. Please click on "Generate" to get started.',
	custom_csr_card_help_drawer: `**What is a Certificate Signing Request (CSR)?**

 For those customers that prefer to acquire their own TLS certificate from a Certificate Authority (CA), Cloudflare can generate a Certificate Signing Request (CSR). A CSR contains information about your domain: your Organization Name and Address, as well as the Common Name (domain name) and SANs (Subject Alternative Names). The private key associated with the CSR will be generated by Cloudflare and will never leave our network.

Once you\u2019ve generated the CSR, you will need to obtain a certificate from the CA of your choice. Then, come back to Cloudflare, upload the certificate, and indicate the associated CSR.

**Account Level CSR:**
Customers who have Advanced Certificate Manager (ACM) enabled on their account can generate a CSR that includes hostnames from other zones in the SANs field. Keep in mind that you will still be responsible for uploading certificates to each zone individually.
`,
	custom_csr_card_generate_button: "Generate CSR",
	custom_csr_table_name: "Name",
	custom_csr_table_type: "Type",
	custom_csr_table_description: "Description",
	custom_csr_form_country: "Country",
	custom_csr_form_state: "State",
	custom_csr_form_locality: "Locality",
	custom_csr_form_organization: "Organization",
	custom_csr_form_organizational_unit: "Organizational Unit",
	custom_csr_form_common_name: "Common Name",
	custom_csr_form_subject_alternative_names: "Subject Alternative Names",
	custom_csr_form_name: "Name",
	custom_csr_form_description: "Description",
	custom_csr_form_key_type: "Key Type",
	custom_csr_form_certificate_signing_request: "Certificate Signing Request",
	custom_csr_form_created_at: "Created At",
	custom_csr_form_header: "Generate Certificate Signing Request (CSR)",
	custom_csr_form_text: "To generate a CSR, you will need to create a key pair for your server.",
	custom_csr_form_key_type_rsa: "2048-bit RSA (most compatible)",
	custom_csr_form_key_type_ecdsa: "P256v1 EC (recommended)",
	custom_csr_form_create_button: "Create",
	custom_csr_form_key_type_header: "Key Type",
	custom_csr_form_scope_header: "Scope",
	custom_csr_form_scope_zone: "Zone",
	custom_csr_form_scope_account: "Account",
	custom_csr_delete_modal_title: "Delete Custom CSR: %{id}",
	custom_csr_delete_modal_description: "You will no longer be able to use this Custom CSR with Custom Certificates.",
	custom_csr_delete_modal_confirmation: "I understand that %{id} will be permanently deleted.",
	custom_csr_delete_modal_description_after: "Custom CSR %{id} has been deleted.",
	custom_csr_form_create_success_message: "Custom CSR has been created.",
	custom_csr_details: "Details",
	custom_hostnames_form_title_create: "Add Custom Hostname",
	custom_hostnames_form_title_edit: "Edit Custom Hostname",
	custom_hostnames_form_hostname_label: "Custom Hostname",
	custom_hostnames_form_min_tls_version_label: "Minimum TLS version",
	custom_hostnames_form_min_tls_version_info: "This will override the minimum TLS version set on the zone.",
	custom_hostnames_form_certificate_type_label: "Certificate type",
	custom_hostnames_form_certificate_type_cloudflare: "Provided by Cloudflare",
	custom_hostnames_form_certificate_type_custom: "Custom certificate",
	custom_hostnames_form_certificate_type_custom_tooltip: "You must renew your Custom Certificate manually",
	custom_hostnames_form_certificate_type_custom_upgrade: "Upgrade to the Enterprise plan to upload a certificate for custom hostname.",
	custom_hostnames_form_ca_label: "SSL certificate authority",
	custom_hostnames_form_validation_method_label: "Certificate validation method",
	custom_hostnames_form_cname_option: "CNAME Validation",
	custom_hostnames_form_email_option: "Email Validation",
	custom_hostnames_form_http_option: "HTTP Validation",
	custom_hostnames_form_txt_option: "TXT Validation (recommended)",
	custom_hostnames_form_enable_wildcard: "Enable wildcard",
	custom_hostnames_form_default_origin_server: "Default origin server",
	custom_hostnames_form_custom_origin_server: "Custom origin server",
	custom_hostnames_form_custom_origin_server_tooltip: "To override the default origin server for this custom hostname, please enter a custom origin server below",
	custom_hostnames_form_custom_origin_sni_label: "Origin SNI value",
	custom_hostnames_form_custom_origin_sni_label_tooltip: "With Custom SNI enabled, Cloudflare will send the value indicated below as the SNI value when custom origins are used. For custom hostnames with wildcard enabled, unless you are sending the host header, the same value will be sent as the SNI for subdomains under the wildcard.",
	custom_hostnames_form_custom_origin_sni_host_header: "Host header",
	custom_hostnames_form_custom_origin_sni_host_header_tooltip: "If host header override is used on the custom hostname, the override value will be sent to the origin",
	custom_hostnames_form_custom_origin_sni_server: "Origin server name",
	custom_hostnames_form_custom_origin_sni_subdomain: "Subdomain of zone",
	custom_hostnames_form_custom_origin_sni_subdomain_tooltip: "Indicate a subdomain of the SaaS zone or the zone name itself to be sent as the SNI value",
	custom_hostnames_form_custom_certificate_upload_label: "Upload SSL custom certificate",
	custom_hostnames_form_custom_certificate_replace_label: "Replace SSL custom certificate",
	custom_hostnames_form_custom_key_label: "Private key",
	custom_hostnames_form_bundle_method_label: "Bundle method",
	custom_hostnames_form_create_success_message: "Custom Hostname %{hostname} has been added",
	custom_hostnames_form_edit_success_message: "Custom Hostname %{hostname} has been edited",
	custom_hostnames_form_replace_certificate_placeholder: "Leaving both certificate and key field empty will keep the current state.",
	custom_hostnames_form_replace_certificate_placeholder_min_tls_changed: "Changing minimum TLS version requires you to provide certificate and key.",
	custom_hostnames_purchase_success: "Cloudflare for SaaS Enabled",
	custom_hostnames_purchase_description: `Enable Cloudflare for SaaS to extend the benefits of the Cloudflare network to customers using your service!

Cloudflare for SaaS gets your customers:
- Vanity domain support
- TLS certificate provisioned
- Built-in DDoS Mitigation
- Bot Management and Firewall Rules (add-ons)
- And more!

Get started today with 100 custom hostnames included at no-charge.`,
	custom_hostnames_details_review: "Review the status of %{hostname}",
	custom_hostnames_details_prevalidation_name: "Hostname pre-validation TXT name",
	custom_hostnames_details_prevalidation_value: "Hostname pre-validation TXT value",
	custom_hostnames_details_wildcard_text: "Wildcard",
	custom_hostnames_details_wildcard_enabled: "Enabled",
	custom_hostnames_details_http_validation_request: "Certificate validation request",
	custom_hostnames_details_http_validation_response: "Certificate validation response",
	custom_hostnames_details_cname_name: "Certificate validation CNAME name",
	custom_hostnames_details_cname_target: "Certificate validation CNAME target",
	custom_hostnames_details_txt_name: "Certificate validation TXT name",
	custom_hostnames_details_txt_value: "Certificate validation TXT value",
	custom_hostnames_details_email_recipients: "Certificate validation email recipients",
	custom_hostnames_details_description_deployed_by_cloudflare: "The certificate has been successfully issued and deployed. ",
	custom_hostnames_details_description_deployed_custom_cert: "The custom certificate has been successfully deployed. ",
	custom_hostnames_delete_modal_title: "Delete Custom Hostname: %{hostname}",
	custom_hostnames_delete_modal_description: "Your customer traffic on this Custom Hostname will no longer proxy through Cloudflare.",
	custom_hostnames_delete_modal_confirmation: "I understand that %{hostname} will no longer be proxied by Cloudflare upon deletion",
	custom_hostnames_delete_modal_description_after: "Custom Hostname %{hostname} has been deleted.",
	crypto_certificates: "%{smart_count} certificate |||| %{smart_count} certificates",
	crypto_hosts: "%{smart_count} host |||| %{smart_count} hosts",
	crypto_hosts_remaining: "and %{smart_count} other host |||| and %{smart_count} other hosts",
	crypto_origin_certificates_certificate_download: "Download certificate",
	crypto_origin_certificates_certificate_label: "Origin Certificate",
	crypto_origin_certificates_certificate_tooltip: "The certificate below has been issued by Cloudflare for use on your origin server with the hostnames you provided during the previous step. If you require additional hostnames that were not included in your original request, you should re-generate the certificate.",
	crypto_origin_certificates_control: "Create Certificate",
	crypto_origin_certificates_csr_label: "Certificate Signing Request",
	crypto_origin_certificates_csr_paste_from_file: "Paste from file",
	crypto_origin_certificates_csr_placeholder: "Paste Certificate Signing Request",
	crypto_origin_certificates_csr_tooltip: "",
	crypto_origin_certificates_description: `Generate a free TLS certificate signed by Cloudflare to install on your origin server.

Origin Certificates are only valid for encryption between Cloudflare and your origin server.`,
	crypto_origin_certificates_help: `#### What are Origin Certificates?
Cloudflare Origin Certificates are free TLS certificates issued by Cloudflare that can be installed on your origin server to facilitate end-to-end encryption for your visitors using HTTPS. Click \u201CCreate Certificate\u201D and follow the instructions provided to generate and install a certificate. If not already set, you can now optionally change the SSL setting about to use "Full (strict)" mode.
#### Hostname/Wildcard Coverage
Certificates may be generated with up to 100 individual Subject Alternative Names (SANs). A SAN can take the form of a fully-qualified domain name (www.example.com) or a wildcard (*.example.com); IP addresses are not permitted as SANs on Cloudflare Origin Certificates. Wildcards may only cover one level, but can be used multiple times on the same certificate for broader coverage (e.g., *.example.com and *.secure.example.com may co-exist).
#### Expiration
Note that by default, newly generated certificates are valid for 15 years. If you wish to generate shorter-lived certificates (e.g., as short as 7 days), you should use the API or CLI tools provided.
#### Revocation
If you misplace your key material or wish to indicate that a certificate should otherwise no longer be trusted, you can click the "x" icon to the far-right of the Origin Certificate and click "OK". This process cannot be undone.
#### Automated Issuance
If you wish to automate the issuance of Origin Certificates, click the CLI or API links to the right of the Help link to see additional instructions.`,
	crypto_origin_certificates_hostnames_label: "Hostnames",
	crypto_origin_certificates_hostnames_error_duplicate: "Error: Hostname '%{hostname}' is already listed.",
	crypto_origin_certificates_hostnames_error_invalid: "Error: Invalid hostname",
	crypto_origin_certificates_hostnames_error_no_input: "Error: No input.",
	crypto_origin_certificates_key_formats_label: "Key format",
	crypto_origin_certificates_key_formats_option_der: "DER",
	crypto_origin_certificates_key_formats_option_pem: "PEM (Default)",
	crypto_origin_certificates_key_formats_option_pkcs12: "PKCS #12",
	crypto_origin_certificates_key_formats_option_pkcs7: "PKCS #7",
	crypto_origin_certificates_key_formats_tooltip: "Select the key pair format that best matches your environment. Most OpenSSL-based web servers such as Apache and NGINX expect PEM files (Base64 encoded ASCII), but will also work with binary DER files. Windows and Apache Tomcat users will want to opt for PKCS#7.",
	crypto_origin_certificates_validity_days_label_7_days: "7 days",
	crypto_origin_certificates_validity_days_label_30_days: "30 days",
	crypto_origin_certificates_validity_days_label_90_days: "90 days",
	crypto_origin_certificates_validity_days_label_1_year: "1 year",
	crypto_origin_certificates_validity_days_label_2_year: "2 years",
	crypto_origin_certificates_validity_days_label_3_year: "3 years",
	crypto_origin_certificates_validity_days_label_15_year: "15 years",
	crypto_origin_certificates_modal_create_description: "Follow the steps below to generate and install a certificate on your origin server.",
	crypto_origin_certificates_modal_create_title: "Origin Certificate Installation",
	crypto_origin_certificates_modal_download_description: "Follow the steps below to install a certificate on your origin server.",
	crypto_origin_certificates_modal_download_title: "Origin Certificate Download",
	crypto_origin_certificates_modal_download_unsupported: "This is not supported in your browser!",
	crypto_origin_certificates_modal_step_generate_accordion_auto_generate_csr: "Let Cloudflare generate a private key and a CSR",
	crypto_origin_certificates_modal_step_generate_accordion_provide_own_csr: "I have my own private key and CSR",
	crypto_origin_certificates_modal_step_generate_description: "**The first step in generating a certificate for your origin is creating a private key and a Certificate Signing Request (CSR).** You can provide your own CSR or we can generate a key and CSR using your web browser.",
	crypto_origin_certificates_modal_step_generate_expiration: "**Choose how long before your certificate expires.** By default your certificate will be valid for fifteen (15) years. If you'd like to decrease how long your certificate will be valid make a selection below.",
	crypto_origin_certificates_modal_step_generate_expiration_days: "%{smart_count} day |||| %{smart_count} days",
	crypto_origin_certificates_modal_step_generate_expiration_label: "Certificate Validity",
	crypto_origin_certificates_modal_step_generate_expiration_years: "%{smart_count} year |||| %{smart_count} years",
	crypto_origin_certificates_modal_step_generate_select_hostnames: "**List the hostnames (including wildcards) on your origin that the certificate should protect.** By default your origin certificate covers the apex of your domain (**example.com**) and a wildcard (***.example.com**). If there are others you wish to add, e.g., those not covered by the wildcard such as **one.two.example.com**, you can add them below.",
	crypto_origin_certificates_modal_step_install_description: '**Save both the private key and certificate below to your web server.** To save, copy the contents of the boxes below and paste them into different files on your web server, e.g., example.com.pem and example.com.key. After saving, select your web server from the dropdown and click the "Show Instructions" button for an installation guide.',
	crypto_origin_certificates_modal_step_install_private_key: "Copy the contents of your private key below to your web server and set file permissions such that only your http server can access it. Additionally, you can optionally encrypt this file and provide a password to decrypt it during your origin web server startup. The private key data will not be stored at Cloudflare and will no longer be accessible once the creation is complete. Please make sure you have a local copy of this key.",
	crypto_origin_certificates_private_key_download: "Download private key",
	crypto_origin_certificates_private_key_label: "Private key",
	crypto_origin_certificates_private_key_tooltip: "Protect this private key as you would an important password as anyone with access to it may be able to decrypt your HTTPS traffic. If this key is compromised, you should revoke the certificate from the Origin Certificates table and then re-generate it using a new key.",
	crypto_origin_certificates_request_types_label: "Private key type",
	crypto_origin_certificates_request_types_not_supported: "Your browser can not generate %{request_type} CSRs. Try a different key type or provide your own CSR.",
	crypto_origin_certificates_request_types_option_origin_ecc: "ECDSA",
	crypto_origin_certificates_request_types_option_origin_rsa: "RSA",
	crypto_origin_certificates_request_types_tooltip: "",
	crypto_origin_certificates_table_delete_button: "Revoke",
	crypto_origin_certificates_table_delete_confirm_agreement: "I understand that revoking this certificate may cause requests to my origin to fail.",
	crypto_origin_certificates_table_delete_confirm_description: `Revoking this certificate will instruct our edge to immediately (and irreversibly) stop trusting this certificate. Connections to your origin server will fail, and your users will see an error until the certificate is replaced.

If you wish to proceed, please check the box below and click the "Revoke" button. Before doing so you are encouraged to either issue and install a new certificate on your origin, or downgrade from Strict Mode to Full or Flexible.`,
	crypto_origin_certificates_table_delete_confirm_title: "Revoke Origin Certificate",
	crypto_origin_certificates_table_download_button: "Download",
	crypto_origin_certificates_table_empty: "No Certificates.",
	crypto_origin_certificates_table_expires_on: "Expires On",
	crypto_origin_certificates_table_expiring_soon: "",
	crypto_origin_certificates_table_has_expired: "",
	crypto_origin_certificates_table_hosts: "Hosts",
	crypto_origin_certificates_table_request_type: "Type",
	crypto_origin_certificates_title: "Origin Certificates",
	crypto_origin_certificates_web_server_label: "Web Server for Installation",
	crypto_origin_certificates_web_server_option_apache_httpd: "Apache httpd",
	crypto_origin_certificates_web_server_option_iis7: "Microsoft Internet Information Services (IIS) 7.0",
	crypto_origin_certificates_web_server_option_iis8: "Microsoft Internet Information Services (IIS) 8.0",
	crypto_origin_certificates_web_server_option_nginx: "NGINX",
	crypto_origin_certificates_web_server_option_other: "Other (Not Listed)",
	crypto_origin_certificates_web_server_option_tomcat: "Apache Tomcat",
	crypto_origin_certificates_web_server_read_instructions: 'For installation instructions specific to your type of origin web server, visit our support guide on <a href="https://support.cloudflare.com/hc/articles/115000479507" target="_blank">managing Origin CA certificates</a>.',
	disable_ussl_description: "Disabling Universal SSL removes any currently active Universal SSL certificates for your zone from the edge and prevents any future Universal SSL certificates from being ordered. If there are no dedicated certificates or custom certificates uploaded for the domain, visitors will be unable to access the domain over HTTPS.",
	disable_ussl_disable_button: "Disable Universal SSL",
	disable_ussl_disabled_notification: "Universal SSL has been disabled",
	disable_ussl_enable_button: "Enable Universal SSL",
	disable_ussl_enabled_notification: "Universal SSL has been enabled",
	disable_ussl_help: `#### What is Universal SSL?

[Universal SSL](https://developers.cloudflare.com/ssl/edge-certificates/universal-ssl) is the set of certificates that Cloudflare freely orders for all domains on Cloudflare so that visitors can access domains on Cloudflare safely and securely using the [latest technologies](https://blog.cloudflare.com/introducing-http2/). 

#### Why would I disable Universal SSL?

Some site owners may want to manage their own SSL certificates in order to be compliant with their own standard operating procedures or policies. Alternately, others may only want to trust specific Certificate Authorities (CA) outside the CAs Cloudflare currently partners with to issue Universal SSL certificates.

#### What happens when I disable Universal SSL?

Any Universal SSL certificates available will be removed from our edge and no longer available for the domain. No new Universal SSL certificates will be ordered for the domain until Universal SSL is re-enabled. 

The following Cloudflare features, when enabled after disabling Universal SSL, may result in visitors being unable to visit your domain unless you have uploaded a custom certificate or purchased a dedicated certificate:

* HSTS
* Always Use HTTPS
* Opportunistic Encryption
* Any Page Rules redirecting traffic to HTTPS

Similarly, any HTTP redirect to HTTPS at the origin while the Cloudflare proxy is enabled will result in users being unable to visit your site without a valid certificate at Cloudflare's edge. 

If you do not have a valid custom or dedicated certificate at Cloudflare's edge and are unsure if any of the above Cloudflare settings are enabled or if any HTTP redirects exist at your origin, we advise leaving Universal SSL enabled for your domain. For more help, please check our [Universal SSL documentation](https://developers.cloudflare.com/ssl/edge-certificates/universal-ssl).`,
	disable_ussl_title: "Disable Universal SSL",
	disable_ussl_modal_body: `By disabling Universal SSL, you understand that the following Cloudflare settings and preferences will result in visitors being unable to visit your domain unless you have uploaded a custom certificate or purchased a dedicated certificate.

* HSTS
* Always Use HTTPS
* Opportunistic Encryption
* Any Page Rules redirecting traffic to HTTPS

Similarly, any HTTP redirect to HTTPS at the origin while the Cloudflare proxy is enabled will result in users being unable to visit your site without a valid certificate at Cloudflare's edge.

If you do not have a valid custom or dedicated certificate at Cloudflare's edge and are unsure if any of the above Cloudflare settings are enabled, or if any HTTP redirects exist at your origin, we advise leaving Universal SSL enabled for your domain.`,
	disable_ussl_modal_body_managed_cname_error: "Managed CNAME and SSL for SaaS require Universal SSL to remain enabled. Contact Cloudflare Support for assistance.",
	disable_ussl_modal_title_managed_cname_error: "Unable to disable Universal SSL",
	ussl_ca_card_changed_notification: "Universal SSL Certificate Authority successfully changed.",
	ussl_ca_card_title: "Universal SSL Certificate Authority",
	ussl_ca_card_description: "Select the certificate authority (CA) that will be used for issuing your Universal SSL certificate.",
	ussl_ca_card_help: `#### Notes about Changing Certificate Authorities

When changing CAs, we will keep your old certificate active at the edge until the new certificate has been validated and issued.  Once available, the new certificate will be marked active and we will remove the certificate from the previous CA.

If changing from a legacy CA, you will not be able to return to this CA once this change has completed. 

 #### Notes for partial zones 

 Changing the CA on a partial zone will only affect new certificate orders on a going forward basis.  This will not automatically change the CA for currently active certificates`,
	ussl_ca_modal_body_partial_zone: "This will switch your Universal SSL Certificate Authority from **%{current}** to **%{target}** and all certificates issued *going forward* will be issued with **%{target}**.",
	ussl_ca_modal_body: "This will switch your Universal SSL Certificate Authority from **%{current}** to **%{target}** and immediately reissue your Universal SSL Certificate. Once the %{target} certificate is successfully ordered, it will replace your %{current} certificate.",
	ussl_ca_modal_body_sni_caveat: `
 Note that by selecting %{target} you will no longer allow for non-SNI client support with Universal SSL.`,
	hsts_button_edit: "Change HSTS Settings",
	hsts_button_enable: "Enable HSTS",
	hsts_configuration_display_enabled: "Status: %{status}",
	hsts_configuration_display_include_subdomains: "Include subdomains: %{status}",
	hsts_configuration_display_max_age: "Max-Age: %{time}",
	hsts_configuration_display_preload: "Preload: %{status}",
	hsts_configuration_enabled_description: "Serve HSTS headers with all HTTPS requests",
	hsts_configuration_enabled_title: "Enable HSTS (Strict-Transport-Security)",
	hsts_configuration_include_subdomains_description: `Every domain below this will inherit the same HSTS headers
 **Caution**: If any of your subdomains do not support HTTPS, they will become inaccessible.`,
	hsts_configuration_include_subdomains_title: "Apply HSTS policy to subdomains (includeSubDomains)",
	hsts_configuration_max_age_0: "0 (Disable)",
	hsts_configuration_max_age_description: "Specify the duration HSTS headers are cached in browsers",
	hsts_configuration_max_age_recommended: "(Recommended)",
	hsts_configuration_max_age_title: "Max Age Header (max-age)",
	hsts_configuration_nosniff_description: 'Send the "X-Content-Type-Options: nosniff" header to prevent Internet Explorer and Google Chrome from MIME-sniffing away from the declared Content-Type.',
	hsts_configuration_nosniff_title: "No-Sniff Header",
	hsts_configuration_preload_description: `Permit browsers to preload HSTS configuration automatically
 **Caution**: Preload can make a website without HTTPS support completely inaccessible.`,
	hsts_configuration_preload_title: "Preload",
	hsts_configuration_step1_description: `HTTP Strict Transport Security (HSTS) can substantially improve the security of your website. However, there are important considerations to keep in mind when enabling HSTS:

**HTTPS (SSL) must be enabled in order to use HSTS.**

- If you turn on HSTS and do not have HTTPS for your website, browsers will not accept the HSTS setting.
- If you have HSTS enabled and leave Cloudflare, you need to continue to support HTTPS through a new service provider otherwise your site will become inaccessible to visitors until you support HTTPS again.
- If you turn off Cloudflare\u2019s HTTPS while HSTS is enabled, and you don't have a valid SSL certificate on your origin server, your website will become inaccessible to visitors.

**Note**: Disabling Cloudflare\u2019s HTTP can be done in several ways: Grey clouding a subdomain in your DNS records, \u201CPausing\u201D the Cloudflare service, or having a misconfigured custom SSL certificate through your Cloudflare dashboard (e.g., invalid SSL certificates, expired certificates, or mismatched host names).

**If you need to disable HTTPS on your domain**, you must first disable HSTS in your Cloudflare dashboard and wait for the max-age to lapse to guarantee that every browser is aware of this change before you can disable HTTPS. The average max-age is six months (you can set the max-age in the next step). **If you remove HTTPS before disabling HSTS your website will become inaccessible to visitors for up to the max-age or until you support HTTPS again.** Because disabling HTTPS on an HSTS enabled website can have these consequences, we strongly suggest that you have a committed HTTPS service in place before enabling this feature.

[More information about HSTS](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/http-strict-transport-security)`,
	hsts_configuration_step1_title: "Acknowledgement",
	hsts_configuration_step2_description: "**Caution**: If misconfigured, HTTP Strict Transport Security (HSTS) can make your website inaccessible to users for an extended period of time.",
	hsts_configuration_step2_title: "Configure",
	hsts_description: "Enforce web security policy for your website.",
	hsts_help: `#### What is HTTP Strict Transport Security?
HTTP Strict Transport Security (HSTS, RFC 6797) is a header which allows a website to specify and enforce security policy in client web browsers. This policy enforcement protects secure websites from downgrade attacks, SSL stripping, and cookie hijacking. It allows a web server to declare a policy that browsers will only connect using secure HTTPS connections, and ensures end users do not "click through" critical security warnings. HSTS is an important security mechanism for high security websites. HSTS headers are only respected when served over HTTPS connections, not HTTP.

HSTS generally has the following behavior in user web browsers:

- Insecure HTTP links become secure HTTPS links
- SSL certificate warnings or other errors show an error message and cannot be bypassed by the user

#### Considerations

One critical consideration when using HSTS on Cloudflare is that once HSTS is turned on, your website must continue to have a valid HTTPS configuration conforming with the HSTS header to avoid making the website inaccessible to users. If SSL is disabled through other means ("grey clouding" a Flexible SSL website, or moving a website off Cloudflare), it is possible the website will be inaccessible to users for the duration of cached max-age headers, or until HTTPS is re-established and an HSTS header with value 0 is served. Consequently, HSTS configuration requires reading and acknowledging understanding of a warning message.

#### Max-Age Header

HSTS includes a "max-age" parameter which specifies the duration HSTS will continue to be cached and enforced by the web browser. This parameter generally is set at 6 months by default, however you must use a minimum of 12 months if you wish to be included in the HSTS Preload list (see below). The special value of "0" means HSTS is disabled and will no longer be cached by the client web browser. For the amount of time specified in the max-age header after a website is successfully accessed over HTTPS, the browser will enforce this HSTS policy, requiring HTTPS with correctly-configured certificates.

#### Including Subdomains with HSTS

Cloudflare supports the "includeSubDomains" parameter in HSTS headers. This parameter applies the HSTS policy from a parent domain (such as example.com) to subdomains (such as www.development.example.com or api.example.com). Caution is encouraged with this header, as if any subdomains do not work with HTTPS they will become inaccessible.

#### HSTS Preload

Cloudflare supports HSTS preload. This flag signals to web browsers that a website's HSTS configuration is eligible for preloading, that is, inclusion into the browser's core configuration. Without preload, HSTS is only set after an initial successful HTTPS request, and thus if an attacker can intercept and downgrade that first request, HSTS can be bypassed. With preload, this attack is prevented.

Once HSTS is configured, you must visit each browser's preload submission URL manually. For Chrome, Firefox/Mozilla and Safari use the [Chrome preload list](https://hstspreload.appspot.com/). Microsoft IE HSTS support is being updated.`,
	hsts_title: "HTTP Strict Transport Security (HSTS)",
	hsts_api_title_get: "Get Security Header (HSTS) setting",
	hsts_api_title_patch: "Change Security Header (HSTS) setting",
	min_tls_version_1_0: "TLS 1.0 (default)",
	min_tls_version_1_1: "TLS 1.1",
	min_tls_version_1_2: "TLS 1.2",
	min_tls_version_1_3: "TLS 1.3",
	min_tls_version_description: "Only allow HTTPS connections from visitors that support the selected TLS protocol version or newer.",
	min_tls_version_help: `#### What is the Minimum TLS Version?

The minimum TLS version setting specifies the earliest version of TLS a visitor must support in order to connect to your domain using TLS. For example, if TLS 1.1 is selected, visitors attempting to connect with TLS 1.0 will be rejected while visitors attempting to connect using TLS 1.1, 1.2, or 1.3 (if enabled) will be allowed to connect.

#### Why would I specify a minimum TLS version?

Some security standards, such as PCI DSS 3.2, enforce strong cryptographic standards where strong cryptography is defined as TLS 1.1 or newer. As an example, specifying TLS 1.1 can help your domain become compliant with PCI DSS 3.2`,
	min_tls_version_title: "Minimum TLS Version",
	min_tls_api_title_get: "Get Minimum TLS Version setting",
	min_tls_api_title_patch: "Change Minimum TLS Version setting",
	ciphers_api_title_get: "Get Cipher Suites Whitelist setting",
	ciphers_api_title_patch: "Change Cipher Suites Whitelist setting",
	cipher_suites_description: "To configure cipher suites, use the API. <0>Learn More about cipher suites</0>.",
	opportunistic_encryption_description: 'Opportunistic Encryption allows browsers to benefit from the improved performance of HTTP/2 by letting them know that your site is available over an encrypted connection. Browsers will continue to show "http" in the address bar, not "https".',
	opportunistic_encryption_help: `#### Is Opportunistic Encryption a replacement for HTTPS?
No. HTTPS should still be used when both strong encryption and authentication are required. HTTP Opportunistic Encryption provides a means of enabling TLS when needed for other protocols such as HTTP/2. It does not provide the same indications of security as HTTPS (the green lock icon in most browser address bars).`,
	opportunistic_encryption_title: "Opportunistic Encryption",
	ssl_cert_signature: {
		SM2: "SM2",
		SHA1WithRSA: "SHA1 RSA",
		SHA256WithRSA: "SHA256 RSA",
		SHA384WithRSA: "SHA384 RSA",
		SHA512WithRSA: "SHA512 RSA",
		ECDSAWithSHA1: "ECDSA SHA1",
		ECDSAWithSHA256: "ECDSA SHA256",
		ECDSAWithSHA384: "ECDSA SHA384",
		ECDSAWithSHA512: "ECDSA SHA512"
	},
	ssl_certs_add_custom_button: "Upload Custom SSL Certificate",
	ssl_certs_add_custom_description: "Enter private key and certificate.",
	ssl_certs_add_custom_title: "Upload custom SSL certificate and key",
	ssl_certs_add_custom_type_select_label: "Legacy Client Support",
	ssl_certs_add_custom_type_select_content: "Enable support for legacy clients which do not include SNI in the TLS handshake.",
	ssl_certs_add_custom_type_select_sni_custom: "Modern (recommended)",
	ssl_certs_add_custom_type_select_legacy_custom: "Legacy",
	ssl_certs_add_keyless_button: "Upload Keyless SSL Certificate",
	ssl_certs_add_keyless_title_with_context: "Upload Keyless %{signature_algorithm} SSL Certificate and Key for %{hosts}",
	ssl_certs_analyze_success: "This certificate has a %{signature_algorithm} signature algorithm. It will be added to your certificate pack for %{hosts}.",
	ssl_certs_confirm_record_delete: "Are you sure you want to delete this certificate?",
	ssl_certs_details_bundle_method: "Bundle Method",
	ssl_certs_details_expires_on: "Expiration",
	ssl_certs_details_geo_restrictions: "Geo Restrictions",
	ssl_certs_details_hosts: "Hosts",
	ssl_certs_details_issuer: "Issuer",
	ssl_certs_details_modified_on: "Modified",
	ssl_certs_details_priority: "Priority",
	ssl_certs_details_signature: "Signature",
	ssl_certs_details_status: "Status",
	ssl_certs_details_title: "Certificate details",
	ssl_certs_details_type: "Type",
	ssl_certs_details_uploaded_on: "Uploaded",
	ssl_certs_edit_custom_description: "Uploading a new certificate and key will replace the existing certificate and key.",
	ssl_certs_edit_custom_title: "Replace SSL certificate and key",
	ssl_certs_edit_keyless_description_top: "Configure keyless SSL server name, IP address, and port.",
	ssl_certs_edit_keyless_description_bottom: "**Note:** To use a new certificate, you must delete this certificate first.",
	ssl_certs_edit_keyless_title: "Edit Keyless SSL Settings",
	ssl_certs_error_expired: "This certificate has expired. Please renew this certificate and upload it.",
	ssl_certs_error_expires_soon: "This certificate will expire in %{time} (on %{date}).  Please renew this certificate and upload it before expiration.",
	ssl_certs_form_bundle_method: "Bundle Method",
	ssl_certs_form_bundle_method_type_force: "User Defined",
	ssl_certs_form_bundle_method_type_optimal: "Modern",
	ssl_certs_form_bundle_method_type_ubiquitous: "Compatible (recommended)",
	ssl_certs_form_certificate: "SSL Certificate",
	ssl_certs_form_certificate_placeholder: "Paste certificate as shown on the lines below: %{certificate}",
	ssl_certs_form_certificate_required: "SSL Certificate is a required field",
	ssl_certs_form_certificate_min: "SSL Certificate must be at least 100 characters",
	ssl_certs_form_custom_action: "Upload Custom Certificate",
	ssl_certs_form_geo_all: "Distribute to all Cloudflare data centers (optimal performance)",
	ssl_certs_form_geo_custom: "Custom (set via API)",
	ssl_certs_form_geo_eu: "Distribute only to E.U. data centers",
	ssl_certs_form_geo_highest_security: "Distribute only to highest security data centers",
	ssl_certs_form_geo_label_beta: "Private Key Restriction <0>Beta</0>",
	ssl_certs_form_geo_required: "Private Key Restriction required",
	ssl_certs_form_geo_us: "Distribute only to U.S. data centers",
	ssl_certs_form_ip: "Key server hostname",
	ssl_certs_form_ip_required: "Key server hostname required",
	ssl_certs_form_ip_placeholder: "Hostname or IP address of the key server",
	ssl_certs_form_name: "Unique label for the key server, e.g., test-keyless, production-keyless-1, etc.",
	ssl_certs_form_pending_notice_title: "Note: Zone is not yet active on Cloudflare",
	ssl_certs_form_pending_notice_body: "Custom certificates are automatically deleted from Cloudflare at %{date} for zones that are not yet active. If you do not activate your zone by %{date}, you will need to re-upload the custom certificate.",
	ssl_certs_form_port: "Key server port",
	ssl_certs_form_port_placeholder: "TCP port of the key server; enter 2407 to use default port",
	ssl_certs_form_port_required: "Key server port is a required field",
	ssl_certs_form_private_key: "Private key",
	ssl_certs_form_csr_type: "Certificate Signing Request (CSR)",
	ssl_certs_form_provided_type: "Private Key",
	ssl_certs_form_private_key_type: "Encoded Mode",
	ssl_certs_form_private_key_placeholder: "Paste key as shown on the lines below: %{key}",
	ssl_certs_form_private_key_required: "Private key required",
	ssl_certs_form_custom_csr_id_required: "Custom CSR ID required",
	ssl_certs_form_regions_description: "Specify the region below where your private key can be held locally for optimal TLS performance. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center.",
	ssl_certs_cert_form_upload: "Paste certificate from file",
	ssl_certs_key_form_upload: "Paste private key from file",
	ssl_certs_help: `#### Certificates

Cloudflare automatically provisions SSL (TLS) certificates for websites on all plans making HTTPS easy and automatic. Provisioned certificates on paid plans are [compatible with older browsers](https://developers.cloudflare.com/ssl/ssl-tls/browser-compatibility).

Domains at the Business or Enterprise level of service can [upload custom certificates](https://developers.cloudflare.com/ssl/edge-certificates/custom-certificates) for more advanced configurations. During upload of a custom certificate, the regions where the private key can be locally held may be specified using the 'Private Key Restriction' option. For optimal TLS performance, the default (distribution to all data centers) should be selected. HTTPS requests to any regions not permitted will use Keyless SSL technology to complete the handshake with the nearest allowed region.

Multiple custom certificates with the same hostnames but different signature algorithms can be [uploaded to form a certificate pack](https://developers.cloudflare.com/ssl/edge-certificates/custom-certificates) to provide compatibility for older browsers. Enterprise customers can request the ability to upload multiple custom packs from their account managers.

#### Terms

* **Keyless SSL:** Keyless SSL is a Cloudflare-proprietary technology that allows customers to retain their SSL keys on-premise, never sharing custody of those private keys. To configure Keyless SSL, Enterprise customers should contact their account manager. Customers interested in upgrading for Keyless SSL should contact our [Enterprise sales team](https://www.cloudflare.com/enterprise-service-request).

* **Hosts:** Hosts is the set of hostnames covered by the certificates in the certificate pack. For custom and Keyless certificate packs, the set of hostnames is determined by the hostnames present in the common name (CN) and subject alternative name (SAN) fields on the first certificate added to the pack.

* **Type:** The type of a certificate pack indicates whether the pack contains Cloudflare-issued certificates, user-uploaded custom certificates, or Keyless SSL certificates.

* **Certificates:** This column indicates how many certificates have been added to the pack. Mouse-over the info icon to reveal which certificates have been uploaded and when these certificates expire.`,
	ssl_certs_keyless_name_keyless_server: "Key server label",
	ssl_certs_modal_description: "You can upload multiple certificates for the hosts listed above and they will count as 1 of your certificate slots. Valid certificate types are listed below. Other certificate types can be uploaded in the primary SSL menu, but will not be included in this certificate package, and will count as one of your available SSL certificate slots.",
	ssl_certs_modal_description_managed: "The certificates in the pack listed below are managed and auto-renewed by Cloudflare.",
	ssl_certs_remove_secondary: "You may not delete your primary certificate until all secondary certificates have been deleted",
	ssl_certs_table_certificates: "certificates",
	ssl_certs_table_auto_renewed: "Auto-renewed",
	ssl_certs_table_certificate: "Certificate",
	ssl_certs_table_empty_text: "No certificates.",
	ssl_certs_table_type: "Type",
	ssl_certs_select_custom_csr: "Generate a CSR to obtain a certificate from the CA of your choice while maintaining control of the private key on Cloudflare.",
	ssl_edge_certs_biz_ent_description: `Your plan allows you to upload custom certificates, which you must renew and re-upload prior to expiration.
You can upload %{legacy_custom}.
You can upload %{sni_custom}.
`,
	ssl_dedicated_certs_is_at_least_business_order: "You may also <0>order an auto-renewing certificate</0>.",
	ssl_dedicated_certs_certificate_authority: "Certificate Authority",
	ssl_dedicated_certs_certificates_quota_both: "You are currently using %{dedicated_in_use} of %{dedicated_quota} of your Dedicated SSL Certificates and %{custom_in_use} of %{custom_quota} of your Dedicated SSL Certificates with Custom Hostnames. ",
	ssl_dedicated_certs_certificates_quota_ent_contact: "If you require more certificates please contact your Customer Success Engineer. ",
	ssl_dedicated_certs_certificates_quota_ent_none_included: "Your account does not include any Dedicated SSL Certificates. Please contact your Customer Success Engineer.",
	ssl_dedicated_certs_certificates_quota_none: "You do not have any Dedicated SSL Certificates or Dedicated SSL Certificates with Custom Hostnames. ",
	ssl_dedicated_certs_certificates_quota_only_dedicated_certs: "You are currently using %{in_use} of %{quota} of your Dedicated SSL Certificates and do not have any Dedicated SSL Certificates with Custom Hostnames. ",
	ssl_dedicated_certs_certificates_quota_only_dedicated_custom_certs: "You are currently using %{in_use} of %{quota} of your Dedicated SSL Certificates with Custom Hostnames and do not have any Dedicated SSL Certificates. ",
	ssl_dedicated_certs_delete_modal_button: "Delete Certificate",
	ssl_dedicated_certs_delete_modal_confirm_agreement: "I understand that any hostnames not covered by my Universal SSL or uploaded certificates will no longer be reachable over HTTPS once I delete this certificate.",
	ssl_dedicated_certs_delete_modal_confirm_description: "Immediately after confirming the downgrade, your certificates will be deleted and no longer served to visitors.",
	ssl_dedicated_certs_delete_modal_failure_note: 'We were unable to delete your certificate. Please <a href="https://support.cloudflare.com" target="_blank">contact support</a> for assistance.',
	ssl_dedicated_certs_delete_modal_failure_subtitle: "Your certificate could not be deleted.",
	ssl_dedicated_certs_delete_modal_success_note: 'However, you still have an active subscription (which can be used to place another order). To cancel this subscription and cease monthly billing, please visit the <a href="%{base_url}/account/subscriptions" target="_blank">Subscriptions</a> page.',
	ssl_dedicated_certs_delete_modal_success_subtitle: "Your certificate has been deleted and will no longer be served to visitors.",
	ssl_dedicated_certs_delete_modal_title: "Delete Dedicated Certificate",
	ssl_dedicated_certs_free_description_v2: `Manage and purchase SSL certificates that will be served to your web visitors.

Your plan includes a shared Cloudflare Universal SSL certificate. To get a dedicated certificate with custom hostnames <0>place a certificate order</0>.

Your plan does not allow you to upload any SSL certificates, but you may <1>order an auto-renewing certificate</1> or <2>upgrade</2> to the Business plan to enable this feature.`,
	ssl_dedicated_certs_free_description_upgrade_v2: "upgrade",
	ssl_dedicated_certs_manage_modal_subtitle_view: "Review the certificates that comprise your certificate pack. If you would require custom hostnames please order a Dedicated Certificate with Custom Hostnames.",
	ssl_dedicated_certs_manage_modal_subtitle_view_custom: "Review the certificates that comprise your certificate pack. If you need to add or remove hostnames, please delete the certificate and place another order. You will not be charged again as you have an active subscription.",
	ssl_dedicated_certs_order_button: "Order SSL Certificate",
	ssl_dedicated_certs_order_modal_confirm_custom_hostname_description: `Add hostnames or wildcards by typing them into the input box. The apex of your domain (%{zone_name}) and one-level of wildcard (*.%{zone_name}) have been added by default.

You may enter up to %{max_hostnames} hostnames or wildcards (%{remaining_count} remaining):`,
	ssl_dedicated_certs_order_modal_confirm_custom_hostname_upgrade_v2: "To add up to 50 hostnames, order a Dedicated Certificate with Custom Hostnames.",
	ssl_dedicated_certs_order_modal_confirm_header: "Certificate Hostnames",
	ssl_dedicated_certs_order_modal_confirm_hostname_description: "The apex of your domain (%{zone_name}) and one-level of wildcard (*.%{zone_name}) have been added by default. The base wildcard can be removed when ordering a dedicated certificate with custom hostnames.",
	ssl_dedicated_certs_order_modal_confirm_title: "Add Hostnames",
	ssl_dedicated_certs_order_modal_validity_period_title: "Certificate Validity Period",
	ssl_dedicated_certs_order_modal_validity_period_body: `Choose how long until your Dedicated Custom certificate expires.
By default your certificate will be renewed after 1 year.`,
	ssl_dedicated_certs_order_modal_finish_subscribing: "Creating subscription",
	ssl_dedicated_certs_order_modal_finish_charging_error: "We attempted to charge your credit card but we were unable to complete the transaction successfully. Please retry the operation or [contact support](https://support.cloudflare.com) for assistance.",
	ssl_dedicated_certs_order_modal_finish_ordering: "Ordering your certificate",
	ssl_dedicated_certs_order_modal_finish_ordering_error: "We were unable to order your certificate from the Certificate Authority. Please retry the operation or [contact support](https://support.cloudflare.com) for assistance.",
	ssl_dedicated_certs_order_modal_finish_title: "Finish",
	ssl_dedicated_certs_order_modal_payment_title: "Payment",
	ssl_dedicated_certs_order_modal_select_title: "Select Type",
	ssl_dedicated_certs_order_modal_success_description: "Your Dedicated SSL Certificate has been issued and your order is complete.",
	ssl_dedicated_certs_order_modal_success_info: "Your certificate will be automatically deployed to our edge and served to your visitors.",
	ssl_dedicated_certs_order_modal_validate_add_record: "Adding a validation record to your domain",
	ssl_dedicated_certs_order_modal_validate_add_record_error: "Unable to add validation record to your domain. Please contact support.",
	ssl_dedicated_certs_order_modal_validate_cname_error: "Unable to resolve %{token} to %{target}. Please check the record and try again.",
	ssl_dedicated_certs_order_modal_validate_cname_instruction: `Add the following record to your DNS provider and then click the "I've added the CNAME to my DNS server" button below.`,
	ssl_dedicated_certs_order_modal_validate_cname_next_button: "I've added the CNAME to my DNS server",
	ssl_dedicated_certs_order_modal_validate_cname_title: "Validate domain by adding DNS CNAME record",
	ssl_dedicated_certs_order_modal_validate_confirm_validation: "Confirming validation record has propagated to the edge",
	ssl_dedicated_certs_order_modal_validate_confirm_validation_error: "Unable to confirm your validation record has propagated. Please try again or contact support.",
	ssl_dedicated_certs_order_modal_validate_description_full: "Before we can order a certificate for your domain, we must verify that you control it. Please be patient as this process can take up to 5 minutes to complete.",
	ssl_dedicated_certs_order_modal_validate_description_partial: "Before we can order a certificate for your domain, we must verify that you control it. To do so you can either add a DNS CNAME record, or click on an email sent to one of the email addresses listed below.",
	ssl_dedicated_certs_order_modal_validate_email_button: "Send email",
	ssl_dedicated_certs_order_modal_validate_email_button_again: "Send email again",
	ssl_dedicated_certs_order_modal_validate_email_description: "The following addresses can be used to validate your domain. If you are able to click on a link sent to one of these addresses click the **Send email** button below and then follow the instructions that are emailed to you.",
	ssl_dedicated_certs_order_modal_validate_email_error: "Unable to verify that email validation has completed successfully. Please try again or contact support.",
	ssl_dedicated_certs_order_modal_validate_email_next_button: "Click the Send email button to continue",
	ssl_dedicated_certs_order_modal_validate_email_next_button_ready: "I've clicked the link emailed to me",
	ssl_dedicated_certs_order_modal_validate_email_title: "Validate domain using email",
	ssl_dedicated_certs_order_modal_validate_title: "Validate Domain",
	ssl_dedicated_certs_order_modal_validate_validate_authority: "Validating your domain with the Certificate Authority",
	ssl_dedicated_certs_order_modal_validate_validate_authority_error: "Unable to validate your domain with the Certificate Authority. Please try again or contact support.",
	ssl_dedicated_certs_order_modal_validate_success: "Successfully validated domain.",
	ssl_dedicated_certs_pending_deletion: "Pending Deletion",
	ssl_counts_legacy_custom: "%{smart_count} Custom Legacy certificate pack |||| %{smart_count} Custom Legacy certificate packs",
	ssl_counts_sni_custom: "%{smart_count} Custom Modern certificate pack |||| %{smart_count} Custom Modern certificate packs",
	ssl_dedicated_certs_title: "Edge Certificates",
	ssl_dedicated_certs_types_contact_csup: "Contact Customer Success",
	ssl_dedicated_certs_types_current_certificate: "Current certificate",
	ssl_dedicated_certs_types_features_dedicated_to_domain: "Dedicated to your domain",
	ssl_dedicated_certs_types_features_common_name: "Common name of %{zone_name}",
	ssl_dedicated_certs_types_features_common_name_explicit: "Common name of ssl123456.cloudflaressl.com",
	ssl_dedicated_certs_types_features_protected_hostnames: "Only protects %{zone_name} and *.%{zone_name}",
	ssl_dedicated_certs_types_features_additional_protected_hostnames: "Protects %{zone_name}, *.%{zone_name}, and up to 50 hostnames/wildcards",
	ssl_dedicated_certs_types_features_automatic_renew: "Automatically renewed",
	ssl_dedicated_certs_types_dedicated_certificates_name: "Dedicated SSL",
	ssl_dedicated_certs_types_dedicated_certificates_custom_hostname_info: "Up to 50 hostnames",
	ssl_dedicated_certs_types_dedicated_certificates_custom_name: "Dedicated SSL with Custom Hostnames",
	ssl_dedicated_certs_types_included: "Included in subscription",
	ssl_dedicated_certs_types_universal_certificates_name_dedicated: "Universal SSL",
	ssl_dedicated_certs_types_order_modal_price: `<0>%{price}</0>/ month
`,
	ssl_description_new_zone: `

**Note:** SSL certificate issuance may take up to 24 hours.`,
	ssl_recommender_title: "SSL/TLS Recommender",
	ssl_recommender_description: "To check if your website can use a more secure SSL/TLS mode, enable the SSL/TLS Recommender. Receive an email with Cloudflare\u2019s recommendation.",
	ssl_recommender_help_header: "About SSL/TLS Recommender",
	ssl_recommender_help_paragraph1: "After enabling the SSL/TLS Recommender, the zone owner will receive an email if a recommendation for a more secure SSL/TLS mode is available. If no email is received, the recommendation is to keep the current mode. You are not required to use the recommendation. The Recommender runs periodically and sends notifications if new recommendations become available. The recommendation is never lower than your current SSL/TLS mode.",
	ssl_recommender_help_paragraph2: "The SSL/TLS Recommender is not intended to resolve issues with website or domain functionality. If your website is not functional at its current mode, no recommendation will be provided. <0>Learn more about SSL/TLS Recommender</0>.",
	ssl_recommendation_badge: "Recommended by Cloudflare",
	ssl_disable_https_warning: `Disabling SSL will also disable **Always use HTTPS**.
Do you want to continue?`,
	ssl_help: `#### Why isn't my site working over HTTPS?
If you have recently signed up for Cloudflare, and your certificate status above shows "Authorizing Certificate", HTTPS is not yet available for your site because Cloudflare does not have a certificate for it. Provisioning typically takes around 15 minutes for paid plans and up to 24 hours for Free. Contact Support if you do not have a certificate after that time.
If the status above shows "Active Certificate" there are [several other common problems that can appear](https://support.cloudflare.com/hc/articles/200170566) when accessing your site over HTTPS.

#### What SSL setting should I use?
This setting controls [how Cloudflare's servers connect to your origin for HTTPS requests](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes). We recommend enabling the Full SSL (Strict) setting if possible. Common use cases for each are:

**Off:** No visitors will be able to view your site over HTTPS; they will be redirected to HTTP.

**Flexible SSL:** You cannot configure HTTPS support on your origin, even with a certificate that is not valid for your site. Visitors will be able to access your site over HTTPS, but connections to your origin will be made over HTTP. Note: You may [encounter a redirect loop with some origin configurations](https://support.cloudflare.com/hc/articles/115000219871).

**Full SSL:** Your origin supports HTTPS, but the certificate installed does not match your domain or is self-signed. Cloudflare will connect to your origin over HTTPS, but will not validate the certificate.

**Full (strict):** Your origin has a valid certificate (not expired and signed by a trusted CA or Cloudflare Origin CA) installed. Cloudflare will connect over HTTPS and verify the cert on each request.
`,
	ssl_ct_alerting_description: "Receive an email when a Certificate Authority issues a certificate for your domain.",
	ssl_ct_alerting_title: "Certificate Transparency Monitoring",
	ssl_ct_alerting_help: `#### What is Certificate Transparency Monitoring?
Every day, millions of certificates are issued for domains. Each certificate is recorded in a set of public logs for transparency. With Certificate Transparency Monitoring, we crawl these logs and send you an email when we find a certificate for your domain. If you manage example.com, we\u2019ll catch *.example.com to help you spot malicious or unexpected certificates.

#### Why should I enable Certificate Transparency Monitoring?

In rare cases, attackers will obtain certificates for websites they do not own. If an attacker gets a certificate for your website, they can serve content on your behalf that looks legitimate but is actually malicious. Some customers also lose track of certificates and like to be notified when new ones are issued. We encourage all customers to enable monitoring and look for suspicious activity.

#### Who will receive these email alerts?

If you\u2019re on a Free or Pro account and have enabled this feature, we will send alerts to your Cloudflare account email address (and those with Shared Account Access). If you\u2019re on a Business or Enterprise account, we will only send alerts to the emails you specifically enroll above.

#### What should I do if I find a malicious certificate?

We have created a [detailed article around using Certificate Transparency Monitoring](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/certificate-transparency-monitoring).
`,
	ssl_ct_alerting_notification_email: "Notification email",
	ssl_ct_alerting_no_emails: "You haven't enrolled any emails yet.",
	ssl_ct_alerting_delete_header: "Delete %{email} from notification list?",
	ssl_ct_alerting_too_many_emails: "You only add up to 10 emails.",
	ssl_ct_alerting_add_email: "Add Email",
	tls_analytics_title: "Traffic Served Over TLS",
	tls_analytics_help: `#### About TLS Analytics
 This shows the division between unencrypted and encrypted 'HTTPS' requests using TLS. Redirects from HTTP to HTTPS are counted as unencrypted requests. When a page rule or origin server redirect to HTTPS is used, a percentage of unencrypted traffic is normal

**Note:** In order to increase the amount of traffic served over HTTPS, you should [redirect all visitors to HTTPS](https://support.cloudflare.com/hc/articles/204144518#h_a61bfdef-08dd-40f8-8888-7edd8e40d156).`,
	tls_analytics_no_requests: "No requests in the last 24 hours.",
	tls_analytics_24hr: "Last 24 hours",
	ssl_setting_off: "Off (not secure)",
	ssl_setting_off_description: "No encryption applied",
	ssl_setting_off_tooltip: "Turning Off SSL will disable HTTPS and shows your visitors that your website is not secure.",
	ssl_setting_flexible: "Flexible",
	ssl_setting_flexible_description: "Encrypts traffic between the browser and Cloudflare",
	ssl_setting_full: "Full",
	ssl_setting_full_description: "Encrypts end-to-end, using a self signed certificate on the server",
	ssl_setting_strict: "Full (strict)",
	ssl_setting_strict_description: "Encrypts end-to-end, but requires a trusted CA or Cloudflare Origin CA certificate on the server",
	ssl_setting_origin_pull: "Strict (SSL-Only Origin Pull)",
	ssl_setting_origin_pull_description: "Same as Full (strict), but ensures that the request to the origin is always encrypted",
	ssl_setting_header_prefix: "Your SSL/TLS encryption mode is",
	ssl_setting_label_browser: "Browser",
	ssl_setting_label_cloudflare: "Cloudflare",
	ssl_setting_label_origin: "Origin Server",
	ssl_setting_more_info: "Learn more about [End-to-end encryption with Cloudflare](https://developers.cloudflare.com/ssl/get-started).",
	ssl_api_title_get_setting: "Get SSL setting",
	ssl_api_title_patch: "Change SSL setting",
	ssl_api_title_get_verification: "Get verification status",
	ssl_title: "SSL",
	ssl_status: "Universal SSL Status",
	tls_1_3_description: "Enable the latest version of the TLS protocol for improved security and performance.",
	tls_1_3_help: `#### What is TLS 1.3?
TLS 1.3 is the newest, fastest, and most secure version of the TLS protocol. SSL/TLS is the protocol that encrypts communication between users and your website. When web traffic is encrypted with TLS, users will see the green padlock in their browser window. By turning on the TLS 1.3 feature, traffic to and from your website will be served over the TLS 1.3 protocol when supported by clients.`,
	tls_1_3_title: "TLS 1.3",
	tls_1_3_api_title_get: "Get Zone Enable TLS 1.3 setting",
	tls_client_auth_description: "TLS client certificate presented for authentication on origin pull.",
	tls_client_auth_notification_link: "Configure expiration notification for your certificates <0>here</0>.",
	tls_client_auth_help: `#### Authenticated Origin Pulls
Authenticated Origin Pulls allow you to cryptographically verify that requests to your origin server have come from Cloudflare using a TLS client certificate. This prevents clients from sending requests directly to your origin, bypassing security measures provided by Cloudflare, such as IP and Web Application Firewalls, logging, and encryption.
This feature requires additional configuration at your web server. Refer to our support guide on [Authenticated Origin Pulls](https://developers.cloudflare.com/ssl/origin-configuration/authenticated-origin-pull).`,
	tls_client_auth_title: "Authenticated Origin Pulls",
	general_checkbox_confirmation: "I understand",
	general_acknowledgement_modal_title: "Acknowledgement",
	dcv_cname: "CNAME",
	dcv_email: "Email",
	dcv_http: "HTTP",
	dcv_txt: "TXT",
	cert_type_cloudflare: "Universal",
	cert_type_cloudflare_shared: "Universal (Shared)",
	cert_type_dedicated: "Dedicated",
	cert_type_dedicated_custom: "Dedicated",
	cert_type_keyless: "Keyless",
	cert_type_sni_keyless: "Keyless Modern",
	cert_type_legacy_custom: "Custom Legacy",
	cert_type_sni_custom: "Custom Modern (default)",
	cert_type_universal: "Universal",
	cert_type_advanced: "Advanced",
	cert_type_backup: "Backup",
	cert_type_total_tls: "Advanced - Total TLS",
	wildcard_dcv_label: "Second DCV record is necessary due to wildcard.",
	backup_row_toast: "This Backup certificate has not been deployed. It will be deployed automatically by Cloudflare in the event of a certificate revocation or key compromise. <0>Learn more</0>.",
	status: {
		active: "Active",
		all: "All",
		deleted: "Deleted",
		backup_issued: "Backup Issued",
		deletion_timed_out: "Timed Out Deletion",
		deployment_timed_out: "Timed Out Deployment",
		expired: "Expired",
		initializing: "Initializing",
		initializing_timed_out: "Timed Out Initializing",
		issuance_timed_out: "Timed Out Issuance",
		null: "SSL Not Requested",
		pending_deployment: "Pending Deployment",
		holding_deployment: "Holding Deployment",
		pending_expiration: "Pending Expiration",
		pending_issuance: "Pending Issuance",
		pending_validation: "Pending Validation",
		pending_deletion: "Pending Deletion",
		validation_timed_out: "Timed Out Validation",
		pending_cleanup: "Pending Cleanup",
		pending_migration: "Pending Migration",
		pending_provisioned: "Pending Provisioned",
		test_pending: "Test Pending",
		test_active: "Test Active",
		test_active_apex: "Test Active (Apex)",
		test_blocked: "Test Blocked",
		test_failed: "Test Failed",
		pending_blocked: "Pending Blocked",
		blocked: "Blocked",
		staging_deployment: "Staging Deployment",
		staging_active: "Staging Active",
		inactive: "Inactive",
		deactivating: "Deactivating",
		certificate_validation_status: "Certificate status",
		hostname_validation_status: "Hostname status",
		hostname_status_provisioned_label: "Provisioned",
		legacy: {
			action_needed: "Action Needed",
			authorizing: "Authorizing Certificate",
			issuing: "Issuing Certificate",
			not_eligible: "Ineligible for SSL",
			pending: "Pending",
			timing_out: "Certificate Timing Out"
		}
	},
	hostname_status: {
		all: "All",
		active: "Active",
		pending: "Pending",
		active_redeploying: "Active Redeploying",
		moved: "Moved",
		deleted: "Deleted",
		pending_deletion: "Pending Deletion",
		pending_migration: "Pending Migration",
		pending_provisioned: "Pending Provisioned",
		test_pending: "Test Pending",
		test_failed: "Test Failed",
		test_active: "Test Active",
		test_active_apex: "Test Active (Apex)",
		test_blocked: "Test Blocked",
		pending_blocked: "Pending Blocked",
		blocked: "Blocked"
	},
	validity_period_2_weeks: "2 weeks",
	validity_period_1_month: "1 month",
	validity_period_3_months: "3 months",
	validity_period_1_year: "1 year",
	auto_renewal_days_before_expiration: "auto renewal %{days} days before expiration",
	custom_origin_trust_store_title: "Custom Origin Trust Store",
	custom_origin_trust_store_description: "Custom Origin Server Trust Store allows you to upload certificate authorities (CAs) that Cloudflare will use to authenticate connections to your origin server. Use this feature to override the default trust store with your prefered CA or CAs.",
	custom_origin_trust_store_serial_number: "Serial number",
	custom_origin_trust_store_upload: "Upload trust store",
	custom_origin_trust_store_delete_modal_title: "Deleting custom certificate authority (CA) from trust store",
	custom_origin_trust_store_delete_modal_description: "Are you sure you want to delete %{serial_number}?",
	custom_origin_trust_store_drawer_help: `#### Custom Origin Trust Store
#### What is an origin server trust store?
By default, our edge maintains a set of common public certificate authorities as well as our own Origin CA which are considered trusted.  This means that when using Full(strict) encryption mode, Cloudflare will only trust origin server certificates issued by a CA in this trust store.
#### Why use custom origin server trust store?
If you prefer to use a privately trusted certificate authority or want to limit trust to specific public CAs, you may upload one or more CAs that you desire Cloudflare to deem as trusted when connecting to your origin server.
#### What happens to the default trust store when I upload my private CA?
When a CA has been uploaded to Custom Origin Server Trust Store, Cloudflare will ignore all default publicly trusted CAs and exclusively use the CA or CAs that have been uploaded to authenticate the origin server.
#### What happens when my uploaded CA expires?
If no alternative CAs are valid within the trust store, Cloudflare will not be able to properly authenticate connections to the origin server with Full(strict) encryption mode enabled.`,
	custom_origin_trust_store_drawer_api_get_list: "List custom origin trust stores",
	custom_origin_trust_store_drawer_api_get: "Get custom origin trust store by id",
	custom_origin_trust_store_drawer_api_delete: "Delete custom origin trust store by id",
	custom_origin_trust_store_drawer_api_post: "Create custom origin trust store",
	custom_origin_trust_store_upload_modal_title: "Add custom certificate authority (CA)",
	custom_origin_trust_store_upload_modal_label: "Upload a CA to your private trust store below",
	custom_origin_trust_store_upload_modal_pem_error: "PEM format is required",
	overview: "Overview",
	expanded_row_header: "Review <0></0> Certificate for %{hostnames}",
	sans: "Subject Alternative Names (SAN)s",
	managed_annotation: "(Managed)",
	managed_by_cloudflare_annotation: "(Managed by Cloudflare)",
	invalid_ca_for_hostname: (0, r.d)(i(), "authority", "hostname"),
	error: "Error",
	redeploying: "Redeploying",
	acme_ca_90_day_validity: "All certificates from the chosen Certificate Authority have a fixed validity of 90 days.",
	acme_ca_txt_only: "Only TXT validation is allowed for wildcard hostnames and chosen Certificate Authority.",
	san_quota: (0, r.d)(l(), "max_hostnames", "remaining_count"),
	common_name_too_long: "This certificate will have a Cloudflare Common Name value due since the SANs are longer than the 64 character limit.",
	create_advanced: "Create an Advanced Certificate",
	acm_delete_modal_title: "Delete Advanced Certificate",
	per_month: (0, r.d)(s(), "price"),
	resume_patch: "Resume",
	timed_out_validation_message: "The validation of your certificate timed out. Cloudflare is not longer checking its validation records. You can *Resume* the validation process to move the status back to Pending Validation.",
	prioritize_success: (0, r.d)(d(), "count"),
	validation_method: {
		cname: "CNAME Validation",
		email: "Email Validation",
		http: "HTTP Validation",
		txt_reccomended: "TXT Validation (recommended)"
	},
	validation: {
		info_msg: "Cloudflare will validate the certificate on your behalf only for zones that are proxying traffic.",
		info_msg_auto: "Cloudflare will validate the certificate on your behalf. No action is required."
	},
	acm: {
		ca: "Certificate Authority",
		title: "Advanced Certificate Manager",
		certificate_manager: "Certificate Manager",
		select_plan: "Select your plan",
		free_description: "Basic certificate",
		free_dedicated_to_domain: "Dedicated to your domain",
		free_protected_hostnames: (0, r.d)(m(), "zone_name", "zone_name"),
		description: "Advanced Certificate Manager allows for more control and flexibility for your certificates and SSL/TLS settings.",
		additional_certificates: "Create additional certificates",
		common_name_of: (0, r.d)(n(), "common_name"),
		configurable_validity: "Configurable certificate validity",
		configurable_sans: "Configurable SANs",
		custom_ciphers: "Custom Cipher Suite settings",
		custom_truststore: "Custom Trust Store",
		on_purchase: "Advanced Certificate Manager is now a part of your plan.",
		order_cta: "Order Advanced Certificate",
		quota: (0, r.d)(p(), "used", "allocated"),
		order_success: "Your Advanced certificate has been created will be automatically deployed to our edge and served to your visitors once it has been validated",
		order_success_autodcv: "Your Advanced certificate has been created will be automatically validated and deployed to our edge and served to your visitors.",
		blocked_ent: "Please contact your Customer Success Manager to purchase ACM.",
		current_plan_paranthetical: " (current plan)"
	},
	api: {
		get_certificate_packs: "List Certificate Packs"
	},
	client_certificates: {
		title: "Client Certificates",
		status: "Status",
		description: `Secure and authenticate your APIs and web applications with client certificates.
Block traffic from devices that do not have a valid client SSL/TLS certificate with mTLS rules.`,
		create_cert: "Create Certificate",
		create_client_cert_title: "Create client certificate",
		create_client_cert_subtitle: "Private Key and Certificate Signing Request (CSR)",
		create_client_cert_description: "To generate a Client Certificate, you need a private key and CSR. Cloudflare can generate a key and CSR using your web browser, or you can use your own.",
		key_generation_cf_generated: "Generate private key and CSR with Cloudflare",
		key_generation_user_provided: "Use my private key and CSR",
		key_generation_private_key_type: "Private key type",
		key_generation_pick_ca: "Select a Certificate Authority (CA) to sign the client certificate",
		key_generation_certificate_details: "**Specify the certificate details** All fields except for the Common Name are optional. The details can be used to control authentication and authorization, e.g, by restricting API access to a specific department or list of usernames",
		key_generation_labels_csr: "Certificate Signing Request (CSR)",
		key_generation_details_label_subject: "Subject",
		key_generation_details_label_certificate_validity: "Certificate Validity",
		key_generation_details_label_common_name: "Common Name",
		key_generation_details_label_organization: "Organziation",
		key_generation_details_label_department: "Department",
		key_generation_details_label_city: "City",
		key_generation_details_label_state: "State/Province",
		key_generation_details_label_country: "Country",
		key_generation_certificate_validity_description: "Select a validity period for your certificate",
		key_generation_setup_title: "Client Certificate and Key Generation",
		key_generation_setup_description: "Save the certificate and private key below to your client. To save, **Click to copy** and paste the contents into different files on your client, e.g. example.com.pem and example.com.key",
		key_generation_setup_description_user: "Save the certificate below to your client. To save, *Click to copy** and paste the contents into into a file on your client, e.g example.com.pem",
		key_generation_button_create: "Create",
		key_generatiion_setup_key_format: "Key Format",
		key_generation_details_1_year: "1 Year",
		key_generation_details_2_year: "2 Years",
		key_generation_details_3_year: "3 Years",
		key_generation_details_10_year: "10 Years",
		key_generation_details_15_year: "15 Years",
		key_generation_error_unparseable_csr: "Unable to parse CSR, please check input and try again",
		table_header_certificate_subject: "Certificate Subject",
		table_header_authority: "Authority",
		table_header_status: "Status",
		table_header_last_seen: "Last Seen",
		table_header_expires_on: "Expires On",
		table_certificate_active: "Active",
		table_certificate_revoked: "Revoked",
		table_certificate_pending_reactivation: "Pending reactivation",
		table_certificate_pending_revocation: "Pending revocation",
		table_delete_confirm_title: "Revoke Client Certificate",
		table_delete_confirm_description: "You are about to revoke your origin certificate. If you wish to proceed, please check the box below and click the \u201CRevoke\u201D button.",
		table_delete_confirm_agreement: "I understand that I am revoking this certificate.",
		expanded_table_review_header: "Review Client Certificate for %{subject}",
		expanded_table_validity_period: "Validity Period",
		revoke_certificate: "Revoke Certificate",
		certificate: "Certificate",
		private_key: "Private Key",
		key_format_pem: "PEM",
		key_format_der: "DER",
		key_format_pkcs7: "PKCS#7",
		key_format_pkcs12: "PKCS#12",
		certificate_authority: "Certificate Authority",
		cloudflare_ca: "Cloudflare Managed CA",
		cloudflare_ca_account: "Cloudflare Managed CA for %{accountName}",
		usage_instructions_header: "Usage Instructions",
		usage_instructions_body: 'For installation and usage instructions, visit our developer documentation on <a href="https://developers.cloudflare.com/ssl/client-certificates" target="_blank">using client certificates with API Shield</a>',
		hosts_title: "Hosts",
		hosts_description: "Choose which host(s) you wish to enable mTLS",
		hosts_request_error: "This request failed, please try again",
		success_message_added: "Successfully added %{added}",
		success_message_removed: "Successfully removed %{removed}",
		create_mTLS_rule: "Create mTLS Rule",
		no_client_certificates: "No Client Certificates Created"
	},
	staging_certificates: {
		title: "Staging Certificates",
		upload_custom_button: "Upload Custom Staging Certificate",
		edge_certificates_title: "Production Edge Certificates",
		staging_certificates_title: "Staging Edge Certificates",
		staging_certificates_description: `You can test your staging certificates by sending requests to staging IPs (162.159.133.39 or 162.159.134.39).
Changes made in this table will not be reflected in production and will only be visible when testing on the staging IPs.`,
		deactivate_button: "Deactivate",
		push_to_prod_button: "Push to Production",
		push_to_staging_button: "Push to Staging",
		push_to_prod_modal_title: "Promote the certificate to production",
		push_to_staging_modal_title: "Push the certificate to staging",
		deactivate_modal_title: "Deactivate the certificate",
		push_to_prod_modal_description: "This will move the custom certificate to production network. Are you sure that you want to deploy this certificate?",
		push_to_staging_modal_description: "This will move the custom certificate to staging network. Are you sure that you want to deploy this certificate?",
		deactivate_modal_description: "This will deactivate the certificate, and we will no longer serve it at the edge. You will be able to reactivate the certificate.",
		upload_description: "Enter private key and certificate. The uploaded certificate will be deployed to <0>%{deploy}</0> network.",
		replace_description: "Uploading a new certificate and key will replace the existing certificate and key. The replaced certificate will be deployed to <0>%{deploy}</0> network.",
		push_to_prod_success: "Successfully updated deployment. You can find the certificate on Edge Certificates tab now.",
		push_to_staging_success: "Successfully updated deployment. You can find the certificate on Staging Certificates tab now.",
		deactivate_success: "Successfully deactivated the certificate."
	},
	acm_purchase_confirm: "Confirm Payment",
	form_enter_hostname: "Enter a hostname"
}