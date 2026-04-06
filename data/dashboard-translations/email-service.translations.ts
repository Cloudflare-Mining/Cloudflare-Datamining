{
	config: {
		connect: {
			title: "Connect your Worker to Email Service",
			description: "Connect to Email Service from your Worker using the send_email binding. Configure the binding in your Wrangler configuration file, then use the email handler in your Worker code to process and send emails programmatically."
		}
	},
	common: {
		search: "Search",
		cancel: "Cancel",
		save: "Save",
		delete: "Delete",
		close: "Close",
		edit: "Edit",
		enabled: "Enabled",
		disabled: "Disabled",
		unknown: "Unknown",
		goToSettings: "Go to Settings",
		done: "Done",
		active: "Active",
		beta: "Beta",
		details: "Details",
		onboarding: "Onboarding",
		emptyZones: "No available zones found",
		addADomain: "Add a Domain",
		zone: "Zone",
		searchZones: "Search zones...",
		nonAuthoritativeZoneWarning: "This zone doesn't use Cloudflare as its authoritative nameserver",
		docsLink: "Check the docs for more information",
		zoneAlreadyOnboarded: "This zone has already been onboarded",
		chooseDifferentZone: "Choose a different zone",
		actionRequired: "Action required",
		incompatibleDnsWarning: "There are some incompatible DNS records. Delete them before enabling %{featureLabel}",
		readyStatus: "Everything looks good",
		readyDescription: "Click done to start using %{featureLabel}",
		reviewDnsRecords: "Review DNS records that will be added",
		domainsTable: {
			subdomain: "Subdomain",
			domain: "Domain",
			routingStatus: "Routing status",
			emailDnsRecords: "Email DNS records",
			mxRecords: "MX records",
			locked: "Locked",
			unlocked: "Unlocked",
			lastUpdated: "Last updated",
			disableOrDelete: "Disable or delete",
			lock: "Lock",
			error: "Something went wrong."
		},
		dnsTable: {
			recordType: "Record type",
			hostname: "Hostname",
			priority: "Priority",
			value: "Value",
			status: "Status",
			missing: "Missing",
			added: "Added",
			delete: "Delete"
		},
		deleteDnsRecordDialog: {
			title: "Delete conflicting records",
			description: "Deleting records could interrupt other services. Make sure these records are not used by critical services before deleting.",
			permanentWarning: "Deleting records is permanent and cannot be undone"
		},
		dnsDetailDialog: {
			multipleSPFTitle: "Multiple SPF records found",
			multipleSPFBody: "The records listed below were found on the DNS for %{domain}. Multiple SPF records are not valid for %{featureLabel} to work properly, even though the correct one exists. To enable %{featureLabel}, click Fix records.",
			conflictingRecords: "Conflicting records",
			conflictingBody: "The records listed below were found on the DNS for %{domain}. These records need to be deleted for %{featureLabel} to work properly.",
			requiredRecords: "Required records",
			requiredBody: "The records listed below are required on %{domain} to enable %{featureLabel}. MX records allow your domain to receive email. The TXT record is configured to allow your domain to send incoming emails out to your preferred email provider.",
			fixRecords: "Fix records"
		},
		configured: "Configured",
		misconfigured: "Misconfigured",
		syncing: "Syncing",
		dnsMisconfigured: "Email DNS records misconfigured",
		dnsConfigured: "Email DNS records configured",
		disableDelete: {
			subtitle: "Select the option that best describes your offboarding needs.",
			subdomainSubtitle: "The following records will be deleted",
			legend: "Offboarding option",
			deleteAndDisable: "Delete and disable",
			unlockAndKeepDns: "Unlock and keep DNS records",
			deleteRecords: "Delete records",
			unlock: "Unlock"
		},
		activityLog: {
			filters: {
				all: "All"
			},
			table: {
				sessionId: "Session ID",
				sender: "Sender",
				received: "Received",
				result: "Result"
			}
		},
		fixRecords: {
			addAndEnable: "Add records and enable",
			deleteConflicting: "Delete conflicting DNS records",
			deleteMultipleSPF: "Delete multiple SPF records"
		},
		logDetail: {
			action: "Action",
			messageId: "Message ID",
			spfStatus: "SPF status",
			dmarcStatus: "DMARC status",
			dkimStatus: "DKIM status",
			arcStatus: "ARC status",
			spam: "Spam",
			unsafe: "Unsafe",
			safe: "Safe",
			rejectedReason: "Reason for rejection",
			from: "From",
			to: "To",
			status: "Status"
		},
		placeholders: {
			email: "user@example.com",
			subdomain: "example"
		},
		msUnit: "ms",
		noResultsFound: "No results found"
	},
	emailSending: {
		title: "Email Sending",
		description: "Send emails to your users from your domain reliably, securely, and at scale.",
		errorBanner: "There might be some conflict or missing records. Configure the records to make sure Email Sending works properly.",
		zoneList: {
			name: "Name",
			emptyState: {
				title: "Enable Email Sending",
				description: "No zones found"
			},
			onboardDomain: "Onboard Domain",
			joinWaitingList: "Join the waiting list",
			alreadyJoined: "Already joined to the waiting list!"
		},
		onboarding: {
			subtitle: "Send emails to your users from your domain reliably, and at scale.",
			emptyDescription: "No available zones found for email sending",
			subdomain: "Subdomain",
			subdomainDescription: "Leave blank to use the top level",
			chooseDifferentSubdomain: "Choose a different subdomain",
			featureLabel: "email sending"
		},
		clickToCopy: "Click to copy",
		copy: "Copy",
		zone: {
			tabs: {
				overview: "Overview",
				activityLog: "Activity Log",
				suppressions: "Suppressions",
				settings: "Settings"
			},
			activityLog: {
				delivered: "Delivered",
				deliveryFailed: "Delivery failed",
				error: "Error",
				recipient: "Recipient",
				destination: "Destination",
				noActivityFound: "No activity found"
			},
			settings: {
				domain: "Domain",
				domainDescription: "A combination of MX and TXT records need to be added to your DNS for Email Sending to be able to receive and route emails appropriately. Domain must be enabled for all subdomains to work."
			},
			suppressions: {
				title: "Suppressions",
				description: "Maintain an up-to-date suppression list to protect your sender reputation and improve email deliverability by avoiding sends to invalid addresses or uninterested recipients.",
				noSuppressionsFound: "No suppressions found",
				noSuppressionsYet: "You have no suppressions yet.",
				email: "Email",
				createdAt: "Created at",
				expiresAt: "Expires at",
				toast: {
					deleting: "Deleting suppression",
					deleted: "Suppression deleted",
					failedToDelete: "Failed to delete suppression"
				}
			},
			logDetail: {
				notFound: "Not found",
				goBack: "Go back",
				timeline: "Timeline",
				delivered: "Delivered",
				deliveryFailed: "Delivery failed",
				error: "Error"
			},
			disableDelete: {
				title: "Delete or disable Email Sending",
				deleteDescription: "Select this option if you want to immediately disable Email Sending and remove its MX records. The subdomain will be deleted from the table.",
				unlockDescription: "Select this option if you plan to migrate to another provider by adding new records before removing Email Sending records. Modifying MX records will disable the Email Sending service."
			},
			fixRecords: {
				title: "Enable Email Sending",
				addDnsRecords: "Add Email Sending DNS records",
				addDnsRecordsDescription: "A combination of MX and TXT records need to be added to your DNS for Email Sending to function properly. MX records allow your domain to receive email. The TXT record is configured to allow your domain to send incoming emails out to your preferred email provider.",
				deleteConflictingDescription: "A combination of MX and TXT records need to be added to your DNS for Email Sending to function properly. The records listed below were found on the DNS for %{domain}.",
				multipleSPFDescription: "A combination of MX and TXT records need to be added to your DNS for Email Sending to function properly. The records listed below were found on the DNS for %{domain}. Multiple SPF records are not valid for Email Sending to work properly, even though the correct one exists. Before Email Sending's SPF record can be added, these records must be deleted."
			}
		},
		addSuppressionDialog: {
			title: "Add Suppression",
			description: "Add an email address to the suppression list to prevent it from receiving your emails.",
			email: "Email",
			expiration: "Expiration",
			oneHour: "1 hour",
			oneDay: "1 day",
			oneWeek: "1 week",
			oneMonth: "1 month",
			oneYear: "1 year",
			add: "Add"
		}
	},
	emailRouting: {
		title: "Email Routing",
		description: "Create custom email addresses and route email to your verified email addresses or Workers.",
		errorBanner: "There might be some conflict or missing records. Configure the records to make sure Email Routing works properly.",
		onboarding: {
			subtitle: "Create custom email addresses to use whenever you do not want to share your primary email address.",
			emptyDescription: "No available zones found for email routing",
			featureLabel: "email routing"
		},
		zoneList: {
			table: {
				name: "Name",
				nameTooltip: "Name of the zone"
			},
			emptyState: {
				title: "Enable Email Routing",
				privateByDesign: "Private by design.",
				dontStoreEmails: "We don't store or look into your emails.",
				straightforwardAndFree: "Straightforward and free.",
				anyoneCanCreate: "Anyone can create addresses for their domain.",
				deliveredToPreferred: "Delivered to your preferred mailbox.",
				routeToMailbox: "Route to the mailbox you use the most, like Gmail or Outlook."
			},
			onboardDomain: "Onboard Domain",
			destinationAddresses: "Destination Addresses"
		},
		destinationAddress: {
			title: "Destination Address",
			description: "Manage addresses for use when routing custom addresses. Destination addresses are available on all zones on the account. You can create up to 200 destination addresses for your account.",
			table: {
				email: "Email Address",
				emailTooltip: "Destination email address",
				status: "Status",
				statusTooltip: "Verification status",
				created: "Created",
				createdTooltip: "Date created",
				verified: "Verified",
				pending: "Pending"
			},
			emptyState: {
				title: "No destination addresses found",
				description: "Add destination addresses to route emails"
			},
			addAddress: "Add address",
			toast: {
				resendVerification: "Resend verification",
				resending: "Resending verification...",
				resent: "Verification resent successfully",
				failedToResend: "Failed to resend verification",
				deleting: "Deleting destination address...",
				deleted: "Destination address deleted successfully",
				failedToDelete: "Failed to delete destination address"
			},
			addDestinationAddressDialog: {
				title: "Add Destination Address",
				emailAddress: "Email address",
				toast: {
					loading: "Adding destination address...",
					success: "Destination address added successfully",
					error: "Failed to add destination address"
				}
			}
		},
		zone: {
			tabs: {
				overview: "Overview",
				activityLog: "Activity Log",
				routingRules: "Routing Rules",
				destinationWorkers: "Destination Workers",
				settings: "Settings"
			},
			overview: {
				summary: {
					title: "Configuration summary",
					customAddresses: "Custom addresses",
					destinationAddresses: "Destination addresses",
					domains: "Domains",
					routingStatus: "Routing status",
					dnsRecords: "DNS records"
				},
				analytics: {
					title: "Analytics",
					forwarded: "Forwarded",
					dropped: "Dropped",
					deliveryFailed: "Delivery failed",
					rejected: "Rejected",
					other: "Other",
					total: "Total received",
					noData: "No data available"
				}
			},
			activityLog: {
				filters: {
					forwarded: "Forwarded",
					deliveryFailed: "Delivery failed",
					dropped: "Dropped",
					rejected: "Rejected",
					error: "Error",
					unknown: "Unknown",
					allResults: "All results",
					allBounceResults: "All bounce results",
					allCustomAddresses: "All custom addresses"
				},
				table: {
					to: "Custom Address"
				},
				emptyState: {
					title: "No activity logs found"
				}
			},
			rules: {
				customAddress: "Custom address",
				customAddressDescription: "Create custom email addresses and set the action to take on received emails.",
				createAddress: "Create address",
				catchAll: "Catch all",
				catchAllAddress: "Catch-all address",
				catchAllDescription: "Enable the catch-all address to set an action for all other email addresses in this zone.",
				catchAllSubdomainNote: "Catch-all rule only applies on the zone-level domain, you can't create a catch-all rule for each of your subdomains.",
				table: {
					customAddress: "Custom address",
					catchAll: "Catch all",
					action: "Action",
					destination: "Destination",
					status: "Status"
				},
				toast: {
					deletingRule: "Deleting rule",
					ruleDeleted: "Rule deleted",
					failedToDeleteRule: "Failed to delete rule",
					enablingRule: "Enabling rule",
					disablingRule: "Disabling rule",
					ruleEnabled: "Rule enabled",
					ruleDisabled: "Rule disabled",
					failedToUpdateRule: "Failed to update rule"
				},
				missingDestinationAddress: "Destination address not found",
				missingDestinationWorker: "Destination worker not found",
				allowedCharacters: "Allowed characters: a-z 0-9 _ - . +",
				actionDescriptions: {
					sendToEmail: "Routes all emails from the custom address to the destination address.",
					sendToWorker: "Routes all emails from the custom address to a Worker.",
					drop: "Deletes emails sent to the custom address without routing them."
				},
				selectWorker: "Select Worker",
				selectADomain: "Select a domain",
				editCatchAll: "Edit Catch-All",
				editCustomAddress: "Edit custom address",
				createCustomAddress: "Create custom address",
				editDescription: "Edit custom email addresses and set the action to take on received emails.",
				createDescription: "Create custom email addresses and set the action to take on received emails.",
				filters: {
					all: "All"
				},
				actions: {
					drop: "Drop",
					sendToAnEmail: "Send to an email",
					sendToAWorker: "Send to a Worker",
					selectAnAction: "Select an action"
				},
				addressCombobox: {
					noAddressesFound: "No addresses found",
					searchAddresses: "Search addresses...",
					creatingAddress: "Creating address…",
					createAddressError: "Failed to create address. Please try again.",
					createAddress: 'Create "%{email}"'
				}
			},
			settings: {
				subaddressing: "Subaddressing",
				subaddressingDescription: "Use the '+' separator to augment your custom addresses with detail information (address+detail@example.com).",
				enableSubaddressing: "Enable subaddressing",
				toast: {
					enablingSubaddressing: "Enabling subaddressing",
					disablingSubaddressing: "Disabling subaddressing",
					subaddressingEnabled: "Subaddressing enabled",
					subaddressingDisabled: "Subaddressing disabled",
					failedToUpdateSubaddressing: "Failed to update subaddressing",
					locking: "Locking...",
					lockedSuccessfully: "Locked successfully",
					failedToLock: "Failed to lock",
					lockingDomain: "Locking %{domain}...",
					domainLockedSuccessfully: "%{domain} locked successfully",
					failedToLockDomain: "Failed to lock %{domain}"
				},
				domain: "Domain",
				domainDescription: "A combination of MX and TXT records need to be added to your DNS for Email Routing to be able to receive and route emails appropriately. Domain must be enabled for all subdomains to work.",
				subdomains: "Subdomains",
				subdomainsDescription: "Subdomains are dependent on the domain. If the domain is disabled, subdomains will be disabled too.",
				addSubdomainDialog: {
					title: "Add subdomain",
					description: "Enable subdomains to route emails to destination."
				}
			},
			disableDelete: {
				title: "Delete or disable Email Routing",
				deleteDescription: "Select this option if you want to immediately disable Email Routing and remove its MX records. The subdomain will be deleted from the table.",
				unlockDescription: "Select this option if you plan to migrate to another provider by adding new records before removing Email Routing records. Modifying MX records will disable the Email Routing service."
			},
			fixRecords: {
				title: "Enable Email Routing",
				addDnsRecords: "Add Email Routing DNS records",
				addDnsRecordsDescription: "A combination of MX and TXT records need to be added to your DNS for Email Routing to function properly. MX records allow your domain to receive email. The TXT record is configured to allow your domain to send incoming emails out to your preferred email provider.",
				deleteConflictingDescription: "A combination of MX and TXT records need to be added to your DNS for Email Routing to function properly. The records listed below were found on the DNS for %{domain}.",
				multipleSPFDescription: "A combination of MX and TXT records need to be added to your DNS for Email Routing to function properly. The records listed below were found on the DNS for %{domain}. Multiple SPF records are not valid for Email Routing to work properly, even though the correct one exists. Before Email Routing's SPF record can be added, these records must be deleted."
			},
			workers: {
				title: "Email Workers",
				description: "Email Workers allow you to create custom scripts and process your emails according to your specific requirements. Need more advanced features? Go to Cloudflare Workers.",
				create: "Create",
				createWorker: "Create Worker",
				documentation: "Documentation",
				viewWorkersAccount: "View Workers account",
				noWorkersFound: "No workers found",
				noWorkersDescription: "Create a worker to handle email routing rules.",
				createRoute: "Create route",
				moreOptions: "More options",
				codeEditor: "Code editor",
				manageWorker: "Manage Worker",
				lastUpdated: "Last updated %{time}",
				requests: "requests",
				createEmailWorkers: "Create Email Workers",
				createEmailWorkersDescription: "Email Workers allow you to create custom scripts to handle your emails in different ways.",
				createWorkerName: "Worker name",
				selectAStarter: "Select a starter",
				onceDeployed: "Once deployed, you'll be able to modify your code from the dashboard",
				templates: {
					allowlistTitle: "Allowlist senders",
					allowlistDesc: "Email Worker that allows you to add emails to your approved senders list and keep them out of the junk folder.",
					blocklistTitle: "Blocklist senders",
					blocklistDesc: "Email Worker that allows you to block spam. The email messages won't be delivered to your inbox.",
					slackTitle: "Notifications to Slack",
					slackDesc: "Email Worker that sends you Slack notifications when specified emails are received.",
					customTitle: "Create my own",
					customDesc: "Write a custom script to process emails according to your requirements."
				},
				toast: {
					deploying: "Deploying worker",
					deployed: "Worker deployed successfully",
					failedToDeploy: "Failed to deploy worker"
				},
				deploy: "Deploy",
				deploying: "Deploying..."
			}
		}
	}
}