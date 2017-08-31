import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import SearchHeader from './Header'
import ResultList from './ResultList'

class Search extends React.Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {

	  };
	}

	componentDidMount() {
		console.log(2222)
		console.log(this.props.history)
		
	}

	componentWillUpdate(){
		console.log("几把")
	}

	render(){
		let category=this.props.params.category
		let keyWord=this.props.params.keyWord
		console.log(category+"j"+keyWord)
		return (
			<div>
				<SearchHeader/>
				<ResultList paramsCategor={category} paramsKeyWord={keyWord?keyWord:""}/>
			</div>
		)
	}
}

export default Search