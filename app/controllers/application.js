import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Controller.extend({
    giantbomb: Ember.inject.service('giantbomb-ajax'),

    searchGamesTask: task(function* (query) {
        yield timeout(500);
        return this.get('giantbomb').searchGameByName(query)
            .then(data => data.results);
    }),

    actions: {
        signOut() {
            this.get('firebaseSession').close();
            this.transitionToRoute('signin');
        },

        showGame(game) {
            this.transitionToRoute('game', game.id);
        }
    }
});
