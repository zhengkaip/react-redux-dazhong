import React from 'react'
import {connect} from 'react-redux'
import {browserHistory,hashHistory} from "react-router"

import PureRenderMixin from 'react-addons-pure-render-mixin'

class SearchInput extends React.Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	keyWord:""
	  };
	}


	render(){
		return (
			<input type="text" placeholder={this.props.placeholder} value={this.state.keyWord} onChange={this.inputChange.bind(this)} onKeyUp={this.inputUp.bind(this)}/>
		)
	}
	inputChange(e){
		let keyWord=e.target.value
		this.setState({
			keyWord
		})
	}
	inputUp(e){
		if(e.keyCode!==13){
			return 
		}
		browserHistory.push("/search/all/"+encodeURIComponent(this.state.keyWord));
	}
}


export default connect(

)(SearchInput)
