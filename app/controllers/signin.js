import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        signIn(provider) {
            let self = this;
            this.get('firebaseSession').open('firebase', { provider: provider }).then(function (data) {
                // Query for existing user
                self.store.query('user', {
                    orderBy: 'userID',
                    equalTo: data.uid
                }).then(results => {
                    // If new user, save as a new user
                    if (results.get('length') == 0) {
                        let newUser = self.store.createRecord('user', {
                            userID: data.uid
                        });
                        newUser.save();
                    }
                });

                self.transitionToRoute('games');
            });
        },

        signOut() {
            this.get('firebaseSession').close();
        }
    }
});
