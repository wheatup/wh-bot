const saferEval = require('safer-eval')
module.exports = function(code) {
	try {
		'use strict';
		const result = saferEval(code);
		if(typeof result === 'object') {
			return JSON.stringify(result, null, 2);
		} else {
			return result;
		}
	} catch(ex) {
		return ex.message;
	}
};