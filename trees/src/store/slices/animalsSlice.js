import { createSlice } from "@reduxjs/toolkit"


export const animalsSlice = createSlice({
    name: 'animals',
    initialState: {
        animals: []
    },
    reducers: {
        set: (state, { payload }) => void(state.animals = payload.animals)
    }
});



export const { set } = animalsSlice.actions
export default animalsSlice.reducer