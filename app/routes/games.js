import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let uid = this.get('firebaseSession').uid;
        return this.store.query('game', {
            userID: uid,
            orderBy: 'title'
        });
    }
});
