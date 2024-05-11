import { createSlice } from "@reduxjs/toolkit";

type userStateType = {
    id: number,
    isAuth: boolean
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {

    }
})

export default userSlice.reducer;