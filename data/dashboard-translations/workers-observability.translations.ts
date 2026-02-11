{
	title: "Observability",
	header: {
		searchPlaceholder: "Search events...",
		searchPlaceholderMobile: "Search...",
		regexToggleTooltip: "Enable regular expression search",
		caseSensitiveToggleTooltip: "Enable case-sensitive search",
		liveButton: "Live",
		toggleThreshold: "Thresholds",
		toggleCheckPreviews: "Checks",
		checksTooltip: "Check times shown are approximate. Actual checks may occur at different times.",
		actions: {
			refresh: "Refresh",
			keyboardShortcuts: "Keyboard Shortcuts"
		},
		download: {
			downloadAsJson: "Download as JSON",
			downloadAsCsv: "Download as CSV",
			dialogTitle: "Download Events as %{format}",
			limitLabel: "Limit",
			downloadButton: "Download",
			cancelButton: "Cancel",
			errorMessage: "Failed to download events. Please try again."
		}
	},
	queryBuilder: {
		title: "Query Builder",
		savedQueriesButton: "Saved Queries",
		saveQueryButton: "Save Query",
		updateQueryButton: "Update",
		updateQuerySuccess: "Query saved",
		runQueryButton: "Run Query",
		saveAlertButton: "Save Alert",
		addButton: "Add",
		saveQueryDialog: {
			title: "Save Query",
			description: "Give your query a name and description to save it for later use.",
			nameLabel: "Name",
			namePlaceholder: "Enter query name",
			nameRequired: "Name is required",
			nameConflict: "A query with this name already exists",
			descriptionLabel: "Description",
			descriptionPlaceholder: "A helpful description for your query (optional)",
			cancelButton: "Cancel",
			saveButton: "Save"
		},
		saveAlertDialog: {
			title: "Save Alert",
			description: "Give your alert a name and description to help identify it later.",
			nameLabel: "Name",
			namePlaceholder: "Enter alert name",
			nameRequired: "Name is required",
			descriptionLabel: "Description",
			descriptionPlaceholder: "A helpful description for your alert (optional)",
			cancelButton: "Cancel",
			saveButton: "Save"
		},
		updateQueryDialog: {
			title: "Update Query",
			description: "Update the name, description, and parameters of your saved query.",
			nameLabel: "Name",
			namePlaceholder: "Enter query name",
			nameRequired: "Name is required",
			descriptionLabel: "Description",
			descriptionPlaceholder: "A helpful description for your query (optional)",
			cancelButton: "Cancel",
			saveButton: "Update"
		},
		quickQueries: "Quick Queries",
		allQueries: "All Queries",
		sections: {
			datasets: "Dataset",
			visualizations: "Visualizations",
			conditions: "Conditions",
			filters: "Filters",
			groupBy: "Group By",
			orderBy: "Order By"
		},
		placeholders: {
			datasets: "Select a dataset",
			visualizations: "Visualizations show trends in your data",
			conditions: "Conditions determine when your alert will fire",
			filters: "Filter configuration content goes here",
			groupBy: "Use groups of fields to segment results",
			orderBy: "Order results based on a visualization"
		},
		titles: {
			datasets: "Select a Dataset"
		},
		ariaLabels: {
			datasetsDocumentation: "View datasets documentation"
		},
		keyFilter: {
			placeholder: "Select key",
			title: "Ingested keys over the selected time range",
			searchPlaceholder: "Search...",
			emptyState: {
				title: "No key found",
				description: "Try to refresh or select another key",
				info: "Showing the 1000 most relevant keys. Use the search to find more keys."
			},
			errorState: {
				title: "Failed to load keys",
				description: "An error occurred while fetching keys. Please try again."
			},
			loadingState: {
				title: "Loading keys...",
				description: "Please wait while we fetch available keys"
			},
			refreshButton: "Refresh"
		},
		valueFilter: {
			placeholder: "Select value",
			title: "Available values for the selected key",
			searchPlaceholder: "Search...",
			emptyState: {
				title: "No value found",
				description: "Try to refresh or select another value",
				info: "Showing the most relevant values. Use the search to find more values."
			},
			errorState: {
				title: "Failed to load values",
				description: "An error occurred while fetching values. Please try again."
			},
			loadingState: {
				title: "Loading values...",
				description: "Please wait while we fetch available values"
			},
			refreshButton: "Refresh",
			boolean: {
				title: "Boolean value",
				emptyState: {
					title: "Select a boolean value",
					description: "Choose true or false"
				}
			}
		},
		filter: {
			operationPlaceholder: "Operation...",
			valuePlaceholder: "Enter value...",
			operations: {
				equal: "Equals",
				different: "Not Equals",
				greaterThan: "Greater Than",
				greaterThanEqual: "Greater Than or Equal",
				lowerThan: "Less Than",
				lowerThanEqual: "Less Than or Equal",
				includes: "Includes",
				doesNotInclude: "Does Not Include",
				matchRegex: "Regex",
				exists: "Exists",
				doesNotExist: "Does Not Exist",
				in: "In",
				notIn: "Not In",
				startsWith: "Starts With"
			}
		},
		filtersSection: {
			emptyState: "Choose criteria to narrow down your results"
		},
		groupBySection: {
			removeGroupBy: "Remove group by"
		},
		calculationsSection: {
			removeCalculation: "Remove calculation",
			of: "of",
			aliasTooltip: "Add an alias to label this visualization in charts"
		},
		conditionsSection: {
			andTooltip: "The check will fail only if all conditions are met",
			orTooltip: "The check will fail if any conditions are met"
		},
		alertTimingSection: {
			title: "Timings",
			interval: {
				label: "Check alert every",
				tooltip: "How often the alert condition is checked"
			},
			window: {
				label: "Include data from the last",
				tooltip: "Time range of data included in each check"
			},
			timeBeforeFiring: {
				label: "Fire after failing for",
				tooltip: "How long conditions must continuously fail before the alert fires"
			},
			timeBeforeResolved: {
				label: "Resolve after passing for",
				tooltip: "How long conditions must continuously pass before the alert resolves"
			},
			units: {
				minutes: "minutes",
				hours: "hours"
			}
		},
		datasetsSection: {
			alertTooltip: "Alerts currently only support data from Cloudflare Workers"
		},
		orderBySection: {
			selectVisualization: "Select visualization",
			in: "in",
			order: "order",
			upTo: "up to",
			results: "results",
			ascending: "Ascending",
			descending: "Descending",
			limitError: "Limit must be between 0 and 100",
			emptyState: "Add a visualization to unlock ordering"
		},
		alertHeader: {
			namePlaceholder: "New Alert",
			descriptionPlaceholder: "Add a description..."
		}
	},
	eventViewer: {
		searchPlaceholder: "Search properties...",
		actions: {
			viewInvocation: "View invocation",
			share: "Share",
			shareEvent: "Share event",
			shareInvocation: "Share invocation",
			viewTrace: "View trace"
		},
		copiedToClipboard: "Copied to clipboard"
	},
	nodeActions: {
		filterDialog: {
			title: "Add Filter",
			description: "Create a filter using this field",
			cancelButton: "Cancel",
			runQueryButton: "Run Query"
		},
		quickFilters: {
			filterEquals: "Filter equals",
			filterNotEquals: "Filter not equals",
			filterGreaterThan: "Filter greater than",
			filterLessThan: "Filter less than"
		},
		dropdown: {
			filter: "Filter",
			search: "Search",
			visualize: "Visualize",
			copy: "Copy",
			addToTable: "Add to table",
			fieldActions: "Field actions"
		}
	},
	table: {
		timestamp: "Timestamp",
		fieldsButton: "Fields",
		fieldsDialog: {
			title: "Select Fields",
			description: "Add or remove columns from the events table",
			selectedCount: "%{count} selected"
		},
		actions: {
			filterEquals: "Filter: equals",
			filterNotEquals: "Filter: not equals",
			filterGreaterThan: "Filter: greater than",
			filterLessThan: "Filter: less than"
		}
	},
	invocation: {
		invocationId: "Invocation ID: %{requestId}",
		invocationIdLabel: "Invocation ID",
		cpuTime: "CPU Time",
		wallTime: "Wall Time",
		error: "1 error",
		errors: "%{count} errors"
	},
	trace: {
		traceId: "Trace ID: %{traceId}"
	},
	timeSelector: {
		startTimeLabel: "Start Time",
		endTimeLabel: "End Time",
		applyButton: "Apply",
		customRange: "Custom Range",
		relativeTime: "Relative Time",
		errors: {
			startBeforeEnd: "Start time must be before end time",
			startOutOfRange: "Start time is outside the allowed range",
			endOutOfRange: "End time is outside the allowed range"
		}
	},
	abr: {
		message: "Results may be incomplete due to high data volume. Click to load more data.",
		limit: "Results may be incomplete. Maximum query time reached - try narrowing your time range.",
		loadMoreButton: "Load More"
	},
	error: {
		title: "Something went wrong",
		description: "An error occurred while fetching data. Please try again.",
		refreshButton: "Refresh"
	},
	tooltips: {
		queryBuilderToggle: "Build queries to filter, group, and analyze your data",
		sections: {
			filters: "Add conditions to narrow down your results",
			visualizations: "Create visualizations from your data",
			groupBy: "Segment your results by field values",
			orderBy: "Sort and limit your results"
		},
		views: {
			events: "Browse individual log events",
			invocations: "View events grouped by invocation",
			traces: "Analyze performance with traces",
			visualizations: "Create and view charts and graphs"
		}
	},
	liveTail: {
		button: {
			start: "Live",
			stop: "Stop",
			pause: "Pause",
			resume: "Resume"
		},
		preparing: "Connecting...",
		preparingDescription: "Establishing real-time connection",
		waiting: "Waiting for events...",
		waitingDescription: "Events will appear here as they arrive",
		empty: "No events",
		emptyDescription: "No events received while paused",
		error: "Connection error",
		errorDescription: "Failed to connect to real-time stream"
	},
	alertCheckHistory: {
		emptyState: {
			title: "No checks found",
			description: "It might take a few moments for your alert to run its first check."
		}
	},
	alerts: {
		title: "Alerts",
		description: "Track your Workers' metrics and get notified when they exceed defined thresholds.",
		delete: {
			title: "Delete Alert",
			description: 'Are you sure you want to delete "%{name}"? This action cannot be undone.'
		},
		observedValue: "Observed Value",
		status: {
			normal: "Normal",
			firing: "Firing",
			monitoring: "Monitoring",
			paused: "Paused"
		},
		currentState: "Current State",
		nextCheck: "Next Check",
		checkFrequency: "Check Frequency",
		window: "Window",
		timeBeforeFired: "Time Before Fired",
		timeBeforeResolved: "Time Before Resolved",
		editAlert: "Edit Alert",
		editingAlert: "Editing '%{name}'",
		newAlert: "New Alert",
		checkNow: "Check Now",
		manageNotifications: "Manage Notifications"
	},
	usage: {
		optIn: {
			banner: "Your plan now includes new Workers Observability pricing. <0>Review now and accept the changes.</0>",
			title: "Agree to the new features on your Workers Plan",
			body: "Once you have agreed to the new features on the account <b>%{accountName}</b>, your plan will begin to incur the additional usage fees for the following:",
			detailHeader: "Workers Observability",
			includedEvents: "%{millionEvents} million events included per month",
			additionalCost: "$%{price} per additional 1 million events",
			disclaimer: "Until you agree to the new features, your usage for those features will be limited to the included volume according to your plan type.",
			totalDue: "Total due now: $0.00",
			terms: "Agreeing to these additional features will not change the pricing for the existing features on your plan. Your billing cycle will remain the same.",
			acceptButton: "Agree",
			dismissButton: "Review later"
		}
	},
	disabled: {
		title: "Workers Observability is Disabled",
		description: "Enable Workers Observability to get insights into your Workers performance and behavior.",
		enableButton: "Enable Observability",
		containers: {
			dialogTitle: "Enable Container Logs"
		}
	},
	keyboardShortcuts: {
		title: "Keyboard shortcuts",
		toggleQueryBuilder: "Toggle query builder",
		toggleQueryBuilderDescription: "Open or close the query builder panel",
		runQuery: "Run query",
		runQueryDescription: "Execute the current query",
		eventsView: "Events",
		invocationsView: "Invocations",
		tracesView: "Traces",
		visualizationsView: "Visualizations",
		showHelp: "Keyboard shortcuts",
		showHelpDescription: "Show this help dialog"
	},
	emptyState: {
		title: "Enable %{product} Observability",
		description: "Automatically collect, search, filter, and analyze logs emitted by %{product}"
	}
}