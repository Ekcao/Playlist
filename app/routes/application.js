import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function () {
        let self = this;
        return this.get('firebaseSession')
            .fetch()
            .catch(function () {
                if (!self.get('firebaseSession').isAuthenticated) {
                    self.replaceWith('signin');
                }
            });
    }
});
