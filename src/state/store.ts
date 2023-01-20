import {combineReducers, createStore} from "redux";
import {editModeReducer} from "./reducer";

const rootReducer = combineReducers({
    editMode : editModeReducer,
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store
