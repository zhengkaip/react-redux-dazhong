import * as actionType from "../../constants/store"


const initialState=[];

export default function storeUpdate(state=initialState,action){
	console.log(action)
	switch(action.type){
		case actionType.COLLECT_UPDATE:
			return action.data
		break;
		case actionType.COLLECT_ADD:
			state.unshift(action.data)
			return state
		break;
		case actionType.COLLECT_MV:
			return state.filter(function(item) {
                  if(item.id!==action.data.id){
                  	return item
                  }
			});
		break;
		default:
			return state
	}
}
