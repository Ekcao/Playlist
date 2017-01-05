import Ember from 'ember';

let data = [{
    type: 'game',
    id: 'the-last-guardian',
    title: 'The Last Guardian',
    platforms: ['PlayStation 4'],
    developers: 'Blizzard Entertainment',
    genres: ['Action-adventure'],
    done: false,
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/munqfxbnf1ur93vajjtq.jpg'
}, {
    type: 'game',
    id: 'overwatch',
    title: 'Overwatch',
    platforms: ['PlayStation 4', 'Xbox One', 'PC'],
    developers: 'Sony Entertainment',
    genres: ['First-person shooter'],
    done: false,
    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/yob05bs5ffigu3rmrni1.jpg'
}];

export default Ember.Route.extend({
    model() {
        var user = this.get('firebaseSession').get('currentUser');
        console.log(user);
        return data;
    }
});
