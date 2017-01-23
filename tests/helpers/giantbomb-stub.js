import Ember from 'ember';

export default Ember.Service.extend({
    data: {
        results: [{
            name: 'Overwatch',
            image: {
                icon_url: 'assets/images/overwatch.jpg'
            },
            id: 48190
        }]
    },

    searchGameByName(query) {
        let data = this.get('data');
        return new Promise(
            function (resolve, reject) {
                if (query === 'Overwatch') {
                    resolve(data);
                } else {
                    reject();
                }
            }
        );
    },
    getGameByID(id) {
        let data = this.get('data');
        return new Promise(
            function (resolve, reject) {
                resolve(data);
            }
        );
    }
});