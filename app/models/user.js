import DS from 'ember-data';

export default DS.Model.extend({
    userID: DS.attr('string'),
    games: DS.hasMany('game', { async: true })
});
