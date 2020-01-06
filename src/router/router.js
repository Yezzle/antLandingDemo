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
                    <Route path='/' component={App}>
                        <Route path='about' component={React.lazy(() => import('@/pages/about/about'))}></Route>
                    </Route>
                </Router>
            </React.Suspense>
        )
    }
}
export default RouterConfig;