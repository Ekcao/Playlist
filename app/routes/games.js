import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let uid = this.get('firebaseSession').get('currentUser').uid;
        return this.store.query('user', {
            orderBy: 'userID',
            equalTo: uid
        }).then((user) => {
            return user.get('firstObject').get('games');
        });
    }
});
