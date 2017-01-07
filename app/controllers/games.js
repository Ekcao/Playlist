import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        markDone(game) {
            game.set('done', !game.get('done'));
            game.save();
            console.log('Marked done');
        }
    }
});
