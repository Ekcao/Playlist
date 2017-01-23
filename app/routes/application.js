import Ember from 'ember';

export default Ember.Route.extend({

    beforeModel: function () {
        return this.get('firebaseSession')
            .fetch()
            .catch((error) => {
                if (!this.get('firebaseSession').isAuthenticated && !Ember.testing) {
                    console.log('Not signed in');
                    this.replaceWith('signin');
                }
            });
    }
});
