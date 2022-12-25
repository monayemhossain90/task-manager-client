import {configureStore} from "@reduxjs/toolkit";
import settingReducer from "../state-slice/Settings-Slice";
import taskReducer from "../state-slice/Task-Slice";
import summaryReducer from "../state-slice/Summary-Slice";
import profileReducer from "../state-slice/Profile-Slice"

 export  default configureStore({
    reducer:{
        settings:settingReducer,
        task:taskReducer,
        summary:summaryReducer,
        profile:profileReducer
    }
})