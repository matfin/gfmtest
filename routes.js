'use strict';

Router.configure({
	layoutTemplate: 'main',
	loadingTemplate: 'loading'
});

Router.route('/', function() {
	this.render('posts', {
		to: 'content'
	});
}, {name: 'posts.show'});