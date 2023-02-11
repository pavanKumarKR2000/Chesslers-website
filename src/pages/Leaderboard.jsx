import React, { useEffect, useState } from 'react';
import { data } from '../../data'
import Table from '../components/Table';

const Leaderboard = () => {

    const [filteredUsers, setFilterdusers] = useState([]);

    useEffect(() => {
          setFilterdusers(data.sort((user1,user2)=>user2.score-user1.score));
    }, []);

    return (
      <section className='py-40 bg-gray-700 -mt-[80px]'>
        <div className='text-white bg-gray-500 w-[80%] mx-auto py-6 rounded-md'>
            <div className='w-[80%] mx-auto flex justify-between items-center py-4 border-b'>
                <h1 className='text-3xl font-semibold'>leaderboard</h1>
                <p className='text-lg'>All Time</p>
            </div>
            <div className='w-[80%] mx-auto'>
                {
                    filteredUsers.map((user,index) => (
                        <Table user={user} index={index} filteredUsers={filteredUsers} /> 
                    ))     
                }
                </div>    
      </div>
      </section>
      
  )
}

export default Leaderboard