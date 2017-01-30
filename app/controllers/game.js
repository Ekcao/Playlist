import Ember from 'ember';
import { task } from 'ember-concurrency';


export default Ember.Controller.extend({
    giantbomb: Ember.inject.service('giantbomb-ajax'),
    modelID: null,

    isAdded: Ember.computed('modelID', function () {
        return this.get('gameIsAddedTask').perform();
    }),

    gameIsAddedTask: task(function* () {
        return yield this.store.query('game', {
            orderBy: 'user',
            equalTo: this.get('firebaseSession').uid
        }).then((results) => {
            let isAdded = results.toArray().find((game) => {
                return game.data.extID == this.get('model').id;
            });
            console.log(isAdded);
            return typeof isAdded !== 'undefined';
        }).catch((error) => console.log(error));
    }),

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
