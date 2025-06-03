const baseUrls = 'https://jsonplaceholder.typicode.com'

export const urls = {
    users: {
        allUsers: baseUrls + '/users',
        byId: (id: number) => {
            return baseUrls + '/' + id;
        }
    },
    posts: {
        allUsers: baseUrls + '/posts',
        byId: (id: number) => {
            return baseUrls + '/' + id;
        },
        userPostById: (id: number) => {
            return baseUrls + '/posts?userId=' + id;
        }
    }
}