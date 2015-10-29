Post = class Post {

	constructor(title, content) {
		let datex 		= new Date().getTime(); 
		this.id 			= btoa(datex.toString());
		this.title 		= title;
		this.content  = content;
		this.created  = datex;
	}

	validate() {
		console.log(this);
	}

	commit() {

	}

};