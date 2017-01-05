import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        signIn: function (provider) {
            this.get('firebaseSession').open('firebase', { provider: provider }).then(function (data) {
                console.log(data.currentUser);
            });
        },

        signOut: function () {
            this.get('firebaseSession').close();
        }
    }
});
