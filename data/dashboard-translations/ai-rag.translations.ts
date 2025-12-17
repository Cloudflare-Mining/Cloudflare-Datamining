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
	template_created: {
		title: "Your AI Search is created",
		description: "We are crawling and indexing your website. This may take longer for larger websites."
	},
	resume_card: {
		title: "Try out NLWeb",
		description: "We have deployed a Worker for you to test out the NLWeb search. Search results are limited to the pages we have indexed so far.",
		pages_indexed: "pages indexed so far. Search will become more comprehensive as we discover and process more content",
		add_to_website: "Add NLWeb to your website",
		snippet_description: "Copy and paste this snippet into your website to embed the NLWeb search experience.",
		see_in_action: "See it in action",
		info_tooltip: "You can find this information again by clicking 'Connect' in the Dashboard",
		info_text: 'Need to find this information again? Click "Connect" in the AI Search Dashboard.',
		indexing_finished: "pages indexed. Your RAG finished indexing",
		production_workflows_contact: "This is a public preview ideal for experimentation. If you're interested in running this in production workflows, please contact us at "
	},
	mode_selection: {
		title: "Create a new AI Search",
		description: "Set up AI powered search with your data. How would you like to start?"
	},
	create_rag: {
		title: "Create a new AI Search",
		description: "Connect your data source to get started. AI Search will index your content automatically once created.",
		mode_selection: {
			divider: "Or use template",
			normal: {
				title: "Create a RAG",
				description: "Set up a new retrieval augmented generation pipeline with your data. Connect a data source, choose embedding, and adjust retrieval and generation settings to shape results.",
				button: "Get Started"
			},
			nlweb: {
				title: "NLWeb for Websites",
				description: "Try out NLWeb, an open project developed by Microsoft, to enable conversational search on your website. We index your content with tuned defaults and deploy a Worker that provides a ready-to-use interface with an MCP server.",
				button: "Use Template"
			}
		},
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
				d1: "D1 Database"
			},
			filter_items: {
				title: "Path Filters",
				description: "Control the indexing scope by matching URL paths with wildcards.",
				include_items: {
					title: "Include Rules",
					description: "Only index URLs matching these patterns (e.g., */blog/*)",
					add_button: "Add include rule"
				},
				exclude_items: {
					title: "Exclude Rules",
					description: "Skip indexing URLs matching these patterns (e.g., */admin/*)",
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
				description: "This action will create one AI Gateway in your account"
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
			chunking: {
				title: "Chunking",
				size: {
					title: "Chunk size",
					description: "Controls the number of tokens per chunk. Affects search precision and context. Min 64 tokens - Max 512 tokens."
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
				description: "Controls the number of tokens per chunk. Affects search precision and context. Min 64 tokens - 512 tokens."
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
			}
		},
		search_configuration: {
			title: "Generation",
			description: "Configure the model and system prompt used to generate responses.",
			model: "Generation model",
			system_prompt: "System prompt",
			note: (0, o.p)(n()),
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
		}
	},
	playground: {
		common: {
			ai_search: "Search with AI",
			search: "Search",
			try_question: "Try asking a question to get started",
			errors: {
				still_indexing: "Sorry still indexing files",
				not_found: "Sorry no results found",
				not_found_description: "Either the data has not yet been indexed or no data is available for this specific search.",
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
				description: "Select an LLM model to generate the responses."
			},
			match_threshold: {
				title: "Match threshold",
				description: "Control the minimum score required for a result to be considered a match. Higher = stricter matching."
			},
			max_results: {
				title: "Maximum number of results",
				description: "Control the maximum number of results that can be returned for each query. Higher = more results."
			}
		},
		search: {
			table: {
				columns: {
					item: "Item key",
					file: "File name",
					score: "Score",
					content: "Content"
				}
			}
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
			title: "Last Job",
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
				queued: "Queued",
				running: "Processing",
				skipped: "Skipped",
				error: "Errored"
			}
		}
	},
	how_to: {
		title: "Connect AI Search",
		description: "Add AI Search to your application.",
		tabs: {
			binding: "Binding",
			api: "API",
			nlweb: "NLWeb"
		},
		steps: {
			worker: {
				title: "Create with Workers",
				description: "If you don’t already have a Worker, you can create one with the command line. <0>Learn more</0> about Workers."
			},
			binding: {
				title: "Binding",
				description: "Add the AI Search binding to your Worker’s Wrangler configuration file."
			},
			type: {
				title: "Usecase",
				ai_search: "Search with AI",
				search: "Search"
			},
			query: {
				title: "Query",
				description: "Enter a query to test call."
			},
			snippet: {
				title: "Snippet",
				description_binding: "Add this snippet to your Worker to call this AI Search.",
				description_api: "Add this snippet to your Worker to call this AI Search."
			},
			api_token: {
				title: "AI Search API Token",
				description: "Create an API token with AI Search Read permissions to authenticate AI Search API requests.",
				button: "Create an AI Search API Token",
				note: "Copy this token to access the Cloudflare API. For security this will not be shown again."
			},
			nlweb: {
				title: "Your NLWeb Search Experience",
				description: "A Worker connected to your AI Search has been deployed to your account with the NLWeb interface. Test it out:",
				button: "Go to Worker",
				endpoints: {
					title: "Available Endpoints",
					ask_description: "NLWeb's standard ask endpoint that powers the searches.",
					mcp_description: "Use this endpoint as an MCP server.",
					see_api_docs: "See API docs",
					try_ai_playground: "Try it out in AI playground"
				},
				embed: {
					title: "Embed NLWeb on Your Website",
					description: "Copy and paste this snippet to add the NLWeb search experience to your website.",
					preview_widget: "Preview widget"
				}
			}
		}
	},
	resources: {
		docs: "Get started with AI Search",
		cli: "Add AI Search to Workers",
		discord: "Join Discord server"
	},
	actions: {
		sync_index: "Sync",
		delete: "Delete",
		paused_index: "Pause",
		resume_index: "Resume",
		create_rag: "Create",
		use_autorag: "Connect",
		tooltip: {
			resume: "Resume indexing",
			pause: "Pause indexing",
			sync_index: "Check the data source for updates and index changes."
		}
	},
	status: {
		queued: "Queued",
		ready: "Ready",
		failed: "Failed",
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
	r2_required: {
		title: "R2 Subscription Required",
		description: "AI Search requires an R2 subscription to store and manage the data for your AI Search pipelines. Please enable R2 to continue.",
		button: "Enable R2"
	}
}