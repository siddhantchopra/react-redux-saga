import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login  from './Login'
import  Dashboard  from './Dashboard'
import {EditUser} from './EditUser'


export const MainComponent = (props) => {
    let local = localStorage.getItem('user')
    local = JSON.parse(local)
    return (
        <>
            <Switch>
            <Route exact path="/"><Redirect to="/login" /></Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard/:username" component={Dashboard} />
            <Route exact path="/:username/edit" component={EditUser} />  
            <Route render={() => { return (local !== null ?<Redirect to={"/dashboard/"+local.name}/>:<p>404! page not found</p>) }} />
            </Switch>
        </>
    )
}
