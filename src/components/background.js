import React from 'react'
import image from './img.jpg'

function Background() {
   // const image = {require('./img.jpg')}
    return (
        <div>
           
            <img src={image} width="1920" height="930" overflow = "hidden"/>
        </div>
    )
}

export default Background;
