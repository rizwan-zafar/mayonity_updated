import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function VideoCard(props) {
    const {bgImage, videoId} = props;
    const [isOpen, setOpen] = useState(false);

    return(
        <>
            {/* Video */}
            <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />

            {/* Video Area */}
            <div className="video-area bg-img bg-overlay bg-fixed" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${bgImage})`}}>
                <div className="container">
                    <button className="video-play-btn border-0" onClick={()=> setOpen(true)} >
                        <i className="bi bi-play" />
                        <span className="video-sonar" />
                    </button>
                </div>
            </div>
        </>
    )
}