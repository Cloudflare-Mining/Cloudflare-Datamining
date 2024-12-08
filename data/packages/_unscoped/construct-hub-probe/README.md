## Construct Hub Probe

This repository contains a package intended to be used a probe to test construct hub instances.
It automatically publishes a new version every 2 hours, allowing for construct hub canaries to verify its availability on construct hub instances.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.

## test

<pre lang="typescript">
import { Bucket } from '@aws-cdk/aws-s3'

new Bucket(scope: Construct, id: string, props?: BucketProps)
</pre>
