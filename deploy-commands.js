const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { maethClientId, maethGuildId } = require('./config-maethrillian.json');
const { muffinClientId, muffinGuildId } = require('./config-muffin.json');
const { token } = require('./token.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('members').setDescription('Replies with number of users in the server'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(maethClientId, maethGuildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

rest.put(Routes.applicationGuildCommands(muffinClientId, muffinGuildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);