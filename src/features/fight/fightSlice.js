import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    {
      name: "Ruel",
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      id: 5,
      avatar: "ruel.png",
    },
  ],
  monster: { name: "Nox", pv: 800, pvMax: 800 },
  lastAttackerId: null, // Ajout de lastAttackerId pour suivre le dernier attaquant
};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitMonster: (state, action) => {
      const { playerID, damage } = action.payload;
      return {
        ...state,
        monster: {
          ...state.monster,
          pv: state.monster.pv - damage,
        },
        lastAttackerId: playerID,
      };
    },
    hitSpecial: (state, action) => {
      const { playerID, damage } = action.payload;
      return {
        ...state,
        monster: {
          ...state.monster,
          pv: state.monster.pv - damage,
        },
      };
    },
    hitBack: (state, action) => {
      const { playerID } = action.payload;
      const damage = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
      console.log("hitback", playerID);

      return {
        ...state,
        players: state.players.map((player, index) => {
          if (player.id == playerID) {
            return {
              ...player,
              pv: player.pv - damage,
            };
          } else {
            return player;
          }
        }),
      };
    },
    // nextTurn: (state, action) => {},
  },
});

export default fightSlice.reducer;
export const { hitMonster, hitBack, hitSpecial } = fightSlice.actions;
