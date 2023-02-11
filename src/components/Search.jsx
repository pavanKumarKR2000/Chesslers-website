import React from 'react'
import { RiSwordLine } from 'react-icons/ri'
import { GrFormClose } from 'react-icons/gr'
import { AiFillCalendar } from 'react-icons/ai'
import {FaAward} from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Search = () => {
    
    const { setIsModalOpen, selectedUser ,setSelectedUser} = useGlobalContext();

  return (
      <div className='fixed inset-0 flex justify-center items-center bg-[rgba(55,65,81,0.5)] backdrop-blur-[15px]'>
          <div className='min-w-[60%] bg-white p-6 rounded-md grid grid-cols-3'>
            <div className='flex justify-center items-center'>
                <img src={selectedUser.avatar} className="w-[150px]"/>    
            </div>
              <div className='col-span-2 space-y-6'>
                  <div className='flex justify-end items-center cursor-pointer'><GrFormClose className='h-7 w-7 text-white' onClick={() => { setIsModalOpen(false); setSelectedUser(""); }}/></div>
                <div className='flex justify-between space-x-4 items-center'>
                      <h2 className='text-4xl font-semibold'>{selectedUser.name}</h2>
                      <button className='flex justify-center items-center space-x-2 bg-yellow-300 hover:bg-yellow-200 rounded-md py-3 px-5'>
                          <RiSwordLine className='h-6 w-6' />
                          <span>Challenge Now</span>
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
                              <p className='text-md font-semibold'>{Math.floor(Math.random()*500+500)}</p>
                          </div>
                      </div>
                      <div className='flex space-x-2 items-center'>
                          <FaAward className='h-10 w-10' />  
                          <div className=''>
                              <h3 className='text-lg font-semibold'>Blitz</h3>
                              <p className='text-md font-semibold'>{Math.floor(Math.random()*500+500)}</p>
                          </div>
                      </div>
                      <div className='flex space-x-2 items-center'>
                          <FaAward className='h-10 w-10' />  
                          <div className=''>
                              <h3 className='text-lg font-semibold'>rapid</h3>
                              <p className='text-md font-semibold'>{Math.floor(Math.random()*500+500)}</p>
                          </div>
                      </div>
                        
                  </div>
            </div>
          </div>
    </div>
  )
}

export default Search;