import "dotenv/config";
import path from "node:path";
import fs from "fs-extra";

const errorDir = path.resolve("../data/cdn-cgi/error");

// Read the main errors file to understand the structure
const errorsFile = path.join(errorDir, "_errors.json");
const errorsData = await fs.readJson(errorsFile);

console.log("Analyzing error files...");

// Group errors by their message to identify duplicates
const errorGroups = {};
for (const [code, message] of Object.entries(errorsData)) {
	if (!errorGroups[message]) {
		errorGroups[message] = [];
	}
	errorGroups[message].push(code);
}

// Find the most common error message
const sortedGroups = Object.entries(errorGroups).sort(
	([, a], [, b]) => b.length - a.length
);

console.log("\nError message analysis:");
console.log(`Total unique error messages: ${sortedGroups.length}`);
console.log(`Total error codes: ${Object.keys(errorsData).length}`);

// Show the most common error messages
console.log("\nTop 10 most common error messages:");
sortedGroups.slice(0, 10).forEach(([message, codes], index) => {
	console.log(`${index + 1}. "${message}" (${codes.length} codes)`);
	if (codes.length > 10) {
		console.log(`   Sample codes: ${codes.slice(0, 5).join(", ")}...`);
	} else {
		console.log(`   Codes: ${codes.join(", ")}`);
	}
});

// Identify redundant individual error files
const redundantFiles = [];
const commonMessage = sortedGroups[0][0]; // Most common message
const commonCodes = sortedGroups[0][1]; // Codes with the most common message

console.log(
	`\nFound ${commonCodes.length} error codes with the same message: "${commonMessage}"`
);

// Check which individual files exist for these common codes
for (const code of commonCodes) {
	const filePath = path.join(errorDir, `${code}.json`);
	if (await fs.pathExists(filePath)) {
		redundantFiles.push(filePath);
	}
}

console.log(`Found ${redundantFiles.length} redundant individual error files`);

// Create a cleaned up version
const cleanedErrors = {};

// Keep only unique error messages and their first occurrence
const seenMessages = new Set();
for (const [code, message] of Object.entries(errorsData)) {
	if (!seenMessages.has(message)) {
		cleanedErrors[code] = message;
		seenMessages.add(message);
	}
}

console.log(
	`\nCleaned up errors: ${Object.keys(errorsData).length} -> ${
		Object.keys(cleanedErrors).length
	}`
);

// Write the cleaned up errors file
const cleanedErrorsFile = path.join(errorDir, "_errors_cleaned.json");
await fs.writeJson(cleanedErrorsFile, cleanedErrors, { spaces: 2 });

console.log(`\nCleaned errors saved to: ${cleanedErrorsFile}`);

// Optionally remove redundant individual files (commented out for safety)
console.log("\nRedundant files that could be removed:");
redundantFiles.slice(0, 10).forEach((file) => {
	console.log(`  - ${path.basename(file)}`);
});
if (redundantFiles.length > 10) {
	console.log(`  ... and ${redundantFiles.length - 10} more files`);
}

console.log("\nCleanup analysis complete!");
console.log(
	"To actually remove redundant files, uncomment the removal code in the script."
);
