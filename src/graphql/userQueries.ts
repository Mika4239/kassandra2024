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
        }
    }
}  
`;