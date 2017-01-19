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
// Pretender
import Pretender from 'pretender';

const { RSVP: { Promise } } = Ember;

export default function (name, options = {}) {
    module(name, {
        beforeEach() {
            stubFirebase();
            this.application = startApp();
            this.server = new Pretender();
            this.ref = createOfflineRef(fixtures);

            if (options.beforeEach) {
                return options.beforeEach.apply(this, arguments);
            }

            replaceAppRef(this.application, this.ref);
            stubValidSession(this.application, { isAuthenticated: true, currentUser: { uid: '123455555555555a' } });
        },

        afterEach() {
            let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
            unstubFirebase();
            this.server.shutdown();
            return Promise.resolve(afterEach).then(() => destroyApp(this.application));
        }
    });
}
