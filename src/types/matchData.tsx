interface MatchData {
    user: string;
    event: string;
    match: string;
    team: string;
    autonomous: {
        leave: boolean;
        speaker: {
            success: number;
            fail: number;
        };
        amp: {
            success: number;
            fail: number;
        };
        ringsCollected: number[];
    };
    teleop: {
        shootingPositions: string[];
        speaker: {
            success: number;
            fail: number;
        };
        amp: {
            success: number;
            fail: number;
        };
    };
    endgame: {
        stage: string;
        spotlit: boolean;
        trap: {
            successed: boolean;
            tried: boolean;
        };
    };
    comments: {
        defense: string;
        penalties: string;
        other: string;
    };
    fouls: {
        fouls: number;
        techFouls: number;
    }
}