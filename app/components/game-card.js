import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        markDone() {
            console.log("Marked done.");
        },

        remove() {
            console.log("Remove.");
        }
    }
});
