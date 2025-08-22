import React from 'react'
import Introduction from '../Component/Home/Introduction'
import AiandHowitsWork from '../Component/Home/AiandHowitsWork'
import Stories from '../Component/Home/Stories'
import Member from '.././Component/About/Member'
import CountSection from '../Component/Home/CountSection'
import hello from '../Asset/About/about_industri.jpg'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Introduction />
      <AiandHowitsWork />
      {/* <SpecialAddress /> */}
      <div className='flex justify-center  pt-8 lg:pt-20 '>
        <div className='2xl:w-4/5 w-full'>
          <div className="flex lg:flex-nowrap lg:flex-row flex-col-reverse flex-wrap items-center">
            <div className="lg:w-1/2 w-full px-5 lg:mt-0 mt-8">
              <div data-aos="fade-right" >
                <img src={hello} alt="" className='sm:h-[500px] sx:h-[400px] h-[300px] w-full object-cover cursor-pointer transition-all duration-500 ease-in-out grayscale-0 hover:grayscale' />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:px-[50px] px-5">
              <div className='text-white'>
                <h3 className='text-white text-[22px] sm:text-[32px] md:text-[40px] lg:text-[40px] sm:leading-[48px] sx:leading-[28px] mt-4' data-aos="fade-left">Showcasing our latest achievements during industry gatherings</h3>
                <p className='mt-5' data-aos="fade-left">Throughout the year, we engage with the AI community via a wide range of virtual, in-person, and hybrid events—participating as sponsors or hosting these gatherings ourselves. At these forums, our engineers and researchers highlight our newest product innovations, research achievements, and publications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stories />
      <Member />
      <CountSection />
    </div>
  )
}

export default Home
