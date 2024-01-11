import 'dotenv/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

import dateFormat from 'dateformat';
import fetch from 'node-fetch';

import { tryAndPush } from './utils.js';

async function run() {
	const result = {};

	const typesRes = await fetch('https://api.cloudflare.com/client/v4/graphql', {
		method: 'POST',
		headers: {
			'X-Auth-Email': process.env.CLOUDFLARE_EMAIL,
			'X-Auth-Key': process.env.CLOUDFLARE_GLOBAL_KEY,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `query {
				__schema {
					types {
						name
						description
					}
				}
			}`,
		}),
	});

	const types = await typesRes.json();
	if (!types?.data?.__schema?.types) {
		throw new Error('Failed to get GraphQL types');
	}
	const queries = [];
	// split into chunks of 50 fields
	const chunks = types.data.__schema.types.reduce((acc, curr) => {
		if (acc[acc.length - 1].length >= 50) {
			acc.push([]);
		}
		acc[acc.length - 1].push(curr);
		return acc;
	}, [[]]);
	for (const chunk of chunks) {
		let query = 'query {\n';
		for (const type of chunk) {
			query += `${type.name}: __type(name:"${type.name}") {
				fields {
					name
					description
					isDeprecated
					deprecationReason
				}
			}\n`;
			result[type.name] ??= {
				__description: type.description,
			};
		}
		query += '}';
		queries.push(query);
	}
	const fields = {};
	for (const query of queries) {
		const fieldsRes = await fetch('https://api.cloudflare.com/client/v4/graphql', {
			method: 'POST',
			headers: {
				'X-Auth-Email': process.env.CLOUDFLARE_EMAIL,
				'X-Auth-Key': process.env.CLOUDFLARE_GLOBAL_KEY,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query,
			}),
		});
		const fieldsJson = await fieldsRes.json();
		for (const type of Object.keys(fieldsJson.data)) {
			fields[type] = fieldsJson.data[type].fields;
		}
	}

	for (const type of Object.keys(result)) {
		const typeFields = fields?.[type] ?? [];

		for (const field of typeFields) {
			result[type] ??= {};
			if (field.isDeprecated) {
				if (field.deprecationReason) {
					result[type][field.name] = `<small>DEPRECATED (${field.deprecationReason}):</small> ${field.description}`;
					continue;
				}
				result[type][field.name] = `<small>DEPRECATED:</small> ${field.description}`;
				continue;
			}
			result[type][field.name] = field.description;
		}
	}

	await fs.writeFile(path.resolve('../data/other/graphql.json'), JSON.stringify(result, null, '\t'));


	const rawQuery = `query IntrospectionQuery {
		__schema {

		  queryType { name }
		  mutationType { name }
		  subscriptionType { name }
		  types {
			...FullType
		  }
		  directives {
			name
			description

			locations
			args {
			  ...InputValue
			}
		  }
		}
	  }

	  fragment FullType on __Type {
		kind
		name
		description

		fields(includeDeprecated: true) {
		  name
		  description
		  args {
			...InputValue
		  }
		  type {
			...TypeRef
		  }
		  isDeprecated
		  deprecationReason
		}
		inputFields {
		  ...InputValue
		}
		interfaces {
		  ...TypeRef
		}
		enumValues(includeDeprecated: true) {
		  name
		  description
		  isDeprecated
		  deprecationReason
		}
		possibleTypes {
		  ...TypeRef
		}
	  }

	  fragment InputValue on __InputValue {
		name
		description
		type { ...TypeRef }
		defaultValue


	  }

	  fragment TypeRef on __Type {
		kind
		name
		ofType {
		  kind
		  name
		  ofType {
			kind
			name
			ofType {
			  kind
			  name
			  ofType {
				kind
				name
				ofType {
				  kind
				  name
				  ofType {
					kind
					name
					ofType {
					  kind
					  name
					}
				  }
				}
			  }
			}
		  }
		}
	  }`;

	const rawGraphQLRes = await fetch('https://api.cloudflare.com/client/v4/graphql', {
		method: 'POST',
		headers: {
			'X-Auth-Email': process.env.CLOUDFLARE_EMAIL,
			'X-Auth-Key': process.env.CLOUDFLARE_GLOBAL_KEY,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: rawQuery,
		}),
	});
	if (rawGraphQLRes.ok) {
		const rawGraphQL = await rawGraphQLRes.json();
		await fs.writeFile(path.resolve('../data/other/graphql-raw.json'), JSON.stringify(rawGraphQL, null, '\t'));
	}

	const prefix = dateFormat(new Date(), 'd mmmm yyyy');
	await tryAndPush(
		[
			'data/other/graphql.json',
			'data/other/graphql-raw.json',
		],
		`${prefix} - GraphQL Data was updated!`,
		'CFData - GraphQL Data Update',
		'Pushed GraphQL Data: ' + prefix,
		'DISCORD_WEBHOOK_API',
	);
}

run();
