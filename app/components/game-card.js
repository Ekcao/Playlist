import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['game-card'],
    classNameBindings: ['game.isDone']
});
