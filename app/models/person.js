import DS from 'ember-data';

export default DS.Model.extend({
  aliasl: DS.attr('string'),
  email: DS.attr('string'),
  questions: DS.hasMany('faq')
});
