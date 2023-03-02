import {configureStore} from "@reduxjs/toolkit"
import language from "./slices/languageSlice"
import autoComplete from "./slices/autoCompleteSlice"




export default configureStore ({

    reducer : {
        language,
        autoComplete
    }
});