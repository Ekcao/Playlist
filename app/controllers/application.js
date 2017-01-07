import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        signOut() {
            this.get('firebaseSession').close();
            this.transitionToRoute('signin');
        }
    }
});
