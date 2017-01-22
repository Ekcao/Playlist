import Ember from 'ember';

export default Ember.Route.extend({
    giantbomb: Ember.inject.service('giantbomb-ajax'),
    isGameAdded: Ember.computed(function () {
    }),

    model(params) {
        return this.get('giantbomb').getGameByID(params.game_id)
            .then(data => data.results);
    }
});
