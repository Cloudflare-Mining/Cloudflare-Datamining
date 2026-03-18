{
	parent: "AI",
	title: "AI Search",
	alt_title: "AI Search (formerly AutoRAG)",
	description: "Create AI-powered search experiences with your data to deliver natural language answers in your applications.",
	tabs: {
		overview: "Overview",
		metrics: "Metrics",
		playground: "Playground",
		jobs: "Jobs",
		settings: "Settings"
	},
	overview: {
		empty_state: {
			title: "Get started with AI Search",
			description: "Build an AI-powered search experience",
			button: "New AI Search"
		},
		table: {
			columns: {
				name: "Name",
				source: "Source",
				status: "Status",
				index_results: "Index results",
				last_sync: "Last sync"
			},
			error: "sorry, an error occurred",
			empty: "No AI Search instance found",
			empty_description: "Clear your search and try again."
		}
	},
	metrics: {
		title: "Metrics",
		categories: {
			index: {
				title: "Index",
				panels: {
					fileStatus: {
						title: "Items status over time",
						empty: "No data available",
						status: {
							completed: "completed",
							errored: "errored",
							running: "running",
							queued: "queued"
						}
					}
				}
			},
			search: {
				title: "Search/Retrieval",
				panels: {
					searchType: {
						title: "Search type over time",
						empty: "No data available",
						type: {
							search: "Search",
							aiSearch: "AI Search"
						}
					},
					topFiles: {
						title: "Top items retrieved over time",
						status: {
							error: "Error",
							empty: "No data available"
						},
						columns: {
							item: "Item key",
							filename: "File name",
							count: "Count"
						}
					}
				}
			}
		}
	},
	create_rag: {
		title: "Create a new AI Search",
		description: "Connect your data source to get started. AI Search will index your content automatically once created.",
		steps: {
			step1: "Connect your data source",
			step2: "Connect an AI Gateway",
			step3: "Generate indexes",
			step4: "Configure retrieval and generation",
			step5: "Finalize"
		},
		sources: {
			title: "Select a data source",
			types: {
				r2: "R2 Bucket",
				br: "Website",
				d1: "D1 Database",
				managed: "Managed Instance"
			},
			filter_items: {
				title: "Path Filters",
				description: "Path filtering allows you to control which files or URLs are indexed by defining include and exclude patterns.</br> Use this to limit indexing to specific content or to skip files you do not want searchable.",
				include_items: {
					title: "Include Rules",
					description: "All items except those matching exclude patterns are indexed (e.g., **/blog/*)",
					add_button: "Add include rule"
				},
				exclude_items: {
					title: "Exclude Rules",
					description: "All items except those matching exclude patterns are indexed (e.g., **/admin/*)",
					add_button: "Add exclude rule"
				}
			},
			r2: {
				title: "Choose an R2 bucket",
				description: "Select the R2 bucket where your data is stored.",
				create: "Create a new bucket in R2",
				select_bucket_title: "Choose an R2 bucket",
				select_bucket_description: "Select the R2 bucket where your data is stored."
			},
			br: {
				title: "Choose a website to parse",
				description: "Enter a domain from this Cloudflare account. Include a subdomain if needed.",
				bucket_note: "An R2 bucket will be created automatically to store your parsed results.",
				add_domain: "Website domain",
				r2_bucket: "Select the R2 bucket where your data is stored.",
				parser_options: {
					title: "Parsing options",
					source: {
						title: "Source type",
						sources: {
							sitemap: "Sitemap",
							crawl: "Web Crawl",
							rss_feed: "RSS Feed"
						}
					},
					extract_engine: {
						title: "Parsing mode",
						description: "Choose how content is fetched from your website:",
						type: {
							dynamic: {
								title: "Rendered site",
								description: "Loads the page like a browser. Recommended if your content loads dynamically. Note this will be included in your Browser Rendering usage and billing."
							},
							static: {
								title: "Static site",
								description: "Loads just the basic HTML. Provides faster parsing, but may miss content that appears after the page loads."
							}
						}
					},
					errors: {
						not_a_valid_domain: "Not a valid domain.",
						invalid_domain: "Invalid domain. The domain needs to belong to this account.",
						fail_to_find_domain_info: "Failed to find domain information.",
						missing_sitemap: 'Sitemap not found. Please check your robots.txt. <a href="https://developers.cloudflare.com/autorag/configuration/data-source/website/" target="_blank">Learn more</a>',
						domain_not_owned_by_user: "The domain needs to belong to this account.",
						forbidden_robots_txt: "Failed to fetch robots.txt: The file is inaccessible.",
						forbidden_sitemap: "Failed to fetch your sitemap: The file is inaccessible."
					}
				},
				custom_headers: {
					title: "Custom headers",
					extra_headers: {
						title: "Extra header",
						description: "Add additional headers to crawl your website."
					}
				},
				specific_sitemaps: {
					title: "Specific sitemaps",
					description: "Specify specific sitemap URLs to crawl instead of using the default sitemap discovery.",
					add_button: "Add sitemap",
					placeholder: "https://example.com/sitemap.xml"
				},
				content_selector: {
					title: "Content selectors",
					description: "Define path-to-selector mappings to extract specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins.",
					path_label: "Path",
					selector_label: "Selector",
					path_placeholder: "**/blog/**",
					selector_placeholder: "article .post-body",
					add_button: "Add selector",
					remove_button: "Remove selector"
				},
				crawl_options: {
					title: "Crawl options",
					description: "Configure how the crawler traverses your website.",
					depth: {
						title: "Depth",
						description: "Maximum number of pages to crawl (1-100,000)."
					},
					source: {
						title: "Source",
						description: "Which links to follow when crawling.",
						options: {
							all: "All",
							sitemaps: "Sitemaps",
							links: "Links"
						}
					},
					max_age: {
						title: "Max age (seconds)",
						description: "Maximum age of cached content in seconds (0-604,800)."
					},
					include_external_links: {
						title: "Include external links",
						description: "Follow links to external domains."
					},
					include_subdomains: {
						title: "Include subdomains",
						description: "Follow links to subdomains of the source domain."
					}
				}
			},
			common: {
				search_buckets: "Search buckets"
			}
		},
		ai_gateway: {
			title: "Connect an AI Gateway to access providers",
			description: "Use an AI Gateway to track and manage model usage. All gateways will have access to <b>Workers AI</b>. To use other providers, select a gateway with your API keys added.",
			create_default: {
				title: "Create a new AI Gateway",
				description: "A new AI Gateway will be deployed as part of this instance creation.",
				action: 'Press "Next" to continue the process.'
			},
			gateway: {
				byok_use: "Available providers:"
			}
		},
		indexes: {
			title: "Select a data source",
			select_embedding_model: {
				title: "Embedding model",
				description: "Select the recommended model to convert your data into vectors. Note this will be included in your <b>Workers AI</b> usage and billing."
			},
			vectorize: {
				note: "An index with the following specifications will be created in Vectorize:",
				modality: "Modality",
				dimension: "Dimension",
				metric: "Metric",
				extra: "Note this will be included in your <b>Vectorize</b> usage and billing."
			},
			models: {
				title: "More embedding models",
				description: "Select an embedding model to convert your data into vectors. Note this will be included in your model's usage and billing."
			},
			hybrid_search: {
				title: "Hybrid Search",
				description: "Enable hybrid search to combine vector and keyword search for improved results.",
				fusion_method: {
					title: "Fusion method",
					description: "Select how vector and keyword search scores are combined."
				},
				keyword_match_mode: {
					title: "Keyword match mode",
					description: "Select how keywords are matched during hybrid search."
				}
			},
			chunking: {
				title: "Chunking",
				size: {
					title: "Chunk size",
					description: "Controls the number of tokens per chunk. Affects search precision and context. Min %{min} tokens - Max %{max} tokens."
				},
				overlap: {
					title: "Chunk overlap",
					description: "Controls the amount of overlap between chunks to keep related information together. Min 0%  - Max 30%."
				}
			}
		},
		retrive_generation: {
			select_generation_model: {
				title: "Generation model",
				description: "Select the recommended LLM to generate the response. Note this will be included in your <b>Workers AI</b> usage and billing."
			},
			models: {
				title: "More generation models",
				description: "Select an LLM to generate the response. Note this will be included in your model's usage and billing."
			},
			gateway: {
				title: "Connect an AI Gateway ",
				description: "Connect an AI Gateway to monitor and control your model usage.",
				exist: "I already have one",
				use_default: "Use default AI Gateway"
			},
			rewrite: {
				title: "Query rewrite",
				select: {
					title: "Query rewrite",
					model: {
						title: "Query rewrite model",
						description: "Select an LLM to rewrite your queries to improve retrieval. Note this will be included in your model's usage and billing."
					}
				}
			},
			reranking: {
				title: "Reranking",
				select: {
					title: "Reranking",
					model: {
						title: "Reranking model",
						description: "Select a model to re-rank retrieved results and enhance relevance. The associated usage will be included in your model's billing."
					}
				}
			},
			retrival: {
				title: "Retrieval configuration",
				result: {
					title: "Maximum number of results",
					description: "Control the maximum number of results that can be returned for each query. Higher = more results."
				},
				threshold: {
					title: "Match threshold",
					description: "Control the minimum score required for a result to be considered a match. Higher = stricter matching."
				},
				boost_by: {
					title: "Boost by",
					description: "Boost search results by ranking documents with specific metadata field values higher."
				}
			},
			cache: {
				title: "Similarity caching",
				semantic: {
					title: "Similarity caching",
					description: "Select a caching strategy"
				}
			}
		},
		finalize: {
			title: "Almost there, finalize and review permissions",
			name: {
				title: "Enter a name for the AI Search",
				note: "Cannot be changed"
			},
			token: {
				title: "Service API Token",
				description: "This enables AI Search to create and access resources in your account",
				api_token: "API Token:",
				exist: "I already have one",
				crete: "Create one for me"
			},
			custom_metadata: {
				title: "Custom Metadata",
				description: "Add custom metadata fields to your AI Search instance for filtering and organization.",
				field_name: "Field Name",
				field_type: "Field Type",
				field_type_labels: {
					text: "Text",
					number: "Number",
					boolean: "Boolean",
					datetime: "Datetime"
				},
				add_button: "Add Metadata",
				remove_button: "Remove",
				max_items_error: "Maximum 5 custom metadata entries allowed",
				duplicate_field_name_error: "Field name must be unique",
				empty_field_name_error: "Field name cannot be empty",
				lowercase_field_name_error: "Field name must be lowercase",
				reserved_field_name_error: 'Field name cannot be "timestamp", "folder", or "filename"',
				no_metadata: "No custom metadata added",
				drawer: {
					title: "Custom Metadata",
					description: "Add custom metadata for your AI Search instance."
				}
			}
		}
	},
	settings: {
		resources: {
			title: "Resources",
			description: "Configure the resources connected to your AI Search.",
			ai_gateway: {
				title: "AI Gateway",
				drawer: {
					title: "Connect an AI Gateway",
					description: "Connect an AI Gateway to monitor and control your model usage, or create a new AI Gateway."
				}
			},
			source: {
				title: "Data source"
			},
			filter_items: {
				title: "Path Filters",
				description: "Path filtering allows you to control which files or URLs are indexed by defining include and exclude patterns. Use this to limit indexing to specific content or to skip files you do not want searchable.",
				include_items: "Include Rules",
				exclude_items: "Exclude Rules"
			},
			nlweb: {
				title: "NLWeb Worker"
			}
		},
		parser_options: {
			title: "Parser options",
			description: "Configure parser options for your AI Search.",
			extraction_engine: {
				title: "Parsing mode",
				drawer: {
					title: "Parsing mode",
					description: "Choose how content is fetched from your website:",
					note: "Updating the parse options settings will trigger a full re-index of your AI Search instance after you Save."
				}
			},
			custom_headers: {
				title: "Extra headers",
				drawer: {
					title: "Add extra headers",
					description: "Add extra headers to be used in crawling:"
				}
			},
			specific_sitemaps: {
				title: "Specific sitemaps",
				drawer: {
					title: "Specific sitemaps",
					description: "Specify specific sitemap URLs to crawl instead of using the default sitemap discovery."
				}
			},
			content_selector: {
				title: "Content selectors",
				drawer: {
					title: "Content selectors",
					description: "Define path-to-selector mappings to extract specific content from crawled pages. Each entry pairs a URL glob pattern with a CSS selector. The first matching path wins. Only the matched HTML fragment is stored and indexed."
				}
			},
			crawl_options: {
				title: "Crawl options",
				drawer: {
					title: "Crawl options",
					description: "Configure how the crawler traverses your website."
				}
			}
		},
		embedding: {
			title: "Embedding",
			description: "Configure how your data is chunked and transformed into vector embeddings.",
			model: "Embedding model"
		},
		chunking: {
			title: "Chunking",
			description: "Improve the efficiency of your AI Search by adjusting the chunk size",
			drawer: {
				title: "Chunking"
			},
			chunk_size: {
				title: "Chunk size",
				description: "Controls the number of tokens per chunk. Affects search precision and context. Min %{min} tokens - Max %{max} tokens."
			},
			chunk_overlap: {
				title: "Chunk overlap",
				description: "Controls the amount of overlap between chunks to keep related information together. Min 0% - Max 30%.",
				note: "Updating the chunking settings will trigger a full re-index of your AI Search instance after you Save."
			}
		},
		cache: {
			title: "Similarity caching",
			description: "Enable and configure caching to improve performance by reusing similar results.",
			cache_threshold: "Cache strictness",
			drawer: {
				title: "Similarity caching"
			}
		},
		query_rewrite: {
			title: "Query rewrite",
			description: "Enable and configure query rewriting to improve accuracy before retrieval.",
			model: "Model",
			system_prompt: "System prompt",
			drawer: {
				title: "Query rewrite"
			}
		},
		retrieval: {
			title: "Retrieval",
			description: "Configure thresholds and limits for retrieving the most relevant chunks from your index.",
			match_threshold: {
				title: "Match threshold",
				description: "Control the minimum score required for a result to be considered a match. Higher = stricter matching."
			},
			max_results: {
				title: "Maximum number of results",
				description: "Control the maximum number of results that can be returned for each query. Higher = more results."
			},
			boost_by: {
				title: "Boost by",
				description: "Boost search results by ranking documents with specific metadata field values higher.",
				no_boost_by: "Not configured",
				add_button: "Add field",
				remove_button: "Remove",
				field_label: "Field",
				direction_label: "Direction",
				max_items_error: "Maximum 3 boost fields allowed",
				no_fields_available: "No fields available. Add custom metadata fields first.",
				timestamp_field_label: "timestamp (system)",
				direction_options: {
					asc: "Ascending",
					desc: "Descending",
					exists: "Exists",
					not_exists: "Not exists"
				},
				drawer: {
					title: "Boost by",
					description: "Boost search ranking by metadata field values. Numeric and datetime fields support ascending/descending sorting. Text and boolean fields only support exists/not exists."
				}
			}
		},
		search_configuration: {
			title: "Generation",
			description: "Configure the model and system prompt used to generate responses.",
			model: "Generation model",
			system_prompt: "System prompt",
			note: (0, r.p)(a()),
			drawer: {
				title: "Generation model"
			}
		},
		reranking: {
			title: "Reranking",
			description: "Enable and configure result reranking to improve relevance of retrieved results.",
			model: "Reranking model",
			drawer: {
				title: "Reranking model",
				description: "Select a model to rerank retrieved results. Note this will be included in your model's usage and billing."
			}
		},
		hybrid_search: {
			title: "Hybrid search",
			description: "Enable hybrid search to combine vector and keyword search for improved results.",
			fusion_method: "Fusion method",
			keyword_match_mode: "Keyword match mode"
		},
		public_url: {
			title: "Public URL",
			description: "Enable public access to your AI Search and configure security settings.",
			rate_limiting: "Rate limiting",
			rate_limiting_description: "Limit the number of requests to your public endpoint.",
			authorized_hosts: "Authorized hosts",
			authorized_hosts_warning: "You are opening this endpoint to the public internet.",
			authorized_hosts_warning_description: "To prevent unauthorized access, you can add an authenticated host to restrict traffic to known sources.",
			mcp_server: "MCP Server",
			mcp_server_description: "Expose this AI Search as an MCP (Model Context Protocol) server.",
			mcp_tool_description: "Tool Description",
			search_endpoint: "Search endpoint",
			search_endpoint_description: "Enable the /search endpoint for direct search queries.",
			chat_completions_endpoint: "Chat completions endpoint",
			chat_completions_endpoint_description: "Enable the /chat/completions endpoint for OpenAI-compatible chat.",
			drawer: {
				title: "Configure Public URL",
				description: "Configure rate limiting and authorized hosts for public access.",
				enable_rate_limiting: "Enable rate limiting",
				requests: "Requests",
				requests_description: "Maximum number of requests allowed in the specified period",
				period: "Period",
				period_description: "Select the time period for rate limiting",
				technique: "Rate limit technique",
				technique_description: "Fixed window: simple counter resets at fixed intervals. Sliding window: more precise, considers rolling time window",
				authorized_hosts_label: "Authorized hosts",
				authorized_hosts_description: "List of hosts authorized to access this AI Search (one per line)",
				authorized_hosts_placeholder: "example.com\n*.example.com",
				time_periods: {
					one_minute: "1 minute",
					five_minutes: "5 minutes",
					thirty_minutes: "30 minutes",
					one_hour: "1 hour"
				},
				techniques: {
					fixed_window: "Fixed window",
					sliding_window: "Sliding window"
				}
			}
		},
		general: {
			title: "General",
			name: "Name",
			api_token: "Service API Token",
			delete_rag: "Permanently delete this AI Search and the associated Vector Database.",
			drawer: {
				title: "Service API Token",
				select_token: "Select an existing token",
				create_new: "Create a new token",
				new_token_description: "This enables AI Search to create and access resources in your account."
			}
		},
		custom_metadata: {
			title: "Custom Metadata",
			description: "Add custom metadata fields to your AI Search instance for filtering and organization.",
			field_name: "Field Name",
			field_type: "Field Type",
			field_type_labels: {
				text: "Text",
				number: "Number",
				boolean: "Boolean",
				datetime: "Datetime"
			},
			add_button: "Add Metadata",
			remove_button: "Remove",
			max_items_error: "Maximum 5 custom metadata entries allowed",
			duplicate_field_name_error: "Field name must be unique",
			empty_field_name_error: "Field name cannot be empty",
			lowercase_field_name_error: "Field name must be lowercase",
			reserved_field_name_error: 'Field name cannot be "timestamp", "folder", or "filename"',
			no_metadata: "No custom metadata configured",
			drawer: {
				title: "Custom Metadata",
				description: "Manage custom metadata for your AI Search instance. Maximum 5 entries allowed."
			}
		}
	},
	playground: {
		common: {
			ai_search: "Search with AI",
			chat_completions: "Chat",
			search: "Search",
			try_question: "Try asking a question to get started",
			expand_settings: "Expand settings",
			collapse_settings: "Collapse settings",
			type_your_message: "Type your message...",
			errors: {
				not_found: "Sorry no results found",
				no_response: "No response received from the model.",
				not_found_description: "Either the data has not yet been indexed or no data is available for this specific search.",
				authentication_error: "Authentication failed. Please go to {link} and create a new API token for this instance.",
				authentication_error_link: "Settings",
				api: {
					workers_ai_timeout: "Workers AI took too long to respond. Please try again.",
					ai_gateway_timeout: "AI Gateway took too long to respond. Please try again.",
					ai_gateway_not_found: "AI Gateway is currently unavailable. Please try again later.",
					invalid_model: "The requested AI model is invalid or unavailable.",
					autorag_not_found: "AI Search not found. Please try again later.",
					workers_ai_fail_to_return_a_valid_response: "Workers AI failed to generate a valid response. Please try again.",
					fail_while_querying_for_index: "Failed to search the Vectorize index. Please try again."
				}
			}
		},
		fake_loader: {
			step1: "Thinking....",
			step2: "Searching for the relevant data....",
			step3: "Retrieving the relevant data...",
			step4: "Preparing to generate response..."
		},
		sidebar: {
			title: "Playground settings",
			rewrite_query: {
				title: "Rewrite query",
				description: ""
			},
			rerank_results: {
				title: "Re-rank results",
				description: ""
			},
			generation_model: {
				title: "Generation model",
				description: "Select an LLM model to generate the responses.",
				show_more_models: "View more models",
				show_less_models: "View less"
			},
			match_threshold: {
				title: "Match threshold",
				description: "Control the minimum score required for a result to be considered a match. Higher = stricter matching."
			},
			max_results: {
				title: "Maximum number of results",
				description: "Control the maximum number of results that can be returned for each query. Higher = more results."
			},
			context_expansion: {
				title: "Context expansion",
				description: "Control the amount of surrounding context returned with each chunk. Higher = more context."
			}
		},
		search: {
			input_placeholder: "Search your documents...",
			card: {
				show_more: "Show full content",
				title: "Title",
				description: "Description",
				source: "Source",
				score: "Score",
				timestamp: "Last updated",
				chunk_id: "Chunk ID",
				modal_title: "Full Content",
				copy: "Copy",
				copied: "Copied!",
				close: "Close"
			},
			show_more_results: "Show more",
			no_results: "No results found",
			no_results_description: "Try adjusting your search query or settings and search again",
			table: {
				columns: {
					item: "Item key",
					file: "File name",
					score: "Score",
					content: "Content"
				}
			}
		},
		chat: {
			sources: "Sources",
			show_all_sources: "Show all sources",
			show_less: "Show less"
		}
	},
	jobs: {
		title: "Jobs",
		description: "Performs a full scan of all documents to update.",
		table: {
			columns: {
				status: "Status",
				id: "ID",
				source: "Source",
				started_at: "Started at",
				duration: "Duration",
				last_sync: "Last sync"
			},
			error: "Sorry, an error occurred",
			empty: "There are no AI Search created"
		},
		status: {
			canceled: "Canceled",
			completed: "Completed",
			processing: "Processing"
		},
		action: {
			sync: "Sync",
			pause: "Pause",
			resume: "Resume"
		},
		trigger: {
			user: "User",
			schedule: "Schedule"
		},
		sync_modal: {
			title: "Sync index",
			description: "Start a full sync of your data source. You can optionally add a note to this job.",
			note_label: "Note",
			note_title: "Note",
			note_placeholder: "Add an optional note for this sync job...",
			confirm: "Sync"
		}
	},
	overview_rag: {
		total_index: {
			title: "Total index results",
			status: {
				error: "Error Indexing",
				indexing: "Indexing data",
				paused: "Paused",
				last_sync: "Last synced"
			}
		},
		jobs: {
			title: "Last job",
			view_all: "View all jobs"
		},
		logs: {
			title: "Indexed items",
			table: {
				columns: {
					index: "Index",
					status: "Status",
					errors: "Errors"
				}
			},
			status: {
				all: "All",
				completed: "Completed",
				indexed: "Indexed",
				queued: "Queued",
				running: "Processing",
				skipped: "Skipped",
				error: "Errored"
			}
		}
	},
	snippet_card: {
		title: "Try Our Search Components",
		description: "Connect your data and deliver natural language search in your applications. Beautiful, customizable components with zero dependencies.",
		public_url_label: "Your Public URL:",
		try_configurator: "Try Configurator",
		enable_public_url: "Enable Public URL"
	},
	resources: {
		docs: "Get started with AI Search",
		cli: "Add AI Search to Workers",
		discord: "Join Discord server"
	},
	actions: {
		sync_index: "Sync",
		sync_item: "Sync item",
		delete: "Delete",
		paused_index: "Pause",
		resume_index: "Resume",
		tooltip: {
			resume: "Resume indexing",
			pause: "Pause indexing"
		}
	},
	status: {
		queued: "Queued",
		ready: "Ready",
		error: "Error",
		errors: "Errors",
		errored: "Errored",
		indexing: "Indexing",
		indexed: "Indexed",
		skipped: "Skipped",
		paused: "Paused",
		successful: "Successful",
		processing: "Processing"
	},
	semantic_cache: {
		super_strict_match: {
			title: "Exact",
			description: "Near-identical matches only"
		},
		close_enough: {
			title: "Strong",
			description: "High semantic similarity"
		},
		flexible_friend: {
			title: "Broad",
			description: "Moderate match, more hits"
		},
		anything_goes: {
			title: "Loose",
			description: "Low similarity, max reuse"
		}
	},
	fusion_method: {
		rrf: {
			title: "Reciprocal Rank Fusion",
			description: "Combines results by merging rankings from both search methods."
		},
		max: {
			title: "Maximum score",
			description: "Uses the highest score from either vector or keyword search."
		}
	},
	keyword_match_mode: {
		exact_match: {
			title: "Exact match",
			description: "Only matches results that contain <b>all</b> keywords in the query."
		},
		fuzzy_match: {
			title: "Fuzzy match",
			description: "Matches results that contain <b>one or more</b> keywords from the query."
		}
	},
	errors: {
		file_not_found: "File not found",
		unable_to_convert_to_markdown: "Unable to convert to markdown",
		file_length_exceed_embedding_model: "File length exceed",
		over_size: "Over size",
		unsupported_type: "Unsupported type",
		sync_in_cooldown: "Synchronization process is in cooldown, wait a moment and try again"
	},
	common: {
		beta: "Beta",
		default: "Default",
		default_model: "Smart default (auto)",
		rag: "rag",
		rags: "rags",
		job: "job",
		jobs: "jobs",
		log: "log",
		logs: "logs",
		token: "token",
		tokens: "tokens",
		back: "Back",
		next: "Next",
		create: "Create",
		creating: "Creating",
		documentation: "Documentation",
		rag_documentation: "AI Search documentation",
		setting_documentation: "AI Search Setting",
		something_went_wrong: "Something went wrong.",
		enable_ai_search: "Enable AI Search for your website",
		delete_msg: "Deleting this AI Search is permanent. Deleting this AI Search will also delete the associated Vector database",
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
		}
	},
	tokens_page: {
		title: "API Tokens",
		description: "Manage the API tokens used by AI Search to access resources in your account.",
		existing_token: "You already have an API token.",
		no_tokens: "No API tokens found",
		no_tokens_description: "Create an API token to allow AI Search to access resources in your account.",
		create_token: "Create Token",
		creating_token: "Creating...",
		token_created: "API Token created successfully",
		token_created_note: "Copy this token now. For security, it will not be shown again.",
		token_created_continue: "Continue",
		error_title: "Failed to load tokens",
		error_description: "An error occurred while loading your API tokens. Please try again.",
		retry: "Retry"
	},
	r2_required: {
		title: "R2 Subscription Required",
		description: "AI Search requires an R2 subscription to store and manage the data for your AI Search pipelines. Please enable R2 to continue.",
		button: "Enable R2"
	}
}