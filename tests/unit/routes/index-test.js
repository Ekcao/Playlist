import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index');

test('should transition to games route.', function (assert) {
    let route = this.subject({
        replaceWith(routeName) {
            assert.equal(routeName, 'games', 'replace with route name games');
        }
    });
    route.beforeModel();
});