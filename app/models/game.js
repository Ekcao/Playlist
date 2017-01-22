import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    platforms: DS.attr(),
    developers: DS.attr(),
    publishers: DS.attr(),
    genres: DS.attr(),
    image: DS.attr(),
    isDone: DS.attr('boolean'),
    extID: DS.attr('string'),
    description: DS.attr('string'),
    releaseDate: DS.attr('date'),
    addedDate: DS.attr('date'),
    user: DS.belongsTo('user'),

    toggleDone() {
        this.set('isDone', !this.get('isDone'));
    }
});
