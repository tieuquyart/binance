import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: 'Guest',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUsername: () => {},
    },
});

export const { updateUsername } = userSlice.actions;

export const selectUsername = (state) => state.user.username;

export default userSlice.reducer;
