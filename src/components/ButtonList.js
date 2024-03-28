import React from 'react'
import Buttons from './Buttons'


const list = ["All","Live","Gaming","Songs","Football","Cricket"]

const ButtonList = () => {
  return (
    <div className='flex'>
        {list.map((btn) => (
        <Buttons key={btn} name={btn} />
      ))}
    </div>
  )
}

export default ButtonList