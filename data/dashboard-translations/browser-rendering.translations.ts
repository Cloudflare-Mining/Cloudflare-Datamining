{
	banner: (0, o.d)`
      <b>No logs?</b> <0>Get started</0> with your first browser rendering worker.<br/><small>* If you have a browser rendering worker but no logs are showing, please re-deploy.</small>`,
	common: {
		title: "Browser Rendering",
		description: "The Workers Browser Rendering API allows developers to programmatically control and interact with a headless browser instance and create automation flows for their applications and products. ",
		documentation: (0, o.d)`Workers AI will start billing on April 1st, 2024, learn more about plans and pricing <0>here</0>`,
		labels: {
			beta: "Beta",
			documentation: "Browser Rendering documentation"
		},
		errors: {
			something_went_wrong: "Something went wrong.",
			no_sessions: "No Sessions"
		},
		today: "Today",
		browser: "browser",
		browsers: "browsers"
	},
	tabs: {
		overview: "Overview",
		logs: "Logs",
		examples: "Examples"
	},
	browser_close_reasons: {
		no_reason: "",
		unknown: "Unknown",
		normal_closure: "Normal closure",
		browser_idle: "Browser idle",
		client_closed_early: "Client closed early",
		chromium_chrashed: "Chromium chrashed",
		client_abnormal_closure: "Client abnormal closure",
		server_abnormal_closure: "Server abnormal closure",
		client_error: "Client error",
		server_error: "Server error",
		worker_error: "Worker error",
		client_never_connected: "Client never connected",
		browser_session_evicted: "Browser session evicted",
		other: "Other"
	},
	activity_events: {
		browser_start: "Browser Start",
		connection_start: "Connection Start",
		connection_end: "Connection End",
		connection_close: "Browser Close"
	},
	sidebar: {
		usage: {
			title: "Account Usage",
			num_browsers: "Total sessions"
		},
		link: {
			title: "Quick links",
			docs: "Docs",
			discord: "Discord",
			comunity: "Comunity"
		}
	},
	tables: {
		logs: {
			head: {
				session_id: "Session ID",
				start_time: "Start Time",
				end_time: "End Time",
				total_connections: "Connections",
				close_reason: "Close Reason"
			}
		},
		connection: {
			title: "Connections Log",
			head: {
				connection_id: "Connection ID",
				event: "event"
			}
		}
	}
}