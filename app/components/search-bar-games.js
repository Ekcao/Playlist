import Ember from 'ember';

export default Ember.Component.extend({
    selectedGame: null,
    searchGameText: null,

    actions: {
        showSelectedGame(game) {
            this.set('selectedGame', game);
            console.log(game.id);
            this.get('showGame')(game);
        }
    }
});
