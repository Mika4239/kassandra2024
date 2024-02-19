export const createMatchData = `
mutation createMatchData($input: CreateMatchDataInput!) {
    createMatchData(input: $input){
        id
    }   
}
`;

export const getAllMatchData = `
{
    listMatchData{
        items{
            event
            match
            team
            user
            autonomous{
                leave
                speaker{
                    success
                    fail
                }
                amp{
                    success
                    fail
                }
                ringsCollected
            }
            teleop{
                speaker{
                    success
                    fail
                }
                amp{
                    success
                    fail
                }
            }
            endgame{
                stage
                spotlit
                trap
            }
            comments{
                defence
                penalties
                other 
            }
        }
    }
}
`;
