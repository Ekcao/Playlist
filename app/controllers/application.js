import Ember from 'ember';

export default Ember.Controller.extend({
    giantbomb: Ember.inject.service('giantbomb-ajax'),

    actions: {
        signOut() {
            this.get('firebaseSession').close();
            this.transitionToRoute('signin');
        },

        searchGames(query) {
            return this.get('giantbomb').searchGameByName(query)
                .then(data => data.results);
        }
    }
});
