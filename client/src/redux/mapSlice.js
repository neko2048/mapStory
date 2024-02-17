import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    maps: [],
};

export const mapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        addMap: (state, action) => {
            state.maps =[...state.maps, { ...action.payload }];
        },
    },
});

// Action creators are generated for each case reducer function
export const { addMap } = mapSlice.actions;

export default mapSlice.reducer;