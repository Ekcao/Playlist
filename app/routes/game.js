import Ember from 'ember';

export default Ember.Route.extend({
    giantbomb: Ember.inject.service('giantbomb-ajax'),

    // init() {
    //     this.store.query('game', {
    //         orderBy: 'user',
    //         equalTo: this.get('firebaseSession').uid
    //     }).then(results => {
    //         console.log(results.toArray());
    //         this.set('isAdded', true);
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // },

    model(params) {
        return this.get('giantbomb').getGameByID(params.game_id)
            .then(data => data.results);
    }
});
