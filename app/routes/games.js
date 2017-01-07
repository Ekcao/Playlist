import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.query('game', {
            userID: 'nhFO1OeCtsauRtJpSHoyxHBsyjB2',
            orderBy: 'title'
        });
    }
});
