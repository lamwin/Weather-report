define([
	'jquery',
	'underscore',
	'backbone',
	'app/collections/places',
	'app/collections/days',
	'app/templates'
], function ($, _, Backbone, PlacesCollection, DaysCollection, Templates) {

	'use strict';

	var DashView = Backbone.View.extend({

		template: Templates['place'],

		collection: new DaysCollection([]),

		events: {
			'click #btn-remove': 'removePlace',
			'click #btn-expand' : 'openDetail'
		},

		initialize: function() {
			var html = this.template(this.model.toJSON());
			this.$el.html(html);
			this.$bodyEl = this.$('.panel-body');
		},

		render: function() {
			var that = this;

			var name = this.model.get('name');
			var newName = this.replaceSpace(name);

			this.collection.url = [
				'http://api.wunderground.com/api/',
				'23b2ac31e2626344',
				'/forecast/q/',
				this.model.get('countryCode'),
				'/', 
				newName,
				'.json'
			].join('');

			this.collection.fetch({
				success: function (collection, response, options) {
					that.renderDays();
				},
				error: function (collection, response, options) {
					console.log('There was an error');
				}
			});
			return this;
		},

		replaceSpace : function(name){
			var newName;
			if(name.indexOf(' ') >= 0){
				newName = name.split(' ').join('_');
			}else{
				newName = name;
			}
			return newName;
		},

		renderDays: function () {
			var daysHtml = [];
			this.collection.each(function (element, index, list) {
				daysHtml.push(
					Templates['day'](element.toJSON())
				);
			});
			this.$bodyEl.html(daysHtml.join(''));
		},

		removePlace: function(e) {
			this.model.destroy();
		},

		openDetail : function(e){
			this.$('.panel').toggleClass('detail');
		}

	});

	return DashView;
});