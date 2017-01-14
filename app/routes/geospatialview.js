import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		
		return Ember.$.get('/dashboardstore/employee-country.json');
	}
});
