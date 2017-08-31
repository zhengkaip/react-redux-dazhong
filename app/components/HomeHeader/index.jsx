import React from 'react'
import {Link,browserHistory} from "react-router"

import SearchInput from "../SearchInput"

import "./style.scss"

export default class Home extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	keyWord:""
	  };
	}

	componentDidMount() {
		
	}

	render(){
		return (
			<div className="home-header float-fix">
				<div className="home-city float-left">
					<Link to="/city">
						<span>{this.props.cityName}</span>
						<i className="icon-angle-down"></i>
					</Link>
				</div>
				<div className="home-input float-left">
					<SearchInput placeholder="请输入你要搜索的内容"/>
					<i className="icon-search"></i>
				</div>
				<div className="float-right">
					<Link to="/login">
						<i className="icon-user"></i>
					</Link>
				</div>
			</div>
		)
	}

}
