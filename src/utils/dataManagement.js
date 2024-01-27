import fs from "fs";

export class DataManager {
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

