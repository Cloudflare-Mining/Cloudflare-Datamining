/**
 * ai resource
 * @generated from apis/ai/schema.ts
 *
 * Run inference on Workers AI models — text generation, image classification, embeddings, and more
 */
import { APIResource, CloudflareClient } from '../../client.js';

/**
 * Create and manage fine-tuned model variants trained on your own data
 */
export class Finetunes extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Lists all fine-tuning jobs created by the account, including status and metrics.
   *
   * @see workers-ai-list-finetunes
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/finetunes`);
  }

  /**
   * Creates a new fine-tuning job for a Workers AI model using custom training data.
   *
   * @see workers-ai-create-finetune
   */
  async create(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/finetunes`);
  }

  /**
   * Uploads training data assets for a Workers AI fine-tuning job.
   *
   * @see workers-ai-upload-finetune-asset
   */
  async assetsCreate(accountId: string, finetuneId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/finetunes/${finetuneId}/finetune-assets`);
  }

  /**
   * Lists publicly available fine-tuned models that can be used with Workers AI.
   *
   * @see workers-ai-list-public-finetunes
   */
  async publicList(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/finetunes/public`, {
      query: params,
    });
  }
}

/**
 * Search model authors and publishers in the Workers AI catalog
 */
export class Authors extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Searches Workers AI models by author or organization name.
   *
   * @see workers-ai-search-author
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/authors/search`);
  }
}

/**
 * Browse supported inference task types (text-generation, image-classification, etc.)
 */
export class Tasks extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Searches Workers AI models by task type (e.g., text-generation, embeddings).
   *
   * @see workers-ai-search-task
   */
  async list(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/tasks/search`);
  }
}

/**
 * Search the Workers AI model catalog and retrieve input/output schemas
 */
export class Models extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Searches Workers AI models by name or description.
   *
   * @see workers-ai-search-model
   */
  async list(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/models/search`, {
      query: params,
    });
  }

  /**
   * Retrieves the input and output JSON schema definition for a Workers AI model.
   *
   * @see workers-ai-get-model-schema
   */
  async schemaGet(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/models/schema`, {
      query: params,
    });
  }
}

/**
 * Convert documents and files to clean Markdown using AI-powered extraction
 */
export class ToMarkdown extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Converts uploaded files into Markdown format using Workers AI.
   *
   * @see workers-ai-post-to-markdown
   */
  async transform(accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/tomarkdown`);
  }

  /**
   * Lists all file formats supported for conversion to Markdown.
   *
   * @see workers-ai-get-to-markdown-supported
   */
  async supported(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/tomarkdown/supported`);
  }
}

/**
 * Run (additional) operations
 */
export class RunExtra extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Runs inference on the @cf/ai4bharat/indictrans2-en-indic-1B model.
   *
   * @see workers-ai-post-run-cf-ai4bharat-indictrans2-en-indic-1B
   */
  async ai4bharatIndictrans2EnIndic1BCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/ai4bharat/indictrans2-en-indic-1B`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/ai4bharat/nonomni-indictrans2-en-indic-1b model.
   *
   * @see workers-ai-post-run-cf-ai4bharat-nonomni-indictrans2-en-indic-1b
   */
  async ai4bharatNonomniIndictrans2EnIndic1bCreate(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/ai4bharat/nonomni-indictrans2-en-indic-1b`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/aisingapore/gemma-sea-lion-v4-27b-it model.
   *
   * @see workers-ai-post-run-cf-aisingapore-gemma-sea-lion-v4-27b-it
   */
  async aisingaporeGemmaSeaLionV427bItCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/aisingapore/gemma-sea-lion-v4-27b-it`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/baai/bge-base-en-v1.5 model.
   *
   * @see workers-ai-post-run-cf-baai-bge-base-en-v1-5
   */
  async baaiBgeBaseEnV15Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/baai/bge-base-en-v1.5`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/baai/bge-large-en-v1.5 model.
   *
   * @see workers-ai-post-run-cf-baai-bge-large-en-v1-5
   */
  async baaiBgeLargeEnV15Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/baai/bge-large-en-v1.5`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/baai/bge-m3 model.
   *
   * @see workers-ai-post-run-cf-baai-bge-m3
   */
  async baaiBgeM3Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/baai/bge-m3`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/baai/bge-reranker-base model.
   *
   * @see workers-ai-post-run-cf-baai-bge-reranker-base
   */
  async baaiBgeRerankerBaseCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/baai/bge-reranker-base`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/baai/bge-small-en-v1.5 model.
   *
   * @see workers-ai-post-run-cf-baai-bge-small-en-v1-5
   */
  async baaiBgeSmallEnV15Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/baai/bge-small-en-v1.5`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/baai/nonomni-bge-base-en-v1.5 model.
   *
   * @see workers-ai-post-run-cf-baai-nonomni-bge-base-en-v1-5
   */
  async baaiNonomniBgeBaseEnV15Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/baai/nonomni-bge-base-en-v1.5`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/baai/nonomni-bge-large-en-v1.5 model.
   *
   * @see workers-ai-post-run-cf-baai-nonomni-bge-large-en-v1-5
   */
  async baaiNonomniBgeLargeEnV15Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/baai/nonomni-bge-large-en-v1.5`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/baai/nonomni-bge-m3 model.
   *
   * @see workers-ai-post-run-cf-baai-nonomni-bge-m3
   */
  async baaiNonomniBgeM3Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/baai/nonomni-bge-m3`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/baai/nonomni-bge-small-en-v1.5 model.
   *
   * @see workers-ai-post-run-cf-baai-nonomni-bge-small-en-v1-5
   */
  async baaiNonomniBgeSmallEnV15Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/baai/nonomni-bge-small-en-v1.5`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/black-forest-labs/flux-1-schnell model.
   *
   * @see workers-ai-post-run-cf-black-forest-labs-flux-1-schnell
   */
  async blackForestLabsFlux1SchnellCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/black-forest-labs/flux-1-schnell`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/black-forest-labs/flux-2-dev model.
   *
   * @see workers-ai-post-run-cf-black-forest-labs-flux-2-dev
   */
  async blackForestLabsFlux2DevCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/black-forest-labs/flux-2-dev`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/black-forest-labs/flux-2-klein-4b model.
   *
   * @see workers-ai-post-run-cf-black-forest-labs-flux-2-klein-4b
   */
  async blackForestLabsFlux2Klein4bCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/black-forest-labs/flux-2-klein-4b`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/black-forest-labs/flux-2-klein-9b model.
   *
   * @see workers-ai-post-run-cf-black-forest-labs-flux-2-klein-9b
   */
  async blackForestLabsFlux2Klein9bCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/black-forest-labs/flux-2-klein-9b`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/bytedance/stable-diffusion-xl-lightning model.
   *
   * @see workers-ai-post-run-cf-bytedance-stable-diffusion-xl-lightning
   */
  async bytedanceStableDiffusionXlLightningCreate(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/bytedance/stable-diffusion-xl-lightning`, {
      body: { ...params },
    });
  }

  /**
   * Opens a WebSocket connection to stream inference results from the @cf/deepgram/aura model.
   *
   * @see workers-ai-post-websocket-run-cf-deepgram-aura
   */
  async deepgramAuraGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/aura`);
  }

  /**
   * Opens a WebSocket connection to stream inference results from the @cf/deepgram/aura-1 model.
   *
   * @see workers-ai-post-websocket-run-cf-deepgram-aura-1
   */
  async deepgramAura1Get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/aura-1`);
  }

  /**
   * Runs inference on the @cf/deepgram/aura-1 model.
   *
   * @see workers-ai-post-run-cf-deepgram-aura-1
   */
  async deepgramAura1Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/aura-1`, {
      body: { ...params },
    });
  }

  /**
   * Opens a WebSocket connection to stream inference results from the @cf/deepgram/aura-1-internal model.
   *
   * @see workers-ai-post-websocket-run-cf-deepgram-aura-1-internal
   */
  async deepgramAura1InternalGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/aura-1-internal`);
  }

  /**
   * Opens a WebSocket connection to stream inference results from the @cf/deepgram/aura-2 model.
   *
   * @see workers-ai-post-websocket-run-cf-deepgram-aura-2
   */
  async deepgramAura2Get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/aura-2`);
  }

  /**
   * Opens a WebSocket connection to stream inference results from the @cf/deepgram/aura-2-en model.
   *
   * @see workers-ai-post-websocket-run-cf-deepgram-aura-2-en
   */
  async deepgramAura2EnGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/aura-2-en`);
  }

  /**
   * Runs inference on the @cf/deepgram/aura-2-en model.
   *
   * @see workers-ai-post-run-cf-deepgram-aura-2-en
   */
  async deepgramAura2EnCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/aura-2-en`, {
      body: { ...params },
    });
  }

  /**
   * Opens a WebSocket connection to stream inference results from the @cf/deepgram/aura-2-es model.
   *
   * @see workers-ai-post-websocket-run-cf-deepgram-aura-2-es
   */
  async deepgramAura2EsGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/aura-2-es`);
  }

  /**
   * Runs inference on the @cf/deepgram/aura-2-es model.
   *
   * @see workers-ai-post-run-cf-deepgram-aura-2-es
   */
  async deepgramAura2EsCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/aura-2-es`, {
      body: { ...params },
    });
  }

  /**
   * Opens a WebSocket connection to stream inference results from the @cf/deepgram/flux model.
   *
   * @see workers-ai-post-websocket-run-cf-deepgram-flux
   */
  async deepgramFluxGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/flux`);
  }

  /**
   * Runs inference on the @cf/deepgram/flux model.
   *
   * @see workers-ai-post-run-cf-deepgram-flux
   */
  async deepgramFluxCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/flux`, {
      body: { ...params },
    });
  }

  /**
   * Opens a WebSocket connection to stream inference results from the @cf/deepgram/nova-3 model.
   *
   * @see workers-ai-post-websocket-run-cf-deepgram-nova-3
   */
  async deepgramNova3Get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/nova-3`);
  }

  /**
   * Runs inference on the @cf/deepgram/nova-3 model.
   *
   * @see workers-ai-post-run-cf-deepgram-nova-3
   */
  async deepgramNova3Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/nova-3`, {
      body: { ...params },
    });
  }

  /**
   * Opens a WebSocket connection to stream inference results from the @cf/deepgram/nova-3-internal model.
   *
   * @see workers-ai-post-websocket-run-cf-deepgram-nova-3-internal
   */
  async deepgramNova3InternalGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/nova-3-internal`);
  }

  /**
   * Opens a WebSocket connection to stream inference results from the @cf/deepgram/nova-3-ws model.
   *
   * @see workers-ai-post-websocket-run-cf-deepgram-nova-3-ws
   */
  async deepgramNova3WsGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/run/@cf/deepgram/nova-3-ws`);
  }

  /**
   * Runs inference on the @cf/deepseek-ai/deepseek-math-7b-instruct model.
   *
   * @see workers-ai-post-run-cf-deepseek-ai-deepseek-math-7b-instruct
   */
  async deepseekAiDeepseekMath7bInstructCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/deepseek-ai/deepseek-math-7b-instruct`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/deepseek-ai/deepseek-r1-distill-qwen-32b model.
   *
   * @see workers-ai-post-run-cf-deepseek-ai-deepseek-r1-distill-qwen-32b
   */
  async deepseekAiDeepseekR1DistillQwen32bCreate(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/deepseek-ai/deepseek-r1-distill-qwen-32b`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/defog/sqlcoder-7b-2 model.
   *
   * @see workers-ai-post-run-cf-defog-sqlcoder-7b-2
   */
  async defogSqlcoder7b2Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/defog/sqlcoder-7b-2`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/facebook/bart-large-cnn model.
   *
   * @see workers-ai-post-run-cf-facebook-bart-large-cnn
   */
  async facebookBartLargeCnnCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/facebook/bart-large-cnn`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/facebook/nonomni-bart-large-cnn model.
   *
   * @see workers-ai-post-run-cf-facebook-nonomni-bart-large-cnn
   */
  async facebookNonomniBartLargeCnnCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/facebook/nonomni-bart-large-cnn`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/facebook/nonomni-detr-resnet-50 model.
   *
   * @see workers-ai-post-run-cf-facebook-nonomni-detr-resnet-50
   */
  async facebookNonomniDetrResnet50Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/facebook/nonomni-detr-resnet-50`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/fblgit/una-cybertron-7b-v2-bf16 model.
   *
   * @see workers-ai-post-run-cf-fblgit-una-cybertron-7b-v2-bf16
   */
  async fblgitUnaCybertron7bV2Bf16Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/fblgit/una-cybertron-7b-v2-bf16`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/google/embeddinggemma-300m model.
   *
   * @see workers-ai-post-run-cf-google-embeddinggemma-300m
   */
  async googleEmbeddinggemma300mCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/google/embeddinggemma-300m`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/google/gemma-2b-it-lora model.
   *
   * @see workers-ai-post-run-cf-google-gemma-2b-it-lora
   */
  async googleGemma2bItLoraCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/google/gemma-2b-it-lora`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/google/gemma-3-12b-it model.
   *
   * @see workers-ai-post-run-cf-google-gemma-3-12b-it
   */
  async googleGemma312bItCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/google/gemma-3-12b-it`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/google/gemma-7b-it-lora model.
   *
   * @see workers-ai-post-run-cf-google-gemma-7b-it-lora
   */
  async googleGemma7bItLoraCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/google/gemma-7b-it-lora`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/google/nonomni-embeddinggemma-300m model.
   *
   * @see workers-ai-post-run-cf-google-nonomni-embeddinggemma-300m
   */
  async googleNonomniEmbeddinggemma300mCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/google/nonomni-embeddinggemma-300m`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/huggingface/distilbert-sst-2-int8 model.
   *
   * @see workers-ai-post-run-cf-huggingface-distilbert-sst-2-int8
   */
  async huggingfaceDistilbertSst2Int8Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/huggingface/distilbert-sst-2-int8`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/huggingface/nonomni-distilbert-sst-2-int8 model.
   *
   * @see workers-ai-post-run-cf-huggingface-nonomni-distilbert-sst-2-int8
   */
  async huggingfaceNonomniDistilbertSst2Int8Create(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/huggingface/nonomni-distilbert-sst-2-int8`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/ibm-granite/granite-4.0-h-micro model.
   *
   * @see workers-ai-post-run-cf-ibm-granite-granite-4-0-h-micro
   */
  async ibmGraniteGranite40HMicroCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/ibm-granite/granite-4.0-h-micro`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/leonardo/lucid-origin model.
   *
   * @see workers-ai-post-run-cf-leonardo-lucid-origin
   */
  async leonardoLucidOriginCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/leonardo/lucid-origin`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/leonardo/phoenix-1.0 model.
   *
   * @see workers-ai-post-run-cf-leonardo-phoenix-1-0
   */
  async leonardoPhoenix10Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/leonardo/phoenix-1.0`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/lykon/dreamshaper-8-lcm model.
   *
   * @see workers-ai-post-run-cf-lykon-dreamshaper-8-lcm
   */
  async lykonDreamshaper8LcmCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/lykon/dreamshaper-8-lcm`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta-llama/llama-2-7b-chat-hf-lora model.
   *
   * @see workers-ai-post-run-cf-meta-llama-llama-2-7b-chat-hf-lora
   */
  async metaLlamaLlama27bChatHfLoraCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta-llama/llama-2-7b-chat-hf-lora`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/llama-2-7b-chat-fp16 model.
   *
   * @see workers-ai-post-run-cf-meta-llama-2-7b-chat-fp16
   */
  async metaLlama27bChatFp16Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-2-7b-chat-fp16`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/llama-2-7b-chat-int8 model.
   *
   * @see workers-ai-post-run-cf-meta-llama-2-7b-chat-int8
   */
  async metaLlama27bChatInt8Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-2-7b-chat-int8`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/llama-3-8b-instruct model.
   *
   * @see workers-ai-post-run-cf-meta-llama-3-8b-instruct
   */
  async metaLlama38bInstructCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-3-8b-instruct`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/llama-3-8b-instruct-awq model.
   *
   * @see workers-ai-post-run-cf-meta-llama-3-8b-instruct-awq
   */
  async metaLlama38bInstructAwqCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-3-8b-instruct-awq`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/llama-3.1-70b-instruct-fp8-fast model.
   *
   * @see workers-ai-post-run-cf-meta-llama-3-1-70b-instruct-fp8-fast
   */
  async metaLlama3170bInstructFp8FastCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-3.1-70b-instruct-fp8-fast`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/llama-3.1-8b-instruct-awq model.
   *
   * @see workers-ai-post-run-cf-meta-llama-3-1-8b-instruct-awq
   */
  async metaLlama318bInstructAwqCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-3.1-8b-instruct-awq`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/llama-3.1-8b-instruct-fp8 model.
   *
   * @see workers-ai-post-run-cf-meta-llama-3-1-8b-instruct-fp8
   */
  async metaLlama318bInstructFp8Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-3.1-8b-instruct-fp8`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/llama-3.1-8b-instruct-fp8-fast model.
   *
   * @see workers-ai-post-run-cf-meta-llama-3-1-8b-instruct-fp8-fast
   */
  async metaLlama318bInstructFp8FastCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-3.1-8b-instruct-fp8-fast`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/llama-3.2-11b-vision-instruct model.
   *
   * @see workers-ai-post-run-cf-meta-llama-3-2-11b-vision-instruct
   */
  async metaLlama3211bVisionInstructCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-3.2-11b-vision-instruct`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/llama-3.2-1b-instruct model.
   *
   * @see workers-ai-post-run-cf-meta-llama-3-2-1b-instruct
   */
  async metaLlama321bInstructCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-3.2-1b-instruct`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/llama-3.2-3b-instruct model.
   *
   * @see workers-ai-post-run-cf-meta-llama-3-2-3b-instruct
   */
  async metaLlama323bInstructCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-3.2-3b-instruct`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/llama-3.3-70b-instruct-fp8-fast model.
   *
   * @see workers-ai-post-run-cf-meta-llama-3-3-70b-instruct-fp8-fast
   */
  async metaLlama3370bInstructFp8FastCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-3.3-70b-instruct-fp8-fast`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/llama-4-scout-17b-16e-instruct model.
   *
   * @see workers-ai-post-run-cf-meta-llama-4-scout-17b-16e-instruct
   */
  async metaLlama4Scout17b16eInstructCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-4-scout-17b-16e-instruct`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/llama-guard-3-8b model.
   *
   * @see workers-ai-post-run-cf-meta-llama-guard-3-8b
   */
  async metaLlamaGuard38bCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/llama-guard-3-8b`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/meta/m2m100-1.2b model.
   *
   * @see workers-ai-post-run-cf-meta-m2m100-1-2b
   */
  async metaM2m10012bCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/meta/m2m100-1.2b`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/microsoft/nonomni-resnet-50 model.
   *
   * @see workers-ai-post-run-cf-microsoft-nonomni-resnet-50
   */
  async microsoftNonomniResnet50Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/microsoft/nonomni-resnet-50`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/microsoft/phi-2 model.
   *
   * @see workers-ai-post-run-cf-microsoft-phi-2
   */
  async microsoftPhi2Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/microsoft/phi-2`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/microsoft/resnet-50 model.
   *
   * @see workers-ai-post-run-cf-microsoft-resnet-50
   */
  async microsoftResnet50Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/microsoft/resnet-50`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/mistral/mistral-7b-instruct-v0.1 model.
   *
   * @see workers-ai-post-run-cf-mistral-mistral-7b-instruct-v0-1
   */
  async mistralMistral7bInstructV01Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/mistral/mistral-7b-instruct-v0.1`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/mistral/mistral-7b-instruct-v0.2-lora model.
   *
   * @see workers-ai-post-run-cf-mistral-mistral-7b-instruct-v0-2-lora
   */
  async mistralMistral7bInstructV02LoraCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/mistral/mistral-7b-instruct-v0.2-lora`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/mistralai/mistral-small-3.1-24b-instruct model.
   *
   * @see workers-ai-post-run-cf-mistralai-mistral-small-3-1-24b-instruct
   */
  async mistralaiMistralSmall3124bInstructCreate(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/mistralai/mistral-small-3.1-24b-instruct`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/myshell-ai/melotts model.
   *
   * @see workers-ai-post-run-cf-myshell-ai-melotts
   */
  async myshellAiMelottsCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/myshell-ai/melotts`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/nvidia/nemotron-3-120b-a12b model.
   *
   * @see workers-ai-post-run-cf-nvidia-nemotron-3-120b-a12b
   */
  async nvidiaNemotron3120bA12bCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/nvidia/nemotron-3-120b-a12b`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/openai/gpt-oss-120b model.
   *
   * @see workers-ai-post-run-cf-openai-gpt-oss-120b
   */
  async openaiGptOss120bCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/openai/gpt-oss-120b`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/openai/gpt-oss-20b model.
   *
   * @see workers-ai-post-run-cf-openai-gpt-oss-20b
   */
  async openaiGptOss20bCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/openai/gpt-oss-20b`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/openai/whisper model.
   *
   * @see workers-ai-post-run-cf-openai-whisper
   */
  async openaiWhisperCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/openai/whisper`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/openai/whisper-large-v3-turbo model.
   *
   * @see workers-ai-post-run-cf-openai-whisper-large-v3-turbo
   */
  async openaiWhisperLargeV3TurboCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/openai/whisper-large-v3-turbo`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/openai/whisper-tiny-en model.
   *
   * @see workers-ai-post-run-cf-openai-whisper-tiny-en
   */
  async openaiWhisperTinyEnCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/openai/whisper-tiny-en`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/openchat/openchat-3.5-0106 model.
   *
   * @see workers-ai-post-run-cf-openchat-openchat-3-5-0106
   */
  async openchatOpenchat350106Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/openchat/openchat-3.5-0106`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/pfnet/plamo-embedding-1b model.
   *
   * @see workers-ai-post-run-cf-pfnet-plamo-embedding-1b
   */
  async pfnetPlamoEmbedding1bCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/pfnet/plamo-embedding-1b`, {
      body: { ...params },
    });
  }

  /**
   * Opens a WebSocket connection to stream inference results from the @cf/pipecat-ai/smart-turn-v2 model.
   *
   * @see workers-ai-post-websocket-run-cf-pipecat-ai-smart-turn-v2
   */
  async pipecatAiSmartTurnV2Get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/run/@cf/pipecat-ai/smart-turn-v2`);
  }

  /**
   * Opens a WebSocket connection to stream inference results from the @cf/pipecat-ai/smart-turn-v3 model.
   *
   * @see workers-ai-post-websocket-run-cf-pipecat-ai-smart-turn-v3
   */
  async pipecatAiSmartTurnV3Get(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/run/@cf/pipecat-ai/smart-turn-v3`);
  }

  /**
   * Runs inference on the @cf/qwen/qwen1.5-0.5b-chat model.
   *
   * @see workers-ai-post-run-cf-qwen-qwen1-5-0-5b-chat
   */
  async qwenQwen1505bChatCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/qwen/qwen1.5-0.5b-chat`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/qwen/qwen1.5-1.8b-chat model.
   *
   * @see workers-ai-post-run-cf-qwen-qwen1-5-1-8b-chat
   */
  async qwenQwen1518bChatCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/qwen/qwen1.5-1.8b-chat`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/qwen/qwen1.5-14b-chat-awq model.
   *
   * @see workers-ai-post-run-cf-qwen-qwen1-5-14b-chat-awq
   */
  async qwenQwen1514bChatAwqCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/qwen/qwen1.5-14b-chat-awq`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/qwen/qwen1.5-7b-chat-awq model.
   *
   * @see workers-ai-post-run-cf-qwen-qwen1-5-7b-chat-awq
   */
  async qwenQwen157bChatAwqCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/qwen/qwen1.5-7b-chat-awq`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/qwen/qwen2.5-coder-32b-instruct model.
   *
   * @see workers-ai-post-run-cf-qwen-qwen2-5-coder-32b-instruct
   */
  async qwenQwen25Coder32bInstructCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/qwen/qwen2.5-coder-32b-instruct`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/qwen/qwen3-30b-a3b-fp8 model.
   *
   * @see workers-ai-post-run-cf-qwen-qwen3-30b-a3b-fp8
   */
  async qwenQwen330bA3bFp8Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/qwen/qwen3-30b-a3b-fp8`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/qwen/qwen3-embedding-0.6b model.
   *
   * @see workers-ai-post-run-cf-qwen-qwen3-embedding-0-6b
   */
  async qwenQwen3Embedding06bCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/qwen/qwen3-embedding-0.6b`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/qwen/qwq-32b model.
   *
   * @see workers-ai-post-run-cf-qwen-qwq-32b
   */
  async qwenQwq32bCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/qwen/qwq-32b`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/runwayml/stable-diffusion-v1-5-img2img model.
   *
   * @see workers-ai-post-run-cf-runwayml-stable-diffusion-v1-5-img2img
   */
  async runwaymlStableDiffusionV15Img2imgCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/runwayml/stable-diffusion-v1-5-img2img`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/runwayml/stable-diffusion-v1-5-inpainting model.
   *
   * @see workers-ai-post-run-cf-runwayml-stable-diffusion-v1-5-inpainting
   */
  async runwaymlStableDiffusionV15InpaintingCreate(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/runwayml/stable-diffusion-v1-5-inpainting`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/stabilityai/stable-diffusion-xl-base-1.0 model.
   *
   * @see workers-ai-post-run-cf-stabilityai-stable-diffusion-xl-base-1-0
   */
  async stabilityaiStableDiffusionXlBase10Create(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0`, {
      body: { ...params },
    });
  }

  /**
   * Opens a WebSocket connection to stream inference results from the @cf/sven/test-pipe-http model.
   *
   * @see workers-ai-post-websocket-run-cf-sven-test-pipe-http
   */
  async svenTestPipeHttpGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/run/@cf/sven/test-pipe-http`);
  }

  /**
   * Opens a WebSocket connection to stream inference results from the @cf/test/hello-world-cog model.
   *
   * @see workers-ai-post-websocket-run-cf-test-hello-world-cog
   */
  async testHelloWorldCogGet(accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/ai/run/@cf/test/hello-world-cog`);
  }

  /**
   * Runs inference on the @cf/thebloke/discolm-german-7b-v1-awq model.
   *
   * @see workers-ai-post-run-cf-thebloke-discolm-german-7b-v1-awq
   */
  async theblokeDiscolmGerman7bV1AwqCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/thebloke/discolm-german-7b-v1-awq`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/tiiuae/falcon-7b-instruct model.
   *
   * @see workers-ai-post-run-cf-tiiuae-falcon-7b-instruct
   */
  async tiiuaeFalcon7bInstructCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/tiiuae/falcon-7b-instruct`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/tinyllama/tinyllama-1.1b-chat-v1.0 model.
   *
   * @see workers-ai-post-run-cf-tinyllama-tinyllama-1-1b-chat-v1-0
   */
  async tinyllamaTinyllama11bChatV10Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/tinyllama/tinyllama-1.1b-chat-v1.0`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @cf/zai-org/glm-4.7-flash model.
   *
   * @see workers-ai-post-run-cf-zai-org-glm-4-7-flash
   */
  async zaiOrgGlm47FlashCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@cf/zai-org/glm-4.7-flash`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @hf/google/gemma-7b-it model.
   *
   * @see workers-ai-post-run-hf-google-gemma-7b-it
   */
  async googleGemma7bItCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@hf/google/gemma-7b-it`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @hf/mistral/mistral-7b-instruct-v0.2 model.
   *
   * @see workers-ai-post-run-hf-mistral-mistral-7b-instruct-v0-2
   */
  async mistralMistral7bInstructV02Create(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@hf/mistral/mistral-7b-instruct-v0.2`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @hf/nexusflow/starling-lm-7b-beta model.
   *
   * @see workers-ai-post-run-hf-nexusflow-starling-lm-7b-beta
   */
  async nexusflowStarlingLm7bBetaCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@hf/nexusflow/starling-lm-7b-beta`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @hf/nousresearch/hermes-2-pro-mistral-7b model.
   *
   * @see workers-ai-post-run-hf-nousresearch-hermes-2-pro-mistral-7b
   */
  async nousresearchHermes2ProMistral7bCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@hf/nousresearch/hermes-2-pro-mistral-7b`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @hf/thebloke/deepseek-coder-6.7b-base-awq model.
   *
   * @see workers-ai-post-run-hf-thebloke-deepseek-coder-6-7b-base-awq
   */
  async theblokeDeepseekCoder67bBaseAwqCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@hf/thebloke/deepseek-coder-6.7b-base-awq`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @hf/thebloke/deepseek-coder-6.7b-instruct-awq model.
   *
   * @see workers-ai-post-run-hf-thebloke-deepseek-coder-6-7b-instruct-awq
   */
  async theblokeDeepseekCoder67bInstructAwqCreate(
    accountId: string,
    params?: Record<string, unknown>,
  ): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@hf/thebloke/deepseek-coder-6.7b-instruct-awq`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @hf/thebloke/llama-2-13b-chat-awq model.
   *
   * @see workers-ai-post-run-hf-thebloke-llama-2-13b-chat-awq
   */
  async theblokeLlama213bChatAwqCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@hf/thebloke/llama-2-13b-chat-awq`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @hf/thebloke/mistral-7b-instruct-v0.1-awq model.
   *
   * @see workers-ai-post-run-hf-thebloke-mistral-7b-instruct-v0-1-awq
   */
  async theblokeMistral7bInstructV01AwqCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@hf/thebloke/mistral-7b-instruct-v0.1-awq`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @hf/thebloke/neural-chat-7b-v3-1-awq model.
   *
   * @see workers-ai-post-run-hf-thebloke-neural-chat-7b-v3-1-awq
   */
  async theblokeNeuralChat7bV31AwqCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@hf/thebloke/neural-chat-7b-v3-1-awq`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @hf/thebloke/openhermes-2.5-mistral-7b-awq model.
   *
   * @see workers-ai-post-run-hf-thebloke-openhermes-2-5-mistral-7b-awq
   */
  async theblokeOpenhermes25Mistral7bAwqCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@hf/thebloke/openhermes-2.5-mistral-7b-awq`, {
      body: { ...params },
    });
  }

  /**
   * Runs inference on the @hf/thebloke/zephyr-7b-beta-awq model.
   *
   * @see workers-ai-post-run-hf-thebloke-zephyr-7b-beta-awq
   */
  async theblokeZephyr7bBetaAwqCreate(accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/@hf/thebloke/zephyr-7b-beta-awq`, {
      body: { ...params },
    });
  }
}

/**
 * Rags operations
 */
export class Rags extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * AI Search
   *
   * @see autorag-config-ai-search
   */
  async aiSearchCreate(id: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/autorag/rags/${id}/ai-search`);
  }

  /**
   * Files
   *
   * @see autorag-config-files
   */
  async filesGet(id: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/autorag/rags/${id}/files`, {
      query: params,
    });
  }

  /**
   * List Jobs
   *
   * @see autorag-config-list-jobs
   */
  async jobsList(id: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/autorag/rags/${id}/jobs`, {
      query: params,
    });
  }

  /**
   * Get a Job Details
   *
   * @see autorag-config-get-job
   */
  async jobsGet(id: string, jobId: string, accountId: string): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/autorag/rags/${id}/jobs/${jobId}`);
  }

  /**
   * List Job Logs
   *
   * @see autorag-config-list-job-logs
   */
  async jobsLogsList(id: string, jobId: string, accountId: string, params?: Record<string, unknown>): Promise<unknown> {
    return this._client.get<unknown>(`/accounts/${accountId}/autorag/rags/${id}/jobs/${jobId}/logs`, {
      query: params,
    });
  }

  /**
   * Search
   *
   * @see autorag-config-search
   */
  async searchCreate(id: string, accountId: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/autorag/rags/${id}/search`);
  }

  /**
   * Sync
   *
   * @see autorag-config-sync
   */
  async syncEdit(id: string, accountId: string): Promise<unknown> {
    return this._client.patch<unknown>(`/accounts/${accountId}/autorag/rags/${id}/sync`);
  }
}

/**
 * Settings operations
 */
export class Settings extends APIResource {
  constructor(client: CloudflareClient) {
    super(client);
  }

  /**
   * Get the Firewall for AI settings for a zone.
   *
   * @see firewall-for-ai-settings-get
   */
  async get(zoneId: string): Promise<unknown> {
    return this._client.get<unknown>(`/zones/${zoneId}/firewall-for-ai/settings`);
  }

  /**
   * Set the Firewall for AI settings for a zone. Changes can take up to a minute to propagate to the zone.
   *
   * @see firewall-for-ai-settings-put
   */
  async update(zoneId: string): Promise<unknown> {
    return this._client.put<unknown>(`/zones/${zoneId}/firewall-for-ai/settings`);
  }
}

/**
 * Run inference on Workers AI models — text generation, image classification, embeddings, and more
 */
export class AI extends APIResource {
  readonly finetunes: Finetunes;
  readonly authors: Authors;
  readonly tasks: Tasks;
  readonly models: Models;
  readonly tomarkdown: ToMarkdown;
  readonly runextra: RunExtra;
  readonly rags: Rags;
  readonly settings: Settings;

  constructor(client: CloudflareClient) {
    super(client);
    this.finetunes = new Finetunes(client);
    this.authors = new Authors(client);
    this.tasks = new Tasks(client);
    this.models = new Models(client);
    this.tomarkdown = new ToMarkdown(client);
    this.runextra = new RunExtra(client);
    this.rags = new Rags(client);
    this.settings = new Settings(client);
  }

  /**
   * This endpoint provides users with the capability to run specific AI models on-demand. By submitting the required input data, users can receive real-time predictions or results generated by the chosen AI model. The endpoint supports various AI model types, ensuring flexibility and adaptability for diverse use cases. Model specific inputs available in [Cloudflare Docs](https://developers.cloudflare.com/workers-ai/models/).
   *
   * @see workers-ai-post-run-model
   */
  async run(accountId: string, modelName: string): Promise<unknown> {
    return this._client.post<unknown>(`/accounts/${accountId}/ai/run/${modelName}`);
  }
}
