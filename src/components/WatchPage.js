import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    })
  return (
    <div>
        <iframe 
        width="1440" 
        height="500" 
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title='Youtube video player' 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        >

        </iframe>
    </div>
  )
}

export default WatchPage