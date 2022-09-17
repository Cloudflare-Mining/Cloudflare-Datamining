export function sortObjectByKeys(obj:object){
	return Object.fromEntries(Object.entries(obj).sort((keyA, keyB) => keyA[0].localeCompare(keyB[0])));
}