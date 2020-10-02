
function palindrome(message) {
	if (message == '') { return true; }

	for (let x = 0, end = Math.ceil(message.length/2); x < end; x++) {
		if (message[x] !== message[message.length - 1 - x]) {
			return false;
		}
	}
	return true;
}

palindrome('hello'); // should return false
palindrome('abcba'); // should return true