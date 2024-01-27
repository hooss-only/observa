import fs from "fs";

class DataManager {
	constructor(data) {
		this.data = data;
		this.saveFile = '../data.json';
	}

	save() {
		fs.writeFile(this.saveFile, JSON.stringify(this.data), err => {
			if (err) {
				console.log(err);
			}		
		});
	}
}

module.exports = new DataManager();
