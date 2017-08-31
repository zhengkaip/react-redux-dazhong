import * as actionType from '../../constants/userInfo'

const initialState={}

export default function userInfo (state=initialState,action){
	switch(action.type){
		case actionType.USERINFO_UPDATE:
			return Object.assign({}, state,action.data)
		default:
			return state
	}
}