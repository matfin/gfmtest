Post = class Post {

	constructor(content) {
		let datex 			= new Date().getTime(); 
		this.id 				= btoa(datex.toString());
		this.content  	= content;
		this.published 	= false; 
		this.created  	= datex;
	};

	validate() {
		let validString = Match.Where((item) => {
			check(item, String);
			return item.length > 0;
		}),
		pattern = {
			id: String,
			content: validString,
			created: Number
		};

		return check({
			id: this.id,
			content: this.content,
			created: this.created
		}, pattern);
	};

	commit() {
		return new Promise((resolve, reject) => {
			
			try {
				this.validate();
			}
			catch(e) {
				reject({
					status: 'error',
					message: 'This post is not valid!',
					data: e
				});
			}

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