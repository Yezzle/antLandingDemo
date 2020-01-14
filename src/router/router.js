import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import App from '@/App';
import { Spin } from 'antd'

class RouterConfig extends React.Component {
    render() {
        return (
            <React.Suspense fallback={<Spin style={{
                display: 'flex',
                height: '75vh',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center'
            }} tip="Loading..." />}>
                <Router history={browserHistory}>
                    <Route path='/' key="home" component={App}>
                        <Route path='about' key="about" component={React.lazy(() => import('@/pages/about/about'))}></Route>
                        <Route path='operation' key="operation" component={React.lazy(() => import('@/pages/operation/operation'))}></Route>
                        <Route path='box' key="box" component={React.lazy(() => import('@/pages/box/box'))}></Route>
                        <Route path='contact' key="contact" component={React.lazy(() => import('@/pages/contact/contact'))}></Route>
                        <Route path='customize' key="customize" component={React.lazy(() => import('@/pages/customize/customize'))}></Route>
                    </Route>
                </Router>
            </React.Suspense>
        )
    }
}
export default RouterConfig;