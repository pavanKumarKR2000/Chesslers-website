import React from 'react'

const Table = ({user,index,filteredUsers}) => {
  return (
      <div className={`grid grid-cols-4 items-center gap-24 py-4 ${index<filteredUsers.length-1?'border-b':''}`}>
        <h2 className='text-lg font-semibold'>#{index + 1}</h2>
          <div>
          <img src={user.avatar} className="w-[50%] h-[50%]"/>
          </div> 
        <h2 className='text-lg font-semibold'>{user.name}</h2>
        <h2 className='text-lg font-semibold'>{user.score}</h2>
    </div>  
  )
}

export default Table