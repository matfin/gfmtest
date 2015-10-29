Core = {
	posts: new Mongo.Collection('posts')
};

/**
 *	Publishing functions
 */
Meteor.publish('posts', () => Core.posts.find());

/**
 *	Meteor methods
 */
Meteor.methods({
	'update': (post) => {
		return new Promise((resolve, reject) => {
			Core.posts.update({id: post.id}, post, {upsert: true}, (err, res) => {
				if(err) {
					reject({
						status: 'error',
						message: 'Could not add post'
					});
				}
				else {
					resolve({
						status: 'ok',
						message: `Post added with id ${post.id}`
					});
				}
			});
		});
	}
});
