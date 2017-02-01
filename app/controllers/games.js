import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['isDone'],
    isDone: null,

    filteredGames: Ember.computed('isDone', 'model', function () {
        let isDone = this.get('isDone');
        let games = this.get('model').sortBy('name');
        
        if (isDone) {
            isDone = (isDone == "true");
            return games.filterBy('isDone', isDone);
        } else {
            return null;
        }
    }),

    actions: {
        markDone(game) {
            game.toggleDone();
            game.save();
            this.notifyPropertyChange('isDone');
        },

        remove(game) {
            game.destroyRecord();
        }
    }
});
