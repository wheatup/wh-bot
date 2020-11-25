const dotenv = require('dotenv');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');
const commands = require('./commands');
const observe = require('./observe');

dotenv.config();

const regex = new RegExp(`^${prefix}(\\w+)\\s?(.*)$`);

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	const { content } = message;
	const [_, command, args] = regex[Symbol.match](content) || [];
	observe(message);
	if (command) {
		message.react('👀');
		(commands[command] ?? commands['default'])(message, args);
	}
});

client.login(process.env.TOKEN);
