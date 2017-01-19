import Ember from 'ember';

export function stubValidSession(application, sessionData) {
    var session = application.__container__.lookup('service:firebaseSession');
    var sm = session.get('stateMachine');
    Ember.run(function () {
        sm.send('startOpen');
        sm.send('finishOpen', sessionData);
    });
}