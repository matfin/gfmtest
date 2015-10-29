'use strict';

/**
 *	Template.postlist
 *	Callback function executed when the template has been instantiated
 *	@method created
 */
Template.postlist.onCreated(function() {
	this.subscribe('posts');
});

/**
 *	Template.postlist
 *	Callback function executed when the template has been rendered
 *	@method rendered
 */
Template.postlist.onRendered(function() {
	
});

/**
 *	Template.postlist
 *	Callback function executed when the template instance has been destroyed
 *	@method destroyed
 */
Template.postlist.onDestroyed(function() {
	
});

/**
 *	Template.postlist
 *	Helper functions
 */
Template.postlist.helpers({
	posts: () => App.posts.find({}, {sort: {created: -1}})
});
