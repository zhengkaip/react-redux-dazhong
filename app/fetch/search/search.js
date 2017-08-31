import {get} from "../get"

export function getList(page,city,category,keyword){
	keyword=keyword?keyword:""
	const result=get("/api/search/"+page+"/"+city+"/"+category+"/"+keyword)
	return result
}