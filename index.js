import { Client, GatewayIntentBits } from 'discord.js';
import config from "./config.json" assert {type: "json"};

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });

console.log('\nA Discord Server Analyzing Tool, Project Observa by hooss-only\n');

client.on("ready", () => {
	console.log(`logged in as ${client.user.tag}`);
});

client.on("voiceStateUpdate", (oldState, newState) => {
	if (newState.channel == null) {
		// when leave
		console.log('bye');
	} else {
		// when join
		console.log('hi');
	}
});

client.login(config.token);
