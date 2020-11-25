module.exports = {
	ping(message, args) {
		message.channel.send(`Pong ${args}`);
	},
};