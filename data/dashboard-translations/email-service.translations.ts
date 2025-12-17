{
	common: {
		search: "Search"
	},
	emailRouting: {
		title: "Email Routing",
		description: "Create custom email addresses and route email to your verified email addresses or Workers.",
		zoneList: {
			table: {
				name: "Name",
				nameTooltip: "Name of the zone",
				status: "Status"
			},
			emptyState: {
				title: "Enable Email Routing",
				description: "No zones found"
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
				description: "Add destination addresses to route emails",
				onboardDomain: "Onboard Domain"
			},
			addAddress: "Add Address"
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
				summaryCardTitle: "Configuration summary",
				summaryCustomAddresses: "Custom Addresses",
				summaryDestinationAddresses: "Destination Addresses",
				summaryDomains: "Domains",
				summaryRoutingStatus: "Routing Status",
				summaryDns: "DNS records",
				analyticsCardTitle: "Analytics",
				analyticsForwarded: "Forwarded",
				analyticsDropped: "Dropped",
				analyticsDeliveryFailed: "Delivery Failed",
				analyticsRejected: "Rejected",
				analyticsOther: "Other",
				analyticsTotal: "Total received"
			},
			activityLog: {
				title: "Activity Log",
				description: "View activity logs for your zone.",
				search: "Search",
				filters: {
					all: "All",
					forwarded: "Forwarded",
					deliveryFailed: "Delivery Failed",
					dropped: "Dropped",
					rejected: "Rejected",
					error: "Error",
					unknown: "Unknown",
					allResults: "All Results",
					allBounceResults: "All Bounce Results",
					allCustomAddresses: "All Custom Addresses"
				},
				table: {
					sessionId: "Session ID",
					sender: "Sender",
					to: "Custom Address",
					received: "Received",
					result: "Result",
					messageId: "Message ID",
					email: "Email Address",
					emailTooltip: "Destination email address",
					status: "Status",
					statusTooltip: "Verification status",
					created: "Created",
					createdTooltip: "Date created",
					verified: "Verified",
					pending: "Pending",
					unknown: "Unknown",
					deliveryFailed: "Delivery Failed",
					dropped: "Dropped",
					rejected: "Rejected",
					error: "Error",
					forward: "Forward",
					worker: "Worker",
					drop: "Drop"
				},
				emptyState: {
					title: "No activity logs found",
					description: "No activity logs found"
				}
			}
		}
	}
}