const javascriptRunner = require('./javascriptRunner');

const onMessage = message => {
	const { author, content } = message;
	if (author.bot) return;

	console.log(message);

	let code;
	if(code = /^```javascript\n([\s\S]*)\n```$/i[Symbol.match](content)) {
		message.react('👀');
		code = code[1];
		const result = javascriptRunner(code);
		message.channel.send(`\`\`\`\n${result}\n\`\`\``);
	}
};

module.exports = onMessage;
