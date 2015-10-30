'use strict';

/**
 *	Template.newpost
 *	Callback function executed when the template has been instantiated
 *	@method created
 */
Template.newpost.onCreated(function() {
	this.post_content = new ReactiveVar();
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

	contentMarkdown: () => Template.instance().post_content.get(),

	editorOptions: function() {
		return {
			mode: 'gfm', 
			lineNumbers: 0
		}
	},

	editorCode: () => ''

});

/**
 *	Template.newpost
 *	Events
 */
Template.newpost.events({

	'keyup .CodeMirror': (e, template) => {
		let content = template.$('#post_content').val();
		template.post_content.set(content);
	},

	'click button': (e, template) => {
		e.preventDefault();
		let content = template.$('#post_content').val(),
				post 		= new Post(content);

		// post.commit().then((res) => {
		// 	console.log(`It worked!: ${res}`);
		// }).catch((err) => {
		// 	console.log(`Click reports error: ${err}`);
		// });
	}
});
