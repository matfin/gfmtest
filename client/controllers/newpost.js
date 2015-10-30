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
	this.editor = CodeMirror.fromTextArea(this.find('#post_content'), {
		mode: 							'gfm',
		tabMode: 						'indent',
		lineWrapping: 			true
	});
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
	content: () => Template.instance().post_content.get()
});

/**
 *	Template.newpost
 *	Events
 */
Template.newpost.events({

	'keyup .CodeMirror': (e, template) => {
		let editor = template.editor,
				content = editor.getValue();
		template.post_content.set(content);
	},

	'drop .CodeMirror': (e, template) => {
		console.log('Drag end!');
	},

	'click button': (e, template) => {
		e.preventDefault();
		let	editor 	= template.editor, 
				content = template.post_content.get(),
				post 		= new Post(content);
		post.commit().then((res) => {
			template.post_content.set('');
			editor.clearHistory();
			editor.setValue('');		
		}).catch((err) => {
			console.log(`Click reports error: ${err}`);
		});
	}
});
