import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeSectionName: "",
    isSectionFullScreen: false,
    isPeekWindowActive: false
}

export const pageSlice = createSlice({
    name: 'pageState',
    initialState,
    reducers: {
        setSectionFullScreen: (state) => {
            state.isSectionFullScreen = !state.isSectionFullScreen;
        },

        setActiveSectionName: (state, action) => {
            state.activeSectionName = action.payload;
        },

        setIsPeekWindowActive: (state, action) => {
            state.isPeekWindowActive = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setIsPeekWindowActive, setActiveSectionName, setSectionFullScreen } = pageSlice.actions

export default pageSlice.reducer