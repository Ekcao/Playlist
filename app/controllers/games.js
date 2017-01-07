import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        markDone(game) {
            game.toggleDone();
            game.save();
        }
    }
});
