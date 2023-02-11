import React from 'react'

const Challenges = () => {
    return (
      <section className='bg-gray-700 -mt-[80px] pt-32 pb-16'>
        <div className=' w-[60%] mx-auto py-6 space-y-6'>
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
          <div className='bg-gray-500 p-4 rounded-md'>
                    <h2 className='text-2xl text-center font-semibold border-b py-2 text-white'>Create Quick Challenge</h2>
                    <div className='grid grid-cols-3 gap-4 p-6'>
                        <div className='p-8 rounded-md space-y-2 bg-yellow-300 cursor-pointer'>
                            <h2 className='text-xl font-semibold text-center'>15 sec</h2>
                            <p className='text-center'>UltraBullet</p>
                        </div>
                        <div className='p-8 rounded-md space-y-2 bg-yellow-300 cursor-pointer'>
                            <h2 className='text-xl font-semibold text-center'>30 sec</h2>
                            <p className='text-center'>UltraBullet</p>
                        </div>
                        <div className='p-8 rounded-md space-y-2 bg-yellow-300 cursor-pointer'>
                            <h2 className='text-xl font-semibold text-center'>1 + 0</h2>
                            <p className='text-center'>Bullet</p>
                        </div>
                        <div className='p-8 rounded-md space-y-2 bg-yellow-300 cursor-pointer'>
                            <h2 className='text-xl font-semibold text-center'>1 + 1</h2>
                            <p className='text-center'>Bullet</p>
                        </div>
                        <div className='p-8 rounded-md space-y-2 bg-yellow-300 cursor-pointer'>
                            <h2 className='text-xl font-semibold text-center'>2 + 0</h2>
                            <p className='text-center'>Bullet</p>
                        </div>
                        <div className='p-8 rounded-md space-y-2 bg-yellow-300 cursor-pointer'>
                            <h2 className='text-xl font-semibold text-center'>2 + 1</h2>
                            <p className='text-center'>Bullet</p>
                        </div>
                    </div>
          </div>
         <div className='grid grid-cols-12 gap-4'>
              <div className='bg-gray-500 rounded-md p-4 col-span-5'>
                     <h2 className='text-2xl text-center font-semibold border-b py-2 text-white'>Requested Challenges</h2>
                     <p className='py-10 text-center text-gray-100'>Its Quiet Out here</p>
              </div>
             <div className='bg-gray-500 rounded-md p-4 col-span-7'>
                     <h2 className='text-2xl text-center font-semibold border-b py-2 text-white'>Open Challenges</h2>
                     <div className='flex justify-between items-center p-2'>
                            <button className='py-1 px-3 rounded-md border border-white text-gray-100 focus:bg-white focus:text-black'>All</button>
                            <button className='py-1 px-3 rounded-md border border-white text-gray-100 focus:bg-white focus:text-black'>Ultrabullet</button>
                            <button className='py-1 px-3 rounded-md border border-white text-gray-100 focus:bg-white focus:text-black'>Bullet</button>
                            <button className='py-1 px-3 rounded-md border border-white text-gray-100 focus:bg-white focus:text-black'>Blitz</button>
                    </div>
                    <p className='py-10 text-center text-gray-100'>Its Quiet Out here</p>    
             </div>          
         </div>       
       </div>
      </section>
      
  )
}

export default Challenges;