import "dotenv/config";
import path from "node:path";
import fs from "fs-extra";

const errorDir = path.resolve("../data/cdn-cgi/error");

console.log("🧹 Starting aggressive cleanup of cdn-cgi/errors...");

// Read the main errors file
const errorsFile = path.join(errorDir, "_errors.json");
const errorsData = await fs.readJson(errorsFile);

// Group errors by their message
const errorGroups = {};
for (const [code, message] of Object.entries(errorsData)) {
	if (!errorGroups[message]) {
		errorGroups[message] = [];
	}
	errorGroups[message].push(code);
}

// Find the most common error message (500 Internal Server Error)
const sortedGroups = Object.entries(errorGroups).sort(
	([, a], [, b]) => b.length - a.length
);

const commonMessage = sortedGroups[0][0];
const commonCodes = sortedGroups[0][1];

console.log(
	`📊 Found ${commonCodes.length} error codes with message: "${commonMessage}"`
);

// Create a backup of the original file
const backupFile = path.join(errorDir, "_errors_backup.json");
await fs.copy(errorsFile, backupFile);
console.log(`💾 Created backup: ${path.basename(backupFile)}`);

// Create cleaned errors file with only unique messages
const cleanedErrors = {};
const seenMessages = new Set();

for (const [code, message] of Object.entries(errorsData)) {
	if (!seenMessages.has(message)) {
		cleanedErrors[code] = message;
		seenMessages.add(message);
	}
}

// Write the cleaned errors file
await fs.writeJson(errorsFile, cleanedErrors, { spaces: 2 });
console.log(
	`✨ Updated _errors.json: ${Object.keys(errorsData).length} -> ${
		Object.keys(cleanedErrors).length
	} entries`
);

// Remove redundant individual error files
let removedCount = 0;
for (const code of commonCodes) {
	const filePath = path.join(errorDir, `${code}.json`);
	if (await fs.pathExists(filePath)) {
		await fs.remove(filePath);
		removedCount++;
	}
}

console.log(`🗑️  Removed ${removedCount} redundant individual error files`);

// Create a summary of what was cleaned up
const cleanupSummary = {
	timestamp: new Date().toISOString(),
	originalErrorCount: Object.keys(errorsData).length,
	cleanedErrorCount: Object.keys(cleanedErrors).length,
	removedFiles: removedCount,
	mostCommonMessage: commonMessage,
	mostCommonCount: commonCodes.length,
	uniqueMessages: Object.keys(cleanedErrors).length,
};

const summaryFile = path.join(errorDir, "_cleanup_summary.json");
await fs.writeJson(summaryFile, cleanupSummary, { spaces: 2 });

console.log(`📋 Cleanup summary saved to: ${path.basename(summaryFile)}`);
console.log(
	`\n🎉 Cleanup complete! Reduced noise by ${
		Object.keys(errorsData).length - Object.keys(cleanedErrors).length
	} entries and ${removedCount} files.`
);
