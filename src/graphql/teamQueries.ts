export const createTeam = `
mutation createTeam($input: CreateTeamInput!) {
    createTeam(input: $input){
        id
    }
}  
`;

export const getAllTeams = `
query listTeams {
    listTeams {
        items {
            id
            name
            number
            description
            image
            admin
            Users {
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
    }
}  
`;