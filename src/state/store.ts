import {combineReducers, createStore, applyMiddleware, AnyAction} from "redux";
import {editModeReducer} from "./reducer";
import thunk, { ThunkDispatch } from 'redux-thunk'
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    counter : editModeReducer,
})

// Извлечь данные из localStorage
let preloaderState;
const persitedString = localStorage.getItem('app-state')
if(persitedString)
    preloaderState = JSON.parse(persitedString)


export const useAppDispatch: () => AppDispatch = useDispatch
export const store = createStore(rootReducer, preloaderState, applyMiddleware(thunk))


// Разместить данные в localStorage
store.subscribe( ()=>{
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})

//типизация dispatch
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export type AppRootStateType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store = store
