export default {
	check,
	lookup,
};

var elements;

await loadPeriodicTable();


// ****************************

async function loadPeriodicTable() {
	elements = await (await fetch("periodic-table.json")).json();
}

function check(inputWord) {
	console.log(inputWord)
	if(inputWord.length > 0) {
		for(let element of elements) {
			let symbol = element.symbol.toLowerCase()

			// check if the symbol matches the characters in inputWord
			if(symbol.length <= inputWord.length) {
				if(inputWord.slice(0, symbol.length) == symbol) {

					//still have characters left
					if(inputWord.length > symbol.length) {
						let result = check(inputWord.slice(symbol.length))

						//matched successfully
						if(result.length > 0) {
							return [ symbol, ...result]
						}
					} else {
						return [ symbol ]
					}
				}
			}
		}
	}

	return [];
}

function lookup(elementSymbol) {
	// TODO: return the element entry based on specified
	// symbol (case-insensitive)

	for(let element of elements ) {
		if(element.symbol.toLowerCase() == elementSymbol) {
			return element
		}
	}

	return {};
}
