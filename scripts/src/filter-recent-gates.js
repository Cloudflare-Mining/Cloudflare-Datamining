import "dotenv/config";
import path from "node:path";
import fs from "fs-extra";

const gatesDir = path.resolve("../data/gates");

console.log("🔍 Analyzing gates to find recent additions...");

// Read all gate files
const gateFiles = [
	"dashboard.json",
	"dashboard-assignments.json",
	"dashboard-zone-assignments.json",
	"zt-dashboard.json",
	"zt-dashboard-assignments.json",
];

const allGates = {};

for (const file of gateFiles) {
	const filePath = path.join(gatesDir, file);
	if (await fs.pathExists(filePath)) {
		const data = await fs.readJson(filePath);
		allGates[file] = data;
		console.log(`📄 Loaded ${Object.keys(data).length} gates from ${file}`);
	}
}

// Function to identify recent gates based on naming patterns
function isRecentGate(gateName) {
	const patterns = [
		// Date patterns
		/2024/,
		/2023/,
		/q[1-4]-202[3-4]/,
		/oct-2024/,
		/nov-2024/,
		/dec-2024/,
		/jan-2025/,
		/feb-2025/,
		/mar-2025/,
		/apr-2025/,
		/may-2025/,
		/jun-2025/,
		/jul-2025/,
		/aug-2025/,
		/sep-2025/,

		// "New" patterns
		/new-/,
		/-new-/,
		/-new$/,
		/^new-/,

		// Recent feature indicators
		/recent/,
		/latest/,
		/v2$/,
		/v3$/,
		/-v2-/,
		/-v3-/,

		// Test/experimental patterns that might be recent
		/test-/,
		/experiment/,
		/beta/,
		/alpha/,

		// Specific recent patterns found in the data
		/2024-10-14/,
		/2024-10-17/,
		/20230828/,
		/q3-2023/,
		/q4-2024/,
		/q1-2025/,
		/q2-2025/,
	];

	return patterns.some((pattern) => pattern.test(gateName.toLowerCase()));
}

// Analyze all gates
const recentGates = {};
const totalGates = {};

for (const [fileName, gates] of Object.entries(allGates)) {
	recentGates[fileName] = {};
	totalGates[fileName] = Object.keys(gates).length;

	for (const [gateName, gateData] of Object.entries(gates)) {
		if (isRecentGate(gateName)) {
			recentGates[fileName][gateName] = gateData;
		}
	}
}

// Display results
console.log("\n📊 Recent Gates Analysis:");
console.log("=".repeat(50));

let totalRecent = 0;
let totalAll = 0;

for (const [fileName, gates] of Object.entries(recentGates)) {
	const recentCount = Object.keys(gates).length;
	const totalCount = totalGates[fileName];
	const percentage = ((recentCount / totalCount) * 100).toFixed(1);

	console.log(`\n📁 ${fileName}:`);
	console.log(
		`   Recent gates: ${recentCount}/${totalCount} (${percentage}%)`
	);

	if (recentCount > 0) {
		console.log(`   Recent gate names:`);
		Object.keys(gates)
			.slice(0, 5)
			.forEach((name) => {
				console.log(`     - ${name}`);
			});
		if (recentCount > 5) {
			console.log(`     ... and ${recentCount - 5} more`);
		}
	}

	totalRecent += recentCount;
	totalAll += totalCount;
}

console.log(`\n🎯 Summary:`);
console.log(`   Total gates: ${totalAll}`);
console.log(
	`   Recent gates: ${totalRecent} (${(
		(totalRecent / totalAll) *
		100
	).toFixed(1)}%)`
);

// Create a consolidated recent gates file
const consolidatedRecent = {};
for (const [fileName, gates] of Object.entries(recentGates)) {
	for (const [gateName, gateData] of Object.entries(gates)) {
		consolidatedRecent[gateName] = {
			...gateData,
			source: fileName,
		};
	}
}

// Save the results
const outputFile = path.join(gatesDir, "recent-gates.json");
await fs.writeJson(outputFile, consolidatedRecent, { spaces: 2 });

const summaryFile = path.join(gatesDir, "recent-gates-summary.json");
const summary = {
	timestamp: new Date().toISOString(),
	totalGates: totalAll,
	recentGates: totalRecent,
	percentage: ((totalRecent / totalAll) * 100).toFixed(1),
	files: Object.fromEntries(
		Object.entries(recentGates).map(([file, gates]) => [
			file,
			{ count: Object.keys(gates).length, gates: Object.keys(gates) },
		])
	),
};

await fs.writeJson(summaryFile, summary, { spaces: 2 });

console.log(`\n💾 Results saved:`);
console.log(`   Recent gates: ${path.basename(outputFile)}`);
console.log(`   Summary: ${path.basename(summaryFile)}`);

console.log(
	`\n✨ Analysis complete! Found ${totalRecent} recent gates out of ${totalAll} total gates.`
);
