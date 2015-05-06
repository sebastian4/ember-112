import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
	 this.store.push('faq',{id:1,question:'Is this a question?',answer:'Of course it is.'});
	 this.store.push('faq',{id:2,question:'What time is it?',answer:'It is now.'});
	 this.store.push('faq',{id:3,question:'How is the weather?',answer:'Cloudy and rainy.'});
	 return this.store.all('faq');
	}
});
