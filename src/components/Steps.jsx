import { SiLichess } from 'react-icons/si';
import { RiSwordLine } from 'react-icons/ri'
import { BsCashCoin } from 'react-icons/bs';

const Steps = () => {
  return (
      <section className='bg-gray-700'>
          <div className='max-w-[1440px] mx-auto px-3 py-20'>
              <h2 className='text-3xl font-semibold text-center text-white'>How Does it Work</h2>
              <div className='grid grid-cols-3 gap-12 py-12 '>
                  <div className='bg-yellow-300 flex flex-col items-center px-4 py-8 space-y-6 rounded-md relative'>
                      <div className='absolute bg-yellow-300 -translate-x-[18px] -top-[18px] left-[50%] text-2xl font-semibold  text-black rounded-full w-9 h-9 flex items-center justify-center'>1</div>
                      <div className='flex justify-center items-center space-x-4'>
                          < SiLichess className='h-10 w-10'/> <h3 className='text-4xl font-semibold'>Login</h3>
                      </div>
                      <div>
                        <p className='text-center'>With your lichess account to sync your rankings and earnings</p> 
                      </div>
                  </div>
                  <div className='bg-yellow-300 flex flex-col items-center px-4 py-8 space-y-6 rounded-md relative'>
                      <div className='absolute bg-yellow-300 -translate-x-[18px] -top-[18px] left-[50%] text-2xl font-semibold  text-black rounded-full w-9 h-9 flex items-center justify-center'>2</div>
                      <div className='flex justify-center items-center space-x-4'>
                          <RiSwordLine className='h-10 w-10'/> <h3 className='text-4xl font-semibold'>Challenge</h3>
                      </div>
                      <div>
                        <p className='text-center'>your favourite player or friends or simply create an open challenge</p> 
                      </div>
                  </div>
                  <div className='bg-yellow-300 flex flex-col items-center px-4 py-8 space-y-6 rounded-md relative'>
                      <div className='absolute bg-yellow-300 -translate-x-[18px] -top-[18px] left-[50%] text-2xl font-semibold  text-black rounded-full w-9 h-9 flex items-center justify-center'>3</div>
                      <div className='flex justify-center items-center space-x-4'>
                          <BsCashCoin className='h-10 w-10'/> <h3 className='text-4xl font-semibold'>Earn</h3>
                      </div>
                      <div>
                        <p className='text-center'>coins and use them for future matches</p> 
                      </div>
                  </div>
              </div>
          </div>
     </section>
  )
}

export default Steps;