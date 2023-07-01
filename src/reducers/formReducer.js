import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    HighestQualification: 'B.Tech',
    InstituteName: 'NIT',
    Course: 'CSE',
    YearsExperience: 3
}

export const formSlice = createSlice({
    name: 'form',
    initialState: { value: initialStateValue },
    reducers: {
        update: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {update} = formSlice.actions;

export default formSlice.reducer;