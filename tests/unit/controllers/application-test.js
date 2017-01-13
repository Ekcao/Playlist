import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:application', 'Unit | Controller | application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('should sign out of session and transition to /signin.', function (assert) {
    let stubFirebaseSession = Ember.Object.create({
        isAuthenticated: true,
        close() {
            this.set('isAuthenticated', false);
        }
    });

    const ctrl = this.subject({
        firebaseSession: stubFirebaseSession,
        transitionToRoute(route) { }
    });

    assert.ok(stubFirebaseSession.isAuthenticated, 'initially isAuthenticated is true');
    ctrl.send('signOut');
    assert.notOk(stubFirebaseSession.isAuthenticated, 'isAuthenticated is false, signed out of session');
});
