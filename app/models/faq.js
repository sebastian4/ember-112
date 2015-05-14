import DS from 'ember-data';

export default DS.Model.extend({
	question: DS.attr('string'),
 	answer: DS.attr('string'),
	person: DS.belongsTo('person'),
	liked: DS.attr('string'),
 	minianswer: function() {
	    return this.get('answer').substring(0, 8)+" ...";
	}.property('answer')
});
