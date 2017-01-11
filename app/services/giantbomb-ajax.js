import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
    host: 'http://www.giantbomb.com',
    namespace: '/api',
    params: {
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        data: {
            'api_key': 'c2afe7f1d7fb57fc0a4a0fe45085f06030b8ec76',
            'format': 'jsonp',
        }
    },

    getGame(id) {
        let params = this.get('params');
        params.data['field_list'] = 'name,image';
        return this.request('/game/' + id + '/', params);
    }
});
