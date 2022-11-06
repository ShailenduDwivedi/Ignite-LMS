import React from "react";
import video from '../src/assets/images/course-video.mp4';

function Video() {
    return <>
        <video autoPlay muted loop id="bg-video">
            <source src={video} type="video/mp4" />
        </video>
    </>;
}
export default Video;