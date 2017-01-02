import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    platforms: DS.attr(),
    genres: DS.attr('string'),
    image: DS.attr('string')
});
