module.exports = function(code) {
	let process, global;
	try {
		const result = eval(code);
		if(typeof result === 'object') {
			return JSON.stringify(result, null, 2);
		} else {
			return result;
		}
	} catch(ex) {
		return ex.message;
	}
};