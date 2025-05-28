const baseUrls = 'https://jsonplaceholder.typicode.com'

export const urls = {
    users: {
        allUsers: baseUrls + '/users',
        byId: (id: number) => {
            return baseUrls + '/' + id;
        }
    },
    posts: {

    }
}