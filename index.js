const dotenv = require('dotenv');
const Discord = require('discord.js');
const client = new Discord.Client();

dotenv.config();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

console.log(`Login with token ${process.env.TOKEN}`);
client.login(process.env.TOKEN);