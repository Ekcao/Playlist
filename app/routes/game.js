import Ember from 'ember';

export default Ember.Route.extend({
    giantbomb: Ember.inject.service('giantbomb-ajax'),

    model(params) {
        return this.get('giantbomb').getGameByID(params.game_id)
            .then(data => data.results);
    },

    setupController(controller, model) {
        this._super(controller, model);
        this.controller.set('modelID', model.id);
    }
});
