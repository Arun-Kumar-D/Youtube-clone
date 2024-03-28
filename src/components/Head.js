import React from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'

const Head = () => {

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img  className='h-8 cursor-pointer' alt='menu'
            onClick={()=>toggleMenuHandler()}
            src='https://pic.onlinewebfonts.com/thumbnails/icons_489829.svg'/>
            <img className='h-10 mx-2' alt='youtube-logo' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg.webp'/>
        </div>
        <div className='col-span-10 text-center'>
            <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'/>
            <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>🔍</button>
        </div>
        <div className='col-span-1'>
            <img className='h-8' alt='user-icon' src='https://cdn3.iconfinder.com/data/icons/login-7/512/LOGIN-10-512.png'/>
        </div>
    </div>
  )
}

export default Head