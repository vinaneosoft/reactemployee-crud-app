import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    value: "",
  },
  reducers: {
    setUser: (state,action) => {
      state.value=action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser } = loginSlice.actions

const loginReducer= loginSlice.reducer
export default loginReducer

/* action:
setUser */