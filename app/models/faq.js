import DS from 'ember-data';

export default DS.Model.extend({
	question: DS.attr('string'),
 	answer: DS.attr('string'),
 	minianswer: function() {
	    return this.get('answer').substring(0, 4)+" ...";
	}.property('answer')
});
