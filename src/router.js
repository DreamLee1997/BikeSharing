import React,{Component} from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/button'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carsousel'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import RichText from './pages/rich/index'
import City from './pages/city/index'


import NoMatch from './pages/noMatch/index'

export default class IRouter extends Component{
    render (){
        return(
            <div>
                <HashRouter>
                    <App>
                        <Route  path="/login" component={Login}/>
                        <Route  path="/admin" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                    <Route path="/admin/ui/modals" component={Modals}></Route>
                                    <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                    <Route path="/admin/ui/notification" component={Notice}></Route>
                                    <Route path="/admin/ui/messages" component={Messages}></Route>
                                    <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                    <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                    <Route path="/admin/ui/carousel" component={Carousel}></Route>
                                    <Route path="/admin/form/login" component={FormLogin}></Route>
                                    <Route path="/admin/form/reg" component={FormRegister}></Route>
                                    <Route path="/admin/rich" component={RichText}></Route>
                                    <Route path="/admin/city" component={City}></Route>

                                    <Route  component={NoMatch}></Route>
                                </Switch>
                            </Admin>
                        } />
                    </App>
                </HashRouter>
            </div>
        )
    }
}