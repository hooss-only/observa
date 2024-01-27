import { Client, GatewayIntentBits } from 'discord.js';
import config from "./config.json" assert {type: "json"};
import data from "./data.json" assert {type: "json"};
import { DataManager } from "./utilites/dataManagement";

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });
const dataManager = new DataManager(data);

console.log('\nA Discord Server Analyzing Tool, Project Observa by hooss-only\n');

client.on("ready", () => {
	console.log(`logged in as ${client.user.tag}`);
});

client.on("voiceStateUpdate", (_, newState) => {
	if (newState.channel == null) {
		// when leave
		console.log('bye');
	} else {
		// when join
		console.log('hi');
	}
});

client.login(config.token);
