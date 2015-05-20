import Ember from 'ember';

export default Ember.Component.extend({

  overDiv: false,

  profileIndex: 0,

  actions: {

     over: function() {
       this.toggleProperty('overDiv');
     },
     out: function() {
       this.toggleProperty('overDiv');
     },
     clicked: function() {
       this.set("profileIndex",this.get("profileIndex")+1);
     }

  }

});
