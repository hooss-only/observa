export function observeChat(client, dataManager) {
	client.on("messageCreate", msg => {
		console.log(msg.content)
		let data = dataManager.data;
		let date = dataManager.makeDataName();
		let hours = new Date().getHours() - 1;

		dataManager.integrityVerification(date);

		data[date].chat[hours] += 1;

		dataManager.data = data;
		console.log(data);
		dataManager.save();
	});
}
