import Ember from 'ember';

export default Ember.Controller.extend({
    giantbomb: Ember.inject.service('giantbomb-ajax'),

    actions: {
        addUserGame() {
            let gameRecord = this.get('giantbomb').createGameFromData(this.get('model'));
            this.store.query('user', {
                orderBy: 'userID',
                equalTo: this.get('firebaseSession').uid
            }).then(results => {
                let currentUser = results.get('firstObject');
                currentUser.get('games').addObject(gameRecord);
                gameRecord.save().then(() => currentUser.save());
            });
        }
    }
});
