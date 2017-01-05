import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        signIn: function (provider) {
            let self = this;
            this.get('firebaseSession').open('firebase', { provider: provider }).then(function (data) {
                self.transitionToRoute('games');
                console.log(data);
            });
        },

        signOut: function () {
            this.get('firebaseSession').close();
        }
    }
});
