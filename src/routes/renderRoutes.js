import React from 'react'
import {Route} from 'react-router-dom'

export default routes =>{
    console.log(routes);
    return routes.map((route, i) => <Route key={i} { ...route }></Route>)}
