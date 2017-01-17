import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('game-card', 'Integration | Component | game card', {
    integration: true
});

test('should be marked done when icon is clicked.', function (assert) {
    this.set('gameUnit', { isDone: false });
    this.set('markDoneAction', (game) => {
        game.isDone = true;
        assert.ok(game.isDone, 'isDone is set to true');
    });

    this.render(hbs`{{game-card game=gameUnit markDone=(action markDoneAction gameUnit)}}`);
    assert.notOk(this.get('gameUnit').isDone, 'isDone is initially false');

    this.$('.btn-mark-done').click();
});

test('should delete when icon is clicked.', function (assert) {

});


