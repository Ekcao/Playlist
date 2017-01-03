import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    platforms: DS.attr(),
    developers: DS.attr('string'),
    genres: DS.attr(),
    image: DS.attr('string')
});
