{
	title: "Observability",
	header: {
		searchPlaceholder: "Search events...",
		searchPlaceholderMobile: "Search...",
		liveButton: "Live",
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
		runQueryButton: "Run Query",
		addButton: "Add",
		sections: {
			datasets: "Datasets",
			visualizations: "Visualizations",
			filters: "Filters",
			groupBy: "Group By",
			orderBy: "Order By"
		},
		placeholders: {
			datasets: "Select a dataset",
			visualizations: "Visualizations show trends in your data",
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
			removeCalculation: "Remove calculation"
		},
		orderBySection: {
			selectVisualization: "Select visualization",
			in: "in",
			order: "order",
			upTo: "up to",
			results: "results",
			ascending: "Ascending",
			descending: "Descending"
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
		invocationId: "Invocation ID: %{requestId}"
	},
	trace: {
		traceId: "Trace ID: %{traceId}"
	},
	timeSelector: {
		startTimeLabel: "Start Time",
		endTimeLabel: "End Time",
		applyButton: "Apply",
		customRange: "Custom Range",
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
	}
}