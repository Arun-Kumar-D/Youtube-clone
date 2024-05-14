import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='flex flex-col w-10/12 justify-center mt-20 overflow-x-hidden sm:w-full'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer