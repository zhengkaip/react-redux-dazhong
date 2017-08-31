import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import CityHeader from './CityHeader'
import CitySelect from "./CitySelect"

export default class City extends React.Component{
	
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {};
	}

	componentDidMount() {
		console.log(this.props)
	}
	render(){
		return (
			<div>
				<CityHeader></CityHeader>
				<CitySelect></CitySelect>
			</div>
		)
	}
}