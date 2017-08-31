import {post} from "../post.js"

export default function(paramsObj){
	let result = post("/api/orderList",paramsObj)
	return result
}