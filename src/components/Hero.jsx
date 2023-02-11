import React from 'react'

const Hero = () => {
  return (
      <section className='bg-gray-700 -mt-[80px]'>
          <div className='max-w-[1440px] mx-auto px-3 pt-40 pb-20 grid grid-cols-2 justify-items-center items-center'>
              <div className='space-y-4 text-white'>
                 <h1 className='text-6xl font-bold'>Play <br /> Chess.</h1>
                 <h1 className='text-6xl font-bold'>Get <br /> Paid.</h1>  
                 <p className='text-xl'>Join now to get $5 and get started</p> 
              </div>
              <div>
                  <img src="./hero.png" className='h-[80%] w-[80%]'/>
              </div>
          </div>
     </section>
  )
}

export default Hero;