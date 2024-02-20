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
    stage: "",
    spotlit: false,
    trap: false,
  },
  comments: {
    defense: "",
    penalties: "",
    other: "",
  },
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
    setTrap: (state, action: PayloadAction<boolean>) => {
      state.endgame.trap = action.payload;
    },
    setComments: (state, action: PayloadAction<ReduxInput>) => {
      state.comments[action.payload.name as keyof CommentsState] =
        action.payload.input;
    },
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
  setTeleopSpeakerSuccess,
  setTeleopSpeakerFail,
  setTeleopAmpSuccess,
  setTeleopAmpFail,
  setStage,
  setSpotlit,
  setTrap,
  setComments,
} = matchDataSlice.actions;

export default matchDataSlice.reducer;
