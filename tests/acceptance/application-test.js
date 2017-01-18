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

test('should search games and handle a match.', function (assert) {
    visit('/games');
    fillIn('.search-bar-games input', 'Overwatch');
    andThen(function () {
        assert.equal(find('.ember-power-select-option').length, 1, 'shows suggestions');
        assert.equal(find('.game-name').text().trim(), 'Overwatch', 'shows matching suggestion with game name');
    });
});

test('should search games and handle no match.', function (assert) {
    visit('/games');
    fillIn('.search-bar-games input', 'asdfasdfasf');
    andThen(function () {
        assert.equal(find('.ember-power-select-option').length, 1, 'shows suggestions');
        assert.equal(find('.ember-power-select-option').text().trim(), 'No matches found.', 'shows no match found message');
    });
});

test('should link to detailed game information when suggestion is clicked.', function (assert) {
    visit('/games');
    fillIn('.search-bar-games input', 'Overwatch');
    andThen(function () {
        click('.ember-power-select-option');
    });
    andThen(function () {
        assert.equal(currentURL(), '/game/48190', 'transitions to individual game route');
    });
});

test('should filter by platform.', function (assert) {

});

test('should filter by genre.', function (assert) {

});

test('should filter by name.', function (assert) {

});

test('should be able to switch between grid and list.', function (assert) {

});