# `@cloudflare/zt-types`

TypeScript contracts for Cloudflare Zero Trust Workers integrations.

## DLP Validation Worker

Export a class named `DlpValidationEntrypoint` to receive DLP validation requests:

```ts
import {
  DlpValidation,
  type DlpValidationInput,
  type DlpValidationResult,
} from "@cloudflare/zt-types";

export class DlpValidationEntrypoint extends DlpValidation {
  async validate(input: DlpValidationInput): Promise<DlpValidationResult> {
    if (input.entryId === "test-credential") {
      return { score: "veto" };
    }
    return { score: 0.8 };
  }
}
```

Use the information provided in the input to determine the confidence that this is a DLP match.
Return a numeric score between `-1` and `1` where a positive value increases confidence and a
negative value decreases confidence. Return `"veto"` to automatically discard the match.

## Gateway middleware types

Import Gateway middleware types from `@cloudflare/zt-types`:

```ts
import type {
  GatewayMiddlewareNext,
  GatewayMiddlewareContext,
  GatewayIdentity,
  GatewayIdentityGroup,
  GatewayDevicePosture,
  GatewayDevicePostureChecks,
} from "@cloudflare/zt-types";
```

- `GatewayMiddlewareNext` is the Gateway-managed continuation to the original upstream.
  Call it with a `Request` to receive a `Promise<Response>`.
- `GatewayMiddlewareContext` includes information associated with the request, including source
  and destination metadata, protocols, host, the Gateway-normalized `uri`, account, and selecting
  policy. Some of this information is analogous to selectors available in Gateway firewall policies.
  Its metadata fields are read-only. `domainCategories` contains category names, not numeric IDs,
  and `policyId` is the UUID of the policy that selected the middleware.
- `GatewayIdentity` and `GatewayIdentityGroup` describe identity and group information.
  Their fields are optional.
- `GatewayDevicePosture` exposes `checks`, whose `passed` field contains the identifiers of
  posture checks that passed. The list may be empty.

Call `context.identity()` and `context.devicePosture()` to retrieve identity and posture data.
Both methods return a promise that may resolve to `undefined`.

Check identity before continuing to the original upstream:

```ts
import type { GatewayMiddlewareContext, GatewayMiddlewareNext } from "@cloudflare/zt-types";

async function requireIdentity(
  request: Request,
  context: GatewayMiddlewareContext,
  next: GatewayMiddlewareNext,
): Promise<Response> {
  const identity = await context.identity();
  if (!identity) {
    return new Response("Forbidden", { status: 403 });
  }

  return next(request);
}
```

These exports are types only; they do not provide a Gateway middleware base class or runtime
implementation.

## License

Apache-2.0
