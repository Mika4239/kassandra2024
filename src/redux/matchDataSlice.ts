import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  CommentsState,
  ReduxInput,
  SelectMatchState,
} from "../types/interfaces";

const initialState: MatchData = {
  user: "",
  event: "",
  match: "",
  team: "",
  autonomous: {
    leave: false,
    speaker: {
      success: 0,
      fail: 0,
    },
    amp: {
      success: 0,
      fail: 0,
    },
    ringsCollected: [],
  },
  teleop: {
    shootingPositions: ["none"],
    speaker: {
      success: 0,
      fail: 0,
    },
    amp: {
      success: 0,
      fail: 0,
    },
  },
  endgame: {
    stage: "NONE",
    spotlit: false,
    trap: {
      succeeded: false,
      tried: false
    },
  },
  comments: {
    defense: "",
    penalties: "",
    other: "",
  },
  fouls: {
    fouls: 0,
    techFouls: 0
  }
};

export const matchDataSlice = createSlice({
  name: "matchData",
  initialState: initialState,
  reducers: {
    resetAllMatchData: (state) => {
      state.user = initialState.user;
      state.event = initialState.event;
      state.match = initialState.match;
      state.team = initialState.team;
      state.autonomous = initialState.autonomous;
      state.teleop = initialState.teleop;
      state.endgame = initialState.endgame;
      state.comments = initialState.comments;
    },
    resetMatchData: (state) => {
      (state.autonomous = initialState.autonomous),
        (state.teleop = initialState.teleop),
        (state.endgame = initialState.endgame),
        (state.comments = initialState.comments);
    },
    setMatchDataUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    setMatchTeam: (state, action: PayloadAction<ReduxInput>) => {
      if (action.payload.name == "event") {
        state.match = "";
        state.team = "";
      }
      if (action.payload.name == "match") {
        state.team = "";
      }
      state[action.payload.name as keyof SelectMatchState] =
        action.payload.input;
    },
    setLeave: (state, action: PayloadAction<boolean>) => {
      state.autonomous.leave = action.payload;
    },
    addRingCollected: (state, action: PayloadAction<number>) => {
      state.autonomous.ringsCollected.push(action.payload);
    },
    removeRingcollected: (state, action: PayloadAction<number>) => {
      state.autonomous.ringsCollected = state.autonomous.ringsCollected.filter(
        (ring) => ring != action.payload
      );
    },
    setAutonomousSpeakerSuccess: (state, action: PayloadAction<number>) => {
      state.autonomous.speaker.success = action.payload;
    },
    setAutonomousSpeakerFail: (state, action: PayloadAction<number>) => {
      state.autonomous.speaker.fail = action.payload;
    },
    setAutonomousAmpSuccess: (state, action: PayloadAction<number>) => {
      state.autonomous.amp.success = action.payload;
    },
    setAutonomousAmpFail: (state, action: PayloadAction<number>) => {
      state.autonomous.amp.fail = action.payload;
    },
    addShootingPosition: (state, action: PayloadAction<string>) => {
      state.teleop.shootingPositions.push(action.payload);
    },
    removeShootingPosition: (state, action: PayloadAction<string>) => {
      state.teleop.shootingPositions = state.teleop.shootingPositions.filter(
        (position) => position != action.payload
      );
    },
    setTeleopSpeakerSuccess: (state, action: PayloadAction<number>) => {
      state.teleop.speaker.success = action.payload;
    },
    setTeleopSpeakerFail: (state, action: PayloadAction<number>) => {
      state.teleop.speaker.fail = action.payload;
    },
    setTeleopAmpSuccess: (state, action: PayloadAction<number>) => {
      state.teleop.amp.success = action.payload;
    },
    setTeleopAmpFail: (state, action: PayloadAction<number>) => {
      state.teleop.amp.fail = action.payload;
    },
    setStage: (state, action: PayloadAction<string>) => {
      state.endgame.stage = action.payload;
    },
    setSpotlit: (state, action: PayloadAction<boolean>) => {
      state.endgame.spotlit = action.payload;
    },
    setTrapSuccessed: (state, action: PayloadAction<boolean>) => {
      state.endgame.trap.succeeded = action.payload;
    },
    setTrapTried: (state, action: PayloadAction<boolean>) => {
      state.endgame.trap.tried = action.payload;
    },
    setComments: (state, action: PayloadAction<ReduxInput>) => {
      state.comments[action.payload.name as keyof CommentsState] =
        action.payload.input;
    },
    setFouls: (state, action: PayloadAction<number>) => {
      state.fouls.fouls = action.payload;
    },
    setTechFouls: (state, action: PayloadAction<number>) => {
      state.fouls.techFouls = action.payload;
    }
  },
});

export const {
  resetAllMatchData,
  resetMatchData,
  setMatchDataUser,
  setMatchTeam,
  setLeave,
  addRingCollected,
  removeRingcollected,
  setAutonomousSpeakerSuccess,
  setAutonomousSpeakerFail,
  setAutonomousAmpSuccess,
  setAutonomousAmpFail,
  addShootingPosition,
  removeShootingPosition,
  setTeleopSpeakerSuccess,
  setTeleopSpeakerFail,
  setTeleopAmpSuccess,
  setTeleopAmpFail,
  setStage,
  setSpotlit,
  setTrapSuccessed,
  setTrapTried,
  setComments,
  setFouls,
  setTechFouls
} = matchDataSlice.actions;

export default matchDataSlice.reducer;
