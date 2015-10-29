'use strict';

/**
 *	Template.newpost
 *	Callback function executed when the template has been instantiated
 *	@method created
 */
Template.newpost.onCreated(function() {

});

/**
 *	Template.newpost
 *	Callback function executed when the template has been rendered
 *	@method rendered
 */
Template.newpost.onRendered(function() {
	
});

/**
 *	Template.newpost
 *	Callback function executed when the template instance has been destroyed
 *	@method destroyed
 */
Template.newpost.onDestroyed(function() {
	
});

/**
 *	Template.newpost
 *	Helper functions
 */
Template.newpost.helpers({

});

/**
 *	Template.newpost
 *	Events
 */
Template.newpost.events({
	'click button': (e, template) => {
		e.preventDefault();
		let title 	= template.$('#post_title').val(),
				content = template.$('#post_content').val(),
				post 		= new Post(title, content);

		post.commit().then((res) => {
			console.log(`It worked!: ${res}`);
		}).catch((err) => {
			console.log(`Click reports error: ${err}`);
		});
		
	}
});
