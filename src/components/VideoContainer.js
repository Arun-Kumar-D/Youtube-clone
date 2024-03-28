import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        getVideo();
    },[]);

    const getVideo = async () => {
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        setVideos(json.items);
    };

  return (
    <div>
        <VideoCard info={videos[1]}/>
    </div>
  );
};

export default VideoContainer;