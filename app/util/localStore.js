export default {
	getItem:function(key){
		let value
		try{
			value=localStorage.getItem(key)
			return value;
		}catch(ex){
			if(__DEV__){
				console.log('localStorage.getItem报错',ex.message)
			}
		}
	},
	setItem:function(key,value){
		try{
			localStorage.setItem(key,value)
		}catch(ex){
			if(__DEV__){
				console.error("localStorage.setItem报错,",ex.message)
			}
		}
	}
}