import React from 'react'
import ReactAudioPlayer from 'react-audio-player';


function Music() {
    return (
        <div className = "player">
            <ReactAudioPlayer
            src="https://rildi.sunproxy.net/file/Q0NHTTM2dTFJSi9MZVlFTDN0TFRmdGgwSDAyMjdGOEQ3dHJTaS9zQU45OHJLbFFjV1NwS1ZDRWRHWC9GQkMyaHU4dW0yQTRrYWRDRmdpQTdhWm0vTVBDOWp2QlVRQnNRZXNVM0ZzNFNaWkk9/Enoshy_-_solitude_(Rilds.com).mp3"
            autoPlay = "true"
            controls = "true"
            type = 'audio/mp3'
        
            />
        </div>
    )
}

export default Music
