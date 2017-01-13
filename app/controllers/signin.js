import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        signIn(provider) {
            let self = this;
            this.get('firebaseSession').open('firebase', { provider: provider }).then(function () {
                self.transitionToRoute('games');
            });
        }
    }
});
 