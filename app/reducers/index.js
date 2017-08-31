import userInfo from "./userInfo"
import store from "./store"
import {combineReducers} from "redux"
import {routerReducer} from "react-router-redux"

export default combineReducers({
	userInfo,
	store,
	routing:routerReducer
})

