import React from 'react'
import { IoLogoTwitter } from 'react-icons/io5'
import { IoLogoInstagram } from 'react-icons/io5'
import {IoLogoDiscord} from 'react-icons/io5'
const Connect = () => {
  return (
      <section className='bg-gray-700'>
          <div className='max-w-[1440px] mx-auto px-3 text-white flex flex-col items-center space-y-8 py-6'>
              <h2 className='text-3xl font-semibold'>Connect With Us</h2>
              <div className='flex justify-center items-center space-x-10'>
                   <a href="https://twitter.com/respctclub">
                       <IoLogoTwitter className='h-10 w-10'/>
                    </a>
                      <a href="https://www.instagram.com/respct.club/">
                        <IoLogoInstagram className="h-10 w-10"/>
                      </a>
                    <a href="https://discord.gg/rPWpu3rTeZ">
                       <IoLogoDiscord className='h-10 w-10' />  
                    </a>
              </div>
          </div>
   </section>
  )
}

export default Connect;