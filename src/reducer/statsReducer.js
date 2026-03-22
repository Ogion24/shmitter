import {CHANGE_STATS} from "../actions/statsActions.js";

const initialState = {
    followers: 0,
    following: 0
}

export const statsReducer = (state = initialState, action) => {
    switch (action.type) {//какой экшен пришел
        case CHANGE_STATS: {//ставим фиг.скобки когда несколько строк кода
            const current = state[action.payload.statsType] || 0;
            const res = current + action.payload.sum;
            return {...state, [action.payload.statsType]: res <0 ? 0 : res };
        }
        default:
            return state;
    }
}