import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [
    {
      name: "Yugo",
      pv: 200,
      pvMax: 200,
      mana: 50,
      manaMax: 50,
      id: 1,
      avatar: "yugo.png",
      bg: "Yugo-card.gif",
      color: "#4ecbd3",
      petite: "elio/PA",
      attaque: "elio/GA",
      special: "elio/ULT",
      heal: "elio/HEAL",
      titlePA: "Pulsation",
      titleGA: "Raclée",
      titleULT: "Tempête",
      titleHEAL: "Empreinte de Wakfu ",
    },
    {
      name: "Evangelyne",
      pv: 200,
      pvMax: 200,
      mana: 50,
      manaMax: 50,
      id: 4,
      avatar: "eve.png",
      bg: "Evangelyne-card.gif",
      color: "#7c8c24",
      petite: "cra/PA",
      attaque: "cra/GA",
      special: "cra/ULT",
      heal: "cra/HEAL",
      titlePA: "Flèche harcelante",
      titleGA: "Flèche enflammée",
      titleULT: "Pluie de flèches",
      titleHEAL: "Tireur solitaire",
    },
    {
      name: "Tristepin",
      pv: 200,
      pvMax: 200,
      mana: 50,
      manaMax: 50,
      id: 2,
      avatar: "tristepin.png",
      bg: "Tristepin-card.gif",
      color: "#c23102",
      petite: "iop/PA",
      attaque: "iop/GA",
      special: "iop/ULT",
      heal: "iop/HEAL",
      titlePA: "Super Iop Punch",
      titleGA: "Fulgur",
      titleULT: "Impact",
      titleHEAL: "Virilité ",
    },
    {
      name: "Amalia",
      pv: 200,
      pvMax: 200,
      mana: 50,
      manaMax: 50,
      id: 3,
      avatar: "amalia.png",
      bg: "Amalia-card.gif",
      color: "#72bd06",
      petite: "sadi/PA",
      attaque: "sadi/GA",
      special: "sadi/ULT",
      heal: "sadi/HEAL",
      titlePA: "Kohmir 5 ATK",
      titleGA: "Ronce",
      titleULT: "Ronces Multiples",
      titleHEAL: "Sacrifice Poupesque",
    },
  ],
  monster: { id: 1, name: "Nox", pv: 400, pvMax: 400, color: "#d99f06" },
  lastAttackerId: null,
  victory: false,
  defeat: false,
  // playersWhoPlayed: [],
  // deadPlayers: [],
};

export const fightSlice = createSlice({
  name: "fight",
  initialState,
  reducers: {
    hitPA: (state, action) => {
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
    hitGA: (state, action) => {
      const { playerID, damage } = action.payload;
      return {
        ...state,
        monster: {
          ...state.monster,
          pv: state.monster.pv - damage,
        },
        players: state.players.map((player) => {
          if (player.id === playerID) {
            return {
              ...player,
              mana: player.mana - 5,
            };
          } else {
            return player;
          }
        }),
        lastAttackerId: playerID,
      };
    },
    hitULT: (state, action) => {
      const { playerID, damage } = action.payload;
      return {
        ...state,
        monster: {
          ...state.monster,
          pv: state.monster.pv - damage,
        },
        players: state.players.map((player) => {
          if (player.id === playerID) {
            return {
              ...player,
              mana: player.mana - 25,
            };
          } else {
            return player;
          }
        }),
      };
    },
    hitBack: (state, action) => {
      const { playerID } = action.payload;
      const damage = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
      if (state.monster.pv > 0) {
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
      }
    },
    heal: (state, action) => {
      const { playerID, healAmount } = action.payload;
      return {
        ...state,
        players: state.players.map((player) => {
          if (player.id === playerID) {
            let newPv = player.pv + healAmount;
            if (newPv > 200) {
              newPv = 200;
            }
            return {
              ...player,
              pv: newPv,
              mana: player.mana - 10,
            };
          } else {
            return player;
          }
        }),
      };
    },
    victory: (state) => {
      state.victory = true;
    },
    defeat: (state) => {
      state.defeat = true;
    },
    resetGame: () => initialState,
  },
});

export default fightSlice.reducer;
export const {
  hitPA,
  hitBack,
  hitGA,
  hitULT,
  heal,
  victory,
  defeat,
  resetGame,
} = fightSlice.actions;
