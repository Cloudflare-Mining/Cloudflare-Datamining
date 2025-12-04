{
	access_cloudflares_api_directly_in_your_applications: "Call Workers AI from any deployment using the REST API.",
	access_requested: "Access requested",
	api_tokens: "API Tokens",
	api_spec: "API Spec",
	api_spec_description: "Review the Workers AI API spec to build your application using the REST API",
	beta_banner: (0, r.p)(a()),
	build_your_first_ai_application: "Build your AI application",
	browse_model_catalog: "Browse Model Catalog",
	authors: "Authors",
	task_types: "Task Types",
	capabilities: "Capabilites",
	clear_all: "Clear All",
	search_not_found: "No models match your search criteria. Try adjusting your filters.",
	browse_model_catalog_description: "Browse all models available through Workers AI via Workers, Pages or REST API ",
	charts: {
		units: {
			cost: "Cost",
			neurons: "Neurons",
			constMetrics: "Cost Metrics"
		},
		chart_title: {
			cost: "All Models",
			neuros: "All Models"
		},
		period: (0, r.p)(s(), "days", "iniDate"),
		daily_usage: (0, r.p)(l(), "neuronsUsed"),
		daily_usage_with_limit: (0, r.p)(c(), "neuronsUsed", "neuronsDailyLimit"),
		usage_message: "Daily usage (resets at 00:00 UTC)",
		neurons_summary: (0, r.p)(u(), "neuronsTotal")
	},
	models: {
		labels: {
			beta: "Beta",
			lora: "LoRA",
			function_calling: "Function calling",
			deprecating: (0, r.p)(d(), "date"),
			max_content: "max context",
			async_queue: "Batch"
		},
		date_added: (0, r.p)(_(), "date"),
		created_at: (0, r.p)(p(), "date"),
		pricing: (0, r.p)(m())
	},
	sidebar: {
		cost_summary: {
			title: "Cost Summary",
			total_costs: "Total Costs",
			this_month: "This Month",
			see_all: "See All >",
			see_less: "< See Less"
		},
		quick_links: {
			title: "Quick Links",
			links: {
				docs: "Docs",
				plans: "Plans"
			}
		},
		usage: {
			title: {
				free: "Daily Usage Limits",
				paid: "Daily Usage"
			},
			limits: {
				max: "You have reached daily usage limit. Upgrade to the <0>Workers paid plan</0>.",
				all_most_limit: "Upgrade to the <0>Workers paid plan</0> to increase your daily usage limit."
			}
		},
		invoice_note: {
			note: "These numbers are estimations and may not reflect final invoices."
		},
		neurons_card: {
			title: "Estimated Daily Neurons",
			neurons_tooltip: (0, r.p)(f(), "neurons_daily_total", "neurons_daily_total", "neurons_coefficient", "neurons_daily_total"),
			note: (0, r.p)(g())
		},
		neurons: "Neurons",
		today: "Today"
	},
	banner: {
		daily_neuron_exceeded: (0, r.p)(h(), "neuronLimit")
	},
	pagination: {
		models: {
			single: "Model",
			plural: "Models"
		}
	},
	models_details: {
		status: {
			new: "New",
			experimental: "Experimental",
			active: "Active",
			active_tooltip: "Request received in the last 30 days"
		}
	},
	common: {
		no_data: "No data available"
	},
	models_list: {
		common: {
			documentation: "Documentation",
			no_models: "No models",
			clear: "Clear",
			all_provideres: "All Providers",
			all_authors: "All Authors",
			all_types: "All Types",
			all_models: "All Models",
			all_active_models: "Active Models (Last 30 days)",
			all_tags: "All Tags"
		}
	},
	create_ai_worker: "Create an AI Model Worker",
	create_ai_worker_description: "Choose an AI application template.",
	workers_ai_documentation: "Workers AI documentation",
	explore_catalog: "Explore catalog",
	explore_workers_templates: "Explore Workers Templates",
	create_workers_ai_api_token: "Create a Workers AI API Token",
	create_workers_ai_api_token_description: "Get read and edit access to the <0>Workers AI REST API</0>",
	get_api_token: "Get API Token",
	get_api_token_description: "To use Workers AI API, create a custom token with the correct *Read* permissions:",
	get_account_id_header: "Get Account ID",
	get_account_id_description: "Use this account ID to make API calls to the Workers AI REST API.",
	join_waitlist: "Join Waitlist",
	make_your_first_inference_call: "Make your first inference call",
	make_your_first_inference_call_description: "Substitute your Workers AI API token into the example below to make your first Worker AI API call.",
	menu: {
		models: "Models",
		usage: "Usage"
	},
	model_catalog: "Model Catalog",
	using_workers_ai_rest_api: "Using Workers AI REST API",
	using_workers_ai_rest_api_description: (0, r.p)(k()),
	product_title: "Workers AI",
	provided_by: (0, r.p)(A(), "provider"),
	request_access: "Request access",
	reserve_a_full_access_seat: "Reserve spot on waitlist",
	reserve_a_full_access_seat_description: "Join the waitlist for access to production scale Workers AI ",
	something_went_wrong: "Something went wrong.",
	tagline: "Run LLM and AI inference models with the performance and reliability of Workers",
	template_types: {
		speech_to_text_app: {
			title: "Speech to text app",
			description: "Parse human speech and convert voice recordings into text."
		},
		image_classification: {
			title: "Image Classification",
			description: "Identify and label objects found in images."
		},
		text_classification: {
			title: "Text Classification",
			description: "Categorize unstructured text into groups based on criteria of your choice."
		},
		translation_app: {
			title: "Translation App",
			description: "Translate text from one language to another"
		},
		vector_embedding_app: {
			title: "Vector Embedding App",
			description: "Convert text into mathematical vectors so that you can perform text analysis and transformations."
		},
		text_to_image: {
			title: "Text to Image",
			description: "Generate image based on text prompt."
		},
		llm_app: {
			title: "LLM App",
			description: "Get started with everything you need to run a Llama 3 model from a Worker."
		}
	},
	terms: "Terms",
	limited_access: "Due to overwhelming demand, we've had to limit access to Workers AI.",
	reserve_your_spot: "Reserve your spot on our waitlist.",
	welcome_to_workers_ai: "Welcome to Workers AI",
	welcome_tagline: "Workers AI offers a catalog of AI inference models that you can access from a Worker or via the REST API",
	workers_ai_api_key: "Workers AI API Key",
	workers_ai_docs: "Workers AI docs",
	workers_ai_docs_allmodels: "Browse All Models",
	workers_ai_examples: "Workers AI Examples",
	workers_ai_examples_description: "Get inspired by projects build by the Cloudflare developer community ",
	workers_ai_workers_templates: "Create from a Worker Template",
	workers_ai_workers_templates_description: "Select from a set of model or task specific templates to deploy a Workers AI Worker",
	use_rest_api: "{ } REST API",
	using_templates: "Build and deploy a Llama 3 Worker",
	using_templates_description: "Get started with everything you need to run a Llama 3 model from a Worker.",
	workers_ai_pricing_default: (0, r.p)(y(), "neurons_coefficient", "neurons_daily_total"),
	learn_more: "Learn More",
	modelTasks: {
		"Feature Extraction": "Feature Extraction",
		"Text-to-Image": "Text-to-Image",
		"Image-to-Text": "Image-to-Text",
		"Text-to-Video": "Text-to-Video",
		"Visual Question Answering": "Visual Question Answering",
		"Document Question Answering": "Document Question Answering",
		"Graph Machine Learning": "Graph Machine Learning",
		"Depth Estimation": "Depth Estimation",
		"Image Classification": "Image Classification",
		"Object Detection": "Object Detection",
		"Image Segmentation": "Image Segmentation",
		"Image-to-Image": "Image-to-Image",
		"Unconditional Image Generation": "Unconditional Image Generation",
		"Video Classification": "Video Classification",
		"Zero-Shot Image Classification": "Zero-Shot Image Classification",
		"Text Classification": "Text Classification",
		"Token Classification": "Token Classification",
		"Table Question Answering": "Table Question Answering",
		"Question Answering": "Question Answering",
		"Zero-Shot Classification": "Zero-Shot Classification",
		Translation: "Translation",
		Summarization: "Summarization",
		Conversational: "Conversational",
		"Text Generation": "Text Generation",
		"Text2Text Generation": "Text2Text Generation",
		"Fill-Mask": "Fill-Mask",
		"Sentence Similarity": "Sentence Similarity",
		"Text-to-Speech": "Text-to-Speech",
		"Automatic Speech Recognition": "Automatic Speech Recognition",
		"Audio-to-Audio": "Audio-to-Audio",
		"Audio Classification": "Audio Classification",
		"Voice Activity Detection": "Voice Activity Detection",
		"Tabular Classification": "Tabular Classification",
		"Tabular Regression": "Tabular Regression",
		"Reinforcement Learning": "Reinforcement Learning",
		Robotics: "Robotics",
		"Text Embeddings": "Text Embeddings",
		Other: "Other"
	},
	cost_metrics: {
		audio_seconds: "Audio Seconds",
		inference_steps: "Inference Steps",
		input_audio_s: "Input Audio Seconds",
		input_tiles: "Input Tiles",
		input_tokens: "Input Tokens",
		output_audio_s: "Output Audio Seconds",
		output_tokens: "Output Tokens",
		processed_pixels: "Processed Pixels",
		processed_tiles: "Processed Tiles"
	},
	footer: {
		templates: "Workers AI Templates",
		binding_to_worker: "Binding to a Worker",
		use_wrangler: "Use Wrangler CLI",
		join_discord: "Join Discord Server"
	}
}