import React,{Component} from 'React'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import OderItem from "../../../components/OrderItem"

import getOrderList from "../../../fetch/userCenter/orderList.js"

export default class OrderList extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	 loadOver:false,
	  	 data:""
	  };
	}

	render(){
		return (
			<div className="order-list-container">
				<h2>您的订单</h2>
				{
					this.state.loadOver?
					this.state.data.map((item, index)=>{
						return <OderItem itemData={item} key={index} clickSubmit={this.clickSubmit.bind(this)}/>;
					})
					:
					<p>正在加载中。。。</p>
				}
			</div>
		)
	}

	clickSubmit(){

	}

	componentDidMount() {
		let result=getOrderList({});
		console.log(result)
		result.then((response)=>{
			return response.json()
		}).then((json)=>{
			this.setState({
				loadOver:true,
				data:json
			})
		})
	}
}