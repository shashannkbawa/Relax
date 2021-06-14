import React from 'react'
import Typist from 'react-typist';
import Typing from 'react-typing-animation';

function Type() {
    return (
        <div className= "Typing">
             <Typist cursor  = {{
                                show: true,
                                blink: true,
                                element: '_',
                                hideWhenDone: true,
                                hideWhenDoneDelay: 300,
                                }}>
                                    
                 
                 <span>Dreaming is a Blessing</span>
                <Typist.Backspace count={10} delay = {1000} />
                <span> not a sin.</span>

             </Typist>
             <Typist cursor  = {{
                                show: true,
                                blink: true,
                                element: '_',
                                hideWhenDone: true,
                                hideWhenDoneDelay: 300,
                                }}>
                                    
                <Typist.Delay ms={5000} />
                 <span>Start Exploring...</span>
                <Typist.Backspace count={12} delay = {1000} />
                <span> Enjoying...</span>
                <Typist.Backspace count={11} delay = {1000} />
                <span> Dreaming.</span>

             </Typist>
        </div>
    )
}

export default Type
