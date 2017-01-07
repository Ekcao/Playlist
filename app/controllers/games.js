import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        markDone(game) {
            game.done = true;
            console.log('Marked done');
        }
    }
});
