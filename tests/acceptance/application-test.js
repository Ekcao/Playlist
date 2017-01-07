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

test('should list games to play.', function (assert) {
    visit('/games');
    andThen(function () {
        assert.equal(find('.games .game-card').length, 2, 'lists games');
    });
});

test('should search games to add to the list.', function (assert) {

});

test('should link to detailed game information.', function (assert) {

});

test('should filter by platform.', function (assert) {

});

test('should filter by genre.', function (assert) {

});

test('should filter by name.', function (assert) {

});

test('should be able to switch between grid and list.', function (assert) {

});