{
	title: "Workflows",
	description: "Durable Execution Engine for Cloudflare Workers",
	somethingWentWrong: "Something went wrong.",
	workflowsPage: {
		columns: {
			workflow: "Workflow",
			instances: "instances",
			errored: "Errored",
			complete: "Completed",
			terminated: "Terminated",
			ended: "Ended",
			inactive: "Inactive",
			queued: "Queued",
			running: "Running",
			wallTime: "Wall time",
			avgWallTime: "Wall time",
			cpuTime: "CPU time",
			lastTriggered: "Last triggered",
			retries: "Retries",
			lastUpdated: "Last Updated",
			tooltip: {
				avgLast24h: "Average over last 24h",
				avgLast7d: "Average over last 7 days",
				avgCurrentBillingPeriod: "Average over current billing period",
				overLast7d: "Over last 7 days",
				overCurrentBillingPeriod: "Over current billing period",
				last24h: "Last 24 hours",
				inactive: "Includes queued, paused and waiting instances",
				ended: "Includes completed, errored and terminated instances"
			}
		},
		noWorkflowsFound: "No Workflows found",
		noWorkflowTriggers: "Never",
		emptyStateDescription: "Create a Workflow and start building. You can create them via the CLI.",
		copyBindings: "Copy bindings",
		search: "Search workflows...",
		stats: {
			totalCpu: "Total CPU time",
			totalWallTime: "Total Wall time",
			executionDuration: "Execution duration",
			instanceDuration: "Instance duration",
			stepDuration: "Step duration",
			totalRetries: "Total Retries",
			tooltip: {
				totalCpu: "Total CPU time used by workflows",
				totalWallTime: "Wall time is entire duration of an operation both active and idle",
				totalRetries: "Count of retries done by all workflows"
			}
		}
	},
	workflowPage: {
		boundWorker: "Bound Worker",
		charts: {
			cpuTime: {
				title: "CPU time",
				tooltip: "CPU time",
				seriesName: "Milliseconds"
			},
			executionDuration: {
				title: "Execution duration",
				tooltip: "Execution duration",
				seriesName: "Execution duration"
			},
			instance: {
				title: "Instance",
				tooltip: "Instance",
				seriesName: "Runs"
			},
			steps: {
				title: "Steps",
				tooltip: "Steps",
				seriesName: "Steps"
			},
			storage: {
				title: "Storage",
				tooltip: "Storage",
				seriesName: "Bytes"
			},
			retries: {
				title: "Retries",
				tooltip: "Retries",
				seriesName: "Retries"
			},
			wallTime: {
				title: "Wall time",
				tooltip: "Wall time",
				seriesName: "Seconds"
			}
		},
		units: {
			rps: "RPS"
		},
		loading: "Loading",
		stats: {
			complete: "Complete",
			cpuTime: "Total CPU time",
			errored: "Errored",
			failed: "Failed",
			instances: "Instances",
			instancesTotal: "Finished Instances",
			paused: "Paused",
			queued: "Queued",
			running: "Running",
			storage: "Storage growth",
			terminated: "Terminated",
			waiting: "Waiting",
			wallTime: "Average Wall time"
		},
		tabs: {
			overview: "Overview",
			metrics: "Metrics",
			instances: "Instances",
			settings: "Settings"
		},
		toolbar: {
			run: "Trigger",
			pause: "Pause",
			stop: "Stop"
		}
	},
	instancesList: {
		columns: {
			status: "Status",
			start: "Start time",
			end: "End time",
			id: "Instance ID",
			wall: "Wall time",
			cpu: "CPU time",
			lastModified: "Last modified"
		},
		status: {
			queued: "Queued",
			running: "Running",
			waiting: "Waiting",
			paused: "Paused",
			errored: "Errored",
			terminated: "Terminated",
			waitingForPause: "Waiting for Pause",
			complete: "Completed",
			unknown: "Unknown"
		},
		statusOptions: {
			all: "All",
			running: "Running",
			completed: "Completed",
			errored: "Errored",
			queued: "Queued",
			waiting: "Waiting",
			paused: "Paused",
			terminated: "Terminated"
		},
		timeOptions: {
			hour: "Past hour",
			day: "Past 24h",
			week: "Past 7 days",
			month: "Past 30 days",
			quarter: "Past 90 days",
			year: "Past 12 months"
		},
		noInstancesFound: "No instances found",
		backgroundTime: "Background Time:",
		backgroundTimeTooltip: "Background time can be composed by the time the instance was queued, plus the time the instance was pause."
	},
	instancePage: {
		back: "Back",
		title: "Instance",
		loading: "Loading",
		actions: {
			resume: "Resume",
			pause: "Pause",
			stop: "Terminate"
		},
		summary: "Summary",
		stats: {
			status: "Status",
			stepsCompleted: "Steps Completed",
			wall: "Wall Time",
			cpuTime: "CPU Time",
			avgWall: "Average Wall Time"
		},
		params: "Params",
		input: "Input",
		response: "Response",
		output: "Output",
		config: "Config",
		attempts: "Attempts",
		stepHistory: "Step History",
		noSteps: "No steps found",
		table: {
			columns: {
				status: "Status",
				startTime: "Start Time",
				endTime: "End Time",
				step: "Step",
				stepType: "Type",
				wall: "Wall Time",
				retries: "Retries",
				details: "Details"
			}
		},
		running: "Running",
		complete: "Completed",
		error: "Errored",
		sleep: "Sleep",
		do: "Do",
		waitForEvent: "Waiting for event",
		eventPayload: "Event Payload"
	},
	triggerModal: {
		title: "Trigger this workflow?",
		description: "Manually trigger an instance of this Workflow using the payload below.",
		cancel: "Cancel",
		trigger: "Trigger Instance",
		instanceId: "Instance ID",
		label: "Params",
		errors: {
			invalidIdFormat: "Invalid ID format",
			invalidParamsFormat: "Invalid payload. Must be a valid JSON",
			timeout: "Could not trigger workflow instance. Check your parameters or try again later."
		}
	},
	pauseModal: {
		title: "Pause all Instances?",
		description: "This will immediately pause all currently running instances in this workflow.<br/>New instances can still be triggered.",
		cancel: "Cancel",
		pause: "Pause all Instances"
	},
	pauseInstanceModal: {
		title: "Pause Instance?",
		description: "This will immediately pause running instance (<strong>%{instanceId}</strong>).<br/>New instances can still be triggered.",
		cancel: "Cancel",
		pause: "Pause Instance"
	},
	resumeInstanceModal: {
		title: "Resume Instance?",
		description: "This will immediately resume instance (<strong>%{instanceId}</strong>).",
		cancel: "Cancel",
		resume: "Resume Instance"
	},
	terminateInstanceModal: {
		title: "Terminate Instance?",
		description: "This will immediately terminate instance (<strong>%{instanceId}</strong>).",
		cancel: "Cancel",
		terminate: "Terminate Instance"
	},
	cancelModal: {
		title: "Cancel workflow?",
		description: "This will immediately pause all currently running instances and prevent any new instances from being triggered.",
		cancel: "Cancel",
		stop: "Stop workflow"
	},
	common: {
		labels: {
			documentation: "Documentation",
			workflows_documentation: "Workflows documentation"
		},
		search: "Search",
		something_went_wrong: "Something went wrong. Please try again",
		back: "Back to Workflows",
		learn_mode: "Learn more",
		time: {
			y: {
				one: "year",
				multi: "years"
			},
			d: {
				one: "day",
				multi: "days"
			},
			h: {
				one: "hour",
				multi: "hours"
			},
			m: {
				one: "min",
				multi: "min"
			},
			s: {
				one: "s",
				multi: "s"
			},
			ms: {
				one: "ms",
				multi: "ms"
			}
		},
		workflow: "Workflow",
		workflows: "Workflows",
		instance: "Instance",
		instances: "Instances",
		notApplicable: "N/A"
	},
	welcome: {
		title: "Welcome to Workflows!",
		onboarding: {
			title: "Get started with Workflows",
			subtitle: "Define your Workflow",
			description: "Create your first Workflow, use the create cloudflare (C3) CLI tool, specifying the Workflows starter template:"
		}
	},
	learnMore: {
		rules: "Rules of Workflows",
		cli: "Build using Wrangler CLI",
		discord: "Join Discord Server",
		community: "Community forum"
	},
	pending: "Pending",
	settings: {
		deleteWorkflow: {
			title: "Delete workflow",
			content: "Permanently delete all files, configurations, versions, instances, data and caches associated with this workflow.",
			modal: {
				title: "Delete workflow?",
				body1: "Deleting **%{name}** is permanent and cannot be undone. This will permanently delete all files, configurations, versions, instances, data and caches associated with this workflow.",
				body2: "Any Workers on your account using this workflow may be affected.",
				error: "There was a problem deleting your workflow, please try again later."
			}
		}
	},
	api: {
		body: "Bad Request",
		workflow_no_deployed_versions: "Bad Request",
		workflow_not_found: "Workflow Name not found",
		instance_already_exists: "Provided Instance ID already exists in this Workflow",
		instance_invalid_id: "Provided Workflow ID is not valid"
	}
}