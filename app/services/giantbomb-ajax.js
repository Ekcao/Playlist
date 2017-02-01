import AjaxService from 'ember-ajax/services/ajax';
import deepCopy from '../util/deep-copy';
import Ember from 'ember';

export default AjaxService.extend({
    store: Ember.inject.service(),
    host: 'https://www.giantbomb.com',
    namespace: '/api',
    params: {
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        data: {
            api_key: 'c2afe7f1d7fb57fc0a4a0fe45085f06030b8ec76',
            format: 'jsonp',
        }
    },

    getGameByID(id) {
        return this.request('/game/' + id, this.get('params'));
    },

    searchGameByName(query) {
        let params = deepCopy(this.get('params'));
        params.data['resources'] = 'game';
        params.data['field_list'] = 'id,name,image';
        params.data['query'] = query;
        return this.request('/search/', params);
    },

    createGameFromData(data) {
        let game = this.get('store').createRecord('game', {
            name: data.name,
            platforms: data.platforms,
            developers: data.developers,
            publishers: data.publishers,
            genres: data.genres,
            image: data.image,
            isDone: false,
            extID: data.id,
            description: data.description,
            releaseDate: new Date(data.original_release_date),
            addedDate: new Date()
        });
        return game;
    }
});
