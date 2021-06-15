

// import React, {Component} from 'react'
// import Type from './typing'
// import Music from './Music'
// import Navbar from './navbar'
// import Background from './background'
// import Rotate from './Rotate'
 
// import DeviceOrientation, { Orientation } from 'react-screen-orientation'
 
// export class Home extends Component {
 
//   render () {
//     return (
//       <DeviceOrientation lockOrientation={'landscape'}>
//         {/* Will only be in DOM in landscape */}
//         <Orientation orientation='landscape' alwaysRender={false}>
//           <div>
//             <Navbar/>
//             <Type/>
//             <Music/>
//           </div>
//         </Orientation>
//         {/* Will stay in DOM, but is only visible in portrait */}
//         if (Orientation orientation='portrait')
//           <div>
//             <Rotate/>
//           </div>
//         </Orientation>
//       </DeviceOrientation>
//     )
//   }
// }
// export default Home

import React from 'react'
import Rotate from './Rotate'
import Navbar from './navbar'
import Type from './typing'

import useWindowOrientation from "use-window-orientation";

function Home() {
    const { portrait } = useWindowOrientation();
    if (portrait) {
        return <Rotate/>
    }
    else{
        return(
            <div>
                <Navbar/>
                 <Type/>
            </div>
        )
    }
    
        // const { portrait && <Rotate/>} = useWindowOrientation();
        // const { landscape && <Navbar/>} = useWindowOrientation();
        
       

        
}

export default Home
