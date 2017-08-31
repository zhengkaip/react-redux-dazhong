import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchInput from "../../../components/SearchInput"

import "./style.scss"

export default class SearchHeader extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate;
	  this.state = {};
	}

	render(){
		return (
			<div className="clear-fix search-header">
				<div className="float-left return-page" onClick={this.bank}>
					<i className="icon-chevron-left"></i>
				</div>
				<div className="float-left search-input">
					<i className="icon-search"></i>
					<SearchInput placeholder="请输入关键字"/>
				</div>
			</div>
		)
	}
	bank(){
		window.history.back();
	}

}