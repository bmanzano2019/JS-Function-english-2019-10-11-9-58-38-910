
function reverseString(message) {
	if (message == '') { return message; }

	let result = [];
	for (let x = 0; x < message.length; x++) {
		result[x] = message[message.length - 1 - x];
	}	
	return result.join('');
}

reverseString('hello');