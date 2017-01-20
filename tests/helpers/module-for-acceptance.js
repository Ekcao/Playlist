import { module } from 'qunit';
import Ember from 'ember';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
// Emberfire helpers
import createOfflineRef from '../helpers/create-offline-ref';
import replaceAppRef from '../helpers/replace-app-ref';
import stubFirebase from '../helpers/stub-firebase';
import unstubFirebase from '../helpers/unstub-firebase';
import { stubValidSession } from '../helpers/firebase-session';
// Fixture data
import fixtures from '../helpers/fixtures';

const { RSVP: { Promise } } = Ember;

const giantbombStub = Ember.Service.extend({
    data: {
        results: [{
            name: 'Overwatch',
            image: {
                icon_url: 'http://www.giantbomb.com/api/image/square_avatar/2852990-overwatch.jpg'
            },
            id: 48190
        }]
    },

    searchGameByName(query) {
        let data = this.get('data');
        return new Promise(
            function (resolve, reject) {
                if (query === 'Overwatch') {
                    resolve(data);
                } else {
                    reject();
                }
            }
        )
    },
    getGameByID(id) {
        let data = this.get('data');
        return new Promise(
            function (resolve, reject) {
                resolve(data);
            }
        )
    }
});

export default function (name, options = {}) {
    module(name, {
        beforeEach() {
            stubFirebase();
            this.application = startApp();
            this.ref = createOfflineRef(fixtures);

            if (options.beforeEach) {
                return options.beforeEach.apply(this, arguments);
            }

            replaceAppRef(this.application, this.ref);
            // Stub giantbomb-ajax service
            this.application.register('service:giantbomb-stub', giantbombStub);
            this.application.inject('route', 'giantbomb', 'service:giantbomb-stub');
            this.application.inject('controller', 'giantbomb', 'service:giantbomb-stub');
            stubValidSession(this.application, { isAuthenticated: true, currentUser: { uid: '123455555555555a' } });
        },

        afterEach() {
            let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
            unstubFirebase();
            return Promise.resolve(afterEach).then(() => destroyApp(this.application));
        }
    });
}
