const baseReqresUrl = 'https://reqres.in'

export const getUsersPage = async (pg: number) => {
    return await fetch(baseReqresUrl + '/api/users?page=' + pg)
        .then(response => response.json())
}