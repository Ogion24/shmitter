import {createSlice} from "@reduxjs/toolkit";

const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        followers: 0,
        following: 0
    },
    reducers: {
        changeStats: {
            reducer: (state, action) => {
                const res = state[action.payload.statsType] + action.payload.sum;
                state[action.payload.statsType] = res < 0 ? 0 : res;
            },
            prepare: (statsType, sum) => ({payload: {statsType, sum}})//запускает сначала prepare,а потом reducer
        }
    }
}) //statsSlice  генерирует экшен : у которого  Type -->> stats/changeStats,а payload= то что принимает экшенкриэйтр

export const {changeStats} = statsSlice.actions;//по умолчанию передает только 1 аргумент--->>> нужно передавать объект(Stats:20,23,28,31)
export default statsSlice.reducer;