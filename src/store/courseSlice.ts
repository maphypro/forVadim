import { createSlice } from "@reduxjs/toolkit";
import { Course } from "../types/Course.types";

type courseStateType = {
    id: number,
    activeCourse: Course,

}


const courseSlice = createSlice({
    name: 'course',
    initialState: {},
    reducers: {
        
    }
})

export default courseSlice.reducer