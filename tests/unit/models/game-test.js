import { moduleForModel, test } from 'ember-qunit';

moduleForModel('game', 'Unit | Model | game', {
    // Specify the other units that are required for this test.
    needs: []
});

test('should toggle isDone.', function (assert) {
    const game = this.subject({ isDone: false });

    assert.notOk(game.get('isDone'), 'isDone is initially false');    
    Ember.run(function () {
        game.toggleDone();
        assert.ok(game.get('isDone'), 'isDone is toggled from false to true');
    });
});
