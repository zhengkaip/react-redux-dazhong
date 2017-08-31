import {get} from "../get.js"

export function getInfo(id){
	const result = get("/api/info/"+id)
	return result
}

export function getEvaluateList(id,page){
	const result = get("/api/evaluateList/"+id+"/"+page)
	return result
}