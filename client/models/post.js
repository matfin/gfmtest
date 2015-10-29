Post = class Post {

	constructor(title, content) {
		let datex 		= new Date().getTime(); 
		this.id 			= btoa(datex.toString());
		this.title 		= title;
		this.content  = content;
		this.created  = datex;
	};

	validate() {
		console.log(this);
	};

	commit() {
		return new Promise((resolve, reject) => {
			Meteor.call('update', this, (err, res) => {
				if(err)	{
					reject({
						status: 'error',
						message: err
					});
				}
				else {
					resolve({
						status: 'ok',
						message: `Post with id: ${this.id} was saved`,
						data: res
					});
				}
			});
		});
	}
	
};