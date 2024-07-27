import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    navElementName: "",
    isNavActive: false,
    isSectionFullScreen: false,
}

export const pageSlice = createSlice({
    name: 'pageState',
    initialState,
    reducers: {
        setSectionFullScreen: (state) => {
            state.isSectionFullScreen = !state.isSectionFullScreen;
        },

        setNavElementName: (state, action) => {
            state.navElementName = action.payload;
        },

        setIsNavActive: (state, action) => {
            state.isNavActive = action.payload;
        }

    },
})

// Action creators are generated for each case reducer function
export const { setIsNavActive, setSectionFullScreen, setNavElementName } = pageSlice.actions

export default pageSlice.reducer