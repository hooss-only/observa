export function observeVoiceChannel(client) {
	client.on("voiceStateUpdate", (_, newState) => {
		if (newState.channel == null) {
			// when leave
			console.log('bye');
		} else {
			// when join
			console.log('hi');
		}
	});
}
