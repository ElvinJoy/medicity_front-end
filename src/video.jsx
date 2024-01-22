import React from 'react';

const Video = () => {
    return (
        <div className="video-container">
            <video
                className="video"
                autoPlay
                muted
                loop
                playsInline
                src="../src/assets/mushrooms.MP4"
            />
        </div>
    );
};

export default Video;