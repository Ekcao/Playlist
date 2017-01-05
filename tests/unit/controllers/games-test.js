import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:games', 'Unit | Controller | games', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('should mark game as done on markDone action.', function (assert) {
    const ctrl = this.subject();

    let stubGame = Ember.Object.create({
        image: 'fake.png',
        title: 'test-title',
        platforms: ['test-platform'],
        genres: ['test-genres'],
        done: false,
        developers: 'test-developer'
    });

    assert.notOk(stubGame.done, 'game is initially not done');
    ctrl.send('markDone', stubGame);
    assert.ok(stubGame.done, 'game is now done');
});
