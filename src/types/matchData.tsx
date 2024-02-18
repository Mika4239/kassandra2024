interface MatchData {
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
        trap: boolean;
    };
    comments: {
        defence: string;
        penalties: string;
        other: string;
    };
}