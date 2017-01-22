import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addUserGame() {
            let game = this.get('model');
            let userID = this.get('firebaseSession').get('currentUser').uid;
            this.store.query('user', {
                orderBy: 'userID',
                equalTo: userID
            }).then(results => {
                let user = results.get('firstObject');
                let gameRecord = this.store.createRecord('game', {
                    name: game.name,
                    platforms: game.platforms,
                    developers: game.developers,
                    publishers: game.publishers,
                    genres: game.genres,
                    image: game.image,
                    isDone: false,
                    extID: game.id,
                    description: game.description,
                    releaseDate: new Date(game.original_release_date),
                    addedDate: new Date()
                });
                user.get('games').addObject(gameRecord);
                gameRecord.save().then(() => user.save());
            });
        }
    }
});
