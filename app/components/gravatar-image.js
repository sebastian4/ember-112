import Ember from 'ember';

export default Ember.Component.extend({

  size: 120,
  email: '',

  gravatarLabel: function() {
    return this.get('email')
  }.property('email'),
  
  gravatarUrl: function() {
    var email = this.get('email'),
        size = this.get('size');

    return 'http://www.gravatar.com/avatar/' + email + '?s=' + size;
  }.property('email', 'size')

});
