import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // TODO : Compléter 'players' et 'monster'
  players: [
    {
      name: "Yugo",
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      id: 1,
      avatar: "yugo.png",
    },
    {
      name: "Tristepin",
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      id: 2,
      avatar: "tristepin.png",
    },
    {
      name: "Amalia",
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      id: 3,
      avatar: "amalia.png",
    },
    {
      name: "Evangéline",
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      id: 4,
      avatar: "eve.png",
    },
  ],
  monster: { name: "oropo", pv: 800, pvMax: 800 },
};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      state.monster = {
        ...state.monster, // spread operator
        pv: state.monster.pv - action.payload.damage,
      };
    },
    // hitBack: () => {},
  },
});

export default fightSlice.reducer;
export const { hitMonster } = fightSlice.actions;
