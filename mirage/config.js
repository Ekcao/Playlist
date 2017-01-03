export default function () {
    this.namespace = '/api';

    this.get('/games', function () {
        return {
            data: [{
                type: 'game',
                id: 'the-last-guardian',
                attributes: {
                    title: 'The Last Guardian',
                    platforms: ['PlayStation 4'],
                    developers: 'Blizzard Entertainment',
                    genres: ['Action-adventure'],
                    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/munqfxbnf1ur93vajjtq.jpg'
                }
            }, {
                type: 'game',
                id: 'overwatch',
                attributes: {
                    title: 'Overwatch',
                    platforms: ['PlayStation 4', 'Xbox One', 'PC'],
                    developers: 'Sony Entertainment',
                    genres: ['First-person shooter'],
                    image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/yob05bs5ffigu3rmrni1.jpg'
                }
            }]
        };
    });
}
