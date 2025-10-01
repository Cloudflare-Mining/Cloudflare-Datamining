import "dotenv/config";
import path from "node:path";
import fs from "fs-extra";

const gatesDir = path.resolve("../data/gates");

console.log("🔍 Mining conditioned gates (gates with branches/conditions)...");

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

// Function to identify conditioned gates (gates with branches property)
function isConditionedGate(gateData) {
	return gateData && gateData.branches && Array.isArray(gateData.branches) && gateData.branches.length > 0;
}

// Analyze all gates for conditions
const conditionedGates = {};
const totalGates = {};

for (const [fileName, gates] of Object.entries(allGates)) {
	conditionedGates[fileName] = {};
	totalGates[fileName] = Object.keys(gates).length;

	for (const [gateName, gateData] of Object.entries(gates)) {
		if (isConditionedGate(gateData)) {
			conditionedGates[fileName][gateName] = gateData;
		}
	}
}

// Display results
console.log("\n📊 Conditioned Gates Analysis:");
console.log("=".repeat(60));

let totalConditioned = 0;
let totalAll = 0;

for (const [fileName, gates] of Object.entries(conditionedGates)) {
	const conditionedCount = Object.keys(gates).length;
	const totalCount = totalGates[fileName];
	const percentage = ((conditionedCount / totalCount) * 100).toFixed(1);

	console.log(`\n📁 ${fileName}:`);
	console.log(`   Conditioned gates: ${conditionedCount}/${totalCount} (${percentage}%)`);

	if (conditionedCount > 0) {
		console.log(`   Conditioned gate examples:`);
		Object.entries(gates)
			.slice(0, 3)
			.forEach(([name, data]) => {
				console.log(`     - ${name}: [${data.branches.join(", ")}]`);
			});
		if (conditionedCount > 3) {
			console.log(`     ... and ${conditionedCount - 3} more`);
		}
	}

	totalConditioned += conditionedCount;
	totalAll += totalCount;
}

console.log(`\n🎯 Summary:`);
console.log(`   Total gates: ${totalAll}`);
console.log(
	`   Conditioned gates: ${totalConditioned} (${(
		(totalConditioned / totalAll) *
		100
	).toFixed(1)}%)`
);

// Create a consolidated conditioned gates file
const consolidatedConditioned = {};
for (const [fileName, gates] of Object.entries(conditionedGates)) {
	for (const [gateName, gateData] of Object.entries(gates)) {
		consolidatedConditioned[gateName] = {
			...gateData,
			source: fileName,
		};
	}
}

// Save the results
const outputFile = path.join(gatesDir, "conditioned-gates.json");
await fs.writeJson(outputFile, consolidatedConditioned, { spaces: 2 });

const summaryFile = path.join(gatesDir, "conditioned-gates-summary.json");
const summary = {
	timestamp: new Date().toISOString(),
	totalGates: totalAll,
	conditionedGates: totalConditioned,
	percentage: ((totalConditioned / totalAll) * 100).toFixed(1),
	files: Object.fromEntries(
		Object.entries(conditionedGates).map(([file, gates]) => [
			file,
			{ count: Object.keys(gates).length, gates: Object.keys(gates) },
		])
	),
};

await fs.writeJson(summaryFile, summary, { spaces: 2 });

console.log(`\n💾 Results saved:`);
console.log(`   Conditioned gates: ${path.basename(outputFile)}`);
console.log(`   Summary: ${path.basename(summaryFile)}`);

console.log(
	`\n✨ Analysis complete! Found ${totalConditioned} conditioned gates out of ${totalAll} total gates.`
);
