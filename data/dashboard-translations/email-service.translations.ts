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
		notConfigured: "Not configured",
		subdomainCount: "%{smart_count} subdomain |||| %{smart_count} subdomains",
		tooltips: {
			syncing: "The service is syncing DNS records",
			disabled: "The service is not configured",
			enabled: "The service is enabled and working correctly",
			enabledMisconfigured: "The service is enabled but may not work correctly due to DNS misconfiguration",
			dnsNotConfigured: "No DNS records have been configured",
			dnsMissing: "There are missing DNS records",
			dnsConflicting: "There are conflicting DNS records",
			dnsMissingAndConflicting: "There are missing and conflicting DNS records",
			dnsLocked: "DNS records are locked and configured correctly",
			dnsUnlocked: "DNS records are configured but not locked",
			subdomainsOk: "All subdomains are configured correctly",
			subdomainsIssues: "%{smart_count} subdomain has DNS issues |||| %{smart_count} subdomains have DNS issues"
		},
		add: "Add",
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
		zoneInactive: "This zone is not active",
		zoneInactiveDescription: "Activate this zone before enabling %{featureLabel}",
		activateZone: "Go to zone overview",
		actionRequired: "Action required",
		incompatibleDnsWarning: "There are some incompatible DNS records. Delete them before enabling %{featureLabel}",
		readyStatus: "Everything looks good",
		readyDescription: "Click done to start using %{featureLabel}",
		reviewDnsRecords: "Review DNS records that will be added",
		domainsTable: {
			subdomain: "Subdomain",
			lock: "Lock"
		},
		dnsTable: {
			recordType: "Record type",
			hostname: "Hostname",
			priority: "Priority",
			value: "Value",
			status: "Status",
			missing: "Missing",
			added: "Added",
			locked: "Locked",
			unlocked: "Unlocked",
			conflicting: "Conflicting",
			delete: "Delete"
		},
		deleteDnsRecordDialog: {
			title: "Delete conflicting records",
			description: "Deleting records could interrupt other services. Make sure these records are not used by critical services before deleting.",
			permanentWarning: "Deleting records is permanent and cannot be undone"
		},
		configured: "Configured",
		misconfigured: "Misconfigured",
		syncing: "Syncing",
		dnsMisconfigured: "Email DNS records misconfigured",
		dnsConfigured: "Email DNS records configured",
		disableDelete: {
			unlock: "Unlock"
		},
		delayWarning: "Metrics and logs can take up to 2 minutes to appear in the dashboard",
		refresh: "Refresh",
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
		settings: {
			dnsRecords: "DNS records",
			dnsRecordsDescription: "DNS records associated with this service.",
			disable: "Disable",
			disableDescription: "Disabling will remove all DNS records and stop the service.",
			deleteDialogTitle: "Delete and disable",
			deleteDialogDescription: "This will delete all DNS records and disable the service. This action cannot be undone.",
			subdomainAlreadyExists: "This subdomain already exists.",
			subdomainLabel: "Subdomain",
			noSubdomains: "No subdomains yet.",
			noSubdomainsDescription: "Use the form below to add a subdomain.",
			addMissingRecords: "Add missing records"
		},
		emailsReceived: "Emails received",
		emailsSent: "Emails sent",
		msUnit: "ms",
		noResultsFound: "No results found",
		errors: {
			apiError: "Request failed with status %{status}",
			apiErrorWithMessage: "%{message}",
			networkError: "Unable to reach the server. Check your connection and try again.",
			inputError: "An unexpected validation error occurred. Please reload the page and try again.",
			unexpectedResponse: "Received an unexpected response. Please try again later.",
			loadFailed: "Failed to load data. Please try again.",
			required: "This field is required.",
			invalidEmail: "Enter a valid email address."
		},
		retry: "Retry"
	},
	emailSending: {
		title: "Email Sending",
		description: "Send emails to your users from your domain reliably, securely, and at scale.",
		dailyQuota: "Daily sending quota",
		zoneList: {
			name: "Name",
			emptyState: {
				title: "Enable Email Sending",
				description: "No zones found"
			},
			onboardDomain: "Onboard Domain",
			purchaseWorkersPaid: "Purchase Workers Paid",
			purchaseWorkersPaidDescription: "Email Sending is currently only available with the Workers Paid plan. Upgrade your plan to start sending emails."
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
			overview: {
				analytics: {
					title: "Analytics",
					delivered: "Delivered",
					deliveryFailed: "Delivery failed",
					rejected: "Rejected",
					errored: "Errored",
					other: "Other",
					total: "Total sent",
					noData: "No data available"
				}
			},
			activityLog: {
				delivered: "Delivered",
				deliveryFailed: "Delivery failed",
				rejected: "Rejected",
				error: "Error",
				recipient: "Recipient",
				destination: "Destination",
				noActivityFound: "No activity found"
			},
			suppressions: {
				title: "Suppressions",
				description: "Suppressed addresses will not receive emails sent from this zone.",
				noSuppressionsFound: "No suppressions found",
				noSuppressionsYet: "You have no suppressions yet.",
				email: "Email",
				reason: "Reason",
				zones: "Zones",
				allZones: "All",
				reasons: {
					manual: "Manual",
					complaint: "Complaint",
					hard_bounce: "Hard Bounce",
					soft_bounce: "Soft Bounce",
					policy: "Policy",
					unknown: "Unknown"
				},
				createdAt: "Created",
				expiresAt: "Expires",
				toast: {
					deleting: "Deleting suppression",
					deleted: "Suppression deleted",
					failedToDelete: "Failed to delete suppression",
					failedToCreate: "Failed to add suppression"
				}
			},
			logDetail: {
				notFound: "Not found",
				goBack: "Go back",
				timeline: "Timeline",
				delivered: "Delivered",
				deliveryFailed: "Delivery failed",
				error: "Error"
			}
		},
		subdomain: {
			suppressions: {
				description: "Suppressed addresses will not receive emails sent from any subdomain in this zone."
			}
		},
		account: {
			suppressions: {
				description: "Suppressed addresses will not receive emails sent from any zone in this account."
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
			never: "Never",
			add: "Add"
		}
	},
	reputation: {
		cardTitle: "Sending reputation",
		statusLabel: "Account health",
		statusHealthy: "Healthy",
		statusWarning: "Warning",
		statusAtRisk: "At Risk",
		statusPaused: "Paused",
		statusHealthyDescription: "No issues detected. Your sending reputation is in good standing.",
		statusWarningDescription: "Deliverability concerns detected. Review the metrics below.",
		statusAtRiskDescription: "Sending at risk of being paused. Immediate action required.",
		statusPausedDescription: "Sending paused. Follow the steps below to resume.",
		metricsTitle: "Reputation metrics",
		metrics7d: "7-day",
		metrics24h: "24-hour",
		bounceRate: "Bounce rate",
		bounceRateDescription: "Percentage of sent emails that bounced (hard + soft)",
		complaintRate: "Spam complaint rate",
		complaintRateDescription: "Percentage of delivered emails generating a spam complaint",
		spamRejectionRate: "Spam rejection rate",
		spamRejectionRateDescription: "Percentage rejected by content checks",
		deliveryRate: "Delivery rate",
		deliveryRateDescription: "Percentage of sent emails successfully delivered",
		thresholdGood: "Good",
		thresholdWarning: "Warning",
		thresholdCritical: "Critical",
		remediationTitle: "Recommended actions",
		remediationBounceWarning: "Your bounce rate is elevated. Clean your recipient lists and remove invalid addresses. Consider implementing email verification at signup.",
		remediationBounceCritical: "Your bounce rate is critically high. Your sending may be paused if this rate does not improve. Immediately audit recipient lists and halt sending to unverified addresses.",
		remediationComplaintWarning: "Your complaint rate is elevated. Ensure recipients have opted in and make unsubscribe links prominent.",
		remediationComplaintCritical: "Your complaint rate is critically high. Your sending may be paused if this rate does not improve. Review your sending practices immediately.",
		remediationSpamRejectionWarning: "Your content is triggering spam filters. Review email content for spam-like patterns.",
		remediationSpamRejectionCritical: "Your content is being heavily flagged as spam. Your sending may be paused. Review and revise email templates immediately.",
		remediationDeliveryWarning: "Your delivery rate has dropped. Check bounce and complaint rates for underlying issues.",
		remediationDeliveryCritical: "Your delivery rate is critically low. Your sending may be paused. Investigate delivery failures urgently.",
		updatedAt: "Updated {time}",
		period7d: "7d",
		period24h: "24h",
		periodToday: "today",
		quotaResets: "Resets 00:00 UTC",
		quotaAccountWide: "This quota is shared across all subdomains in your account"
	},
	emailRouting: {
		title: "Email Routing",
		description: "Create custom email addresses and route email to your verified email addresses or Workers.",
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
				status: "Status",
				created: "Created",
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
			}
		},
		account: {
			suppressions: {
				description: "Emails from suppressed addresses will not be routed for any zone in this account."
			}
		},
		zone: {
			tabs: {
				overview: "Overview",
				activityLog: "Activity Log",
				routingRules: "Routing Rules",
				destinationWorkers: "Destination Workers",
				suppressions: "Suppressions",
				settings: "Settings"
			},
			suppressions: {
				description: "Emails from suppressed addresses will not be routed for this zone."
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
					delivered: "Forwarded",
					handled: "Handled",
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
					handled: "Handled",
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
				},
				errors: {
					selectAction: "Select an action.",
					selectDestination: "Select a destination.",
					nameRequired: "Enter a custom address.",
					domainRequired: "Select a domain."
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
				subdomains: "Subdomains",
				subdomainsDescription: "Subdomains are dependent on the domain. If the domain is disabled, subdomains will be disabled too."
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
				lastUpdated: "Last updated <0></0>",
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
				deploying: "Deploying...",
				errors: {
					invalidName: "Worker name must start with a letter or number and contain only letters, numbers, hyphens, and underscores."
				}
			}
		}
	}
}