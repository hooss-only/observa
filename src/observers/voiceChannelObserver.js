export function observeVoiceChannel(client, dataManager) {
	client.on("voiceStateUpdate", (_, newState) => {
		if (newState.channel == null) {
			console.log(dataManager.data);
			console.log('bye');
		} else {
			// when join
			dataManager.data['12-302-123'] = 10;
			dataManager.save()
			console.log('hi');
		}
	});
}
