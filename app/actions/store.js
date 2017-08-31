import * as actionType from "../constants/store.js"

export function storeUpdate(data){
	return {
		type:actionType.COLLECT_UPDATE,
		data
	}
}
export function storeAdd(data){
	return {
		type:actionType.COLLECT_ADD,
		data
	}
}
export function storeMv(data){
	return {
		type:actionType.COLLECT_MV,
		data
	}
}