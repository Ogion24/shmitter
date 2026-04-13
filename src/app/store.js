import user from '../features/user/userSlice.js';
import stats from '../features/stats/statsSlice.js';
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        user, stats
    }
});