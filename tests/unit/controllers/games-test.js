import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:games', 'Unit | Controller | games', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('should mark game as done on markDone action.', function (assert) {
    const ctrl = this.subject();

    let stubGame = Ember.Object.create({
        isDone: false,
        toggleDone() { this.set('isDone', !this.get('isDone')); },
        save() {}
    });

    assert.notOk(stubGame.isDone, 'game is initially not done');
    ctrl.send('markDone', stubGame);
    assert.ok(stubGame.isDone, 'game is marked done');
});
