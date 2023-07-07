import javascriptRunner from './javascriptRunner.js';

export const onMessage = async message => {
	const { author, content } = message;
	if (author.bot) return;

	let code;
	if ((code = /^\/\/\s*run\s*\n((?:(?!(\n```))[\s\S])+)/im[Symbol.match](content))) {
		message.react('👀');
		code = code[1];
		let { result, console } = await javascriptRunner(code);
		let res = '';
		if (result && !['undefined', 'null', undefined, null].includes(result)) {
			if (!console || !console.length) {
				res = `\`\`\`\n${result.substr(0, 3900)}\n\`\`\``;
			} else {
				res = `**结果**\n\`\`\`\n${result.substr(0, 1800)}\n\`\`\`\n**控制台**\n\`\`\`fix\n${console.join('\n').substr(0, 1800)}\n\`\`\``;
			}
		} else if (console && console.length) {
			res = `\`\`\`fix\n${console.join('\n').substr(0, 3900)}\n\`\`\``;
		}
		try {
			message.reply(res);
		} catch (ex) {
			message.reply('```fix\n' + ex.content + '\n```' || '');
		}
	}
};

export default onMessage;
