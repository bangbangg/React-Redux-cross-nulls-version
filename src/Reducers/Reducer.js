import { CHANGE_FIRST, CHANGE_SECOND } from '../Actions/types';

const initialState = {
  player_1: 'Игрок 1',
  player_2: 'Игрок 2',
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIRST:
      return { ...state, player_1: action.player1 };
    case CHANGE_SECOND:
      return { ...state, player_2: action.player2 };
    default: return state;
  }
};
