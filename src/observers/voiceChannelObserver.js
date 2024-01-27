export function observeVoiceChannel(client, dataManager) {
	client.on("voiceStateUpdate", (_, newState) => {
		if (newState.channel == null) {
			// when leaves
		} else {
			let date = dataManager.makeDataName();
			let data = dataManager.data;
			let userId = newState.id;
			let hours = new Date().getHours() - 1;

			dataManager.integrityVerification(date);
			
			if (hours != data.latestHours) {
				data.voiceChannelTrace = [];
			}

			if (!data.voiceChannelTrace.includes(userId)) {
				data.voiceChannelTrace.push(userId);
				if (data[date].voice.length == 0)
					data[date].voice = [0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
				data[date].voice[hours] += 1;
			}
			
			data.latestHours = hours;
			dataManager.data = data;

			console.log(data);
		}
	});
}
