export const createUser = `
mutation createUser($input: CreateUserInput!) {
    createUser(input: $input){
        id
    }
}
`;

export const getUserByLogin = `
query getUserByLogin($username: String!, $password: String!) {
    listUsers(filter: {and: {username: {eq: $username}, password: {eq: $password}}}) {
        items {
            id
            firstName
            lastName
            username
            password
            team
        }
    }
}  
`;

export const updateUserTeam = `
mutation updateUserTeam($id: ID!, $team: ID) {
    updateUser(input: {id: $id, team: $team}){
        id
    }
}
`;

export const getUsersByTeam = `
query usersByTeam($team: ID = null) {
    usersByTeam(team: $team) {
        items {
            id
            firstName
            lastName
            username
            password
            team
        }
    }
}  
`;