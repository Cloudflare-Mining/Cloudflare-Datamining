{
	banner: (0, r.p)(i()),
	common: {
		title: "Browser Rendering",
		browser_run: "Browser Run",
		description: (0, r.p)(a()),
		browser_run_description: (0, r.p)(l()),
		documentation: (0, r.p)(c()),
		labels: {
			beta: "Beta",
			documentation: "Browser Rendering documentation"
		},
		errors: {
			something_went_wrong: "Something went wrong.",
			no_sessions: "No Sessions",
			no_usage: "No Usage"
		},
		chart_note: "* This graph includes both billable and unbillable sessions",
		today: "Today",
		browser: "browser",
		browsers: "browsers"
	},
	overview: {
		metrics: "Metrics",
		rest_api_requests: "REST API Requests",
		quick_action_requests: "Quick Action Requests",
		browser_hours: "Browser Hours"
	},
	tabs: {
		overview: "Overview",
		logs: "Logs",
		runs: "Runs",
		live: "Live Sessions",
		examples: "Examples",
		playground: "Playground"
	},
	browser_close_reasons: {
		no_reason: "",
		unknown: "Unknown",
		normal_closure: "Normal closure",
		browser_idle: "Browser idle",
		client_closed_early: "Client closed early",
		chromium_chrashed: "Chromium crashed",
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
		connection_close: "Connection Close",
		browser_close: "Browser Close",
		browser_tabs: "Browser Tabs",
		failed_to_load_tabs: "Failed to load browser tabs.",
		no_active_tabs: "No active tabs for this session."
	},
	sidebar: {
		usage: {
			title: "Account Usage",
			num_browsers: "Total sessions",
			avg_concurrent_sessions: "Average number of concurrent sessions",
			avg_concurrent_sessions_short: "Avg Concurrent Sessions",
			num_hours: "Total browser hours",
			num_api_requests: "Total REST API requests",
			num_quick_actions: "Quick Action requests",
			browser_sessions: "Browser sessions",
			browser_hours: "Browser hours",
			api_requests: "REST API requests"
		},
		link: {
			title: "Quick links",
			docs: "Docs",
			discord: "Discord",
			community: "Community"
		}
	},
	tables: {
		filters: {
			select_all: "Select All"
		},
		empty: "No runs found that match your criteria. If you have a browser session that has not appeared, please re-deploy",
		logs: {
			head: {
				session_id: "Session ID",
				start_time: "Start Time",
				end_time: "End Time",
				total_connections: "Connections",
				close_reason: "Close Reason",
				recording: "Recording"
			},
			view_recording: "View Recording"
		},
		connection: {
			title: "Connections Log",
			head: {
				connection_id: "Connection ID",
				event: "event"
			}
		}
	},
	liveView: {
		title: "Live View",
		remoteBrowserClosed: "Remote browser has closed",
		sessionNoLongerAvailable: "This browser session is no longer available.",
		goBackToSessions: "Back to sessions",
		openInNewTab: "Open in new tab",
		open: "Open",
		newTab: "New Tab",
		closeTab: "Close tab",
		closeBrowser: "Close Browser",
		connected: "Connected",
		disconnected: "Disconnected",
		devtoolsIframeTitle: "DevTools - Live View"
	},
	sessions: {
		title: "Active Sessions",
		description: "Live browser sessions currently running.",
		noSessions: "No active sessions",
		noSessionsDescription: "There are no active browser sessions at this time.",
		sessionId: "Session ID",
		startTime: "Start Time",
		connectionId: "Connection ID",
		actions: "Actions",
		openLiveView: "Open Live View",
		deleteSession: "Delete Session",
		createSession: "Create Session",
		createSessionWithRecording: "Create Session with Recording",
		noTargets: "Session has closed or no browser tabs available. Please refresh.",
		tabId: "Tab ID",
		tabTitle: "Title",
		tabUrl: "URL",
		getStarted: "Get started",
		results: (0, r.p)(u(), "count")
	},
	recording: {
		replay: "Replay",
		replay_too_short: "Recording is too short to display playback controls",
		play: "Play",
		pause: "Pause",
		restart: "Restart",
		session_recording: "Session Recording",
		session_id_label: "Session ID:",
		download_json: "Download JSON",
		start_time: "Start Time",
		end_time: "End Time",
		duration: "Duration",
		tabs_label: "Tabs",
		status: "Status",
		unknown: "Unknown",
		session_completed: "Session Completed",
		not_available: "N/A",
		inspect: "Inspect",
		tab_dom: "DOM",
		tab_logs: "Logs",
		tab_network: "Network",
		tab: "Tab",
		no_dom_data: "No DOM data available",
		coming_soon: "Coming Soon",
		logs_coming_soon: "Console logs and events will be available here.",
		network_coming_soon: "Network requests and responses will be available here.",
		no_data_title: "No data found",
		no_data_description: "The session Id you looked up does not exist or has expired.",
		go_back: "Go back to sessions"
	},
	playground: {
		ai_extraction_notice: (0, r.p)(d()),
		usage_notice: (0, r.p)(_())
	},
	crawl: {
		invalid_job_id: "Invalid crawl job ID",
		no_pages_crawled: "No pages crawled yet",
		load_more: "Load more",
		no_content_available: "No content available",
		showing_first_records: (0, r.p)(b(), "count"),
		failed_to_load_detail: "Failed to load crawl job detail.",
		view_records: "View Records",
		col_title: "Title",
		col_url: "URL",
		col_status: "Status",
		col_http: "HTTP",
		label_job_id: "Job ID",
		label_status: "Status",
		label_progress: "Progress",
		label_browser_seconds: "Browser seconds",
		label_start_time: "Request Start time",
		label_end_time: "Request End time",
		label_connection_id: "Connection ID",
		label_event_time: "Event Time",
		label_request_id: "Request ID",
		label_type: "Type",
		label_target_url: "Target URL",
		label_duration: "Duration"
	},
	onboarding: {
		title: "Cloudflare Browser Rendering",
		description: "The Workers Browser Rendering allows developers to programmatically control and interact with a headless browser instance and create automation flows for applications and products.",
		documentation: "Browser Rendering Documentation",
		keyPoints: {
			one: "Take screenshots of pages.",
			oneDescription: "Capture visual snapshots of web pages to document their appearance, structure, or specific content.",
			two: "Convert a page to a PDF.",
			twoDescription: "Convert a webpage into a PDF, preserving its layout and content.",
			three: "Test web applications.",
			threeDescription: "Assess the functionality and performance of a web application through simulated user interactions.",
			four: "Gather page load performance metrics.",
			fourDescription: "Collect and analyze data on how quickly a webpage loads and performs.",
			five: "Crawl web pages for information retrieval.",
			fiveDescription: " Automatically browse and extract information from multiple web pages for analysis or indexing."
		}
	}
}