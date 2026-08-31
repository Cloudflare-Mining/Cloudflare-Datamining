# `@cloudflare/zt-types`

TypeScript contracts for Cloudflare Zero Trust Workers integrations.

## DLP validation Workers

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

A numeric score must be between `-1` and `1`. Return `"veto"` to reject the match.

## License

Apache-2.0
