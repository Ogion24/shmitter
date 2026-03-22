import {CHANGE_STATS} from "../actions/statsActions.js";
import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions.js";


/*
type State = {
    user: {
        avatar: string,
        name: string
    },
    stats: {
        followers: number,
        following: number
    }
}
 */
export const shmitterReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}};//вытрусили объект state -->>
        // получили 2 поля stats без изменений и  user в котором мы меняем только avatar
        case CHANGE_NAME:
            return {...state, user: {...state.user, name: action.payload || state.user.name}};
        case CHANGE_STATS: {//ставим фиг.скобки когда несколько строк кода
            const res = state.stats[action.payload.statsType] + action.payload.sum;//from action
            const stats = {...state.stats, [action.payload.statsType]: res < 0 ? 0 : res};
            return {...state, stats};
        }
        default:
            return state;
    }
}