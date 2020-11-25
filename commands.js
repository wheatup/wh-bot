module.exports = {
	default(message, args) {
		message.author.send('Unknown command!');
	},

	ping(message, args) {
		message.channel.send(`Pong ${args}`);
	},

	debug(message, args) {
		message.channel.send(`\`\`\`json\n${JSON.stringify(message, null, 2)}\n\`\`\``);
	}
};