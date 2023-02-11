import React from 'react'

const Partners = () => {
  return (
      <section className='bg-gray-700'>
          <div className='max-w-[1440px] mx-auto space-y-10 flex flex-col items-center text-white px-3 py-8'>
              <h2 className='text-3xl font-semibold text-center'>Backed By the Giants</h2>
              <p>They are not just the backers, but believers of what we do, and how we aim to change the ecosystem and become the part of the change.</p>
              <div className='grid grid-cols-3 justify-items-center '>
                  <img src="./partner1.png" className='h-[50%]'/>
                  <img src="./partner2.png" className='h-[50%]'/>
                  <img src="./partner3.png" className='h-[50%]'/>
              </div>
          </div>
    </section>
  )
}

export default Partners;