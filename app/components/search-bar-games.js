import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['search-bar-games'],
    selectedGame: null,
    searchGameText: null,

    actions: {
        showSelectedGame(game) {
            this.set('selectedGame', game);
            this.get('showGame')(game);
        }
    }
});
