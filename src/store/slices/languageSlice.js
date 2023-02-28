import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language", //nombramos la lista
  initialState: {
    language: "es",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload; //para que mi estado este en la respuesta
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
