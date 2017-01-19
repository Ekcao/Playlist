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
        return this.request('/game/' + id, this.get('params'));
    },

    searchGameByName(query) {
        let params = deepCopy(this.get('params'));
        params.data['resources'] = 'game';
        params.data['field_list'] = 'id,name,image';
        params.data['query'] = query;
        return this.request('/search/', params);
    }
});
