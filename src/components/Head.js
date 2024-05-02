import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch,useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store)=> store.search);
    const dispatch = useDispatch();
 
    useEffect(()=>{
        const timer = setTimeout(()=>
        {
            if(searchCache[searchQuery])
                setSuggestions(searchCache[searchQuery]);
            else
                getSearchSuggestions();
        },200);
        return ()=>{
            clearTimeout(timer);
        };
    },[searchQuery])

    const getSearchSuggestions = async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);

        dispatch(cacheResults({
            [searchQuery]: json[1],

        })
        );

    };



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
            <div>
                <input className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                onFocus={()=>setShowSuggestions(true)}
                onBlur={()=>setShowSuggestions(false)}
                />
                <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>🔍</button>
            </div>
            {showSuggestions && (
            <div className='fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg'>
                <ul className='py-2 px-2'>
                    {suggestions.map((s)=>(
                        <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>
                    ))}
                </ul>
            </div>
            )}
        </div>
        <div className='col-span-1'>
            <img className='h-8' alt='user-icon' src='https://cdn3.iconfinder.com/data/icons/login-7/512/LOGIN-10-512.png'/>
        </div>
    </div>
  )
}

export default Head