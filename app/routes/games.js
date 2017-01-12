import Ember from 'ember';

export default Ember.Route.extend({
    giantbomb: Ember.inject.service('giantbomb-ajax'),

    model() {
        // this.get('giantbomb').searchGameByName('21f1324f123rf')
        //     .then(data => console.log(data));
        let uid = this.get('firebaseSession').get('currentUser').uid;
        return this.store.query('game', {
            orderBy: 'userID',
            equalTo: uid
        });
    }
});
