import React from 'react'
import { useGlobalContext } from '../context';
import { AiFillCalendar } from 'react-icons/ai'
import { FaAward } from 'react-icons/fa'


const Home = () => {

    const { user, setUser } = useGlobalContext();

  return (
      <section className='bg-gray-700 text-white -mt-[80px] pt-48 pb-20 h-[105vh]'>
          <div className='w-[60%] bg-gray-500 p-6 rounded-md grid grid-cols-3 mx-auto'>
            <div className='flex justify-center items-center'>
                <img src={user.avatar} className="w-[150px]"/>    
            </div>
              <div className='col-span-2 space-y-6'>
                <div className='flex justify-between space-x-4 items-center'>
                      <h2 className='text-4xl font-semibold'>{user.username}</h2>
                      <button onClick={()=>{
                        setUser(null);
                        localStorage.setItem('token',null);
                        window.location.href='/';
                      }}
                      className='flex justify-center text-black items-center space-x-2 border border-yellow-300 bg-yellow-300 hover:bg-yellow-200 rounded-md py-3 px-5'>
                          Sign Out
                      </button>
                  </div>
                  <div className='flex space-x-2 items-center'>
                      <AiFillCalendar className='w-5 h-5'/>
                      <h3 className='text-lg font-semibold'>Joined a month ago</h3>
                  </div>
                  <div className='flex justify-between items-center'>
                      <div className='flex space-x-2 items-center'>
                          <FaAward className='h-10 w-10' />  
                          <div className=''>
                              <h3 className='text-lg font-semibold'>Bullet</h3>
                              <p className='text-md font-semibold'>{user.perfs.bullet.rating}</p>
                          </div>
                      </div>
                      <div className='flex space-x-2 items-center'>
                          <FaAward className='h-10 w-10' />  
                          <div className=''>
                              <h3 className='text-lg font-semibold'>Blitz</h3>
                              <p className='text-md font-semibold'>{user.perfs.blitz.rating}</p>
                          </div>
                      </div>
                      <div className='flex space-x-2 items-center'>
                          <FaAward className='h-10 w-10' />  
                          <div className=''>
                              <h3 className='text-lg font-semibold'>rapid</h3>
                              <p className='text-md font-semibold'>{user.perfs.rapid.rating}</p>
                          </div>
                      </div>
                        
                  </div>
              </div>
          </div>
          <div className='grid grid-cols-3 gap-6 w-[60%] mx-auto p-6'>
                  <div className='space-y-1 p-2 rounded-md bg-green-600'>
                      <h2 className='text-4xl font-semibold text-center'>250</h2>
                      <p className='text-center'>Tokens</p>
                  </div>
                  <div className='space-y-1 p-2 rounded-md bg-green-600'>
                      <h2 className='text-4xl font-semibold text-center'>0</h2>
                      <p className='text-center'>Won</p>
                  </div>
                  <div className='space-y-1 p-2 rounded-md bg-red-500'>
                      <h2 className='text-4xl font-semibold text-center'>0</h2>
                      <p className='text-center'>Lost</p>
                  </div>
              </div>
     </section>
  )
}

export default Home;