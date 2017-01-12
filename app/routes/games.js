import Ember from 'ember';

export default Ember.Route.extend({
    giantbomb: Ember.inject.service('giantbomb-ajax'),

    model() {
        this.get('giantbomb').getGame('3030-4725').then();
        let uid = this.get('firebaseSession').get('currentUser').uid;
        return this.store.query('game', {
            orderBy: 'userID',
            equalTo: uid
        });
    }
});
