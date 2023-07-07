import dotenv from 'dotenv';
import Discord from 'discord.js';
const client = new Discord.Client();
import commands from './commands.js';
import observe from './observe.js';
const prefix = '!';

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
		(commands[command] ?? commands['unknown'])(message, args);
	}
});

console.log('LOGIN WITH TOKEN', process.env.TOKEN);
client.login(process.env.TOKEN);
