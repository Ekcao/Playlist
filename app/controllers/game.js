import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        addUserGame() {
            let game = this.get('model');
            let userID = this.get('firebaseSession').get('currentUser').uid;
            let gameRecord = this.get('store').createRecord('game', {
                name: game.name,
                platforms: game.platforms,
                developers: game.developers,
                publishers: game.publishers,
                genres: game.genres,
                image: game.image,
                isDone: false,
                userID: userID,
                extID: game.id,
                description: game.description,
                releaseDate: new Date(game.original_release_date),
                addedDate: new Date()
            });
            gameRecord.save().then(() => console.log('Game saved.'));
        }
    }
});
