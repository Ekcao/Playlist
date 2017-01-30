/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'to-play-list',
        environment: environment,
        rootURL: '/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            },
            EXTEND_PROTOTYPES: {
                // Prevent Ember Data from overriding Date.parse.
                Date: false
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        },

        firebase: {
            apiKey: 'AIzaSyBNpYukZtt7ZOuj8FEpLTjGu0cxR5bri1o',
            authDomain: 'toplaylist-a531e.firebaseapp.com',
            databaseURL: 'https://toplaylist-a531e.firebaseio.com',
            storageBucket: 'toplaylist-a531e.appspot.com/'
        },

        torii: {
            sessionServiceName: 'firebaseSession'
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {
        ENV.rootURL = '/Playlist';
        ENV.locationType = 'hash';
    }

    return ENV;
};
