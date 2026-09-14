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

## License

Apache-2.0
