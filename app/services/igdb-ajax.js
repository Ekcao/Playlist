import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
    host: 'https://igdbcom-internet-game-database-v1.p.mashape.com',
    headers: { 'X-Mashape-Key': '', 'Accept': 'application/json' },

    platforms() {
        return this.request('/platforms/', {
            method: 'GET',
            data: {
                fields: 'name'
            }
        });
    }
});
