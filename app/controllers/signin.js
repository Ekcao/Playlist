import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        signIn(provider) {
            let self = this;
            this.get('firebaseSession').open('firebase', { provider: provider }).then(session => {
                // Query for existing user
                this.store.query('user', {
                    orderBy: 'userID',
                    equalTo: session.uid
                }).then(results => {
                    // If new user, save as a new user
                    if (results.get('length') === 0) {
                        let newUser = this.store.createRecord('user', {
                            userID: session.uid
                        });
                        newUser.save();
                    } 
                });

                this.transitionToRoute('games');
            });
        },

        signOut() {
            this.get('firebaseSession').close();
            this.transitionToRoute('signin');
        }
    }
});
