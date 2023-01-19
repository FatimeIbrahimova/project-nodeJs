import React from 'react'
import Add from '../pages/Add'
import Home from '../pages/Home'
import MainRoot from '../components/MainRoot'


const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:"add",
                element:<Add/>
            },
           
        ]
    }
]
export default ROUTES;