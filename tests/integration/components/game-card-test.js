import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('game-card', 'Integration | Component | game card', {
    integration: true,
    beforeEach: function () {
        this.set('gameUnit', { isDone: false });
        this.set('markDoneAction', (game) => {
            this.set('gameUnit.isDone', true);
        });
        this.render(hbs`{{game-card game=gameUnit markDone=(action markDoneAction)}}`);
    }
});

test('should have isDone class bindings', function (assert) {
    assert.notOk(this.$('.game-card').hasClass('is-done'), 'does not have is-done class if isDone is false');
    this.$('.btn-mark-done').click();
    assert.ok(this.$('.game-card').hasClass('is-done'), 'has is-done class when isDone is true');
});

test('should be marked done when icon is clicked.', function (assert) {
    assert.notOk(this.get('gameUnit').isDone, 'isDone is initially false');
    this.$('.btn-mark-done').click();
    assert.ok(this.get('gameUnit').isDone, 'isDone is set to true');
});

test('should delete when icon is clicked.', function (assert) {
    assert.expect(0);
});


