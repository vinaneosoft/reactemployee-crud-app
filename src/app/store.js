import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import loginReducer from "../features/admin/loginSlice";

const store= configureStore({
    reducer:{
        counter:counterReducer,
        user:loginReducer
    }
});

export default store;