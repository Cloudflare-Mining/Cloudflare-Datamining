# Scope SDK

The Scope SDK is a TypeScript client SDK for easy access to the [Scope price oracle aggregator](https://github.com/kamino-finance/scope/) for Solana.

## Install

[![npm](https://img.shields.io/npm/v/@kamino-finance/scope-sdk)](https://www.npmjs.com/package/@kamino-finance/scope-sdk)

```shell
npm install @solana/web3.js @kamino-finance/scope-sdk
```

## Usage

```javascript
import { Scope, ScopeToken } from '@kamino-finance/scope-sdk';
import { clusterApiUrl, Connection } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl('mainnet-beta'));
const scope = new Scope('mainnet-beta', web3Client.connection); 

// get all prices supported by Scope Oracle 
const oraclePrices = await scope.getOraclePrices();
```
