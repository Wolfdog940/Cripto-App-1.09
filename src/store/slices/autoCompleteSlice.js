import { createSlice } from "@reduxjs/toolkit";


export const autoCompleteSlice = createSlice ({

    name:"autoComplete",
    initialState:{
        autoComplete:false
    },
    reducers:{
        setAutoComplete : ( state , action) => {
            state.autoComplete = action.payload;
        },
        
    },

});

export const { setAutoComplete } = autoCompleteSlice.actions;
export default autoCompleteSlice.reducer