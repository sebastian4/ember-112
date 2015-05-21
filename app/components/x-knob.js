import Ember from 'ember';

export default Ember.Component.extend({

  _initializeKnob: function() {
    var self = this;

    this.$().knob({
      fgColor: this.get('fgColor'),
      change: function(v) {
        self.set('value', Math.round(v));
      }
    });

  }.on('didInsertElement'),

  _valueChanged: function() {

    this.$().val(this.get('value')).trigger('change');

  }.observes('value')

});
