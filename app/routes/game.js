import Ember from 'ember';

export default Ember.Route.extend({
    giantbomb: Ember.inject.service('giantbomb-ajax'),

    // isAdded: Ember.computed(function () {
    //     return DS.PromiseObject.create({
    //         promise: this.store.query('game', {
    //             orderBy: 'user',
    //             equalTo: this.get('firebaseSession').uid
    //         }).then(() => {
    //             return true;
    //         })
    //     });
    //     // this.get('gameIsAddedTask').perform();
    // }),

    model(params) {
        return this.get('giantbomb').getGameByID(params.game_id)
            .then(data => data.results);
    },

    
});
