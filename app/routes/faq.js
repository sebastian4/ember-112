import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
	 this.store.push('faq',{ id:1,question:'Is this a question?',answer:'Of course it is.',liked:4 });
	 this.store.push('faq',{ id:2,question:'What time is it?',answer:'It is now.',liked:3 });
	 this.store.push('faq',{ id:3,question:'How is the weather?',answer:'Cloudy and rainy.',liked:4 });
	this.store.push('faq',{ id:4,question:'Who wins the election?',answer:'Not Obama',liked:2 });
	 return this.store.all('faq');
	}
});
