Core = {
	posts: new Mongo.Collection('posts')
};

Meteor.publish('posts', () => Core.posts.find());