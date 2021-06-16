
import React from 'react'

import Rotate from './Rotate'
import Navbar from './Navbar'
import Type from './Typing'
import Music from './Music'

import useWindowOrientation from "use-window-orientation";

function Home() {

    const { portrait } = useWindowOrientation();

    if (portrait) {
        return <Rotate />
    }
    else {
        return (
            <div>
                <Navbar />
                <Type />
                <Music />
            </div>
        )
    }




}

export default Home
