import { Client, GatewayIntentBits } from 'discord.js';
import config from "./config.json" assert {type: "json"};
import data from "./data.json" assert {type: "json"};
import { DataManager } from "./utils/dataManagement.js";

import { observeVoiceChannel } from "./observers/voiceChannelObserver.js";
import { observeChat } from "./observers/chatObserver.js";

const client = new Client({ 
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	] 
});

const dataManager = new DataManager(data);

console.log('\nA Discord Server Analyzing Tool, Project Observa by hooss-only\n');

client.on("ready", () => {
	observeVoiceChannel(client, dataManager);
	observeChat(client, dataManager);

	console.log(`logged in as ${client.user.tag}`);
});

client.login(config.token);
