import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import App from '@/App';
import About from '@/pages/about/about'

class RouterConfig extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <Route path='about' component={About}></Route>
                </Route>
            </Router>
        )
    }
}
export default RouterConfig;