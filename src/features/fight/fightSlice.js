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
      bg: "Yugo-card.gif",
      color: "#4ecbd3",
      attaque: "elio/GA",
      heal: "elio/HEAL",
      special: "elio/ULT",
      petite: "elio/PA",
    },
    {
      name: "Evangelyne",
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      id: 4,
      avatar: "eve.png",
      bg: "Evangelyne-card.gif",
      color: "#7c8c24",
      attaque: "cra/GA",
      heal: "cra/HEAL",
      special: "cra/ULT",
      petite: "cra/PA",
    },
    {
      name: "Tristepin",
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      id: 2,
      avatar: "tristepin.png",
      bg: "Tristepin-card.gif",
      color: "#c23102",
      attaque: "iop/GA",
      heal: "iop/HEAL",
      special: "iop/ULT",
      petite: "iop/PA",
    },
    {
      name: "Amalia",
      pv: 100,
      pvMax: 100,
      mana: 30,
      manaMax: 30,
      id: 3,
      avatar: "amalia.png",
      bg: "Amalia-card.gif",
      color: "#72bd06",
      attaque: "sadi/GA",
      heal: "sadi/HEAL",
      special: "sadi/ULT",
      petite: "sadi/PA",
    },
  ],
  monster: { id: 1, name: "Nox", pv: 800, pvMax: 800, color: "#d99f06" },
  lastAttackerId: null, // Ajout de lastAttackerId pour suivre le dernier attaquant
  playersWhoPlayed: [],
  // deadPlayers: [],
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
      const { damage } = action.payload;
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
        players: state.players.map((player) => {
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
    heal: (state, action) => {
      const { playerID, healAmount } = action.payload;
      return {
        ...state,
        players: state.players.map((player) => {
          if (player.id === playerID) {
            let newPv = player.pv + healAmount;
            if (newPv > 100) {
              newPv = 100;
            }
            return {
              ...player,
              pv: newPv,
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
export const { hitMonster, hitBack, hitSpecial, heal } = fightSlice.actions;
