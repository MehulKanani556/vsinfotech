import React, { useEffect, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi';
import acc from '../../Asset/About/about_acc.webp'
import lama from '../../Asset/Career/lama.jpg'
import quest from '../../Asset/Career/quest.jpg'
import glass from '../../Asset/Career/glasses.webp'
import ar from '../../Asset/Career/ar.avif'
import ai from '../../Asset/Career/ai.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const CareerAcc = () => {

const accordionData = [
    {
      title: "Llama",
      content:
        "It’s a series of open-source AI language models developed by Meta. These models are designed to understand and generate human-like text, similar to how ChatGPT works. Llama is used in a variety of applications such as: Text generation, Code completion, Language translation",
    },
    {
      title: "Meta Quest",
      content:
        "Our Meta Quest headsets push virtual reality beyond gaming, opening up new possibilities in education, travel, and more. These cutting-edge devices are at the forefront of innovation, advancing research in fields like computer vision, next-generation optics, and immersive VR experiences.",
    },
    {
      title: "Ray-Ban Meta Glasses",
      content:
        "Our latest Ray-Ban Meta smart glasses bring AI to your everyday life — completely hands-free. Capture photos and videos, enjoy music, connect with friends, or livestream directly to social media. Designed for comfort and style, they offer outstanding audio and visual performance.",
    },
    {
      title: "AR Wearables",
      content:
        "After nearly ten years of development, we've introduced our first prototype of AR glasses. Lightweight (under 100 grams), wireless, and featuring a wide field-of-view display, the device made its debut at Meta Connect 2024. Ongoing testing will guide the evolution of future consumer-ready AR glasses.",
    },
    {
        title: "AI Studio",
        content:
          "AI Studio is an easy-to-use tool that enables individuals and businesses — even without coding skills — to create personalized AI chatbots for platforms such as Messenger, Instagram, and Facebook. It offers a scalable solution for using AI to drive engaging and effective interactions.",
    },
  ];

const [openIndexes, setOpenIndexes] = useState([0]);
const [manageId, setManageId] = useState(0)

const toggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes([]); // close all if clicked again
      setManageId(0);
    } else {
      setOpenIndexes([index]); // only open clicked one
      setManageId(index);
    }
    setManageId(index ? index : 0)
  };


useEffect(() => {
  AOS.init({
    duration: 1000,  // animation duration
    once: false,     // animate every time you scroll into view
    mirror: true,    // animate again when scrolling back up
  });
  const handleScroll = () => {
    AOS.refresh();
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);  
  
  return (
    <>
    <section className='bg-black'>
        <div className=''>
            <div className='container mx-auto py-12 sm:!px-6 !px-4'>
               <div className="flex justify-center" data-aos="zoom-in" data-aos-duration="3000">
                   <div className="3xl:w-1/3 lg:w-1/2  text-white">
                      <h3 className="text-center text-[22px] sm:text-[32px] md:text-[40px] lg:text-[40px] sm:leading-[48px] sx:leading-[28px] leading-[28px] mt-4">We Create <span className='text-themedark'>Extraordinary</span>  Experiences</h3> 
                      <p className='text-center mt-4 sm:text-[16px] text-[14px]'>Our work goes beyond technology — it sparks wonder and connection. From our Llama open-source language models to cutting-edge VR devices and Ray-Ban Meta smart glasses, we're pushing boundaries and shaping how AI influences the metaverse.</p>
                   </div>
               </div>
              <div className="flex justify-center pt-12">
                     <div className="2xl:w-4/5 w-full">
                       <div className="flex lg:flex-nowrap gap-8 flex-wrap">
                         <div className="lg:w-1/2 w-full">
                           <div>
                             <div className="border-t border-[#7e7d7d]"></div>
                             {accordionData.map((item, index) => {
                               const isOpen = openIndexes.includes(index);
                               return (
                                 <div key={index} data-aos="fade-right" data-aos-duration="3000">
                                   {/* Header */}
                                   <button onClick={() => toggle(index)} className="flex w-full my-8 justify-between text-white sm:text-[20px] text-[18px] items-center text-left font-semibold text-lg focus:outline-none">
                                     {item.title}
                                     {isOpen ? (
                                       <BiMinus className="w-5 h-5 border-[1px] rounded-full text-white" />
                                     ) : (
                                       <BiPlus className="w-5 h-5 border-[1px] rounded-full text-white" />
                                     )}
                                   </button>
               
                                   {/* Content with transition */}
                                   <div className={`overflow-hidden transition-all duration-500 ease-in-out ${ isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                      <p className="mt-2 text-white mb-7">{item.content}</p>
                                   </div>
                                   <div className="border-t border-[#7e7d7d]"></div>
                                 </div>
                               );
                             })}
                           </div>
                         </div>
                         <div className="relative lg:w-1/2 w-full" data-aos="fade-left" data-aos-duration="3000">
                           {[lama, quest, glass, ar, ai].map((src, index) => (
                             <img
                               key={index}
                               src={src}
                               alt=""
                               className={` w-full object-cover cursor-pointer transition-all duration-700 ease-in-out  grayscale-0 hover:grayscale
                               ${openIndexes[0] === index || manageId === index ? 'opacity-100 lg:h-[700px] sm:h-[700px] sx:h-[450px] h-[300px]' : 'opacity-0 pointer-events-none h-0'}`}
                             />
                           ))}
                        </div>

                       </div>
                     </div>
                </div>
            </div>
        </div>
    </section>

    {/* <section className='bg-black'>
       <div>
          
       </div>
    </section> */}
    </>
  )
}

export default CareerAcc
