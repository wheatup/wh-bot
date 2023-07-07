export const unknown = (message, args) => {
	message.author.send('Unknown command!');
};

export const ping = (message, args) => {
	message.channel.send(`Pong ${args}`);
};

export const debug = (message, args) => {
	message.channel.send(`\`\`\`json\n${JSON.stringify(message, null, 2)}\n\`\`\``);
};

export default {
	unknown,
	ping,
	debug,
};
