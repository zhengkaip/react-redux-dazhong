import React from 'react'
import {connect} from 'react-redux'

import AdLi from '../../../components/HomeAd'

import {getData} from '../../../fetch/home/home'


import "./style.scss"

class Ad extends React.Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	componentDidMount() {
		var result=getData()
		result.then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				adList:json
			})
		}).catch(er=>{
			if(__DEV__){
				console.error("获取数据模块报错",er.message)
			}
		});
	}

	render(){
		let adArr=this.state.adList;
		return (
			<div className="home-ad">
				<h3>超值特惠</h3>
				{
				 !adArr ? <p>正在加载中</p> :
					 <ul className="clear-fix">
					 {
						 adArr.map((item,index)=>{
						 	return <AdLi ad={item} key={index}></AdLi>
						 })
					 }
					 </ul>
				}
			</div>
		)
	}
}

function mapStateToProps(store){
	return{
		adList:store.adList
	}
}

export default connect(
	mapStateToProps
)(Ad)