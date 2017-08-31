import React from 'react'
import { Router, Route, IndexRoute,hashHistory ,browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { Provider } from 'react-redux'

import configureStore from '../store'
import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import Search from "../containers/Search"
import Detail from "../containers/Detail"
import Login from "../containers/Login"
import UserCenter from "../containers/UserCenter"
import NotFound from "../containers/NotFound"


// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps


var Store=configureStore();

const history = syncHistoryWithStore(browserHistory, Store);



class RouterMap extends React.Component {
    constructor(props) {
        super(props);
    }

    goSearch(){
        console.log(111)
    }

    render() {
        return (
            <Provider store={Store}>
                <Router history={history}>
                    <Route path='/' component={App}>
                        <IndexRoute component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/city" component={City} />
                        <Route path="/search/:category(/:keyWord)" component={Search} onEnter={this.goSearch}/>
                        <Route path="/detail/:id(/:router)" component={Detail}/>
                        <Route path="/login(/:router)" component={Login}/>
                        <Route path="/userCenter" component={UserCenter}/>
                        <Route path='*' component={NotFound}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}

export default RouterMap