import "whatwg-fetch"
import "es6-promise"

/*将对象拼接 key1=val1&key2=val2&key3=val3 的字符串形式*/
function obj2params(obj){
	var result="";
	var item;
	for(var item in obj){
		result+="&"+item+"="+encodeURLComponent(obj[item]);
	}
	if(result){
		result=result.slice(1)
	}

	return result;
}

export function post(url,paramsObj){
	console.log("1+22")
	console.log(paramsObj)
	var result =fetch(url,{
		method:"POST",
		credentials:"include",
		headers:{
			'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
		},
		body:obj2params(paramsObj)
	})
	return result
}