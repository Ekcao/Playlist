import { test } from 'qunit';
import moduleForAcceptance from 'to-play-list/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('should transition to /games when toolbar app name is clicked.', function (assert) {
    visit('/');
    click('.app-name-link');
    andThen(function () {
        assert.equal(currentURL(), '/games', 'transitioned to /games');
    });
});

