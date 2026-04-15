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
		items: "Items",
		settings: "Settings"
	},
	items_tab: {
		title: "Items",
		search_placeholder: "Search items...",
		empty: {
			title: "No items found",
			description: "Items will appear here once your data source is indexed."
		},
		error: {
			title: "Failed to load items",
			description: "An error occurred while loading items. Please try again.",
			retry: "Retry"
		},
		table: {
			columns: {
				public_id: "Public ID",
				status: "Status",
				key: "Key",
				chunks: "Chunks",
				file_size: "File Size",
				source: "Source",
				next_action: "Next Action",
				last_seen: "Last Seen",
				created: "Created"
			}
		},
		details: {
			chunks_title: "Chunks",
			logs_title: "Processing Logs",
			no_chunks: "No chunks available",
			no_logs: "No logs available",
			chunk_bytes: "Bytes %{start} - %{end}",
			action: "Action",
			message: "Message",
			processing_time: "Processing Time",
			error_type: "Error Type",
			chunk_count: "Chunk Count",
			timestamp: "Timestamp",
			reindex: "Re-index",
			id_label: "ID",
			key_label: "Key",
			chunk_id_label: "Chunk ID",
			show_full_content: "Show full content",
			show_more: "Show more",
			load_more: "Load more",
			loading: "Loading...",
			close: "Close",
			status_label: "Status",
			status_ok: "OK",
			status_outdated: "Outdated",
			status_outdated_tooltip: "This item will be included in your search",
			metadata_title: "Metadata",
			source_label: "Source",
			source_builtin: "Uploaded",
			source_legacy: "Legacy",
			download: "Download"
		},
		upload: {
			button: "Upload files",
			title: "Upload files",
			description: "Upload files to your AI Search instance. Max 4MB per file.",
			drag_text: "Drag and drop files here or",
			choose_files: "choose files",
			uploading: "Uploading...",
			success: "%{count} file(s) uploaded successfully",
			error: "Failed to upload %{name}",
			max_size: "Maximum file size: 4MB",
			no_files: "No files selected"
		},
		delete: {
			button: "Delete",
			title: "Delete item",
			description: "Are you sure you want to delete this item? This action cannot be undone.",
			confirm: "Delete",
			success: "Item deleted successfully",
			error: "Failed to delete item"
		}
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
			search_placeholder: "Search instances…",
			error: "sorry, an error occurred",
			empty: "No results found",
			empty_description: "Try adjusting your search to find what you're looking for."
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
						empty: "No data available"
					}
				}
			},
			search: {
				title: "Search/Retrieval",
				panels: {
					searchType: {
						title: "Search type over time",
						empty: "No data available"
					},
					topFiles: {
						title: "Top items retrieved over time",
						status: {
							empty: "No data available"
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
					},
					include_images: {
						title: "Include images",
						description: "Convert embedded image content during parsing."
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
					description: "Choose how your search terms should be combined."
				},
				keyword_tokenizer: {
					title: "Keyword tokenizer",
					description: "Choose how text is broken down for keyword indexing."
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
				crete: "Create one for me",
				create_new: "+ Create new token",
				auto_create_note: "A new token will be created automatically",
				permission_account: "Account: AI Search (edit), R2 Storage (read/write)",
				permission_zone: "Zone: Workers Routes (edit) for all zones",
				permission_user: "User: User Details (read), Memberships (read)"
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
			include_images: {
				title: "Include images",
				description: "Convert embedded image content during parsing."
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
				fields_count: (0, r.p)(n(), "count"),
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
			note: (0, r.p)(s()),
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
			confirm_description: "A new indexing job will be created to reindex all items within this instance with this configuration. The existing version of the items will still be available to query while the job is completing.",
			fusion_method: "Fusion method",
			keyword_match_mode: "Keyword match mode",
			keyword_tokenizer: "Keyword tokenizer"
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
			sync_interval: "Sync interval",
			sync_interval_drawer: {
				title: "Sync interval",
				description: "How often the source data is re-synced.",
				3600: "1 hour",
				7200: "2 hours",
				14400: "4 hours",
				21600: "6 hours",
				43200: "12 hours",
				86400: "24 hours"
			},
			namespace: "Namespace",
			move_namespace: {
				title: "Move to namespace",
				description: "Move this instance to a different namespace. The instance URL will change after moving.",
				select_label: "Target namespace",
				confirm: "Move",
				success: "Instance moved successfully.",
				no_other_namespaces: "No other namespaces available. Create a new namespace first."
			},
			namespace_description: "Move this instance to a different namespace or create a new one.",
			namespace_create_error: "Failed to create namespace.",
			namespace_create_button: "Create namespace",
			namespace_create_placeholder: "New namespace name",
			namespace_create_label: "Namespace name",
			namespace_move_error: "Failed to move instance.",
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
				authentication_error: "Authentication failed. Please go to %{link} and create a new API token for this instance.",
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
			},
			filter: {
				title: "Metadata filters",
				edit_button: "Edit",
				no_filters: "None",
				modal_title: "Metadata Filters",
				modal_description: "Filter search results by metadata fields attached to your indexed content.",
				add_filter: "Add filter",
				apply: "Apply",
				clear_all: "Clear all",
				field_label: "Field",
				operator_label: "Operator",
				value_label: "Value",
				value_placeholder_single: "Enter value",
				value_placeholder_array: "val1, val2, ...",
				value_placeholder_date: "Select date",
				value_placeholder_dates: "Select dates",
				value_dates_selected: "%{count} date(s) selected",
				remove_filter_aria: "Remove filter",
				op_eq: "equals",
				op_ne: "not equals",
				op_gt: "greater than",
				op_gte: "greater than or equal",
				op_lt: "less than",
				op_lte: "less than or equal",
				op_in: "in",
				op_nin: "not in"
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
				score_details: "Score details",
				keyword_score: "Keyword score",
				vector_score: "Vector score",
				keyword_rank: "Keyword rank",
				vector_rank: "Vector rank",
				reranking_score: "Reranking score",
				fusion_method: "Fusion method",
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
			completed: "Indexed",
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
				completed: "Indexed",
				indexed: "Indexed",
				queued: "Queued",
				running: "Processing",
				skipped: "Skipped",
				error: "Errored",
				outdated: "Outdated"
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
	managed_banner: {
		title: "Get Started with AI Search",
		description: "Your AI Search instance comes with built-in storage. Upload a file to get started.",
		upload_button: "Upload files"
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
		processing: "Processing",
		outdated: "Outdated"
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
		description: "Choose how your search terms should be combined.",
		and: {
			title: "AND",
			description: "Show only results that contain <b>all</b> of your search terms."
		},
		or: {
			title: "OR",
			description: "Show results that contain <b>at least one</b> of your search terms."
		},
		exact_match: {
			title: "Exact match",
			description: "Show only results that contain your search terms exactly as written."
		},
		fuzzy_match: {
			title: "Fuzzy match",
			description: "Show results that contain your search terms with minor variations."
		}
	},
	keyword_tokenizer: {
		porter: {
			title: "Standard with Stemming (Porter)",
			description: 'Breaks text into words and reduces them to their root form (e.g., "connections" becomes "connect"). Best for natural language.'
		},
		trigram: {
			title: "Character Trigram",
			description: 'Breaks text into sequences of three characters (e.g., "apple" becomes "app, ppl, ple"). Best for partial matches, IDs, and code.'
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
		test: "Test",
		default: "Default",
		default_model: "Smart default (auto)",
		on: "On",
		off: "Off",
		show_n_more: "Show %{count} more",
		show_less: "Show less",
		filter_by_provider: "Filter by provider",
		edit_field: "Edit %{field}",
		close_field_editor: "Close %{field} editor",
		dismiss: "Dismiss",
		edit: "Edit",
		workers_ai: "Workers AI",
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
	},
	namespaces: {
		title: "Namespaces",
		description: "Manage namespaces to organize your AI Search instances.",
		selector_label: "Namespace:",
		manage_button: "Manage Namespaces",
		empty: "No namespaces found",
		default_label: "default",
		create: {
			button: "Create Namespace",
			title: "Create a new namespace",
			name_label: "Name",
			name_description: "Lowercase letters, digits, and hyphens only. Must start and end with a letter or digit. Max 28 characters.",
			desc_label: "Description",
			desc_description: "Optional. Max 256 characters.",
			confirm: "Create",
			name_required: "Name is required",
			name_duplicate: "A namespace with this name already exists"
		},
		edit: {
			title: "Edit description",
			confirm: "Save"
		},
		delete: {
			title: "Delete namespace",
			description_prefix: "Are you sure you want to delete ",
			description_suffix: "? All instances must be moved or deleted first.",
			confirm: "Delete"
		},
		table: {
			columns: {
				name: "Name",
				description: "Description",
				created_at: "Created"
			},
			empty: "No namespaces yet",
			error: "Failed to load namespaces"
		}
	},
	create_instance: {
		title: "Create Instance",
		steps: {
			name_and_source: "Name & Source",
			source_config: "Configure Source",
			source_settings: "Source Settings",
			webcrawl_settings: "WebCrawl Settings",
			review_config: "Review Settings",
			confirm_create: "Create"
		},
		choose_source: {
			title: "Choose your data source",
			description: "Select where AI Search will index your data from. You can change this later.",
			managed_label: "Built-in Storage",
			managed_description: "Upload and manage files directly. Always available as the default storage for every instance.",
			managed_default_badge: "Default",
			r2_label: "R2 Bucket",
			r2_description: "Index files stored in one of your existing R2 buckets.",
			r2_disabled_message: "Enable R2 to use this source type.",
			webcrawl_label: "Web Crawl",
			webcrawl_description: "Crawl and index content from a website URL or sitemap."
		},
		source_config: {
			r2_title: "Select an R2 bucket",
			r2_description: "Choose the R2 bucket that contains your data.",
			token_auto_note: "An AI Search API token will be automatically created for this instance.",
			webcrawl_title: "Configure web crawl",
			webcrawl_description: "Enter the website URL to crawl. AI Search will index the content it finds.",
			url_label: "Website URL",
			url_placeholder: "https://example.com",
			url_description: "Enter a domain or URL. Include a subdomain if needed.",
			parse_type_legend: "Parse type",
			parse_type_sitemap: "Sitemap",
			parse_type_crawl: "Browser Render - Crawl",
			depth_label: "Crawl depth",
			depth_description: "Maximum number of pages to crawl (1–100,000).",
			max_age_label: "Max cache age (seconds)",
			max_age_description: "Maximum age of cached content in seconds.",
			include_external_links_label: "Include external links",
			include_subdomains_label: "Include subdomains",
			section_crawl_target: "Crawl Target",
			section_crawl_options: "Crawl Options",
			parse_type_sitemap_description: "Reads your sitemap.xml to discover and index pages systematically.",
			parse_type_crawl_description: "Follows links from a starting URL to discover and index pages.",
			parse_type_info: "How AI Search discovers pages. Sitemap reads your sitemap.xml; Web Crawl follows links.",
			depth_info: "Maximum number of link-hops from the start URL. Higher values discover more pages.",
			max_age_info: "How long (in seconds) cached crawl content is considered fresh before re-crawling.",
			include_external_links_info: "Whether to follow and index links that point to other domains.",
			include_subdomains_info: "Whether to include pages on subdomains of the crawl target URL.",
			section_parsing_options: "Parsing Options",
			parsing_mode_label: "Parsing mode",
			parsing_mode_info: "Static uses basic HTTP fetching. Rendered uses a headless browser for JavaScript-rendered pages.",
			parsing_mode_static_title: "Static site",
			parsing_mode_static_description: "Fast and cost-efficient. Best for plain HTML pages.",
			parsing_mode_dynamic_title: "Rendered site",
			parsing_mode_dynamic_description: "Uses a headless browser. Best for JavaScript-rendered content.",
			extra_headers_title: "Extra headers",
			extra_headers_description: "Add custom HTTP headers sent with every crawl request. Useful for authentication.",
			extra_headers_add: "Add Header",
			extra_header_key_label: "Header key",
			extra_header_key_placeholder: "ex: Authorization",
			extra_header_key_invalid: "Header key contains invalid characters. Use letters, digits, hyphens, and underscores only.",
			extra_header_value_label: "Header value",
			extra_header_value_placeholder: "ex: Bearer XXX...",
			max_extra_headers: "Maximum 5 extra headers allowed",
			specific_sitemaps_title: "Specific sitemaps",
			specific_sitemaps_description: "Specify exact sitemap URLs instead of relying on automatic discovery.",
			specific_sitemaps_add: "Add Sitemap",
			specific_sitemaps_placeholder: "https://example.com/sitemap.xml",
			specific_sitemaps_invalid: "Please enter a valid URL.",
			max_specific_sitemaps: "Maximum 10 specific sitemaps allowed",
			crawl_source_label: "Crawl source",
			crawl_source_info: "Which links to follow when crawling the target domain.",
			crawl_source_all_title: "All",
			crawl_source_all_description: "Follow all discovered links — both sitemap and page links.",
			crawl_source_sitemaps_title: "Sitemaps",
			crawl_source_sitemaps_description: "Follow only links discovered via sitemaps.",
			crawl_source_links_title: "Links",
			crawl_source_links_description: "Follow only links found on crawled pages.",
			section_content_extraction: "Content Extraction",
			content_selectors_title: "Content selectors",
			content_selectors_description: "Map URL glob patterns to CSS selectors to extract specific content. The first matching path wins.",
			content_selectors_add: "Add Selector",
			content_selector_path_label: "URL pattern",
			content_selector_path_placeholder: "**/blog/**",
			content_selector_selector_label: "CSS selector",
			content_selector_selector_placeholder: "article .post-body",
			max_content_selectors: "Maximum 10 content selectors allowed",
			section_webcrawl_settings: "WebCrawl Settings",
			webcrawl_settings_description: "Configure content extraction, URL filters, and custom metadata for your crawl.",
			summary_no_selectors: "No selectors"
		},
		review_config: {
			title: "Review your configuration",
			description: "All settings below use smart defaults.",
			section_ai_gateway: "AI Gateway",
			section_indexing: "Indexing",
			section_retrieval: "Retrieval",
			section_cache: "Cache",
			show_more: "Show more",
			ai_gateway_label: "AI Gateway",
			ai_gateway_default: "No gateway",
			embedding_model_label: "Embedding model",
			chunk_size_label: "Chunk size",
			chunk_overlap_label: "Chunk overlap",
			hybrid_search_label: "Hybrid search",
			fusion_method_label: "Fusion method",
			keyword_match_mode_label: "Keyword match mode",
			keyword_tokenizer_label: "Keyword tokenizer",
			generation_model_label: "Generation model",
			query_rewrite_label: "Query rewriting",
			rewrite_model_label: "Rewrite model",
			reranking_label: "Reranking",
			reranking_model_label: "Reranking model",
			max_results_label: "Max results",
			score_threshold_label: "Score threshold",
			cache_enabled_label: "Similarity cache",
			cache_threshold_label: "Cache strictness",
			embedding_label: "Embedding Model",
			retrieval_label: "Retrieval Settings",
			cache_label: "Cache Settings",
			cache_default_on: "Enabled",
			cache_default_off: "Disabled",
			cache_threshold_legend: "Cache strictness",
			ai_gateway_info: "Connect an AI Gateway to monitor model usage and unlock additional providers via BYOK. Changing this resets available models.",
			embedding_model_info: "Converts your content into vector embeddings. Affects search quality and cost.",
			chunk_size_info: "Number of tokens per chunk. Smaller = more precise results; larger = more context per result.",
			chunk_overlap_info: "Token overlap between adjacent chunks to maintain context continuity across boundaries.",
			hybrid_search_info: "Combines vector similarity search with BM25 keyword search for improved relevance.",
			hybrid_search_limits_info: "Hybrid search combines vector and keyword search, requiring two search pipelines. This reduces the maximum results per query compared to vector-only search, as results from both pipelines are merged using the selected fusion method.",
			fusion_method_info: "How vector and keyword scores are merged. RRF (Reciprocal Rank Fusion) is the default and works well in most cases.",
			keyword_match_mode_info: "Exact match requires all keywords to be present. Fuzzy match allows partial or approximate matches.",
			keyword_tokenizer_info: "How text is tokenized for keyword search. Porter stemming is best for natural language; trigram is best for partial matches and IDs.",
			generation_model_info: "The LLM used to generate the final natural language answer from retrieved chunks.",
			query_rewrite_info: "Automatically rewrites the user query before retrieval to improve relevance and recall.",
			rewrite_model_info: "The model used to rewrite the query. Defaults to the generation model if left empty.",
			reranking_info: "Re-scores retrieved chunks using a dedicated model to improve relevance ranking before generation.",
			reranking_model_info: "The model used to re-rank retrieved chunks. Only reranking-type models are available.",
			max_results_info: "Maximum number of content chunks retrieved from the index per query. Higher = more results but slower.",
			score_threshold_info: "Minimum similarity score (0–1) required for a chunk to be included in results. Higher = stricter matching.",
			cache_enabled_info: "Caches responses for semantically similar queries to reduce model calls and cost.",
			cache_threshold_info: "How similar two queries must be to reuse a cached response instead of calling the model.",
			summary_cache: (0, r.p)(l(), "status"),
			summary_cache_with_threshold: (0, r.p)(c(), "status", "threshold"),
			summary_indexing: (0, r.p)(d(), "model", "chunkSize", "chunkOverlap"),
			summary_rewriting: (0, r.p)(u(), "status"),
			summary_reranking: (0, r.p)(m(), "status"),
			summary_results_score: (0, r.p)(_(), "count", "score"),
			n_tokens: (0, r.p)(h(), "count"),
			n_dimensions: (0, r.p)(p(), "count"),
			k_context: (0, r.p)(g(), "count"),
			tokens_unit: "tokens"
		},
		source_settings: {
			title: "Configure your R2 source",
			description: "Optionally set path filters, custom metadata fields, and choose your API token.",
			path_filters_title: "Path Filters",
			path_filters_description: "Control which files to index by specifying include and exclude patterns.",
			include_rules_title: "Include Rules",
			include_rules_description: "Only index files matching these wildcard patterns (e.g. */docs/*, *.pdf). Leave empty to include all.",
			exclude_rules_title: "Exclude Rules",
			exclude_rules_description: "Skip files matching these wildcard patterns. Applied after include rules.",
			add_rule: "Add Rule",
			invalid_rule: "Invalid pattern. Use wildcards like */docs/* or *.pdf.",
			max_include_rules: "Maximum 10 include rules allowed",
			max_exclude_rules: "Maximum 10 exclude rules allowed",
			metadata_title: "Metadata",
			custom_metadata_title: "Custom Metadata",
			custom_metadata_description: "Define additional metadata fields to attach to indexed documents.",
			add_metadata: "Add Field",
			field_name_label: "Field name",
			field_type_label: "Type",
			token_title: "API Token",
			token_description: "Select an existing AI Search token or create a new one automatically.",
			summary_no_filters: "No filters",
			summary_no_metadata: "No custom metadata",
			remove_rule: "Remove rule",
			remove_header: "Remove header",
			remove_field: "Remove field",
			remove_selector: "Remove selector",
			remove_sitemap: "Remove sitemap",
			field_name_placeholder: "field_name",
			filter_rule_placeholder: "e.g. /docs/*, *.pdf"
		},
		name_create: {
			title: "Name your instance",
			description: "Give your AI Search instance a unique name. This cannot be changed after creation.",
			name_label: "Instance name",
			name_placeholder: "my-ai-search",
			name_description: "Lowercase letters, numbers, and hyphens only.",
			token_auto_note: "An AI Search API token will be automatically created for this instance."
		},
		name_and_source: {
			title: "Name your instance",
			description: "Give your AI Search instance a name and optionally connect a data source.",
			builtin_storage_note: "Optionally connect an additional data source.",
			source_label: "Data source"
		},
		confirm_create: {
			title: "Create your instance",
			description: "Review your choices and create your AI Search instance."
		}
	}
}