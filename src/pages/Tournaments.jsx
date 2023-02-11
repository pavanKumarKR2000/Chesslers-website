import React from 'react'

const Tournaments = () => {
  return (
    <section className='bg-gray-700 -mt-[80px] pt-40 h-[105vh]'>
          <div className='w-[60%] mx-auto py-6 space-y-6'>
          <div className='flex justify-between items-center text-white'>
              <div className='bg-gray-500 p-4 rounded-md'>
                  <h2 className='font-semibold text-lg'>Thu Feb 09 2023</h2>
                  <p className='text-yellow-300'>Thursday Knights - BITS GOA</p>
              </div>
              <div className='bg-gray-500 p-4 rounded-md'>
                  <h2 className='font-semibold text-lg'>Fri Feb 10 2023</h2>
                  <p className='text-yellow-300'>Blitzing Friday - 6</p>
              </div>
              <div className='bg-gray-500 p-4 rounded-md'>
                  <h2 className='font-semibold text-lg'>Sat Feb 11 2023</h2>
                  <p className='text-yellow-300'>BITS Hyd Chesslers Arena</p>
              </div>
              </div>
              <div className='bg-gray-500 rounded-md p-4'>
                     <h2 className='text-2xl text-center font-semibold border-b py-2 text-white'>Tournament History</h2>
                     <p className='py-10 text-center text-gray-100'>You haven't played any tournament yet</p>
              </div>
          </div>
    </section>
  )
}

export default Tournaments;