import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    platforms: DS.attr(),
    developers: DS.attr('string'),
    genres: DS.attr(),
    image: DS.attr('string'),
    isDone: DS.attr('boolean'),
    userID: DS.attr('string'),

    toggleDone() {
        this.set('isDone', !this.get('isDone'));
    }
});
