import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import isLogin from '../utils/isLogin'
export default function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route {...rest}
            render={props=>(
                isLogin()?
                <Component {...props}/>
                : <Redirect to="/home"/>
            )}
        />
    )
}
