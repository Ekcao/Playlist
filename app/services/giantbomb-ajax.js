import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import deepCopy from '../util/deep-copy';

export default AjaxService.extend({
    host: 'http://www.giantbomb.com',
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
        let params = deepCopy(this.get('params'));
        params.data['field_list'] = 'name,image';
        return this.request('/game/' + id + '/', params);
    },

    searchGameByName(query) {
        let params = deepCopy(this.get('params'));
        params.data['field_list'] = 'name,image';
        params.data['resources'] = 'game';
        params.data['query'] = query;
        return this.request('/search/', params);
    }
});
