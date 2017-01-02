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
                    genres: 'Action-adventure',
                    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/The_Last_Guardian_cover_art.jpg/250px-The_Last_Guardian_cover_art.jpg'
                }
            }, {
                type: 'game',
                id: 'overwatch',
                attributes: {
                    title: 'Overwatch',
                    platforms: ['PlayStation 4', 'Xbox One', 'PC'],
                    genres: 'First-person shooter',
                    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Overwatch_cover_art_%28PC%29.jpg/250px-Overwatch_cover_art_%28PC%29.jpg'
                }
            }]
        };
    });
}
