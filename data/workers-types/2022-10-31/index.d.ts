/*! *****************************************************************************
Copyright (c) Cloudflare. All rights reserved.
Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* eslint-disable */
// noinspection JSUnusedGlobalSymbols
declare class DOMException extends Error {
  constructor(message?: string, name?: string);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/message) */
  readonly message: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/name) */
  readonly name: string;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMException/code)
   */
  readonly code: number;
  readonly stack: any;
  static readonly INDEX_SIZE_ERR: number;
  static readonly DOMSTRING_SIZE_ERR: number;
  static readonly HIERARCHY_REQUEST_ERR: number;
  static readonly WRONG_DOCUMENT_ERR: number;
  static readonly INVALID_CHARACTER_ERR: number;
  static readonly NO_DATA_ALLOWED_ERR: number;
  static readonly NO_MODIFICATION_ALLOWED_ERR: number;
  static readonly NOT_FOUND_ERR: number;
  static readonly NOT_SUPPORTED_ERR: number;
  static readonly INUSE_ATTRIBUTE_ERR: number;
  static readonly INVALID_STATE_ERR: number;
  static readonly SYNTAX_ERR: number;
  static readonly INVALID_MODIFICATION_ERR: number;
  static readonly NAMESPACE_ERR: number;
  static readonly INVALID_ACCESS_ERR: number;
  static readonly VALIDATION_ERR: number;
  static readonly TYPE_MISMATCH_ERR: number;
  static readonly SECURITY_ERR: number;
  static readonly NETWORK_ERR: number;
  static readonly ABORT_ERR: number;
  static readonly URL_MISMATCH_ERR: number;
  static readonly QUOTA_EXCEEDED_ERR: number;
  static readonly TIMEOUT_ERR: number;
  static readonly INVALID_NODE_TYPE_ERR: number;
  static readonly DATA_CLONE_ERR: number;
}
declare type WorkerGlobalScopeEventMap = {
  fetch: FetchEvent;
  scheduled: ScheduledEvent;
  queue: QueueEvent;
  unhandledrejection: PromiseRejectionEvent;
  rejectionhandled: PromiseRejectionEvent;
};
declare abstract class WorkerGlobalScope extends EventTarget<WorkerGlobalScopeEventMap> {
  EventTarget: typeof EventTarget;
}
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console) */
declare interface Console {
  "assert"(condition?: boolean, ...data: any[]): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/clear_static) */
  clear(): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/count_static) */
  count(label?: string): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/countReset_static) */
  countReset(label?: string): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/debug_static) */
  debug(...data: any[]): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/dir_static) */
  dir(item?: any, options?: any): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/dirxml_static) */
  dirxml(...data: any[]): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/error_static) */
  error(...data: any[]): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/group_static) */
  group(...data: any[]): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/groupCollapsed_static) */
  groupCollapsed(...data: any[]): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/groupEnd_static) */
  groupEnd(): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/info_static) */
  info(...data: any[]): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/log_static) */
  log(...data: any[]): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/table_static) */
  table(tabularData?: any, properties?: string[]): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/time_static) */
  time(label?: string): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/timeEnd_static) */
  timeEnd(label?: string): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/timeLog_static) */
  timeLog(label?: string, ...data: any[]): void;
  timeStamp(label?: string): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/trace_static) */
  trace(...data: any[]): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/warn_static) */
  warn(...data: any[]): void;
}
declare const console: Console;
declare type BufferSource = ArrayBufferView | ArrayBuffer;
declare type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array;
declare namespace WebAssembly {
  class CompileError extends Error {
    constructor(message?: string);
  }
  class RuntimeError extends Error {
    constructor(message?: string);
  }
  type ValueType =
    | "anyfunc"
    | "externref"
    | "f32"
    | "f64"
    | "i32"
    | "i64"
    | "v128";
  interface GlobalDescriptor {
    value: ValueType;
    mutable?: boolean;
  }
  class Global {
    constructor(descriptor: GlobalDescriptor, value?: any);
    value: any;
    valueOf(): any;
  }
  type ImportValue = ExportValue | number;
  type ModuleImports = Record<string, ImportValue>;
  type Imports = Record<string, ModuleImports>;
  type ExportValue = Function | Global | Memory | Table;
  type Exports = Record<string, ExportValue>;
  class Instance {
    constructor(module: Module, imports?: Imports);
    readonly exports: Exports;
  }
  interface MemoryDescriptor {
    initial: number;
    maximum?: number;
    shared?: boolean;
  }
  class Memory {
    constructor(descriptor: MemoryDescriptor);
    readonly buffer: ArrayBuffer;
    grow(delta: number): number;
  }
  type ImportExportKind = "function" | "global" | "memory" | "table";
  interface ModuleExportDescriptor {
    kind: ImportExportKind;
    name: string;
  }
  interface ModuleImportDescriptor {
    kind: ImportExportKind;
    module: string;
    name: string;
  }
  abstract class Module {
    static customSections(module: Module, sectionName: string): ArrayBuffer[];
    static exports(module: Module): ModuleExportDescriptor[];
    static imports(module: Module): ModuleImportDescriptor[];
  }
  type TableKind = "anyfunc" | "externref";
  interface TableDescriptor {
    element: TableKind;
    initial: number;
    maximum?: number;
  }
  class Table {
    constructor(descriptor: TableDescriptor, value?: any);
    readonly length: number;
    get(index: number): any;
    grow(delta: number, value?: any): number;
    set(index: number, value?: any): void;
  }
  function instantiate(module: Module, imports?: Imports): Promise<Instance>;
  function validate(bytes: BufferSource): boolean;
}
/**
 * This ServiceWorker API interface represents the global execution context of a service worker.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope)
 */
declare interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
  DOMException: typeof DOMException;
  WorkerGlobalScope: typeof WorkerGlobalScope;
  btoa(data: string): string;
  atob(data: string): string;
  setTimeout(callback: (...args: any[]) => void, msDelay?: number): number;
  setTimeout<Args extends any[]>(
    callback: (...args: Args) => void,
    msDelay?: number,
    ...args: Args
  ): number;
  clearTimeout(timeoutId: number | null): void;
  setInterval(callback: (...args: any[]) => void, msDelay?: number): number;
  setInterval<Args extends any[]>(
    callback: (...args: Args) => void,
    msDelay?: number,
    ...args: Args
  ): number;
  clearInterval(timeoutId: number | null): void;
  queueMicrotask(task: Function): void;
  structuredClone<T>(value: T, options?: StructuredSerializeOptions): T;
  fetch(
    input: RequestInfo,
    init?: RequestInit<RequestInitCfProperties>,
  ): Promise<Response>;
  self: ServiceWorkerGlobalScope;
  crypto: Crypto;
  caches: CacheStorage;
  scheduler: Scheduler;
  performance: Performance;
  readonly origin: string;
  Event: typeof Event;
  ExtendableEvent: typeof ExtendableEvent;
  CustomEvent: typeof CustomEvent;
  PromiseRejectionEvent: typeof PromiseRejectionEvent;
  FetchEvent: typeof FetchEvent;
  TailEvent: typeof TailEvent;
  TraceEvent: typeof TailEvent;
  ScheduledEvent: typeof ScheduledEvent;
  MessageEvent: typeof MessageEvent;
  CloseEvent: typeof CloseEvent;
  ReadableStreamDefaultReader: typeof ReadableStreamDefaultReader;
  ReadableStreamBYOBReader: typeof ReadableStreamBYOBReader;
  ReadableStream: typeof ReadableStream;
  WritableStream: typeof WritableStream;
  WritableStreamDefaultWriter: typeof WritableStreamDefaultWriter;
  TransformStream: typeof TransformStream;
  ByteLengthQueuingStrategy: typeof ByteLengthQueuingStrategy;
  CountQueuingStrategy: typeof CountQueuingStrategy;
  CompressionStream: typeof CompressionStream;
  DecompressionStream: typeof DecompressionStream;
  TextEncoderStream: typeof TextEncoderStream;
  TextDecoderStream: typeof TextDecoderStream;
  Headers: typeof Headers;
  Body: typeof Body;
  Request: typeof Request;
  Response: typeof Response;
  WebSocket: typeof WebSocket;
  WebSocketPair: typeof WebSocketPair;
  WebSocketRequestResponsePair: typeof WebSocketRequestResponsePair;
  AbortController: typeof AbortController;
  AbortSignal: typeof AbortSignal;
  TextDecoder: typeof TextDecoder;
  TextEncoder: typeof TextEncoder;
  navigator: Navigator;
  Navigator: typeof Navigator;
  URL: typeof URL;
  URLSearchParams: typeof URLSearchParams;
  URLPattern: typeof URLPattern;
  Blob: typeof Blob;
  File: typeof File;
  FormData: typeof FormData;
  Crypto: typeof Crypto;
  SubtleCrypto: typeof SubtleCrypto;
  CryptoKey: typeof CryptoKey;
  CacheStorage: typeof CacheStorage;
  Cache: typeof Cache;
  FixedLengthStream: typeof FixedLengthStream;
  IdentityTransformStream: typeof IdentityTransformStream;
  HTMLRewriter: typeof HTMLRewriter;
  GPUAdapter: typeof gpuGPUAdapter;
  GPUOutOfMemoryError: typeof gpuGPUOutOfMemoryError;
  GPUValidationError: typeof gpuGPUValidationError;
  GPUInternalError: typeof gpuGPUInternalError;
  GPUDeviceLostInfo: typeof gpuGPUDeviceLostInfo;
  GPUBufferUsage: typeof gpuGPUBufferUsage;
  GPUShaderStage: typeof gpuGPUShaderStage;
  GPUMapMode: typeof gpuGPUMapMode;
  GPUTextureUsage: typeof gpuGPUTextureUsage;
  GPUColorWrite: typeof gpuGPUColorWrite;
}
declare function addEventListener<Type extends keyof WorkerGlobalScopeEventMap>(
  type: Type,
  handler: EventListenerOrEventListenerObject<WorkerGlobalScopeEventMap[Type]>,
  options?: EventTargetAddEventListenerOptions | boolean,
): void;
declare function removeEventListener<
  Type extends keyof WorkerGlobalScopeEventMap,
>(
  type: Type,
  handler: EventListenerOrEventListenerObject<WorkerGlobalScopeEventMap[Type]>,
  options?: EventTargetEventListenerOptions | boolean,
): void;
/**
 * Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)
 */
declare function dispatchEvent(
  event: WorkerGlobalScopeEventMap[keyof WorkerGlobalScopeEventMap],
): boolean;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/btoa) */
declare function btoa(data: string): string;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/atob) */
declare function atob(data: string): string;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/setTimeout) */
declare function setTimeout(
  callback: (...args: any[]) => void,
  msDelay?: number,
): number;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/setTimeout) */
declare function setTimeout<Args extends any[]>(
  callback: (...args: Args) => void,
  msDelay?: number,
  ...args: Args
): number;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/clearTimeout) */
declare function clearTimeout(timeoutId: number | null): void;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/setInterval) */
declare function setInterval(
  callback: (...args: any[]) => void,
  msDelay?: number,
): number;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/setInterval) */
declare function setInterval<Args extends any[]>(
  callback: (...args: Args) => void,
  msDelay?: number,
  ...args: Args
): number;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/clearInterval) */
declare function clearInterval(timeoutId: number | null): void;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/queueMicrotask) */
declare function queueMicrotask(task: Function): void;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/structuredClone) */
declare function structuredClone<T>(
  value: T,
  options?: StructuredSerializeOptions,
): T;
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch) */
declare function fetch(
  input: RequestInfo,
  init?: RequestInit<RequestInitCfProperties>,
): Promise<Response>;
declare const self: ServiceWorkerGlobalScope;
declare const crypto: Crypto;
declare const caches: CacheStorage;
declare const scheduler: Scheduler;
declare const performance: Performance;
declare const origin: string;
declare const navigator: Navigator;
declare interface TestController {}
declare interface ExecutionContext {
  waitUntil(promise: Promise<any>): void;
  passThroughOnException(): void;
}
declare type ExportedHandlerFetchHandler<
  Env = unknown,
  CfHostMetadata = unknown,
> = (
  request: Request<CfHostMetadata, IncomingRequestCfProperties<CfHostMetadata>>,
  env: Env,
  ctx: ExecutionContext,
) => Response | Promise<Response>;
declare type ExportedHandlerTailHandler<Env = unknown> = (
  events: TraceItem[],
  env: Env,
  ctx: ExecutionContext,
) => void | Promise<void>;
declare type ExportedHandlerTraceHandler<Env = unknown> = (
  traces: TraceItem[],
  env: Env,
  ctx: ExecutionContext,
) => void | Promise<void>;
declare type ExportedHandlerScheduledHandler<Env = unknown> = (
  controller: ScheduledController,
  env: Env,
  ctx: ExecutionContext,
) => void | Promise<void>;
declare type ExportedHandlerQueueHandler<Env = unknown, Message = unknown> = (
  batch: MessageBatch<Message>,
  env: Env,
  ctx: ExecutionContext,
) => void | Promise<void>;
declare type ExportedHandlerTestHandler<Env = unknown> = (
  controller: TestController,
  env: Env,
  ctx: ExecutionContext,
) => void | Promise<void>;
declare interface ExportedHandler<
  Env = unknown,
  QueueHandlerMessage = unknown,
  CfHostMetadata = unknown,
> {
  fetch?: ExportedHandlerFetchHandler<Env, CfHostMetadata>;
  tail?: ExportedHandlerTailHandler<Env>;
  trace?: ExportedHandlerTraceHandler<Env>;
  scheduled?: ExportedHandlerScheduledHandler<Env>;
  test?: ExportedHandlerTestHandler<Env>;
  email?: EmailExportedHandler<Env>;
  queue?: ExportedHandlerQueueHandler<Env, QueueHandlerMessage>;
}
declare interface StructuredSerializeOptions {
  transfer?: any[];
}
declare abstract class PromiseRejectionEvent extends Event {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PromiseRejectionEvent/promise) */
  readonly promise: Promise<any>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/PromiseRejectionEvent/reason) */
  readonly reason: any;
}
declare abstract class Navigator {
  sendBeacon(
    url: string,
    body?:
      | ReadableStream
      | string
      | (ArrayBuffer | ArrayBufferView)
      | Blob
      | URLSearchParams
      | FormData,
  ): boolean;
  readonly userAgent: string;
  readonly gpu: gpuGPU;
}
/**
 * Provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance)
 */
declare interface Performance {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/timeOrigin) */
  readonly timeOrigin: number;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Performance/now) */
  now(): number;
}
declare interface AlarmInvocationInfo {
  readonly isRetry: boolean;
  readonly retryCount: number;
}
declare interface DurableObject {
  fetch(request: Request): Response | Promise<Response>;
  alarm?(): void | Promise<void>;
  webSocketMessage?(
    ws: WebSocket,
    message: string | ArrayBuffer,
  ): void | Promise<void>;
  webSocketClose?(
    ws: WebSocket,
    code: number,
    reason: string,
    wasClean: boolean,
  ): void | Promise<void>;
  webSocketError?(ws: WebSocket, error: unknown): void | Promise<void>;
}
declare type DurableObjectStub<
  T extends Rpc.DurableObjectBranded | undefined = undefined,
> = Fetcher<
  T,
  "alarm" | "webSocketMessage" | "webSocketClose" | "webSocketError"
> & {
  readonly id: DurableObjectId;
  readonly name?: string;
};
declare interface DurableObjectId {
  toString(): string;
  equals(other: DurableObjectId): boolean;
  readonly name?: string;
}
declare interface DurableObjectNamespace<
  T extends Rpc.DurableObjectBranded | undefined = undefined,
> {
  newUniqueId(
    options?: DurableObjectNamespaceNewUniqueIdOptions,
  ): DurableObjectId;
  idFromName(name: string): DurableObjectId;
  idFromString(id: string): DurableObjectId;
  get(
    id: DurableObjectId,
    options?: DurableObjectNamespaceGetDurableObjectOptions,
  ): DurableObjectStub<T>;
  jurisdiction(
    jurisdiction: DurableObjectJurisdiction,
  ): DurableObjectNamespace<T>;
}
declare type DurableObjectJurisdiction = "eu" | "fedramp";
declare interface DurableObjectNamespaceNewUniqueIdOptions {
  jurisdiction?: DurableObjectJurisdiction;
}
declare type DurableObjectLocationHint =
  | "wnam"
  | "enam"
  | "sam"
  | "weur"
  | "eeur"
  | "apac"
  | "oc"
  | "afr"
  | "me";
declare interface DurableObjectNamespaceGetDurableObjectOptions {
  locationHint?: DurableObjectLocationHint;
}
declare interface DurableObjectState {
  waitUntil(promise: Promise<any>): void;
  readonly id: DurableObjectId;
  readonly storage: DurableObjectStorage;
  blockConcurrencyWhile<T>(callback: () => Promise<T>): Promise<T>;
  acceptWebSocket(ws: WebSocket, tags?: string[]): void;
  getWebSockets(tag?: string): WebSocket[];
  setWebSocketAutoResponse(maybeReqResp?: WebSocketRequestResponsePair): void;
  getWebSocketAutoResponse(): WebSocketRequestResponsePair | null;
  getWebSocketAutoResponseTimestamp(ws: WebSocket): Date | null;
  setHibernatableWebSocketEventTimeout(timeoutMs?: number): void;
  getHibernatableWebSocketEventTimeout(): number | null;
  getTags(ws: WebSocket): string[];
}
declare interface DurableObjectTransaction {
  get<T = unknown>(
    key: string,
    options?: DurableObjectGetOptions,
  ): Promise<T | undefined>;
  get<T = unknown>(
    keys: string[],
    options?: DurableObjectGetOptions,
  ): Promise<Map<string, T>>;
  list<T = unknown>(
    options?: DurableObjectListOptions,
  ): Promise<Map<string, T>>;
  put<T>(
    key: string,
    value: T,
    options?: DurableObjectPutOptions,
  ): Promise<void>;
  put<T>(
    entries: Record<string, T>,
    options?: DurableObjectPutOptions,
  ): Promise<void>;
  delete(key: string, options?: DurableObjectPutOptions): Promise<boolean>;
  delete(keys: string[], options?: DurableObjectPutOptions): Promise<number>;
  rollback(): void;
  getAlarm(options?: DurableObjectGetAlarmOptions): Promise<number | null>;
  setAlarm(
    scheduledTime: number | Date,
    options?: DurableObjectSetAlarmOptions,
  ): Promise<void>;
  deleteAlarm(options?: DurableObjectSetAlarmOptions): Promise<void>;
}
declare interface DurableObjectStorage {
  get<T = unknown>(
    key: string,
    options?: DurableObjectGetOptions,
  ): Promise<T | undefined>;
  get<T = unknown>(
    keys: string[],
    options?: DurableObjectGetOptions,
  ): Promise<Map<string, T>>;
  list<T = unknown>(
    options?: DurableObjectListOptions,
  ): Promise<Map<string, T>>;
  put<T>(
    key: string,
    value: T,
    options?: DurableObjectPutOptions,
  ): Promise<void>;
  put<T>(
    entries: Record<string, T>,
    options?: DurableObjectPutOptions,
  ): Promise<void>;
  delete(key: string, options?: DurableObjectPutOptions): Promise<boolean>;
  delete(keys: string[], options?: DurableObjectPutOptions): Promise<number>;
  deleteAll(options?: DurableObjectPutOptions): Promise<void>;
  transaction<T>(
    closure: (txn: DurableObjectTransaction) => Promise<T>,
  ): Promise<T>;
  getAlarm(options?: DurableObjectGetAlarmOptions): Promise<number | null>;
  setAlarm(
    scheduledTime: number | Date,
    options?: DurableObjectSetAlarmOptions,
  ): Promise<void>;
  deleteAlarm(options?: DurableObjectSetAlarmOptions): Promise<void>;
  sync(): Promise<void>;
  transactionSync<T>(closure: () => T): T;
}
declare interface DurableObjectListOptions {
  start?: string;
  startAfter?: string;
  end?: string;
  prefix?: string;
  reverse?: boolean;
  limit?: number;
  allowConcurrency?: boolean;
  noCache?: boolean;
}
declare interface DurableObjectGetOptions {
  allowConcurrency?: boolean;
  noCache?: boolean;
}
declare interface DurableObjectGetAlarmOptions {
  allowConcurrency?: boolean;
}
declare interface DurableObjectPutOptions {
  allowConcurrency?: boolean;
  allowUnconfirmed?: boolean;
  noCache?: boolean;
}
declare interface DurableObjectSetAlarmOptions {
  allowConcurrency?: boolean;
  allowUnconfirmed?: boolean;
}
declare class WebSocketRequestResponsePair {
  constructor(request: string, response: string);
  get request(): string;
  get response(): string;
}
declare interface AnalyticsEngineDataset {
  writeDataPoint(event?: AnalyticsEngineDataPoint): void;
}
declare interface AnalyticsEngineDataPoint {
  indexes?: ((ArrayBuffer | string) | null)[];
  doubles?: number[];
  blobs?: ((ArrayBuffer | string) | null)[];
}
declare class Event {
  constructor(type: string, init?: EventInit);
  /**
   * Returns the type of event, e.g. "click", "hashchange", or "submit".
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/type)
   */
  get type(): string;
  /**
   * Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)
   */
  get eventPhase(): number;
  /**
   * Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)
   */
  get composed(): boolean;
  /**
   * Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)
   */
  get bubbles(): boolean;
  /**
   * Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)
   */
  get cancelable(): boolean;
  /**
   * Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)
   */
  get defaultPrevented(): boolean;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)
   */
  get returnValue(): boolean;
  /**
   * Returns the object whose event listener's callback is currently being invoked.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)
   */
  get currentTarget(): EventTarget | undefined;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)
   */
  get srcElement(): EventTarget | undefined;
  /**
   * Returns the event's timestamp as the number of milliseconds measured relative to the time origin.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)
   */
  get timeStamp(): number;
  /**
   * Returns true if event was dispatched by the user agent, and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)
   */
  get isTrusted(): boolean;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)
   */
  get cancelBubble(): boolean;
  /**
   * @deprecated
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)
   */
  set cancelBubble(value: boolean);
  /**
   * Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)
   */
  stopImmediatePropagation(): void;
  /**
   * If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)
   */
  preventDefault(): void;
  /**
   * When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)
   */
  stopPropagation(): void;
  /**
   * Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)
   */
  composedPath(): EventTarget[];
  static readonly NONE: number;
  static readonly CAPTURING_PHASE: number;
  static readonly AT_TARGET: number;
  static readonly BUBBLING_PHASE: number;
}
declare interface EventInit {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
}
declare type EventListener<EventType extends Event = Event> = (
  event: EventType,
) => void;
declare interface EventListenerObject<EventType extends Event = Event> {
  handleEvent(event: EventType): void;
}
declare type EventListenerOrEventListenerObject<
  EventType extends Event = Event,
> = EventListener<EventType> | EventListenerObject<EventType>;
declare class EventTarget<
  EventMap extends Record<string, Event> = Record<string, Event>,
> {
  constructor();
  /**
   * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
   *
   * The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
   *
   * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
   *
   * When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.
   *
   * When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.
   *
   * If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.
   *
   * The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)
   */
  addEventListener<Type extends keyof EventMap>(
    type: Type,
    handler: EventListenerOrEventListenerObject<EventMap[Type]>,
    options?: EventTargetAddEventListenerOptions | boolean,
  ): void;
  /**
   * Removes the event listener in target's event listener list with the same type, callback, and options.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)
   */
  removeEventListener<Type extends keyof EventMap>(
    type: Type,
    handler: EventListenerOrEventListenerObject<EventMap[Type]>,
    options?: EventTargetEventListenerOptions | boolean,
  ): void;
  /**
   * Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)
   */
  dispatchEvent(event: EventMap[keyof EventMap]): boolean;
}
declare interface EventTargetEventListenerOptions {
  capture?: boolean;
}
declare interface EventTargetAddEventListenerOptions {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
  signal?: AbortSignal;
}
declare interface EventTargetHandlerObject {
  handleEvent: (event: Event) => any | undefined;
}
declare class AbortController {
  constructor();
  /**
   * Returns the AbortSignal object associated with this object.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/signal)
   */
  get signal(): AbortSignal;
  /**
   * Invoking this method will set this object's AbortSignal's aborted flag and signal to any observers that the associated activity is to be aborted.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortController/abort)
   */
  abort(reason?: any): void;
}
declare abstract class AbortSignal extends EventTarget {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/abort_static) */
  static abort(reason?: any): AbortSignal;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/timeout_static) */
  static timeout(delay: number): AbortSignal;
  static any(signals: AbortSignal[]): AbortSignal;
  /**
   * Returns true if this AbortSignal's AbortController has signaled to abort, and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/aborted)
   */
  get aborted(): boolean;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/reason) */
  get reason(): any;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/abort_event) */
  get onabort(): any | null;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/abort_event) */
  set onabort(value: any | null);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/AbortSignal/throwIfAborted) */
  throwIfAborted(): void;
}
declare interface Scheduler {
  wait(delay: number, maybeOptions?: SchedulerWaitOptions): Promise<void>;
}
declare interface SchedulerWaitOptions {
  signal?: AbortSignal;
}
declare abstract class ExtendableEvent extends Event {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ExtendableEvent/waitUntil) */
  waitUntil(promise: Promise<any>): void;
}
declare class CustomEvent<T = any> extends Event {
  constructor(type: string, init?: CustomEventCustomEventInit);
  /**
   * Returns any custom data event was created with. Typically used for synthetic events.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CustomEvent/detail)
   */
  get detail(): T;
}
declare interface CustomEventCustomEventInit {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: any;
}
declare class Blob {
  constructor(
    bits?: ((ArrayBuffer | ArrayBufferView) | string | Blob)[],
    options?: BlobOptions,
  );
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/size) */
  get size(): number;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/type) */
  get type(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/slice) */
  slice(start?: number, end?: number, type?: string): Blob;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/arrayBuffer) */
  arrayBuffer(): Promise<ArrayBuffer>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/text) */
  text(): Promise<string>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Blob/stream) */
  stream(): ReadableStream;
}
declare interface BlobOptions {
  type?: string;
}
declare class File extends Blob {
  constructor(
    bits: ((ArrayBuffer | ArrayBufferView) | string | Blob)[] | undefined,
    name: string,
    options?: FileOptions,
  );
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/name) */
  get name(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/File/lastModified) */
  get lastModified(): number;
}
declare interface FileOptions {
  type?: string;
  lastModified?: number;
}
declare abstract class CacheStorage {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CacheStorage/open) */
  open(cacheName: string): Promise<Cache>;
  readonly default: Cache;
}
declare abstract class Cache {
  delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>;
  match(
    request: RequestInfo,
    options?: CacheQueryOptions,
  ): Promise<Response | undefined>;
  put(request: RequestInfo, response: Response): Promise<void>;
}
declare interface CacheQueryOptions {
  ignoreMethod?: boolean;
}
declare abstract class Crypto {
  /**
   * Available only in secure contexts.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto/subtle)
   */
  get subtle(): SubtleCrypto;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto/getRandomValues) */
  getRandomValues<
    T extends
      | Int8Array
      | Uint8Array
      | Int16Array
      | Uint16Array
      | Int32Array
      | Uint32Array
      | BigInt64Array
      | BigUint64Array,
  >(buffer: T): T;
  /**
   * Available only in secure contexts.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto/randomUUID)
   */
  randomUUID(): string;
  DigestStream: typeof DigestStream;
}
declare abstract class SubtleCrypto {
  encrypt(
    algorithm: string | SubtleCryptoEncryptAlgorithm,
    key: CryptoKey,
    plainText: ArrayBuffer | ArrayBufferView,
  ): Promise<ArrayBuffer>;
  decrypt(
    algorithm: string | SubtleCryptoEncryptAlgorithm,
    key: CryptoKey,
    cipherText: ArrayBuffer | ArrayBufferView,
  ): Promise<ArrayBuffer>;
  sign(
    algorithm: string | SubtleCryptoSignAlgorithm,
    key: CryptoKey,
    data: ArrayBuffer | ArrayBufferView,
  ): Promise<ArrayBuffer>;
  verify(
    algorithm: string | SubtleCryptoSignAlgorithm,
    key: CryptoKey,
    signature: ArrayBuffer | ArrayBufferView,
    data: ArrayBuffer | ArrayBufferView,
  ): Promise<boolean>;
  digest(
    algorithm: string | SubtleCryptoHashAlgorithm,
    data: ArrayBuffer | ArrayBufferView,
  ): Promise<ArrayBuffer>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/generateKey) */
  generateKey(
    algorithm: string | SubtleCryptoGenerateKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[],
  ): Promise<CryptoKey | CryptoKeyPair>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/deriveKey) */
  deriveKey(
    algorithm: string | SubtleCryptoDeriveKeyAlgorithm,
    baseKey: CryptoKey,
    derivedKeyAlgorithm: string | SubtleCryptoImportKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[],
  ): Promise<CryptoKey>;
  deriveBits(
    algorithm: string | SubtleCryptoDeriveKeyAlgorithm,
    baseKey: CryptoKey,
    length: number | null,
  ): Promise<ArrayBuffer>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/importKey) */
  importKey(
    format: string,
    keyData: (ArrayBuffer | ArrayBufferView) | JsonWebKey,
    algorithm: string | SubtleCryptoImportKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[],
  ): Promise<CryptoKey>;
  exportKey(format: string, key: CryptoKey): Promise<ArrayBuffer | JsonWebKey>;
  wrapKey(
    format: string,
    key: CryptoKey,
    wrappingKey: CryptoKey,
    wrapAlgorithm: string | SubtleCryptoEncryptAlgorithm,
  ): Promise<ArrayBuffer>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/unwrapKey) */
  unwrapKey(
    format: string,
    wrappedKey: ArrayBuffer | ArrayBufferView,
    unwrappingKey: CryptoKey,
    unwrapAlgorithm: string | SubtleCryptoEncryptAlgorithm,
    unwrappedKeyAlgorithm: string | SubtleCryptoImportKeyAlgorithm,
    extractable: boolean,
    keyUsages: string[],
  ): Promise<CryptoKey>;
  timingSafeEqual(
    a: ArrayBuffer | ArrayBufferView,
    b: ArrayBuffer | ArrayBufferView,
  ): boolean;
}
declare abstract class CryptoKey {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/type) */
  readonly type: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/extractable) */
  readonly extractable: boolean;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/algorithm) */
  readonly algorithm:
    | CryptoKeyKeyAlgorithm
    | CryptoKeyAesKeyAlgorithm
    | CryptoKeyHmacKeyAlgorithm
    | CryptoKeyRsaKeyAlgorithm
    | CryptoKeyEllipticKeyAlgorithm
    | CryptoKeyArbitraryKeyAlgorithm;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CryptoKey/usages) */
  readonly usages: string[];
}
declare interface CryptoKeyPair {
  publicKey: CryptoKey;
  privateKey: CryptoKey;
}
declare interface JsonWebKey {
  kty: string;
  use?: string;
  key_ops?: string[];
  alg?: string;
  ext?: boolean;
  crv?: string;
  x?: string;
  y?: string;
  d?: string;
  n?: string;
  e?: string;
  p?: string;
  q?: string;
  dp?: string;
  dq?: string;
  qi?: string;
  oth?: RsaOtherPrimesInfo[];
  k?: string;
}
declare interface RsaOtherPrimesInfo {
  r?: string;
  d?: string;
  t?: string;
}
declare interface SubtleCryptoDeriveKeyAlgorithm {
  name: string;
  salt?: ArrayBuffer;
  iterations?: number;
  hash?: string | SubtleCryptoHashAlgorithm;
  $public?: CryptoKey;
  info?: ArrayBuffer;
}
declare interface SubtleCryptoEncryptAlgorithm {
  name: string;
  iv?: ArrayBuffer;
  additionalData?: ArrayBuffer;
  tagLength?: number;
  counter?: ArrayBuffer;
  length?: number;
  label?: ArrayBuffer;
}
declare interface SubtleCryptoGenerateKeyAlgorithm {
  name: string;
  hash?: string | SubtleCryptoHashAlgorithm;
  modulusLength?: number;
  publicExponent?: ArrayBuffer;
  length?: number;
  namedCurve?: string;
}
declare interface SubtleCryptoHashAlgorithm {
  name: string;
}
declare interface SubtleCryptoImportKeyAlgorithm {
  name: string;
  hash?: string | SubtleCryptoHashAlgorithm;
  length?: number;
  namedCurve?: string;
  compressed?: boolean;
}
declare interface SubtleCryptoSignAlgorithm {
  name: string;
  hash?: string | SubtleCryptoHashAlgorithm;
  dataLength?: number;
  saltLength?: number;
}
declare interface CryptoKeyKeyAlgorithm {
  name: string;
}
declare interface CryptoKeyAesKeyAlgorithm {
  name: string;
  length: number;
}
declare interface CryptoKeyHmacKeyAlgorithm {
  name: string;
  hash: CryptoKeyKeyAlgorithm;
  length: number;
}
declare interface CryptoKeyRsaKeyAlgorithm {
  name: string;
  modulusLength: number;
  publicExponent: ArrayBuffer | (ArrayBuffer | ArrayBufferView);
  hash?: CryptoKeyKeyAlgorithm;
}
declare interface CryptoKeyEllipticKeyAlgorithm {
  name: string;
  namedCurve: string;
}
declare interface CryptoKeyArbitraryKeyAlgorithm {
  name: string;
  hash?: CryptoKeyKeyAlgorithm;
  namedCurve?: string;
  length?: number;
}
declare class DigestStream extends WritableStream<
  ArrayBuffer | ArrayBufferView
> {
  constructor(algorithm: string | SubtleCryptoHashAlgorithm);
  get digest(): Promise<ArrayBuffer>;
}
declare class TextDecoder {
  constructor(decoder?: string, options?: TextDecoderConstructorOptions);
  /**
   * Returns the result of running encoding's decoder. The method can be invoked zero or more times with options's stream set to true, and then once without options's stream (or set to false), to process a fragmented input. If the invocation without options's stream (or set to false) has no input, it's clearest to omit both arguments.
   *
   * ```
   * var string = "", decoder = new TextDecoder(encoding), buffer;
   * while(buffer = next_chunk()) {
   *   string += decoder.decode(buffer, {stream:true});
   * }
   * string += decoder.decode(); // end-of-queue
   * ```
   *
   * If the error mode is "fatal" and encoding's decoder returns error, throws a TypeError.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextDecoder/decode)
   */
  decode(
    input?: ArrayBuffer | ArrayBufferView,
    options?: TextDecoderDecodeOptions,
  ): string;
  get encoding(): string;
  get fatal(): boolean;
  get ignoreBOM(): boolean;
}
declare class TextEncoder {
  constructor();
  /**
   * Returns the result of running UTF-8's encoder.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder/encode)
   */
  encode(input?: string): Uint8Array;
  /**
   * Runs the UTF-8 encoder on source, stores the result of that operation into destination, and returns the progress made as an object wherein read is the number of converted code units of source and written is the number of bytes modified in destination.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/TextEncoder/encodeInto)
   */
  encodeInto(
    input: string,
    buffer: ArrayBuffer | ArrayBufferView,
  ): TextEncoderEncodeIntoResult;
  get encoding(): string;
}
declare interface TextDecoderConstructorOptions {
  fatal: boolean;
  ignoreBOM: boolean;
}
declare interface TextDecoderDecodeOptions {
  stream: boolean;
}
declare interface TextEncoderEncodeIntoResult {
  read: number;
  written: number;
}
declare class FormData {
  constructor();
  append(name: string, value: string): void;
  append(name: string, value: Blob, filename?: string): void;
  delete(name: string): void;
  get(name: string): (File | string) | null;
  getAll(name: string): (File | string)[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  set(name: string, value: Blob, filename?: string): void;
  /** Returns an array of key, value pairs for every entry in the list. */
  entries(): IterableIterator<[key: string, value: File | string]>;
  /** Returns a list of keys in the list. */
  keys(): IterableIterator<string>;
  /** Returns a list of values in the list. */
  values(): IterableIterator<File | string>;
  forEach<This = unknown>(
    callback: (
      this: This,
      value: File | string,
      key: string,
      parent: FormData,
    ) => void,
    thisArg?: This,
  ): void;
  [Symbol.iterator](): IterableIterator<[key: string, value: File | string]>;
}
declare interface ContentOptions {
  html?: boolean;
}
declare class HTMLRewriter {
  constructor();
  on(
    selector: string,
    handlers: HTMLRewriterElementContentHandlers,
  ): HTMLRewriter;
  onDocument(handlers: HTMLRewriterDocumentContentHandlers): HTMLRewriter;
  transform(response: Response): Response;
}
declare interface HTMLRewriterElementContentHandlers {
  element?(element: Element): void | Promise<void>;
  comments?(comment: Comment): void | Promise<void>;
  text?(element: Text): void | Promise<void>;
}
declare interface HTMLRewriterDocumentContentHandlers {
  doctype?(doctype: Doctype): void | Promise<void>;
  comments?(comment: Comment): void | Promise<void>;
  text?(text: Text): void | Promise<void>;
  end?(end: DocumentEnd): void | Promise<void>;
}
declare interface Doctype {
  readonly name: string | null;
  readonly publicId: string | null;
  readonly systemId: string | null;
}
declare interface Element {
  tagName: string;
  readonly attributes: IterableIterator<string[]>;
  readonly removed: boolean;
  readonly namespaceURI: string;
  getAttribute(name: string): string | null;
  hasAttribute(name: string): boolean;
  setAttribute(name: string, value: string): Element;
  removeAttribute(name: string): Element;
  before(content: string, options?: ContentOptions): Element;
  after(content: string, options?: ContentOptions): Element;
  prepend(content: string, options?: ContentOptions): Element;
  append(content: string, options?: ContentOptions): Element;
  replace(content: string, options?: ContentOptions): Element;
  remove(): Element;
  removeAndKeepContent(): Element;
  setInnerContent(content: string, options?: ContentOptions): Element;
  onEndTag(handler: (tag: EndTag) => void | Promise<void>): void;
}
declare interface EndTag {
  name: string;
  before(content: string, options?: ContentOptions): EndTag;
  after(content: string, options?: ContentOptions): EndTag;
  remove(): EndTag;
}
declare interface Comment {
  text: string;
  readonly removed: boolean;
  before(content: string, options?: ContentOptions): Comment;
  after(content: string, options?: ContentOptions): Comment;
  replace(content: string, options?: ContentOptions): Comment;
  remove(): Comment;
}
declare interface Text {
  readonly text: string;
  readonly lastInTextNode: boolean;
  readonly removed: boolean;
  before(content: string, options?: ContentOptions): Text;
  after(content: string, options?: ContentOptions): Text;
  replace(content: string, options?: ContentOptions): Text;
  remove(): Text;
}
declare interface DocumentEnd {
  append(content: string, options?: ContentOptions): DocumentEnd;
}
declare abstract class FetchEvent extends ExtendableEvent {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/request) */
  readonly request: Request;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/FetchEvent/respondWith) */
  respondWith(promise: Response | Promise<Response>): void;
  passThroughOnException(): void;
}
declare type HeadersInit =
  | Headers
  | Iterable<Iterable<string>>
  | Record<string, string>;
declare class Headers {
  constructor(init?: HeadersInit);
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  append(name: string, value: string): void;
  delete(name: string): void;
  forEach<This = unknown>(
    callback: (this: This, value: string, key: string, parent: Headers) => void,
    thisArg?: This,
  ): void;
  /** Returns an iterator allowing to go through all key/value pairs contained in this object. */
  entries(): IterableIterator<[key: string, value: string]>;
  /** Returns an iterator allowing to go through all keys of the key/value pairs contained in this object. */
  keys(): IterableIterator<string>;
  /** Returns an iterator allowing to go through all values of the key/value pairs contained in this object. */
  values(): IterableIterator<string>;
  [Symbol.iterator](): IterableIterator<[key: string, value: string]>;
}
declare type BodyInit =
  | ReadableStream<Uint8Array>
  | string
  | ArrayBuffer
  | ArrayBufferView
  | Blob
  | URLSearchParams
  | FormData;
declare abstract class Body {
  get body(): ReadableStream | null;
  get bodyUsed(): boolean;
  arrayBuffer(): Promise<ArrayBuffer>;
  text(): Promise<string>;
  json<T>(): Promise<T>;
  formData(): Promise<FormData>;
  blob(): Promise<Blob>;
}
declare class Response extends Body {
  constructor(body?: BodyInit | null, init?: ResponseInit);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirect_static) */
  static redirect(url: string, status?: number): Response;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/json_static) */
  static json(any: any, maybeInit?: ResponseInit | Response): Response;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/clone) */
  clone(): Response;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/status) */
  get status(): number;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/statusText) */
  get statusText(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/headers) */
  get headers(): Headers;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/ok) */
  get ok(): boolean;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/redirected) */
  get redirected(): boolean;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Response/url) */
  get url(): string;
  get webSocket(): WebSocket | null;
  get cf(): any | undefined;
}
declare interface ResponseInit {
  status?: number;
  statusText?: string;
  headers?: HeadersInit;
  cf?: any;
  webSocket?: WebSocket | null;
  encodeBody?: "automatic" | "manual";
}
declare type RequestInfo<
  CfHostMetadata = unknown,
  Cf = CfProperties<CfHostMetadata>,
> = Request<CfHostMetadata, Cf> | string | URL;
declare class Request<
  CfHostMetadata = unknown,
  Cf = CfProperties<CfHostMetadata>,
> extends Body {
  constructor(input: RequestInfo<CfProperties>, init?: RequestInit<Cf>);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/clone) */
  clone(): Request<CfHostMetadata, Cf>;
  /**
   * Returns request's HTTP method, which is "GET" by default.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/method)
   */
  get method(): string;
  /**
   * Returns the URL of request as a string.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/url)
   */
  get url(): string;
  /**
   * Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the "Host" header.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/headers)
   */
  get headers(): Headers;
  /**
   * Returns the redirect mode associated with request, which is a string indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/redirect)
   */
  get redirect(): string;
  get fetcher(): Fetcher | null;
  /**
   * Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort event handler.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/signal)
   */
  get signal(): AbortSignal;
  get cf(): Cf | undefined;
  /**
   * Returns request's subresource integrity metadata, which is a cryptographic hash of the resource being fetched. Its value consists of multiple hashes separated by whitespace. [SRI]
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/integrity)
   */
  get integrity(): string;
  /**
   * Returns a boolean indicating whether or not request can outlive the global in which it was created.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Request/keepalive)
   */
  get keepalive(): boolean;
}
declare interface RequestInit<Cf = CfProperties> {
  /** A string to set request's method. */
  method?: string;
  /** A Headers object, an object literal, or an array of two-item arrays to set request's headers. */
  headers?: HeadersInit;
  /** A BodyInit object or null to set request's body. */
  body?: BodyInit | null;
  /** A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect. */
  redirect?: string;
  fetcher?: Fetcher | null;
  cf?: Cf;
  /** A cryptographic hash of the resource to be fetched by request. Sets request's integrity. */
  integrity?: string;
  /** An AbortSignal to set request's signal. */
  signal?: AbortSignal | null;
}
declare type Service<
  T extends Rpc.WorkerEntrypointBranded | undefined = undefined,
> = Fetcher<T>;
declare type Fetcher<
  T extends Rpc.EntrypointBranded | undefined = undefined,
  Reserved extends string = never,
> = (T extends Rpc.EntrypointBranded
  ? Rpc.Provider<T, Reserved | "fetch" | "connect">
  : unknown) & {
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
  connect(address: SocketAddress | string, options?: SocketOptions): Socket;
};
declare interface FetcherPutOptions {
  expiration?: number;
  expirationTtl?: number;
}
declare interface KVNamespaceListKey<Metadata, Key extends string = string> {
  name: Key;
  expiration?: number;
  metadata?: Metadata;
}
declare type KVNamespaceListResult<Metadata, Key extends string = string> =
  | {
      list_complete: false;
      keys: KVNamespaceListKey<Metadata, Key>[];
      cursor: string;
      cacheStatus: string | null;
    }
  | {
      list_complete: true;
      keys: KVNamespaceListKey<Metadata, Key>[];
      cacheStatus: string | null;
    };
declare interface KVNamespace<Key extends string = string> {
  get(
    key: Key,
    options?: Partial<KVNamespaceGetOptions<undefined>>,
  ): Promise<string | null>;
  get(key: Key, type: "text"): Promise<string | null>;
  get<ExpectedValue = unknown>(
    key: Key,
    type: "json",
  ): Promise<ExpectedValue | null>;
  get(key: Key, type: "arrayBuffer"): Promise<ArrayBuffer | null>;
  get(key: Key, type: "stream"): Promise<ReadableStream | null>;
  get(
    key: Key,
    options?: KVNamespaceGetOptions<"text">,
  ): Promise<string | null>;
  get<ExpectedValue = unknown>(
    key: Key,
    options?: KVNamespaceGetOptions<"json">,
  ): Promise<ExpectedValue | null>;
  get(
    key: Key,
    options?: KVNamespaceGetOptions<"arrayBuffer">,
  ): Promise<ArrayBuffer | null>;
  get(
    key: Key,
    options?: KVNamespaceGetOptions<"stream">,
  ): Promise<ReadableStream | null>;
  list<Metadata = unknown>(
    options?: KVNamespaceListOptions,
  ): Promise<KVNamespaceListResult<Metadata, Key>>;
  put(
    key: Key,
    value: string | ArrayBuffer | ArrayBufferView | ReadableStream,
    options?: KVNamespacePutOptions,
  ): Promise<void>;
  getWithMetadata<Metadata = unknown>(
    key: Key,
    options?: Partial<KVNamespaceGetOptions<undefined>>,
  ): Promise<KVNamespaceGetWithMetadataResult<string, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: Key,
    type: "text",
  ): Promise<KVNamespaceGetWithMetadataResult<string, Metadata>>;
  getWithMetadata<ExpectedValue = unknown, Metadata = unknown>(
    key: Key,
    type: "json",
  ): Promise<KVNamespaceGetWithMetadataResult<ExpectedValue, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: Key,
    type: "arrayBuffer",
  ): Promise<KVNamespaceGetWithMetadataResult<ArrayBuffer, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: Key,
    type: "stream",
  ): Promise<KVNamespaceGetWithMetadataResult<ReadableStream, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: Key,
    options: KVNamespaceGetOptions<"text">,
  ): Promise<KVNamespaceGetWithMetadataResult<string, Metadata>>;
  getWithMetadata<ExpectedValue = unknown, Metadata = unknown>(
    key: Key,
    options: KVNamespaceGetOptions<"json">,
  ): Promise<KVNamespaceGetWithMetadataResult<ExpectedValue, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: Key,
    options: KVNamespaceGetOptions<"arrayBuffer">,
  ): Promise<KVNamespaceGetWithMetadataResult<ArrayBuffer, Metadata>>;
  getWithMetadata<Metadata = unknown>(
    key: Key,
    options: KVNamespaceGetOptions<"stream">,
  ): Promise<KVNamespaceGetWithMetadataResult<ReadableStream, Metadata>>;
  delete(key: Key): Promise<void>;
}
declare interface KVNamespaceListOptions {
  limit?: number;
  prefix?: string | null;
  cursor?: string | null;
}
declare interface KVNamespaceGetOptions<Type> {
  type: Type;
  cacheTtl?: number;
}
declare interface KVNamespacePutOptions {
  expiration?: number;
  expirationTtl?: number;
  metadata?: any | null;
}
declare interface KVNamespaceGetWithMetadataResult<Value, Metadata> {
  value: Value | null;
  metadata: Metadata | null;
  cacheStatus: string | null;
}
declare type QueueContentType = "text" | "bytes" | "json" | "v8";
declare interface Queue<Body = unknown> {
  send(message: Body, options?: QueueSendOptions): Promise<void>;
  sendBatch(
    messages: Iterable<MessageSendRequest<Body>>,
    options?: QueueSendBatchOptions,
  ): Promise<void>;
}
declare interface QueueSendOptions {
  contentType?: QueueContentType;
  delaySeconds?: number;
}
declare interface QueueSendBatchOptions {
  delaySeconds?: number;
}
declare interface MessageSendRequest<Body = unknown> {
  body: Body;
  contentType?: QueueContentType;
  delaySeconds?: number;
}
declare interface QueueRetryOptions {
  delaySeconds?: number;
}
declare interface Message<Body = unknown> {
  readonly id: string;
  readonly timestamp: Date;
  readonly body: Body;
  readonly attempts: number;
  retry(options?: QueueRetryOptions): void;
  ack(): void;
}
declare interface QueueEvent<Body = unknown> extends ExtendableEvent {
  readonly messages: readonly Message<Body>[];
  readonly queue: string;
  retryAll(options?: QueueRetryOptions): void;
  ackAll(): void;
}
declare interface MessageBatch<Body = unknown> {
  readonly messages: readonly Message<Body>[];
  readonly queue: string;
  retryAll(options?: QueueRetryOptions): void;
  ackAll(): void;
}
declare interface R2Error extends Error {
  readonly name: string;
  readonly code: number;
  readonly message: string;
  readonly action: string;
  readonly stack: any;
}
declare interface R2ListOptions {
  limit?: number;
  prefix?: string;
  cursor?: string;
  delimiter?: string;
  startAfter?: string;
  include?: ("httpMetadata" | "customMetadata")[];
}
declare abstract class R2Bucket {
  head(key: string): Promise<R2Object | null>;
  get(
    key: string,
    options: R2GetOptions & {
      onlyIf: R2Conditional | Headers;
    },
  ): Promise<R2ObjectBody | R2Object | null>;
  get(key: string, options?: R2GetOptions): Promise<R2ObjectBody | null>;
  put(
    key: string,
    value:
      | ReadableStream
      | ArrayBuffer
      | ArrayBufferView
      | string
      | null
      | Blob,
    options?: R2PutOptions & {
      onlyIf: R2Conditional | Headers;
    },
  ): Promise<R2Object | null>;
  put(
    key: string,
    value:
      | ReadableStream
      | ArrayBuffer
      | ArrayBufferView
      | string
      | null
      | Blob,
    options?: R2PutOptions,
  ): Promise<R2Object>;
  createMultipartUpload(
    key: string,
    options?: R2MultipartOptions,
  ): Promise<R2MultipartUpload>;
  resumeMultipartUpload(key: string, uploadId: string): R2MultipartUpload;
  delete(keys: string | string[]): Promise<void>;
  list(options?: R2ListOptions): Promise<R2Objects>;
}
declare interface R2MultipartUpload {
  readonly key: string;
  readonly uploadId: string;
  uploadPart(
    partNumber: number,
    value: ReadableStream | (ArrayBuffer | ArrayBufferView) | string | Blob,
  ): Promise<R2UploadedPart>;
  abort(): Promise<void>;
  complete(uploadedParts: R2UploadedPart[]): Promise<R2Object>;
}
declare interface R2UploadedPart {
  partNumber: number;
  etag: string;
}
declare abstract class R2Object {
  readonly key: string;
  readonly version: string;
  readonly size: number;
  readonly etag: string;
  readonly httpEtag: string;
  readonly checksums: R2Checksums;
  readonly uploaded: Date;
  readonly httpMetadata?: R2HTTPMetadata;
  readonly customMetadata?: Record<string, string>;
  readonly range?: R2Range;
  readonly storageClass: string;
  writeHttpMetadata(headers: Headers): void;
}
declare interface R2ObjectBody extends R2Object {
  get body(): ReadableStream;
  get bodyUsed(): boolean;
  arrayBuffer(): Promise<ArrayBuffer>;
  text(): Promise<string>;
  json<T>(): Promise<T>;
  blob(): Promise<Blob>;
}
declare type R2Range =
  | {
      offset: number;
      length?: number;
    }
  | {
      offset?: number;
      length: number;
    }
  | {
      suffix: number;
    };
declare interface R2Conditional {
  etagMatches?: string;
  etagDoesNotMatch?: string;
  uploadedBefore?: Date;
  uploadedAfter?: Date;
  secondsGranularity?: boolean;
}
declare interface R2GetOptions {
  onlyIf?: R2Conditional | Headers;
  range?: R2Range | Headers;
}
declare interface R2PutOptions {
  onlyIf?: R2Conditional | Headers;
  httpMetadata?: R2HTTPMetadata | Headers;
  customMetadata?: Record<string, string>;
  md5?: ArrayBuffer | string;
  sha1?: ArrayBuffer | string;
  sha256?: ArrayBuffer | string;
  sha384?: ArrayBuffer | string;
  sha512?: ArrayBuffer | string;
  storageClass?: string;
}
declare interface R2MultipartOptions {
  httpMetadata?: R2HTTPMetadata | Headers;
  customMetadata?: Record<string, string>;
  storageClass?: string;
}
declare interface R2Checksums {
  readonly md5?: ArrayBuffer;
  readonly sha1?: ArrayBuffer;
  readonly sha256?: ArrayBuffer;
  readonly sha384?: ArrayBuffer;
  readonly sha512?: ArrayBuffer;
  toJSON(): R2StringChecksums;
}
declare interface R2StringChecksums {
  md5?: string;
  sha1?: string;
  sha256?: string;
  sha384?: string;
  sha512?: string;
}
declare interface R2HTTPMetadata {
  contentType?: string;
  contentLanguage?: string;
  contentDisposition?: string;
  contentEncoding?: string;
  cacheControl?: string;
  cacheExpiry?: Date;
}
declare type R2Objects = {
  objects: R2Object[];
  delimitedPrefixes: string[];
} & (
  | {
      truncated: true;
      cursor: string;
    }
  | {
      truncated: false;
    }
);
declare abstract class ScheduledEvent extends ExtendableEvent {
  readonly scheduledTime: number;
  readonly cron: string;
  noRetry(): void;
}
declare interface ScheduledController {
  readonly scheduledTime: number;
  readonly cron: string;
  noRetry(): void;
}
declare interface QueuingStrategy<T = any> {
  highWaterMark?: number | bigint;
  size?: (chunk: T) => number | bigint;
}
declare interface UnderlyingSink<W = any> {
  type?: string;
  start?: (controller: WritableStreamDefaultController) => void | Promise<void>;
  write?: (
    chunk: W,
    controller: WritableStreamDefaultController,
  ) => void | Promise<void>;
  abort?: (reason: any) => void | Promise<void>;
  close?: () => void | Promise<void>;
}
declare interface UnderlyingByteSource {
  type: "bytes";
  autoAllocateChunkSize?: number;
  start?: (controller: ReadableByteStreamController) => void | Promise<void>;
  pull?: (controller: ReadableByteStreamController) => void | Promise<void>;
  cancel?: (reason: any) => void | Promise<void>;
}
declare interface UnderlyingSource<R = any> {
  type?: "" | undefined;
  start?: (
    controller: ReadableStreamDefaultController<R>,
  ) => void | Promise<void>;
  pull?: (
    controller: ReadableStreamDefaultController<R>,
  ) => void | Promise<void>;
  cancel?: (reason: any) => void | Promise<void>;
  expectedLength?: number | bigint;
}
declare interface Transformer<I = any, O = any> {
  readableType?: string;
  writableType?: string;
  start?: (
    controller: TransformStreamDefaultController<O>,
  ) => void | Promise<void>;
  transform?: (
    chunk: I,
    controller: TransformStreamDefaultController<O>,
  ) => void | Promise<void>;
  flush?: (
    controller: TransformStreamDefaultController<O>,
  ) => void | Promise<void>;
  cancel?: (reason: any) => void | Promise<void>;
  expectedLength?: number;
}
declare interface StreamPipeOptions {
  /**
   * Pipes this readable stream to a given writable stream destination. The way in which the piping process behaves under various error conditions can be customized with a number of passed options. It returns a promise that fulfills when the piping process completes successfully, or rejects if any errors were encountered.
   *
   * Piping a stream will lock it for the duration of the pipe, preventing any other consumer from acquiring a reader.
   *
   * Errors and closures of the source and destination streams propagate as follows:
   *
   * An error in this source readable stream will abort destination, unless preventAbort is truthy. The returned promise will be rejected with the source's error, or with any error that occurs during aborting the destination.
   *
   * An error in destination will cancel this source readable stream, unless preventCancel is truthy. The returned promise will be rejected with the destination's error, or with any error that occurs during canceling the source.
   *
   * When this source readable stream closes, destination will be closed, unless preventClose is truthy. The returned promise will be fulfilled once this process completes, unless an error is encountered while closing the destination, in which case it will be rejected with that error.
   *
   * If destination starts out closed or closing, this source readable stream will be canceled, unless preventCancel is true. The returned promise will be rejected with an error indicating piping to a closed stream failed, or with any error that occurs during canceling the source.
   *
   * The signal option can be set to an AbortSignal to allow aborting an ongoing pipe operation via the corresponding AbortController. In this case, this source readable stream will be canceled, and destination aborted, unless the respective options preventCancel or preventAbort are set.
   */
  preventClose?: boolean;
  preventAbort?: boolean;
  preventCancel?: boolean;
  signal?: AbortSignal;
}
declare type ReadableStreamReadResult<R = any> =
  | {
      done: false;
      value: R;
    }
  | {
      done: true;
      value?: undefined;
    };
/**
 * This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream)
 */
declare interface ReadableStream<R = any> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/locked) */
  get locked(): boolean;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/cancel) */
  cancel(reason?: any): Promise<void>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/getReader) */
  getReader(): ReadableStreamDefaultReader<R>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/getReader) */
  getReader(options: ReadableStreamGetReaderOptions): ReadableStreamBYOBReader;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/pipeThrough) */
  pipeThrough<T>(
    transform: ReadableWritablePair<T, R>,
    options?: StreamPipeOptions,
  ): ReadableStream<T>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/pipeTo) */
  pipeTo(
    destination: WritableStream<R>,
    options?: StreamPipeOptions,
  ): Promise<void>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStream/tee) */
  tee(): [ReadableStream<R>, ReadableStream<R>];
  values(options?: ReadableStreamValuesOptions): AsyncIterableIterator<R>;
  [Symbol.asyncIterator](
    options?: ReadableStreamValuesOptions,
  ): AsyncIterableIterator<R>;
}
declare const ReadableStream: {
  prototype: ReadableStream;
  new (
    underlyingSource: UnderlyingByteSource,
    strategy?: QueuingStrategy<Uint8Array>,
  ): ReadableStream<Uint8Array>;
  new <R = any>(
    underlyingSource?: UnderlyingSource<R>,
    strategy?: QueuingStrategy<R>,
  ): ReadableStream<R>;
};
declare class ReadableStreamDefaultReader<R = any> {
  constructor(stream: ReadableStream);
  get closed(): Promise<void>;
  cancel(reason?: any): Promise<void>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader/read) */
  read(): Promise<ReadableStreamReadResult<R>>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader/releaseLock) */
  releaseLock(): void;
}
declare class ReadableStreamBYOBReader {
  constructor(stream: ReadableStream);
  get closed(): Promise<void>;
  cancel(reason?: any): Promise<void>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/read) */
  read<T extends ArrayBufferView>(
    view: T,
  ): Promise<ReadableStreamReadResult<T>>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/releaseLock) */
  releaseLock(): void;
  readAtLeast<T extends ArrayBufferView>(
    minElements: number,
    view: T,
  ): Promise<ReadableStreamReadResult<T>>;
}
declare interface ReadableStreamBYOBReaderReadableStreamBYOBReaderReadOptions {
  min?: number;
}
declare interface ReadableStreamGetReaderOptions {
  /**
   * Creates a ReadableStreamBYOBReader and locks the stream to the new reader.
   *
   * This call behaves the same way as the no-argument variant, except that it only works on readable byte streams, i.e. streams which were constructed specifically with the ability to handle "bring your own buffer" reading. The returned BYOB reader provides the ability to directly read individual chunks from the stream via its read() method, into developer-supplied buffers, allowing more precise control over allocation.
   */
  mode: "byob";
}
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest) */
declare interface ReadableStreamBYOBRequest {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/view) */
  get view(): Uint8Array | null;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/respond) */
  respond(bytesWritten: number): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBRequest/respondWithNewView) */
  respondWithNewView(view: ArrayBuffer | ArrayBufferView): void;
  get atLeast(): number | null;
}
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController) */
declare interface ReadableStreamDefaultController<R = any> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/desiredSize) */
  get desiredSize(): number | null;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/close) */
  close(): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/enqueue) */
  enqueue(chunk?: R): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultController/error) */
  error(reason: any): void;
}
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController) */
declare interface ReadableByteStreamController {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/byobRequest) */
  get byobRequest(): ReadableStreamBYOBRequest | null;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/desiredSize) */
  get desiredSize(): number | null;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/close) */
  close(): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/enqueue) */
  enqueue(chunk: ArrayBuffer | ArrayBufferView): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ReadableByteStreamController/error) */
  error(reason: any): void;
}
/**
 * This Streams API interface represents a controller allowing control of a WritableStream's state. When constructing a WritableStream, the underlying sink is given a corresponding WritableStreamDefaultController instance to manipulate.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController)
 */
declare interface WritableStreamDefaultController {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController/signal) */
  get signal(): AbortSignal;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController/error) */
  error(reason?: any): void;
}
/** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController) */
declare interface TransformStreamDefaultController<O = any> {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/desiredSize) */
  get desiredSize(): number | null;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/enqueue) */
  enqueue(chunk?: O): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/error) */
  error(reason: any): void;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStreamDefaultController/terminate) */
  terminate(): void;
}
declare interface ReadableWritablePair<R = any, W = any> {
  /**
   * Provides a convenient, chainable way of piping this readable stream through a transform stream (or any other { writable, readable } pair). It simply pipes the stream into the writable side of the supplied pair, and returns the readable side for further use.
   *
   * Piping a stream will lock it for the duration of the pipe, preventing any other consumer from acquiring a reader.
   */
  writable: WritableStream<W>;
  readable: ReadableStream<R>;
}
declare class WritableStream<W = any> {
  constructor(
    underlyingSink?: UnderlyingSink,
    queuingStrategy?: QueuingStrategy,
  );
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/locked) */
  get locked(): boolean;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/abort) */
  abort(reason?: any): Promise<void>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/close) */
  close(): Promise<void>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStream/getWriter) */
  getWriter(): WritableStreamDefaultWriter<W>;
}
declare class WritableStreamDefaultWriter<W = any> {
  constructor(stream: WritableStream);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/closed) */
  get closed(): Promise<void>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/ready) */
  get ready(): Promise<void>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/desiredSize) */
  get desiredSize(): number | null;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/abort) */
  abort(reason?: any): Promise<void>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/close) */
  close(): Promise<void>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/write) */
  write(chunk?: W): Promise<void>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultWriter/releaseLock) */
  releaseLock(): void;
}
declare class TransformStream<I = any, O = any> {
  constructor(
    transformer?: Transformer<I, O>,
    writableStrategy?: QueuingStrategy<I>,
    readableStrategy?: QueuingStrategy<O>,
  );
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream/readable) */
  get readable(): ReadableStream<O>;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/TransformStream/writable) */
  get writable(): WritableStream<I>;
}
declare class FixedLengthStream extends IdentityTransformStream {
  constructor(
    expectedLength: number | bigint,
    queuingStrategy?: IdentityTransformStreamQueuingStrategy,
  );
}
declare class IdentityTransformStream extends TransformStream<
  ArrayBuffer | ArrayBufferView,
  Uint8Array
> {
  constructor(queuingStrategy?: IdentityTransformStreamQueuingStrategy);
}
declare interface IdentityTransformStreamQueuingStrategy {
  highWaterMark?: number | bigint;
}
declare interface ReadableStreamValuesOptions {
  preventCancel?: boolean;
}
declare class CompressionStream extends TransformStream<
  ArrayBuffer | ArrayBufferView,
  Uint8Array
> {
  constructor(format: "gzip" | "deflate" | "deflate-raw");
}
declare class DecompressionStream extends TransformStream<
  ArrayBuffer | ArrayBufferView,
  Uint8Array
> {
  constructor(format: "gzip" | "deflate" | "deflate-raw");
}
declare class TextEncoderStream extends TransformStream<string, Uint8Array> {
  constructor();
  get encoding(): string;
}
declare class TextDecoderStream extends TransformStream<
  ArrayBuffer | ArrayBufferView,
  string
> {
  constructor(label?: string, options?: TextDecoderStreamTextDecoderStreamInit);
  get encoding(): string;
  get fatal(): boolean;
  get ignoreBOM(): boolean;
}
declare interface TextDecoderStreamTextDecoderStreamInit {
  fatal?: boolean;
  ignoreBOM?: boolean;
}
declare class ByteLengthQueuingStrategy
  implements QueuingStrategy<ArrayBufferView>
{
  constructor(init: QueuingStrategyInit);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ByteLengthQueuingStrategy/highWaterMark) */
  get highWaterMark(): number;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ByteLengthQueuingStrategy/size) */
  get size(): (chunk?: any) => number;
}
declare class CountQueuingStrategy implements QueuingStrategy {
  constructor(init: QueuingStrategyInit);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CountQueuingStrategy/highWaterMark) */
  get highWaterMark(): number;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/CountQueuingStrategy/size) */
  get size(): (chunk?: any) => number;
}
declare interface QueuingStrategyInit {
  /**
   * Creates a new ByteLengthQueuingStrategy with the provided high water mark.
   *
   * Note that the provided high water mark will not be validated ahead of time. Instead, if it is negative, NaN, or not a number, the resulting ByteLengthQueuingStrategy will cause the corresponding stream constructor to throw.
   */
  highWaterMark: number;
}
declare interface ScriptVersion {
  id?: string;
  tag?: string;
  message?: string;
}
declare abstract class TailEvent extends ExtendableEvent {
  readonly events: TraceItem[];
  readonly traces: TraceItem[];
}
declare interface TraceItem {
  readonly event:
    | (
        | TraceItemFetchEventInfo
        | TraceItemJsRpcEventInfo
        | TraceItemScheduledEventInfo
        | TraceItemAlarmEventInfo
        | TraceItemQueueEventInfo
        | TraceItemEmailEventInfo
        | TraceItemTailEventInfo
        | TraceItemCustomEventInfo
        | TraceItemHibernatableWebSocketEventInfo
      )
    | null;
  readonly eventTimestamp: number | null;
  readonly logs: TraceLog[];
  readonly exceptions: TraceException[];
  readonly diagnosticsChannelEvents: TraceDiagnosticChannelEvent[];
  readonly scriptName: string | null;
  readonly entrypoint?: string;
  readonly scriptVersion?: ScriptVersion;
  readonly dispatchNamespace?: string;
  readonly scriptTags?: string[];
  readonly outcome: string;
}
declare interface TraceItemAlarmEventInfo {
  readonly scheduledTime: Date;
}
declare interface TraceItemCustomEventInfo {}
declare interface TraceItemScheduledEventInfo {
  readonly scheduledTime: number;
  readonly cron: string;
}
declare interface TraceItemQueueEventInfo {
  readonly queue: string;
  readonly batchSize: number;
}
declare interface TraceItemEmailEventInfo {
  readonly mailFrom: string;
  readonly rcptTo: string;
  readonly rawSize: number;
}
declare interface TraceItemTailEventInfo {
  readonly consumedEvents: TraceItemTailEventInfoTailItem[];
}
declare interface TraceItemTailEventInfoTailItem {
  readonly scriptName: string | null;
}
declare interface TraceItemFetchEventInfo {
  readonly response?: TraceItemFetchEventInfoResponse;
  readonly request: TraceItemFetchEventInfoRequest;
}
declare interface TraceItemFetchEventInfoRequest {
  readonly cf?: any;
  readonly headers: Record<string, string>;
  readonly method: string;
  readonly url: string;
  getUnredacted(): TraceItemFetchEventInfoRequest;
}
declare interface TraceItemFetchEventInfoResponse {
  readonly status: number;
}
declare interface TraceItemJsRpcEventInfo {
  readonly rpcMethod: string;
}
declare interface TraceItemHibernatableWebSocketEventInfo {
  readonly getWebSocketEvent:
    | TraceItemHibernatableWebSocketEventInfoMessage
    | TraceItemHibernatableWebSocketEventInfoClose
    | TraceItemHibernatableWebSocketEventInfoError;
}
declare interface TraceItemHibernatableWebSocketEventInfoMessage {
  readonly webSocketEventType: string;
}
declare interface TraceItemHibernatableWebSocketEventInfoClose {
  readonly webSocketEventType: string;
  readonly code: number;
  readonly wasClean: boolean;
}
declare interface TraceItemHibernatableWebSocketEventInfoError {
  readonly webSocketEventType: string;
}
declare interface TraceLog {
  readonly timestamp: number;
  readonly level: string;
  readonly message: any;
}
declare interface TraceException {
  readonly timestamp: number;
  readonly message: string;
  readonly name: string;
  readonly stack?: string;
}
declare interface TraceDiagnosticChannelEvent {
  readonly timestamp: number;
  readonly channel: string;
  readonly message: any;
}
declare interface TraceMetrics {
  readonly cpuTime: number;
  readonly wallTime: number;
}
declare interface UnsafeTraceMetrics {
  fromTrace(item: TraceItem): TraceMetrics;
}
declare class URL {
  constructor(url: string | URL, base?: string | URL);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/origin) */
  get origin(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/href) */
  get href(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/href) */
  set href(value: string);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/protocol) */
  get protocol(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/protocol) */
  set protocol(value: string);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/username) */
  get username(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/username) */
  set username(value: string);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/password) */
  get password(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/password) */
  set password(value: string);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/host) */
  get host(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/host) */
  set host(value: string);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hostname) */
  get hostname(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hostname) */
  set hostname(value: string);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/port) */
  get port(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/port) */
  set port(value: string);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/pathname) */
  get pathname(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/pathname) */
  set pathname(value: string);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/search) */
  get search(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/search) */
  set search(value: string);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hash) */
  get hash(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/hash) */
  set hash(value: string);
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/searchParams) */
  get searchParams(): URLSearchParams;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/toJSON) */
  toJSON(): string;
  toString(): string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/URL/canParse_static) */
  static canParse(url: string, base?: string): boolean;
  static parse(url: string, base?: string): URL | null;
}
declare class URLSearchParams {
  constructor(
    init?: Iterable<Iterable<string>> | Record<string, string> | string,
  );
  get size(): number;
  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  sort(): void;
  /** Returns an array of key, value pairs for every entry in the search params. */
  entries(): IterableIterator<[key: string, value: string]>;
  /** Returns a list of keys in the search params. */
  keys(): IterableIterator<string>;
  /** Returns a list of values in the search params. */
  values(): IterableIterator<string>;
  forEach<This = unknown>(
    callback: (
      this: This,
      value: string,
      key: string,
      parent: URLSearchParams,
    ) => void,
    thisArg?: This,
  ): void;
  toString(): string;
  [Symbol.iterator](): IterableIterator<[key: string, value: string]>;
}
declare class URLPattern {
  constructor(
    input?: string | URLPatternURLPatternInit,
    baseURL?: string,
    patternOptions?: URLPatternURLPatternOptions,
  );
  get protocol(): string;
  get username(): string;
  get password(): string;
  get hostname(): string;
  get port(): string;
  get pathname(): string;
  get search(): string;
  get hash(): string;
  test(input?: string | URLPatternURLPatternInit, baseURL?: string): boolean;
  exec(
    input?: string | URLPatternURLPatternInit,
    baseURL?: string,
  ): URLPatternURLPatternResult | null;
}
declare interface URLPatternURLPatternInit {
  protocol?: string;
  username?: string;
  password?: string;
  hostname?: string;
  port?: string;
  pathname?: string;
  search?: string;
  hash?: string;
  baseURL?: string;
}
declare interface URLPatternURLPatternComponentResult {
  input: string;
  groups: Record<string, string>;
}
declare interface URLPatternURLPatternResult {
  inputs: (string | URLPatternURLPatternInit)[];
  protocol: URLPatternURLPatternComponentResult;
  username: URLPatternURLPatternComponentResult;
  password: URLPatternURLPatternComponentResult;
  hostname: URLPatternURLPatternComponentResult;
  port: URLPatternURLPatternComponentResult;
  pathname: URLPatternURLPatternComponentResult;
  search: URLPatternURLPatternComponentResult;
  hash: URLPatternURLPatternComponentResult;
}
declare interface URLPatternURLPatternOptions {
  ignoreCase?: boolean;
}
declare class CloseEvent extends Event {
  constructor(type: string, initializer?: CloseEventInit);
  /**
   * Returns the WebSocket connection close code provided by the server.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CloseEvent/code)
   */
  readonly code: number;
  /**
   * Returns the WebSocket connection close reason provided by the server.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CloseEvent/reason)
   */
  readonly reason: string;
  /**
   * Returns true if the connection closed cleanly; false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/CloseEvent/wasClean)
   */
  readonly wasClean: boolean;
}
declare interface CloseEventInit {
  code?: number;
  reason?: string;
  wasClean?: boolean;
}
declare class MessageEvent extends Event {
  constructor(type: string, initializer: MessageEventInit);
  readonly data: ArrayBuffer | string;
}
declare interface MessageEventInit {
  data: ArrayBuffer | string;
}
/**
 * Events providing information related to errors in scripts or in files.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent)
 */
declare interface ErrorEvent extends Event {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/filename) */
  readonly filename: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/message) */
  readonly message: string;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/lineno) */
  readonly lineno: number;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/colno) */
  readonly colno: number;
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/ErrorEvent/error) */
  readonly error: any;
}
declare type WebSocketEventMap = {
  close: CloseEvent;
  message: MessageEvent;
  open: Event;
  error: ErrorEvent;
};
declare class WebSocket extends EventTarget<WebSocketEventMap> {
  constructor(url: string, protocols?: string[] | string);
  accept(): void;
  /**
   * Transmits data using the WebSocket connection. data can be a string, a Blob, an ArrayBuffer, or an ArrayBufferView.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/send)
   */
  send(message: (ArrayBuffer | ArrayBufferView) | string): void;
  /**
   * Closes the WebSocket connection, optionally using code as the the WebSocket connection close code and reason as the the WebSocket connection close reason.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/close)
   */
  close(code?: number, reason?: string): void;
  serializeAttachment(attachment: any): void;
  deserializeAttachment(): any | null;
  static readonly READY_STATE_CONNECTING: number;
  static readonly CONNECTING: number;
  static readonly READY_STATE_OPEN: number;
  static readonly OPEN: number;
  static readonly READY_STATE_CLOSING: number;
  static readonly CLOSING: number;
  static readonly READY_STATE_CLOSED: number;
  static readonly CLOSED: number;
  /**
   * Returns the state of the WebSocket object's connection. It can have the values described below.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/readyState)
   */
  get readyState(): number;
  /**
   * Returns the URL that was used to establish the WebSocket connection.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/url)
   */
  get url(): string | null;
  /**
   * Returns the subprotocol selected by the server, if any. It can be used in conjunction with the array form of the constructor's second argument to perform subprotocol negotiation.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/protocol)
   */
  get protocol(): string | null;
  /**
   * Returns the extensions selected by the server, if any.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/WebSocket/extensions)
   */
  get extensions(): string | null;
}
declare const WebSocketPair: {
  new (): {
    0: WebSocket;
    1: WebSocket;
  };
};
declare interface Socket {
  get readable(): ReadableStream;
  get writable(): WritableStream;
  get closed(): Promise<void>;
  get opened(): Promise<SocketInfo>;
  close(): Promise<void>;
  startTls(options?: TlsOptions): Socket;
}
declare interface SocketOptions {
  secureTransport?: string;
  allowHalfOpen: boolean;
}
declare interface SocketAddress {
  hostname: string;
  port: number;
}
declare interface TlsOptions {
  expectedServerHostname?: string;
}
declare interface SocketInfo {
  remoteAddress?: string;
  localAddress?: string;
}
declare interface gpuGPU {
  requestAdapter(
    param1?: gpuGPURequestAdapterOptions,
  ): Promise<gpuGPUAdapter | null>;
}
declare abstract class gpuGPUAdapter {
  requestDevice(param1?: gpuGPUDeviceDescriptor): Promise<gpuGPUDevice>;
  requestAdapterInfo(unmaskHints?: string[]): Promise<gpuGPUAdapterInfo>;
  get features(): gpuGPUSupportedFeatures;
  get limits(): gpuGPUSupportedLimits;
}
declare interface gpuGPUDevice extends EventTarget {
  createBuffer(param1: gpuGPUBufferDescriptor): gpuGPUBuffer;
  createBindGroupLayout(
    descriptor: gpuGPUBindGroupLayoutDescriptor,
  ): gpuGPUBindGroupLayout;
  createBindGroup(descriptor: gpuGPUBindGroupDescriptor): gpuGPUBindGroup;
  createSampler(descriptor: gpuGPUSamplerDescriptor): gpuGPUSampler;
  createShaderModule(
    descriptor: gpuGPUShaderModuleDescriptor,
  ): gpuGPUShaderModule;
  createPipelineLayout(
    descriptor: gpuGPUPipelineLayoutDescriptor,
  ): gpuGPUPipelineLayout;
  createComputePipeline(
    descriptor: gpuGPUComputePipelineDescriptor,
  ): gpuGPUComputePipeline;
  createRenderPipeline(
    descriptor: gpuGPURenderPipelineDescriptor,
  ): gpuGPURenderPipeline;
  createCommandEncoder(
    descriptor?: gpuGPUCommandEncoderDescriptor,
  ): gpuGPUCommandEncoder;
  createTexture(param1: gpuGPUTextureDescriptor): gpuGPUTexture;
  destroy(): void;
  createQuerySet(descriptor: gpuGPUQuerySetDescriptor): gpuGPUQuerySet;
  pushErrorScope(filter: string): void;
  popErrorScope(): Promise<gpuGPUError | null>;
  get queue(): gpuGPUQueue;
  get lost(): Promise<gpuGPUDeviceLostInfo>;
  get features(): gpuGPUSupportedFeatures;
  get limits(): gpuGPUSupportedLimits;
}
declare interface gpuGPUDeviceDescriptor {
  label?: string;
  requiredFeatures?: string[];
  requiredLimits?: Record<string, number | bigint>;
  defaultQueue?: gpuGPUQueueDescriptor;
}
declare interface gpuGPUBufferDescriptor {
  label: string;
  size: number | bigint;
  usage: number;
  mappedAtCreation: boolean;
}
declare interface gpuGPUQueueDescriptor {
  label?: string;
}
declare abstract class gpuGPUBufferUsage {
  static readonly MAP_READ: number;
  static readonly MAP_WRITE: number;
  static readonly COPY_SRC: number;
  static readonly COPY_DST: number;
  static readonly INDEX: number;
  static readonly VERTEX: number;
  static readonly UNIFORM: number;
  static readonly STORAGE: number;
  static readonly INDIRECT: number;
  static readonly QUERY_RESOLVE: number;
}
declare interface gpuGPUBuffer {
  getMappedRange(size?: number | bigint, param2?: number | bigint): ArrayBuffer;
  unmap(): void;
  destroy(): void;
  mapAsync(
    offset: number,
    size?: number | bigint,
    param3?: number | bigint,
  ): Promise<void>;
  get size(): number | bigint;
  get usage(): number;
  get mapState(): string;
}
declare abstract class gpuGPUShaderStage {
  static readonly VERTEX: number;
  static readonly FRAGMENT: number;
  static readonly COMPUTE: number;
}
declare interface gpuGPUBindGroupLayoutDescriptor {
  label?: string;
  entries: gpuGPUBindGroupLayoutEntry[];
}
declare interface gpuGPUBindGroupLayoutEntry {
  binding: number;
  visibility: number;
  buffer?: gpuGPUBufferBindingLayout;
  sampler?: gpuGPUSamplerBindingLayout;
  texture?: gpuGPUTextureBindingLayout;
  storageTexture?: gpuGPUStorageTextureBindingLayout;
}
declare interface gpuGPUStorageTextureBindingLayout {
  access?: string;
  format: string;
  viewDimension?: string;
}
declare interface gpuGPUTextureBindingLayout {
  sampleType?: string;
  viewDimension?: string;
  multisampled?: boolean;
}
declare interface gpuGPUSamplerBindingLayout {
  type?: string;
}
declare interface gpuGPUBufferBindingLayout {
  type?: string;
  hasDynamicOffset?: boolean;
  minBindingSize?: number | bigint;
}
declare interface gpuGPUBindGroupLayout {}
declare interface gpuGPUBindGroup {}
declare interface gpuGPUBindGroupDescriptor {
  label?: string;
  layout: gpuGPUBindGroupLayout;
  entries: gpuGPUBindGroupEntry[];
}
declare interface gpuGPUBindGroupEntry {
  binding: number;
  resource: gpuGPUBufferBinding | gpuGPUSampler;
}
declare interface gpuGPUBufferBinding {
  buffer: gpuGPUBuffer;
  offset?: number | bigint;
  size?: number | bigint;
}
declare interface gpuGPUSampler {}
declare interface gpuGPUSamplerDescriptor {
  label?: string;
  addressModeU?: string;
  addressModeV?: string;
  addressModeW?: string;
  magFilter?: string;
  minFilter?: string;
  mipmapFilter?: string;
  lodMinClamp?: number;
  lodMaxClamp?: number;
  compare: string;
  maxAnisotropy?: number;
}
declare interface gpuGPUShaderModule {
  getCompilationInfo(): Promise<gpuGPUCompilationInfo>;
}
declare interface gpuGPUShaderModuleDescriptor {
  label?: string;
  code: string;
}
declare interface gpuGPUPipelineLayout {}
declare interface gpuGPUPipelineLayoutDescriptor {
  label?: string;
  bindGroupLayouts: gpuGPUBindGroupLayout[];
}
declare interface gpuGPUComputePipeline {
  getBindGroupLayout(index: number): gpuGPUBindGroupLayout;
}
declare interface gpuGPUComputePipelineDescriptor {
  label?: string;
  compute: gpuGPUProgrammableStage;
  layout: string | gpuGPUPipelineLayout;
}
declare interface gpuGPUProgrammableStage {
  module: gpuGPUShaderModule;
  entryPoint: string;
  constants?: Record<string, number>;
}
declare interface gpuGPUCommandEncoder {
  get label(): string;
  beginComputePass(
    descriptor?: gpuGPUComputePassDescriptor,
  ): gpuGPUComputePassEncoder;
  beginRenderPass(
    descriptor: gpuGPURenderPassDescriptor,
  ): gpuGPURenderPassEncoder;
  copyBufferToBuffer(
    source: gpuGPUBuffer,
    sourceOffset: number | bigint,
    destination: gpuGPUBuffer,
    destinationOffset: number | bigint,
    size: number | bigint,
  ): void;
  finish(param0?: gpuGPUCommandBufferDescriptor): gpuGPUCommandBuffer;
  copyTextureToBuffer(
    source: gpuGPUImageCopyTexture,
    destination: gpuGPUImageCopyBuffer,
    copySize: Iterable<number> | gpuGPUExtent3DDict,
  ): void;
  copyBufferToTexture(
    source: gpuGPUImageCopyBuffer,
    destination: gpuGPUImageCopyTexture,
    copySize: Iterable<number> | gpuGPUExtent3DDict,
  ): void;
  copyTextureToTexture(
    source: gpuGPUImageCopyTexture,
    destination: gpuGPUImageCopyTexture,
    copySize: Iterable<number> | gpuGPUExtent3DDict,
  ): void;
  clearBuffer(
    buffer: gpuGPUBuffer,
    offset?: number | bigint,
    size?: number | bigint,
  ): void;
}
declare interface gpuGPUCommandEncoderDescriptor {
  label?: string;
}
declare interface gpuGPUComputePassEncoder {
  setPipeline(pipeline: gpuGPUComputePipeline): void;
  setBindGroup(
    index: number,
    bindGroup: gpuGPUBindGroup | null,
    dynamicOffsets?: Iterable<number>,
  ): void;
  dispatchWorkgroups(
    workgroupCountX: number,
    workgroupCountY?: number,
    workgroupCountZ?: number,
  ): void;
  end(): void;
}
declare interface gpuGPUComputePassDescriptor {
  label?: string;
  timestampWrites?: gpuGPUComputePassTimestampWrites;
}
declare interface gpuGPUQuerySet {}
declare interface gpuGPUQuerySetDescriptor {
  label?: string;
}
declare interface gpuGPUComputePassTimestampWrites {
  querySet: gpuGPUQuerySet;
  beginningOfPassWriteIndex?: number;
  endOfPassWriteIndex?: number;
}
declare interface gpuGPUCommandBufferDescriptor {
  label?: string;
}
declare interface gpuGPUCommandBuffer {}
declare interface gpuGPUQueue {
  submit(commandBuffers: gpuGPUCommandBuffer[]): void;
  writeBuffer(
    buffer: gpuGPUBuffer,
    bufferOffset: number | bigint,
    data: ArrayBuffer | ArrayBufferView,
    dataOffset?: number | bigint,
    size?: number | bigint,
  ): void;
}
declare abstract class gpuGPUMapMode {
  static readonly READ: number;
  static readonly WRITE: number;
}
declare interface gpuGPURequestAdapterOptions {
  powerPreference: string;
  forceFallbackAdapter?: boolean;
}
declare interface gpuGPUAdapterInfo {
  get vendor(): string;
  get architecture(): string;
  get device(): string;
  get description(): string;
}
declare interface gpuGPUSupportedFeatures {
  has(name: string): boolean;
  keys(): string[];
}
declare interface gpuGPUSupportedLimits {
  get maxTextureDimension1D(): number;
  get maxTextureDimension2D(): number;
  get maxTextureDimension3D(): number;
  get maxTextureArrayLayers(): number;
  get maxBindGroups(): number;
  get maxBindingsPerBindGroup(): number;
  get maxDynamicUniformBuffersPerPipelineLayout(): number;
  get maxDynamicStorageBuffersPerPipelineLayout(): number;
  get maxSampledTexturesPerShaderStage(): number;
  get maxSamplersPerShaderStage(): number;
  get maxStorageBuffersPerShaderStage(): number;
  get maxStorageTexturesPerShaderStage(): number;
  get maxUniformBuffersPerShaderStage(): number;
  get maxUniformBufferBindingSize(): number | bigint;
  get maxStorageBufferBindingSize(): number | bigint;
  get minUniformBufferOffsetAlignment(): number;
  get minStorageBufferOffsetAlignment(): number;
  get maxVertexBuffers(): number;
  get maxBufferSize(): number | bigint;
  get maxVertexAttributes(): number;
  get maxVertexBufferArrayStride(): number;
  get maxInterStageShaderComponents(): number;
  get maxInterStageShaderVariables(): number;
  get maxColorAttachments(): number;
  get maxColorAttachmentBytesPerSample(): number;
  get maxComputeWorkgroupStorageSize(): number;
  get maxComputeInvocationsPerWorkgroup(): number;
  get maxComputeWorkgroupSizeX(): number;
  get maxComputeWorkgroupSizeY(): number;
  get maxComputeWorkgroupSizeZ(): number;
  get maxComputeWorkgroupsPerDimension(): number;
}
declare abstract class gpuGPUError {
  get message(): string;
}
declare abstract class gpuGPUOutOfMemoryError extends gpuGPUError {}
declare abstract class gpuGPUInternalError extends gpuGPUError {}
declare abstract class gpuGPUValidationError extends gpuGPUError {}
declare abstract class gpuGPUDeviceLostInfo {
  get message(): string;
  get reason(): string;
}
declare interface gpuGPUCompilationMessage {
  get message(): string;
  get type(): string;
  get lineNum(): number;
  get linePos(): number;
  get offset(): number;
  get length(): number;
}
declare interface gpuGPUCompilationInfo {
  get messages(): gpuGPUCompilationMessage[];
}
declare abstract class gpuGPUTextureUsage {
  static readonly COPY_SRC: number;
  static readonly COPY_DST: number;
  static readonly TEXTURE_BINDING: number;
  static readonly STORAGE_BINDING: number;
  static readonly RENDER_ATTACHMENT: number;
}
declare interface gpuGPUTextureDescriptor {
  label: string;
  size: number[] | gpuGPUExtent3DDict;
  mipLevelCount?: number;
  sampleCount?: number;
  dimension?: string;
  format: string;
  usage: number;
  viewFormats?: string[];
}
declare interface gpuGPUExtent3DDict {
  width: number;
  height?: number;
  depthOrArrayLayers?: number;
}
declare interface gpuGPUTexture {
  createView(descriptor?: gpuGPUTextureViewDescriptor): gpuGPUTextureView;
  destroy(): void;
  get width(): number;
  get height(): number;
  get depthOrArrayLayers(): number;
  get mipLevelCount(): number;
  get dimension(): string;
  get format(): string;
  get usage(): number;
}
declare interface gpuGPUTextureView {}
declare interface gpuGPUTextureViewDescriptor {
  label: string;
  format: string;
  dimension: string;
  aspect?: string;
  baseMipLevel?: number;
  mipLevelCount: number;
  baseArrayLayer?: number;
  arrayLayerCount: number;
}
declare abstract class gpuGPUColorWrite {
  static readonly RED: number;
  static readonly GREEN: number;
  static readonly BLUE: number;
  static readonly ALPHA: number;
  static readonly ALL: number;
}
declare interface gpuGPURenderPipeline {}
declare interface gpuGPURenderPipelineDescriptor {
  label?: string;
  layout: string | gpuGPUPipelineLayout;
  vertex: gpuGPUVertexState;
  primitive?: gpuGPUPrimitiveState;
  depthStencil?: gpuGPUDepthStencilState;
  multisample?: gpuGPUMultisampleState;
  fragment?: gpuGPUFragmentState;
}
declare interface gpuGPUVertexState {
  module: gpuGPUShaderModule;
  entryPoint: string;
  constants?: Record<string, number>;
  buffers?: gpuGPUVertexBufferLayout[];
}
declare interface gpuGPUVertexBufferLayout {
  arrayStride: number | bigint;
  stepMode?: string;
  attributes: gpuGPUVertexAttribute[];
}
declare interface gpuGPUVertexAttribute {
  format: string;
  offset: number | bigint;
  shaderLocation: number;
}
declare interface gpuGPUPrimitiveState {
  topology?: string;
  stripIndexFormat?: string;
  frontFace?: string;
  cullMode?: string;
  unclippedDepth?: boolean;
}
declare interface gpuGPUStencilFaceState {
  compare?: string;
  failOp?: string;
  depthFailOp?: string;
  passOp?: string;
}
declare interface gpuGPUDepthStencilState {
  format: string;
  depthWriteEnabled: boolean;
  depthCompare: string;
  stencilFront?: gpuGPUStencilFaceState;
  stencilBack?: gpuGPUStencilFaceState;
  stencilReadMask?: number;
  stencilWriteMask?: number;
  depthBias?: number;
  depthBiasSlopeScale?: number;
  depthBiasClamp?: number;
}
declare interface gpuGPUMultisampleState {
  count?: number;
  mask?: number;
  alphaToCoverageEnabled?: boolean;
}
declare interface gpuGPUFragmentState {
  module: gpuGPUShaderModule;
  entryPoint: string;
  constants?: Record<string, number>;
  targets: gpuGPUColorTargetState[];
}
declare interface gpuGPUColorTargetState {
  format: string;
  blend: gpuGPUBlendState;
  writeMask?: number;
}
declare interface gpuGPUBlendState {
  color: gpuGPUBlendComponent;
  alpha: gpuGPUBlendComponent;
}
declare interface gpuGPUBlendComponent {
  operation?: string;
  srcFactor?: string;
  dstFactor?: string;
}
declare interface gpuGPURenderPassEncoder {
  setPipeline(pipeline: gpuGPURenderPipeline): void;
  draw(
    vertexCount: number,
    instanceCount?: number,
    firstVertex?: number,
    firstInstance?: number,
  ): void;
  end(): void;
}
declare interface gpuGPURenderPassDescriptor {
  label?: string;
  colorAttachments: gpuGPURenderPassColorAttachment[];
  depthStencilAttachment?: gpuGPURenderPassDepthStencilAttachment;
  occlusionQuerySet?: gpuGPUQuerySet;
  timestampWrites?: gpuGPURenderPassTimestampWrites;
  maxDrawCount?: number | bigint;
}
declare interface gpuGPURenderPassColorAttachment {
  view: gpuGPUTextureView;
  depthSlice?: number;
  resolveTarget?: gpuGPUTextureView;
  clearValue?: number[] | gpuGPUColorDict;
  loadOp: string;
  storeOp: string;
}
declare interface gpuGPUColorDict {
  r: number;
  g: number;
  b: number;
  a: number;
}
declare interface gpuGPURenderPassDepthStencilAttachment {
  view: gpuGPUTextureView;
  depthClearValue?: number;
  depthLoadOp?: string;
  depthStoreOp?: string;
  depthReadOnly?: boolean;
  stencilClearValue?: number;
  stencilLoadOp?: string;
  stencilStoreOp?: string;
  stencilReadOnly?: boolean;
}
declare interface gpuGPURenderPassTimestampWrites {
  querySet: gpuGPUQuerySet;
  beginningOfPassWriteIndex?: number;
  endOfPassWriteIndex?: number;
}
declare interface gpuGPUImageCopyTexture {
  texture: gpuGPUTexture;
  mipLevel?: number;
  origin?: number[] | gpuGPUOrigin3DDict;
  aspect?: string;
}
declare interface gpuGPUImageCopyBuffer {
  buffer: gpuGPUBuffer;
  offset?: number | bigint;
  bytesPerRow?: number;
  rowsPerImage?: number;
}
declare interface gpuGPUOrigin3DDict {
  x?: number;
  y?: number;
  z?: number;
}
declare interface BasicImageTransformations {
  /**
   * Maximum width in image pixels. The value must be an integer.
   */
  width?: number;
  /**
   * Maximum height in image pixels. The value must be an integer.
   */
  height?: number;
  /**
   * Resizing mode as a string. It affects interpretation of width and height
   * options:
   *  - scale-down: Similar to contain, but the image is never enlarged. If
   *    the image is larger than given width or height, it will be resized.
   *    Otherwise its original size will be kept.
   *  - contain: Resizes to maximum size that fits within the given width and
   *    height. If only a single dimension is given (e.g. only width), the
   *    image will be shrunk or enlarged to exactly match that dimension.
   *    Aspect ratio is always preserved.
   *  - cover: Resizes (shrinks or enlarges) to fill the entire area of width
   *    and height. If the image has an aspect ratio different from the ratio
   *    of width and height, it will be cropped to fit.
   *  - crop: The image will be shrunk and cropped to fit within the area
   *    specified by width and height. The image will not be enlarged. For images
   *    smaller than the given dimensions it's the same as scale-down. For
   *    images larger than the given dimensions, it's the same as cover.
   *    See also trim.
   *  - pad: Resizes to the maximum size that fits within the given width and
   *    height, and then fills the remaining area with a background color
   *    (white by default). Use of this mode is not recommended, as the same
   *    effect can be more efficiently achieved with the contain mode and the
   *    CSS object-fit: contain property.
   */
  fit?: "scale-down" | "contain" | "cover" | "crop" | "pad";
  /**
   * When cropping with fit: "cover", this defines the side or point that should
   * be left uncropped. The value is either a string
   * "left", "right", "top", "bottom", "auto", or "center" (the default),
   * or an object {x, y} containing focal point coordinates in the original
   * image expressed as fractions ranging from 0.0 (top or left) to 1.0
   * (bottom or right), 0.5 being the center. {fit: "cover", gravity: "top"} will
   * crop bottom or left and right sides as necessary, but won’t crop anything
   * from the top. {fit: "cover", gravity: {x:0.5, y:0.2}} will crop each side to
   * preserve as much as possible around a point at 20% of the height of the
   * source image.
   */
  gravity?:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "center"
    | "auto"
    | BasicImageTransformationsGravityCoordinates;
  /**
   * Background color to add underneath the image. Applies only to images with
   * transparency (such as PNG). Accepts any CSS color (#RRGGBB, rgba(…),
   * hsl(…), etc.)
   */
  background?: string;
  /**
   * Number of degrees (90, 180, 270) to rotate the image by. width and height
   * options refer to axes after rotation.
   */
  rotate?: 0 | 90 | 180 | 270 | 360;
}
declare interface BasicImageTransformationsGravityCoordinates {
  x: number;
  y: number;
}
/**
 * In addition to the properties you can set in the RequestInit dict
 * that you pass as an argument to the Request constructor, you can
 * set certain properties of a `cf` object to control how Cloudflare
 * features are applied to that new Request.
 *
 * Note: Currently, these properties cannot be tested in the
 * playground.
 */
declare interface RequestInitCfProperties extends Record<string, unknown> {
  cacheEverything?: boolean;
  /**
   * A request's cache key is what determines if two requests are
   * "the same" for caching purposes. If a request has the same cache key
   * as some previous request, then we can serve the same cached response for
   * both. (e.g. 'some-key')
   *
   * Only available for Enterprise customers.
   */
  cacheKey?: string;
  /**
   * This allows you to append additional Cache-Tag response headers
   * to the origin response without modifications to the origin server.
   * This will allow for greater control over the Purge by Cache Tag feature
   * utilizing changes only in the Workers process.
   *
   * Only available for Enterprise customers.
   */
  cacheTags?: string[];
  /**
   * Force response to be cached for a given number of seconds. (e.g. 300)
   */
  cacheTtl?: number;
  /**
   * Force response to be cached for a given number of seconds based on the Origin status code.
   * (e.g. { '200-299': 86400, '404': 1, '500-599': 0 })
   */
  cacheTtlByStatus?: Record<string, number>;
  scrapeShield?: boolean;
  apps?: boolean;
  image?: RequestInitCfPropertiesImage;
  minify?: RequestInitCfPropertiesImageMinify;
  mirage?: boolean;
  polish?: "lossy" | "lossless" | "off";
  /**
   * Redirects the request to an alternate origin server. You can use this,
   * for example, to implement load balancing across several origins.
   * (e.g.us-east.example.com)
   *
   * Note - For security reasons, the hostname set in resolveOverride must
   * be proxied on the same Cloudflare zone of the incoming request.
   * Otherwise, the setting is ignored. CNAME hosts are allowed, so to
   * resolve to a host under a different domain or a DNS only domain first
   * declare a CNAME record within your own zone’s DNS mapping to the
   * external hostname, set proxy on Cloudflare, then set resolveOverride
   * to point to that CNAME record.
   */
  resolveOverride?: string;
}
declare interface RequestInitCfPropertiesImageDraw
  extends BasicImageTransformations {
  /**
   * Absolute URL of the image file to use for the drawing. It can be any of
   * the supported file formats. For drawing of watermarks or non-rectangular
   * overlays we recommend using PNG or WebP images.
   */
  url: string;
  /**
   * Floating-point number between 0 (transparent) and 1 (opaque).
   * For example, opacity: 0.5 makes overlay semitransparent.
   */
  opacity?: number;
  /**
   * - If set to true, the overlay image will be tiled to cover the entire
   *   area. This is useful for stock-photo-like watermarks.
   * - If set to "x", the overlay image will be tiled horizontally only
   *   (form a line).
   * - If set to "y", the overlay image will be tiled vertically only
   *   (form a line).
   */
  repeat?: true | "x" | "y";
  /**
   * Position of the overlay image relative to a given edge. Each property is
   * an offset in pixels. 0 aligns exactly to the edge. For example, left: 10
   * positions left side of the overlay 10 pixels from the left edge of the
   * image it's drawn over. bottom: 0 aligns bottom of the overlay with bottom
   * of the background image.
   *
   * Setting both left & right, or both top & bottom is an error.
   *
   * If no position is specified, the image will be centered.
   */
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}
declare interface RequestInitCfPropertiesImage
  extends BasicImageTransformations {
  /**
   * Device Pixel Ratio. Default 1. Multiplier for width/height that makes it
   * easier to specify higher-DPI sizes in <img srcset>.
   */
  dpr?: number;
  /**
   * An object with four properties {left, top, right, bottom} that specify
   * a number of pixels to cut off on each side. Allows removal of borders
   * or cutting out a specific fragment of an image. Trimming is performed
   * before resizing or rotation. Takes dpr into account.
   */
  trim?: {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
  };
  /**
   * Quality setting from 1-100 (useful values are in 60-90 range). Lower values
   * make images look worse, but load faster. The default is 85. It applies only
   * to JPEG and WebP images. It doesn’t have any effect on PNG.
   */
  quality?: number;
  /**
   * Output format to generate. It can be:
   *  - avif: generate images in AVIF format.
   *  - webp: generate images in Google WebP format. Set quality to 100 to get
   *    the WebP-lossless format.
   *  - json: instead of generating an image, outputs information about the
   *    image, in JSON format. The JSON object will contain image size
   *    (before and after resizing), source image’s MIME type, file size, etc.
   * - jpeg: generate images in JPEG format.
   * - png: generate images in PNG format.
   */
  format?: "avif" | "webp" | "json" | "jpeg" | "png";
  /**
   * Whether to preserve animation frames from input files. Default is true.
   * Setting it to false reduces animations to still images. This setting is
   * recommended when enlarging images or processing arbitrary user content,
   * because large GIF animations can weigh tens or even hundreds of megabytes.
   * It is also useful to set anim:false when using format:"json" to get the
   * response quicker without the number of frames.
   */
  anim?: boolean;
  /**
   * What EXIF data should be preserved in the output image. Note that EXIF
   * rotation and embedded color profiles are always applied ("baked in" into
   * the image), and aren't affected by this option. Note that if the Polish
   * feature is enabled, all metadata may have been removed already and this
   * option may have no effect.
   *  - keep: Preserve most of EXIF metadata, including GPS location if there's
   *    any.
   *  - copyright: Only keep the copyright tag, and discard everything else.
   *    This is the default behavior for JPEG files.
   *  - none: Discard all invisible EXIF metadata. Currently WebP and PNG
   *    output formats always discard metadata.
   */
  metadata?: "keep" | "copyright" | "none";
  /**
   * Strength of sharpening filter to apply to the image. Floating-point
   * number between 0 (no sharpening, default) and 10 (maximum). 1.0 is a
   * recommended value for downscaled images.
   */
  sharpen?: number;
  /**
   * Radius of a blur filter (approximate gaussian). Maximum supported radius
   * is 250.
   */
  blur?: number;
  /**
   * Overlays are drawn in the order they appear in the array (last array
   * entry is the topmost layer).
   */
  draw?: RequestInitCfPropertiesImageDraw[];
  /**
   * Fetching image from authenticated origin. Setting this property will
   * pass authentication headers (Authorization, Cookie, etc.) through to
   * the origin.
   */
  "origin-auth"?: "share-publicly";
  /**
   * Adds a border around the image. The border is added after resizing. Border
   * width takes dpr into account, and can be specified either using a single
   * width property, or individually for each side.
   */
  border?:
    | {
        color: string;
        width: number;
      }
    | {
        color: string;
        top: number;
        right: number;
        bottom: number;
        left: number;
      };
  /**
   * Increase brightness by a factor. A value of 1.0 equals no change, a value
   * of 0.5 equals half brightness, and a value of 2.0 equals twice as bright.
   * 0 is ignored.
   */
  brightness?: number;
  /**
   * Increase contrast by a factor. A value of 1.0 equals no change, a value of
   * 0.5 equals low contrast, and a value of 2.0 equals high contrast. 0 is
   * ignored.
   */
  contrast?: number;
  /**
   * Increase exposure by a factor. A value of 1.0 equals no change, a value of
   * 0.5 darkens the image, and a value of 2.0 lightens the image. 0 is ignored.
   */
  gamma?: number;
  /**
   * Slightly reduces latency on a cache miss by selecting a
   * quickest-to-compress file format, at a cost of increased file size and
   * lower image quality. It will usually override the format option and choose
   * JPEG over WebP or AVIF. We do not recommend using this option, except in
   * unusual circumstances like resizing uncacheable dynamically-generated
   * images.
   */
  compression?: "fast";
}
declare interface RequestInitCfPropertiesImageMinify {
  javascript?: boolean;
  css?: boolean;
  html?: boolean;
}
/**
 * Request metadata provided by Cloudflare's edge.
 */
declare type IncomingRequestCfProperties<HostMetadata = unknown> =
  IncomingRequestCfPropertiesBase &
    IncomingRequestCfPropertiesBotManagementEnterprise &
    IncomingRequestCfPropertiesCloudflareForSaaSEnterprise<HostMetadata> &
    IncomingRequestCfPropertiesGeographicInformation &
    IncomingRequestCfPropertiesCloudflareAccessOrApiShield;
declare interface IncomingRequestCfPropertiesBase
  extends Record<string, unknown> {
  /**
   * [ASN](https://www.iana.org/assignments/as-numbers/as-numbers.xhtml) of the incoming request.
   *
   * @example 395747
   */
  asn: number;
  /**
   * The organization which owns the ASN of the incoming request.
   *
   * @example "Google Cloud"
   */
  asOrganization: string;
  /**
   * The original value of the `Accept-Encoding` header if Cloudflare modified it.
   *
   * @example "gzip, deflate, br"
   */
  clientAcceptEncoding?: string;
  /**
   * The number of milliseconds it took for the request to reach your worker.
   *
   * @example 22
   */
  clientTcpRtt?: number;
  /**
   * The three-letter [IATA](https://en.wikipedia.org/wiki/IATA_airport_code)
   * airport code of the data center that the request hit.
   *
   * @example "DFW"
   */
  colo: string;
  /**
   * Represents the upstream's response to a
   * [TCP `keepalive` message](https://tldp.org/HOWTO/TCP-Keepalive-HOWTO/overview.html)
   * from cloudflare.
   *
   * For workers with no upstream, this will always be `1`.
   *
   * @example 3
   */
  edgeRequestKeepAliveStatus: IncomingRequestCfPropertiesEdgeRequestKeepAliveStatus;
  /**
   * The HTTP Protocol the request used.
   *
   * @example "HTTP/2"
   */
  httpProtocol: string;
  /**
   * The browser-requested prioritization information in the request object.
   *
   * If no information was set, defaults to the empty string `""`
   *
   * @example "weight=192;exclusive=0;group=3;group-weight=127"
   * @default ""
   */
  requestPriority: string;
  /**
   * The TLS version of the connection to Cloudflare.
   * In requests served over plaintext (without TLS), this property is the empty string `""`.
   *
   * @example "TLSv1.3"
   */
  tlsVersion: string;
  /**
   * The cipher for the connection to Cloudflare.
   * In requests served over plaintext (without TLS), this property is the empty string `""`.
   *
   * @example "AEAD-AES128-GCM-SHA256"
   */
  tlsCipher: string;
  /**
   * Metadata containing the [`HELLO`](https://www.rfc-editor.org/rfc/rfc5246#section-7.4.1.2) and [`FINISHED`](https://www.rfc-editor.org/rfc/rfc5246#section-7.4.9) messages from this request's TLS handshake.
   *
   * If the incoming request was served over plaintext (without TLS) this field is undefined.
   */
  tlsExportedAuthenticator?: IncomingRequestCfPropertiesExportedAuthenticatorMetadata;
}
declare interface IncomingRequestCfPropertiesBotManagementBase {
  /**
   * Cloudflare’s [level of certainty](https://developers.cloudflare.com/bots/concepts/bot-score/) that a request comes from a bot,
   * represented as an integer percentage between `1` (almost certainly a bot) and `99` (almost certainly human).
   *
   * @example 54
   */
  score: number;
  /**
   * A boolean value that is true if the request comes from a good bot, like Google or Bing.
   * Most customers choose to allow this traffic. For more details, see [Traffic from known bots](https://developers.cloudflare.com/firewall/known-issues-and-faq/#how-does-firewall-rules-handle-traffic-from-known-bots).
   */
  verifiedBot: boolean;
  /**
   * A boolean value that is true if the request originates from a
   * Cloudflare-verified proxy service.
   */
  corporateProxy: boolean;
  /**
   * A boolean value that's true if the request matches [file extensions](https://developers.cloudflare.com/bots/reference/static-resources/) for many types of static resources.
   */
  staticResource: boolean;
  /**
   * List of IDs that correlate to the Bot Management heuristic detections made on a request (you can have multiple heuristic detections on the same request).
   */
  detectionIds: number[];
}
declare interface IncomingRequestCfPropertiesBotManagement {
  /**
   * Results of Cloudflare's Bot Management analysis
   */
  botManagement: IncomingRequestCfPropertiesBotManagementBase;
  /**
   * Duplicate of `botManagement.score`.
   *
   * @deprecated
   */
  clientTrustScore: number;
}
declare interface IncomingRequestCfPropertiesBotManagementEnterprise
  extends IncomingRequestCfPropertiesBotManagement {
  /**
   * Results of Cloudflare's Bot Management analysis
   */
  botManagement: IncomingRequestCfPropertiesBotManagementBase & {
    /**
     * A [JA3 Fingerprint](https://developers.cloudflare.com/bots/concepts/ja3-fingerprint/) to help profile specific SSL/TLS clients
     * across different destination IPs, Ports, and X509 certificates.
     */
    ja3Hash: string;
  };
}
declare interface IncomingRequestCfPropertiesCloudflareForSaaSEnterprise<
  HostMetadata,
> {
  /**
   * Custom metadata set per-host in [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/).
   *
   * This field is only present if you have Cloudflare for SaaS enabled on your account
   * and you have followed the [required steps to enable it]((https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/custom-metadata/)).
   */
  hostMetadata: HostMetadata;
}
declare interface IncomingRequestCfPropertiesCloudflareAccessOrApiShield {
  /**
   * Information about the client certificate presented to Cloudflare.
   *
   * This is populated when the incoming request is served over TLS using
   * either Cloudflare Access or API Shield (mTLS)
   * and the presented SSL certificate has a valid
   * [Certificate Serial Number](https://ldapwiki.com/wiki/Certificate%20Serial%20Number)
   * (i.e., not `null` or `""`).
   *
   * Otherwise, a set of placeholder values are used.
   *
   * The property `certPresented` will be set to `"1"` when
   * the object is populated (i.e. the above conditions were met).
   */
  tlsClientAuth:
    | IncomingRequestCfPropertiesTLSClientAuth
    | IncomingRequestCfPropertiesTLSClientAuthPlaceholder;
}
/**
 * Metadata about the request's TLS handshake
 */
declare interface IncomingRequestCfPropertiesExportedAuthenticatorMetadata {
  /**
   * The client's [`HELLO` message](https://www.rfc-editor.org/rfc/rfc5246#section-7.4.1.2), encoded in hexadecimal
   *
   * @example "44372ba35fa1270921d318f34c12f155dc87b682cf36a790cfaa3ba8737a1b5d"
   */
  clientHandshake: string;
  /**
   * The server's [`HELLO` message](https://www.rfc-editor.org/rfc/rfc5246#section-7.4.1.2), encoded in hexadecimal
   *
   * @example "44372ba35fa1270921d318f34c12f155dc87b682cf36a790cfaa3ba8737a1b5d"
   */
  serverHandshake: string;
  /**
   * The client's [`FINISHED` message](https://www.rfc-editor.org/rfc/rfc5246#section-7.4.9), encoded in hexadecimal
   *
   * @example "084ee802fe1348f688220e2a6040a05b2199a761f33cf753abb1b006792d3f8b"
   */
  clientFinished: string;
  /**
   * The server's [`FINISHED` message](https://www.rfc-editor.org/rfc/rfc5246#section-7.4.9), encoded in hexadecimal
   *
   * @example "084ee802fe1348f688220e2a6040a05b2199a761f33cf753abb1b006792d3f8b"
   */
  serverFinished: string;
}
/**
 * Geographic data about the request's origin.
 */
declare interface IncomingRequestCfPropertiesGeographicInformation {
  /**
   * The [ISO 3166-1 Alpha 2](https://www.iso.org/iso-3166-country-codes.html) country code the request originated from.
   *
   * If your worker is [configured to accept TOR connections](https://support.cloudflare.com/hc/en-us/articles/203306930-Understanding-Cloudflare-Tor-support-and-Onion-Routing), this may also be `"T1"`, indicating a request that originated over TOR.
   *
   * If Cloudflare is unable to determine where the request originated this property is omitted.
   *
   * The country code `"T1"` is used for requests originating on TOR.
   *
   * @example "GB"
   */
  country?: Iso3166Alpha2Code | "T1";
  /**
   * If present, this property indicates that the request originated in the EU
   *
   * @example "1"
   */
  isEUCountry?: "1";
  /**
   * A two-letter code indicating the continent the request originated from.
   *
   * @example "AN"
   */
  continent?: ContinentCode;
  /**
   * The city the request originated from
   *
   * @example "Austin"
   */
  city?: string;
  /**
   * Postal code of the incoming request
   *
   * @example "78701"
   */
  postalCode?: string;
  /**
   * Latitude of the incoming request
   *
   * @example "30.27130"
   */
  latitude?: string;
  /**
   * Longitude of the incoming request
   *
   * @example "-97.74260"
   */
  longitude?: string;
  /**
   * Timezone of the incoming request
   *
   * @example "America/Chicago"
   */
  timezone?: string;
  /**
   * If known, the ISO 3166-2 name for the first level region associated with
   * the IP address of the incoming request
   *
   * @example "Texas"
   */
  region?: string;
  /**
   * If known, the ISO 3166-2 code for the first-level region associated with
   * the IP address of the incoming request
   *
   * @example "TX"
   */
  regionCode?: string;
  /**
   * Metro code (DMA) of the incoming request
   *
   * @example "635"
   */
  metroCode?: string;
}
/** Data about the incoming request's TLS certificate */
declare interface IncomingRequestCfPropertiesTLSClientAuth {
  /** Always `"1"`, indicating that the certificate was presented */
  certPresented: "1";
  /**
   * Result of certificate verification.
   *
   * @example "FAILED:self signed certificate"
   */
  certVerified: Exclude<CertVerificationStatus, "NONE">;
  /** The presented certificate's revokation status.
   *
   * - A value of `"1"` indicates the certificate has been revoked
   * - A value of `"0"` indicates the certificate has not been revoked
   */
  certRevoked: "1" | "0";
  /**
   * The certificate issuer's [distinguished name](https://knowledge.digicert.com/generalinformation/INFO1745.html)
   *
   * @example "CN=cloudflareaccess.com, C=US, ST=Texas, L=Austin, O=Cloudflare"
   */
  certIssuerDN: string;
  /**
   * The certificate subject's [distinguished name](https://knowledge.digicert.com/generalinformation/INFO1745.html)
   *
   * @example "CN=*.cloudflareaccess.com, C=US, ST=Texas, L=Austin, O=Cloudflare"
   */
  certSubjectDN: string;
  /**
   * The certificate issuer's [distinguished name](https://knowledge.digicert.com/generalinformation/INFO1745.html) ([RFC 2253](https://www.rfc-editor.org/rfc/rfc2253.html) formatted)
   *
   * @example "CN=cloudflareaccess.com, C=US, ST=Texas, L=Austin, O=Cloudflare"
   */
  certIssuerDNRFC2253: string;
  /**
   * The certificate subject's [distinguished name](https://knowledge.digicert.com/generalinformation/INFO1745.html) ([RFC 2253](https://www.rfc-editor.org/rfc/rfc2253.html) formatted)
   *
   * @example "CN=*.cloudflareaccess.com, C=US, ST=Texas, L=Austin, O=Cloudflare"
   */
  certSubjectDNRFC2253: string;
  /** The certificate issuer's distinguished name (legacy policies) */
  certIssuerDNLegacy: string;
  /** The certificate subject's distinguished name (legacy policies) */
  certSubjectDNLegacy: string;
  /**
   * The certificate's serial number
   *
   * @example "00936EACBE07F201DF"
   */
  certSerial: string;
  /**
   * The certificate issuer's serial number
   *
   * @example "2489002934BDFEA34"
   */
  certIssuerSerial: string;
  /**
   * The certificate's Subject Key Identifier
   *
   * @example "BB:AF:7E:02:3D:FA:A6:F1:3C:84:8E:AD:EE:38:98:EC:D9:32:32:D4"
   */
  certSKI: string;
  /**
   * The certificate issuer's Subject Key Identifier
   *
   * @example "BB:AF:7E:02:3D:FA:A6:F1:3C:84:8E:AD:EE:38:98:EC:D9:32:32:D4"
   */
  certIssuerSKI: string;
  /**
   * The certificate's SHA-1 fingerprint
   *
   * @example "6b9109f323999e52259cda7373ff0b4d26bd232e"
   */
  certFingerprintSHA1: string;
  /**
   * The certificate's SHA-256 fingerprint
   *
   * @example "acf77cf37b4156a2708e34c4eb755f9b5dbbe5ebb55adfec8f11493438d19e6ad3f157f81fa3b98278453d5652b0c1fd1d71e5695ae4d709803a4d3f39de9dea"
   */
  certFingerprintSHA256: string;
  /**
   * The effective starting date of the certificate
   *
   * @example "Dec 22 19:39:00 2018 GMT"
   */
  certNotBefore: string;
  /**
   * The effective expiration date of the certificate
   *
   * @example "Dec 22 19:39:00 2018 GMT"
   */
  certNotAfter: string;
}
/** Placeholder values for TLS Client Authorization */
declare interface IncomingRequestCfPropertiesTLSClientAuthPlaceholder {
  certPresented: "0";
  certVerified: "NONE";
  certRevoked: "0";
  certIssuerDN: "";
  certSubjectDN: "";
  certIssuerDNRFC2253: "";
  certSubjectDNRFC2253: "";
  certIssuerDNLegacy: "";
  certSubjectDNLegacy: "";
  certSerial: "";
  certIssuerSerial: "";
  certSKI: "";
  certIssuerSKI: "";
  certFingerprintSHA1: "";
  certFingerprintSHA256: "";
  certNotBefore: "";
  certNotAfter: "";
}
/** Possible outcomes of TLS verification */
declare type CertVerificationStatus =
  /** Authentication succeeded */
  | "SUCCESS"
  /** No certificate was presented */
  | "NONE"
  /** Failed because the certificate was self-signed */
  | "FAILED:self signed certificate"
  /** Failed because the certificate failed a trust chain check */
  | "FAILED:unable to verify the first certificate"
  /** Failed because the certificate not yet valid */
  | "FAILED:certificate is not yet valid"
  /** Failed because the certificate is expired */
  | "FAILED:certificate has expired"
  /** Failed for another unspecified reason */
  | "FAILED";
/**
 * An upstream endpoint's response to a TCP `keepalive` message from Cloudflare.
 */
declare type IncomingRequestCfPropertiesEdgeRequestKeepAliveStatus =
  | 0 /** Unknown */
  | 1 /** no keepalives (not found) */
  | 2 /** no connection re-use, opening keepalive connection failed */
  | 3 /** no connection re-use, keepalive accepted and saved */
  | 4 /** connection re-use, refused by the origin server (`TCP FIN`) */
  | 5; /** connection re-use, accepted by the origin server */
/** ISO 3166-1 Alpha-2 codes */
declare type Iso3166Alpha2Code =
  | "AD"
  | "AE"
  | "AF"
  | "AG"
  | "AI"
  | "AL"
  | "AM"
  | "AO"
  | "AQ"
  | "AR"
  | "AS"
  | "AT"
  | "AU"
  | "AW"
  | "AX"
  | "AZ"
  | "BA"
  | "BB"
  | "BD"
  | "BE"
  | "BF"
  | "BG"
  | "BH"
  | "BI"
  | "BJ"
  | "BL"
  | "BM"
  | "BN"
  | "BO"
  | "BQ"
  | "BR"
  | "BS"
  | "BT"
  | "BV"
  | "BW"
  | "BY"
  | "BZ"
  | "CA"
  | "CC"
  | "CD"
  | "CF"
  | "CG"
  | "CH"
  | "CI"
  | "CK"
  | "CL"
  | "CM"
  | "CN"
  | "CO"
  | "CR"
  | "CU"
  | "CV"
  | "CW"
  | "CX"
  | "CY"
  | "CZ"
  | "DE"
  | "DJ"
  | "DK"
  | "DM"
  | "DO"
  | "DZ"
  | "EC"
  | "EE"
  | "EG"
  | "EH"
  | "ER"
  | "ES"
  | "ET"
  | "FI"
  | "FJ"
  | "FK"
  | "FM"
  | "FO"
  | "FR"
  | "GA"
  | "GB"
  | "GD"
  | "GE"
  | "GF"
  | "GG"
  | "GH"
  | "GI"
  | "GL"
  | "GM"
  | "GN"
  | "GP"
  | "GQ"
  | "GR"
  | "GS"
  | "GT"
  | "GU"
  | "GW"
  | "GY"
  | "HK"
  | "HM"
  | "HN"
  | "HR"
  | "HT"
  | "HU"
  | "ID"
  | "IE"
  | "IL"
  | "IM"
  | "IN"
  | "IO"
  | "IQ"
  | "IR"
  | "IS"
  | "IT"
  | "JE"
  | "JM"
  | "JO"
  | "JP"
  | "KE"
  | "KG"
  | "KH"
  | "KI"
  | "KM"
  | "KN"
  | "KP"
  | "KR"
  | "KW"
  | "KY"
  | "KZ"
  | "LA"
  | "LB"
  | "LC"
  | "LI"
  | "LK"
  | "LR"
  | "LS"
  | "LT"
  | "LU"
  | "LV"
  | "LY"
  | "MA"
  | "MC"
  | "MD"
  | "ME"
  | "MF"
  | "MG"
  | "MH"
  | "MK"
  | "ML"
  | "MM"
  | "MN"
  | "MO"
  | "MP"
  | "MQ"
  | "MR"
  | "MS"
  | "MT"
  | "MU"
  | "MV"
  | "MW"
  | "MX"
  | "MY"
  | "MZ"
  | "NA"
  | "NC"
  | "NE"
  | "NF"
  | "NG"
  | "NI"
  | "NL"
  | "NO"
  | "NP"
  | "NR"
  | "NU"
  | "NZ"
  | "OM"
  | "PA"
  | "PE"
  | "PF"
  | "PG"
  | "PH"
  | "PK"
  | "PL"
  | "PM"
  | "PN"
  | "PR"
  | "PS"
  | "PT"
  | "PW"
  | "PY"
  | "QA"
  | "RE"
  | "RO"
  | "RS"
  | "RU"
  | "RW"
  | "SA"
  | "SB"
  | "SC"
  | "SD"
  | "SE"
  | "SG"
  | "SH"
  | "SI"
  | "SJ"
  | "SK"
  | "SL"
  | "SM"
  | "SN"
  | "SO"
  | "SR"
  | "SS"
  | "ST"
  | "SV"
  | "SX"
  | "SY"
  | "SZ"
  | "TC"
  | "TD"
  | "TF"
  | "TG"
  | "TH"
  | "TJ"
  | "TK"
  | "TL"
  | "TM"
  | "TN"
  | "TO"
  | "TR"
  | "TT"
  | "TV"
  | "TW"
  | "TZ"
  | "UA"
  | "UG"
  | "UM"
  | "US"
  | "UY"
  | "UZ"
  | "VA"
  | "VC"
  | "VE"
  | "VG"
  | "VI"
  | "VN"
  | "VU"
  | "WF"
  | "WS"
  | "YE"
  | "YT"
  | "ZA"
  | "ZM"
  | "ZW";
/** The 2-letter continent codes Cloudflare uses */
declare type ContinentCode = "AF" | "AN" | "AS" | "EU" | "NA" | "OC" | "SA";
declare type CfProperties<HostMetadata = unknown> =
  | IncomingRequestCfProperties<HostMetadata>
  | RequestInitCfProperties;
declare interface D1Meta {
  duration: number;
  size_after: number;
  rows_read: number;
  rows_written: number;
  last_row_id: number;
  changed_db: boolean;
  changes: number;
}
declare interface D1Response {
  success: true;
  meta: D1Meta & Record<string, unknown>;
  error?: never;
}
declare type D1Result<T = unknown> = D1Response & {
  results: T[];
};
declare interface D1ExecResult {
  count: number;
  duration: number;
}
declare abstract class D1Database {
  prepare(query: string): D1PreparedStatement;
  dump(): Promise<ArrayBuffer>;
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
  exec(query: string): Promise<D1ExecResult>;
}
declare abstract class D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(colName: string): Promise<T | null>;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  run(): Promise<D1Response>;
  all<T = Record<string, unknown>>(): Promise<D1Result<T>>;
  raw<T = unknown[]>(options: {
    columnNames: true;
  }): Promise<[string[], ...T[]]>;
  raw<T = unknown[]>(options?: { columnNames?: false }): Promise<T[]>;
}
// `Disposable` was added to TypeScript's standard lib types in version 5.2.
// To support older TypeScript versions, define an empty `Disposable` interface.
// Users won't be able to use `using`/`Symbol.dispose` without upgrading to 5.2,
// but this will ensure type checking on older versions still passes.
// TypeScript's interface merging will ensure our empty interface is effectively
// ignored when `Disposable` is included in the standard lib.
declare interface Disposable {}
/**
 * An email message that can be sent from a Worker.
 */
declare interface EmailMessage {
  /**
   * Envelope From attribute of the email message.
   */
  readonly from: string;
  /**
   * Envelope To attribute of the email message.
   */
  readonly to: string;
}
/**
 * An email message that is sent to a consumer Worker and can be rejected/forwarded.
 */
declare interface ForwardableEmailMessage extends EmailMessage {
  /**
   * Stream of the email message content.
   */
  readonly raw: ReadableStream<Uint8Array>;
  /**
   * An [Headers object](https://developer.mozilla.org/en-US/docs/Web/API/Headers).
   */
  readonly headers: Headers;
  /**
   * Size of the email message content.
   */
  readonly rawSize: number;
  /**
   * Reject this email message by returning a permanent SMTP error back to the connecting client including the given reason.
   * @param reason The reject reason.
   * @returns void
   */
  setReject(reason: string): void;
  /**
   * Forward this email message to a verified destination address of the account.
   * @param rcptTo Verified destination address.
   * @param headers A [Headers object](https://developer.mozilla.org/en-US/docs/Web/API/Headers).
   * @returns A promise that resolves when the email message is forwarded.
   */
  forward(rcptTo: string, headers?: Headers): Promise<void>;
}
/**
 * A binding that allows a Worker to send email messages.
 */
declare interface SendEmail {
  send(message: EmailMessage): Promise<void>;
}
declare abstract class EmailEvent extends ExtendableEvent {
  readonly message: ForwardableEmailMessage;
}
declare type EmailExportedHandler<Env = unknown> = (
  message: ForwardableEmailMessage,
  env: Env,
  ctx: ExecutionContext,
) => void | Promise<void>;
declare module "cloudflare:email" {
  let _EmailMessage: {
    prototype: EmailMessage;
    new (from: string, to: string, raw: ReadableStream | string): EmailMessage;
  };
  export { _EmailMessage as EmailMessage };
}
declare interface Hyperdrive {
  /**
   * Connect directly to Hyperdrive as if it's your database, returning a TCP socket.
   *
   * Calling this method returns an idential socket to if you call
   * `connect("host:port")` using the `host` and `port` fields from this object.
   * Pick whichever approach works better with your preferred DB client library.
   *
   * Note that this socket is not yet authenticated -- it's expected that your
   * code (or preferably, the client library of your choice) will authenticate
   * using the information in this class's readonly fields.
   */
  connect(): Socket;
  /**
   * A valid DB connection string that can be passed straight into the typical
   * client library/driver/ORM. This will typically be the easiest way to use
   * Hyperdrive.
   */
  readonly connectionString: string;
  /*
   * A randomly generated hostname that is only valid within the context of the
   * currently running Worker which, when passed into `connect()` function from
   * the "cloudflare:sockets" module, will connect to the Hyperdrive instance
   * for your database.
   */
  readonly host: string;
  /*
   * The port that must be paired the the host field when connecting.
   */
  readonly port: number;
  /*
   * The username to use when authenticating to your database via Hyperdrive.
   * Unlike the host and password, this will be the same every time
   */
  readonly user: string;
  /*
   * The randomly generated password to use when authenticating to your
   * database via Hyperdrive. Like the host field, this password is only valid
   * within the context of the currently running Worker instance from which
   * it's read.
   */
  readonly password: string;
  /*
   * The name of the database to connect to.
   */
  readonly database: string;
}
declare type Params<P extends string = any> = Record<P, string | string[]>;
declare type EventContext<Env, P extends string, Data> = {
  request: Request<unknown, IncomingRequestCfProperties<unknown>>;
  functionPath: string;
  waitUntil: (promise: Promise<any>) => void;
  passThroughOnException: () => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  env: Env & {
    ASSETS: {
      fetch: typeof fetch;
    };
  };
  params: Params<P>;
  data: Data;
};
declare type PagesFunction<
  Env = unknown,
  Params extends string = any,
  Data extends Record<string, unknown> = Record<string, unknown>,
> = (context: EventContext<Env, Params, Data>) => Response | Promise<Response>;
declare type EventPluginContext<Env, P extends string, Data, PluginArgs> = {
  request: Request<unknown, IncomingRequestCfProperties<unknown>>;
  functionPath: string;
  waitUntil: (promise: Promise<any>) => void;
  passThroughOnException: () => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  env: Env & {
    ASSETS: {
      fetch: typeof fetch;
    };
  };
  params: Params<P>;
  data: Data;
  pluginArgs: PluginArgs;
};
declare type PagesPluginFunction<
  Env = unknown,
  Params extends string = any,
  Data extends Record<string, unknown> = Record<string, unknown>,
  PluginArgs = unknown,
> = (
  context: EventPluginContext<Env, Params, Data, PluginArgs>,
) => Response | Promise<Response>;
declare module "assets:*" {
  export const onRequest: PagesFunction;
}
// PubSubMessage represents an incoming PubSub message.
// The message includes metadata about the broker, the client, and the payload
// itself.
// https://developers.cloudflare.com/pub-sub/
declare interface PubSubMessage {
  // Message ID
  readonly mid: number;
  // MQTT broker FQDN in the form mqtts://BROKER.NAMESPACE.cloudflarepubsub.com:PORT
  readonly broker: string;
  // The MQTT topic the message was sent on.
  readonly topic: string;
  // The client ID of the client that published this message.
  readonly clientId: string;
  // The unique identifier (JWT ID) used by the client to authenticate, if token
  // auth was used.
  readonly jti?: string;
  // A Unix timestamp (seconds from Jan 1, 1970), set when the Pub/Sub Broker
  // received the message from the client.
  readonly receivedAt: number;
  // An (optional) string with the MIME type of the payload, if set by the
  // client.
  readonly contentType: string;
  // Set to 1 when the payload is a UTF-8 string
  // https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901063
  readonly payloadFormatIndicator: number;
  // Pub/Sub (MQTT) payloads can be UTF-8 strings, or byte arrays.
  // You can use payloadFormatIndicator to inspect this before decoding.
  payload: string | Uint8Array;
}
// JsonWebKey extended by kid parameter
declare interface JsonWebKeyWithKid extends JsonWebKey {
  // Key Identifier of the JWK
  readonly kid: string;
}
// Namespace for RPC utility types. Unfortunately, we can't use a `module` here as these types need
// to referenced by `Fetcher`. This is included in the "importable" version of the types which
// strips all `module` blocks.
declare namespace Rpc {
  // Branded types for identifying `WorkerEntrypoint`/`DurableObject`/`Target`s.
  // TypeScript uses *structural* typing meaning anything with the same shape as type `T` is a `T`.
  // For the classes exported by `cloudflare:workers` we want *nominal* typing (i.e. we only want to
  // accept `WorkerEntrypoint` from `cloudflare:workers`, not any other class with the same shape)
  export const __RPC_STUB_BRAND: "__RPC_STUB_BRAND";
  export const __RPC_TARGET_BRAND: "__RPC_TARGET_BRAND";
  export const __WORKER_ENTRYPOINT_BRAND: "__WORKER_ENTRYPOINT_BRAND";
  export const __DURABLE_OBJECT_BRAND: "__DURABLE_OBJECT_BRAND";
  export interface RpcTargetBranded {
    [__RPC_TARGET_BRAND]: never;
  }
  export interface WorkerEntrypointBranded {
    [__WORKER_ENTRYPOINT_BRAND]: never;
  }
  export interface DurableObjectBranded {
    [__DURABLE_OBJECT_BRAND]: never;
  }
  export type EntrypointBranded =
    | WorkerEntrypointBranded
    | DurableObjectBranded;
  // Types that can be used through `Stub`s
  export type Stubable = RpcTargetBranded | ((...args: any[]) => any);
  // Types that can be passed over RPC
  type Serializable =
    // Structured cloneables
    | void
    | undefined
    | null
    | boolean
    | number
    | bigint
    | string
    | TypedArray
    | ArrayBuffer
    | DataView
    | Date
    | Error
    | RegExp
    // Structured cloneable composites
    | Map<Serializable, Serializable>
    | Set<Serializable>
    | ReadonlyArray<Serializable>
    | {
        [key: string | number]: Serializable;
      }
    // Special types
    | ReadableStream<Uint8Array>
    | WritableStream<Uint8Array>
    | Request
    | Response
    | Headers
    | Stub<Stubable>
    // Serialized as stubs, see `Stubify`
    | Stubable;
  // Base type for all RPC stubs, including common memory management methods.
  // `T` is used as a marker type for unwrapping `Stub`s later.
  interface StubBase<T extends Stubable> extends Disposable {
    [__RPC_STUB_BRAND]: T;
    dup(): this;
  }
  export type Stub<T extends Stubable> = Provider<T> & StubBase<T>;
  // Recursively rewrite all `Stubable` types with `Stub`s
  type Stubify<T> = T extends Stubable
    ? Stub<T>
    : T extends Map<infer K, infer V>
      ? Map<Stubify<K>, Stubify<V>>
      : T extends Set<infer V>
        ? Set<Stubify<V>>
        : T extends Array<infer V>
          ? Array<Stubify<V>>
          : T extends ReadonlyArray<infer V>
            ? ReadonlyArray<Stubify<V>>
            : T extends {
                  [key: string | number]: unknown;
                }
              ? {
                  [K in keyof T]: Stubify<T[K]>;
                }
              : T;
  // Recursively rewrite all `Stub<T>`s with the corresponding `T`s.
  // Note we use `StubBase` instead of `Stub` here to avoid circular dependencies:
  // `Stub` depends on `Provider`, which depends on `Unstubify`, which would depend on `Stub`.
  type Unstubify<T> =
    T extends StubBase<infer V>
      ? V
      : T extends Map<infer K, infer V>
        ? Map<Unstubify<K>, Unstubify<V>>
        : T extends Set<infer V>
          ? Set<Unstubify<V>>
          : T extends Array<infer V>
            ? Array<Unstubify<V>>
            : T extends ReadonlyArray<infer V>
              ? ReadonlyArray<Unstubify<V>>
              : T extends {
                    [key: string | number]: unknown;
                  }
                ? {
                    [K in keyof T]: Unstubify<T[K]>;
                  }
                : T;
  type UnstubifyAll<A extends any[]> = {
    [I in keyof A]: Unstubify<A[I]>;
  };
  // Utility type for adding `Provider`/`Disposable`s to `object` types only.
  // Note `unknown & T` is equivalent to `T`.
  type MaybeProvider<T> = T extends object ? Provider<T> : unknown;
  type MaybeDisposable<T> = T extends object ? Disposable : unknown;
  // Type for method return or property on an RPC interface.
  // - Stubable types are replaced by stubs.
  // - Serializable types are passed by value, with stubable types replaced by stubs
  //   and a top-level `Disposer`.
  // Everything else can't be passed over PRC.
  // Technically, we use custom thenables here, but they quack like `Promise`s.
  // Intersecting with `(Maybe)Provider` allows pipelining.
  type Result<R> = R extends Stubable
    ? Promise<Stub<R>> & Provider<R>
    : R extends Serializable
      ? Promise<Stubify<R> & MaybeDisposable<R>> & MaybeProvider<R>
      : never;
  // Type for method or property on an RPC interface.
  // For methods, unwrap `Stub`s in parameters, and rewrite returns to be `Result`s.
  // Unwrapping `Stub`s allows calling with `Stubable` arguments.
  // For properties, rewrite types to be `Result`s.
  // In each case, unwrap `Promise`s.
  type MethodOrProperty<V> = V extends (...args: infer P) => infer R
    ? (...args: UnstubifyAll<P>) => Result<Awaited<R>>
    : Result<Awaited<V>>;
  // Type for the callable part of an `Provider` if `T` is callable.
  // This is intersected with methods/properties.
  type MaybeCallableProvider<T> = T extends (...args: any[]) => any
    ? MethodOrProperty<T>
    : unknown;
  // Base type for all other types providing RPC-like interfaces.
  // Rewrites all methods/properties to be `MethodOrProperty`s, while preserving callable types.
  // `Reserved` names (e.g. stub method names like `dup()`) and symbols can't be accessed over RPC.
  export type Provider<
    T extends object,
    Reserved extends string = never,
  > = MaybeCallableProvider<T> & {
    [K in Exclude<
      keyof T,
      Reserved | symbol | keyof StubBase<never>
    >]: MethodOrProperty<T[K]>;
  };
}
declare module "cloudflare:workers" {
  export type RpcStub<T extends Rpc.Stubable> = Rpc.Stub<T>;
  export const RpcStub: {
    new <T extends Rpc.Stubable>(value: T): Rpc.Stub<T>;
  };
  export abstract class RpcTarget implements Rpc.RpcTargetBranded {
    [Rpc.__RPC_TARGET_BRAND]: never;
  }
  // `protected` fields don't appear in `keyof`s, so can't be accessed over RPC
  export abstract class WorkerEntrypoint<Env = unknown>
    implements Rpc.WorkerEntrypointBranded
  {
    [Rpc.__WORKER_ENTRYPOINT_BRAND]: never;
    protected ctx: ExecutionContext;
    protected env: Env;
    constructor(ctx: ExecutionContext, env: Env);
    fetch?(request: Request): Response | Promise<Response>;
    tail?(events: TraceItem[]): void | Promise<void>;
    trace?(traces: TraceItem[]): void | Promise<void>;
    scheduled?(controller: ScheduledController): void | Promise<void>;
    queue?(batch: MessageBatch<unknown>): void | Promise<void>;
    test?(controller: TestController): void | Promise<void>;
  }
  export abstract class DurableObject<Env = unknown>
    implements Rpc.DurableObjectBranded
  {
    [Rpc.__DURABLE_OBJECT_BRAND]: never;
    protected ctx: DurableObjectState;
    protected env: Env;
    constructor(ctx: DurableObjectState, env: Env);
    fetch?(request: Request): Response | Promise<Response>;
    alarm?(): void | Promise<void>;
    webSocketMessage?(
      ws: WebSocket,
      message: string | ArrayBuffer,
    ): void | Promise<void>;
    webSocketClose?(
      ws: WebSocket,
      code: number,
      reason: string,
      wasClean: boolean,
    ): void | Promise<void>;
    webSocketError?(ws: WebSocket, error: unknown): void | Promise<void>;
  }
}
declare module "cloudflare:sockets" {
  function _connect(
    address: string | SocketAddress,
    options?: SocketOptions,
  ): Socket;
  export { _connect as connect };
}
// Copyright (c) 2022-2023 Cloudflare, Inc.
// Licensed under the Apache 2.0 license found in the LICENSE file or at:
//     https://opensource.org/licenses/Apache-2.0
/**
 * Data types supported for holding vector metadata.
 */
declare type VectorizeVectorMetadataValue =
  | string
  | number
  | boolean
  | string[];
/**
 * Additional information to associate with a vector.
 */
declare type VectorizeVectorMetadata =
  | VectorizeVectorMetadataValue
  | Record<string, VectorizeVectorMetadataValue>;
declare type VectorFloatArray = Float32Array | Float64Array;
declare interface VectorizeError {
  code?: number;
  error: string;
}
/**
 * Comparison logic/operation to use for metadata filtering.
 *
 * This list is expected to grow as support for more operations are released.
 */
declare type VectorizeVectorMetadataFilterOp = "$eq" | "$ne";
/**
 * Filter criteria for vector metadata used to limit the retrieved query result set.
 */
declare type VectorizeVectorMetadataFilter = {
  [field: string]:
    | Exclude<VectorizeVectorMetadataValue, string[]>
    | null
    | {
        [Op in VectorizeVectorMetadataFilterOp]?: Exclude<
          VectorizeVectorMetadataValue,
          string[]
        > | null;
      };
};
/**
 * Supported distance metrics for an index.
 * Distance metrics determine how other "similar" vectors are determined.
 */
declare type VectorizeDistanceMetric = "euclidean" | "cosine" | "dot-product";
declare interface VectorizeQueryOptions {
  topK?: number;
  namespace?: string;
  returnValues?: boolean;
  returnMetadata?: boolean;
  filter?: VectorizeVectorMetadataFilter;
}
/**
 * Information about the configuration of an index.
 */
declare type VectorizeIndexConfig =
  | {
      dimensions: number;
      metric: VectorizeDistanceMetric;
    }
  | {
      preset: string; // keep this generic, as we'll be adding more presets in the future and this is only in a read capacity
    };
/**
 * Metadata about an existing index.
 */
declare interface VectorizeIndexDetails {
  /** The unique ID of the index */
  readonly id: string;
  /** The name of the index. */
  name: string;
  /** (optional) A human readable description for the index. */
  description?: string;
  /** The index configuration, including the dimension size and distance metric. */
  config: VectorizeIndexConfig;
  /** The number of records containing vectors within the index. */
  vectorsCount: number;
}
/**
 * Represents a single vector value set along with its associated metadata.
 */
declare interface VectorizeVector {
  /** The ID for the vector. This can be user-defined, and must be unique. It should uniquely identify the object, and is best set based on the ID of what the vector represents. */
  id: string;
  /** The vector values */
  values: VectorFloatArray | number[];
  /** The namespace this vector belongs to. */
  namespace?: string;
  /** Metadata associated with the vector. Includes the values of the other fields and potentially additional details. */
  metadata?: Record<string, VectorizeVectorMetadata>;
}
/**
 * Represents a matched vector for a query along with its score and (if specified) the matching vector information.
 */
declare type VectorizeMatch = Pick<Partial<VectorizeVector>, "values"> &
  Omit<VectorizeVector, "values"> & {
    /** The score or rank for similarity, when returned as a result */
    score: number;
  };
/**
 * A set of vector {@link VectorizeMatch} for a particular query.
 */
declare interface VectorizeMatches {
  matches: VectorizeMatch[];
  count: number;
}
/**
 * Results of an operation that performed a mutation on a set of vectors.
 * Here, `ids` is a list of vectors that were successfully processed.
 */
declare interface VectorizeVectorMutation {
  /* List of ids of vectors that were successfully processed. */
  ids: string[];
  /* Total count of the number of processed vectors. */
  count: number;
}
declare abstract class VectorizeIndex {
  /**
   * Get information about the currently bound index.
   * @returns A promise that resolves with information about the current index.
   */
  public describe(): Promise<VectorizeIndexDetails>;
  /**
   * Use the provided vector to perform a similarity search across the index.
   * @param vector Input vector that will be used to drive the similarity search.
   * @param options Configuration options to massage the returned data.
   * @returns A promise that resolves with matched and scored vectors.
   */
  public query(
    vector: VectorFloatArray | number[],
    options: VectorizeQueryOptions,
  ): Promise<VectorizeMatches>;
  /**
   * Insert a list of vectors into the index dataset. If a provided id exists, an error will be thrown.
   * @param vectors List of vectors that will be inserted.
   * @returns A promise that resolves with the ids & count of records that were successfully processed.
   */
  public insert(vectors: VectorizeVector[]): Promise<VectorizeVectorMutation>;
  /**
   * Upsert a list of vectors into the index dataset. If a provided id exists, it will be replaced with the new values.
   * @param vectors List of vectors that will be upserted.
   * @returns A promise that resolves with the ids & count of records that were successfully processed.
   */
  public upsert(vectors: VectorizeVector[]): Promise<VectorizeVectorMutation>;
  /**
   * Delete a list of vectors with a matching id.
   * @param ids List of vector ids that should be deleted.
   * @returns A promise that resolves with the ids & count of records that were successfully processed (and thus deleted).
   */
  public deleteByIds(ids: string[]): Promise<VectorizeVectorMutation>;
  /**
   * Get a list of vectors with a matching id.
   * @param ids List of vector ids that should be returned.
   * @returns A promise that resolves with the raw unscored vectors matching the id set.
   */
  public getByIds(ids: string[]): Promise<VectorizeVector[]>;
}
/**
 * The interface for "version_metadata" binding
 * providing metadata about the Worker Version using this binding.
 */
declare type WorkerVersionMetadata = {
  /** The ID of the Worker Version using this binding */
  id: string;
  /** The tag of the Worker Version using this binding */
  tag: string;
};
declare interface DynamicDispatchLimits {
  /**
   * Limit CPU time in milliseconds.
   */
  cpuMs?: number;
  /**
   * Limit number of subrequests.
   */
  subRequests?: number;
}
declare interface DynamicDispatchOptions {
  /**
   * Limit resources of invoked Worker script.
   */
  limits?: DynamicDispatchLimits;
  /**
   * Arguments for outbound Worker script, if configured.
   */
  outbound?: {
    [key: string]: any;
  };
}
declare interface DispatchNamespace {
  /**
   * @param name Name of the Worker script.
   * @param args Arguments to Worker script.
   * @param options Options for Dynamic Dispatch invocation.
   * @returns A Fetcher object that allows you to send requests to the Worker script.
   * @throws If the Worker script does not exist in this dispatch namespace, an error will be thrown.
   */
  get(
    name: string,
    args?: {
      [key: string]: any;
    },
    options?: DynamicDispatchOptions,
  ): Fetcher;
}
