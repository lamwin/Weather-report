define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {

	'use strict';

	var AboutView = Backbone.View.extend({

		initialize: function() {

		},

		html : [
			'<h3>About page</h3>',
			'<ul>',
				'<li>This is a weather report app.</li>',
				'<li>When the site loads up, a dashboard is displayed with the locations you added to the app.</li>',
				'<li>Within the location card, the date with weather reports are displayed.</li>',
				'<li>Each new location you add will be saved in your local storage on the client.</li>',
				'<li>I\'m using the www.wunderground.com weather API to support this app. I\'m on the developer plan, so only 500 calls can be made within a day and 10 calls per minute.</li>',
				'<li>When using this app, please only add up to <strong>5</strong> locations and please wait a minute before deleting and adding new locations, so I don\'t get a strike for going over calls limit.</li>',
				'<li>I used Backbone.js to build this app with the intention to learn a front-end framework. Some other libraries that I used in this app are Require.js, Underscore.js, jQuery, and Twitter Bootstrap for styling.</li>',
			'</ul>'
		].join(''),

		render: function() {
			this.$el.html(this.html);
			return this;
		}

	});

	return AboutView;
});