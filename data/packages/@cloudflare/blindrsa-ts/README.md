[![NPM](https://img.shields.io/npm/v/@cloudflare/blindrsa-ts?style=plastic)](https://www.npmjs.com/package/@cloudflare/blindrsa-ts) [![NPM](https://img.shields.io/npm/l/@cloudflare/blindrsa-ts?style=plastic)](LICENSE.txt)

[![NPM](https://nodei.co/npm/@cloudflare/blindrsa-ts.png)](https://www.npmjs.com/package/@cloudflare/blindrsa-ts)

# blindrsa-ts: A TypeScript Library for Blind RSA Signature protocol.

**Specification:** Compliant with IETF [draft-irtf-cfrg-rsa-blind-signatures](https://datatracker.ietf.org/doc/draft-irtf-cfrg-rsa-blind-signatures/) and tests vectors match with [v14](https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-rsa-blind-signatures-14).


### Development

| Task            | NPM scripts          |
|-----------------|----------------------|
| Installing      | `$ npm ci`           |
| Building        | `$ npm run build`    |
| Unit Tests      | `$ npm run test`     |
| Examples        | `$ npm run examples` |
| Benchmarking    | `$ npm run bench`    |
| Code Linting    | `$ npm run lint`     |
| Code Formatting | `$ npm run format`   |


**Dependencies**

This project uses the Stanford Javascript Crypto Library [sjcl](https://github.com/bitwiseshiftleft/sjcl). Use the following command to configure the library.

```sh
 $ make -f sjcl.Makefile
```

### License

The project is licensed under the [Apache-2.0 License](LICENSE.txt).
