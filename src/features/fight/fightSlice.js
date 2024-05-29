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
    hitBack: (state) => {
      const monsterDamage = Math.floor(Math.random() * (10 - 5 + 1)) + 5; // daño del monstruo cuando contraataca

      // Slelection un joueur aléatoire
      const randomIndex = Math.floor(Math.random() * state.players.length);
      const randomPlayer = state.players[randomIndex];

      // Réduire la vie d'un joueur random
      state.players = state.players.map(player => 
        player.id === randomPlayer.id
          ? { ...player, pv: Math.max(player.pv - monsterDamage, 0) }
          : player
      );
    }
  },
});

export default fightSlice.reducer;
export const { hitMonster, hitBack } = fightSlice.actions;