export interface ListMatchData {
    listMatchData: {
        items: MatchData[];
    };
};

export interface ListUsers {
    listUsers: {
        items: User[];
    };
};

export interface ListUsersByTeam {
    usersByTeam: {
        items: User[];
    }
}

export interface ListTeams {
    listTeams: {
        items: [{
            id: string;
            name: string;
            number: number;
            description: string;
            image: string;
            admin: string[];
            Users: {
                items: User[];
            }
        }]
    }
}

export interface CreateTeam {
    createTeam: {
        id: string;
    };
};

export interface UserInput {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    team?: string | null;
};
