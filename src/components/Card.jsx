import React from 'react'
import icon from "../assets/illustration-article.svg"
import image from "../assets/image-avatar.webp"

const Card = () => {
  return (
    <div className='w-[327px] h-[501px] tablet:w-[384px] tablet:h-[522px] p-[24px] bg-white rounded-2xl border-Gray950 border-2 shadow-custom-card font-Figtree'>
        <div className='w-[100%] rounded-xl overflow-hidden'>
            <img src={icon} alt="" />
        </div>
        <div className='my-[24px] '>
          <span className='text-[14px] tablet:text-[16px] text-Gray950 bg-Yellow font-bold py-2 px-4 rounded-md'>Learning</span>
          <p className='font-medium text-[14px] tablet:text-[16px] text-Gray950 mt-5 tablet:mt-4'>Published 21 Dec 2023</p>
          <h1 className='font-extrabold text-[21px] tablet:text-[27px] text-Gray950 my-4 tablet:my-3 hover:text-Yellow cursor-pointer'>HTML & CSS foundations</h1>
          <p className='font-semibold text-Gray500 text-[14px] tablet:text-[16px]'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        </div>
        <div className='flex items-center gap-4'>
          <img className='size-8' src={image} alt="" />
          <p className='font-bold text-[14px] tablet:text-[16px] text-Gray950'>Greg Hooper</p>
        </div> 
    </div>
  )
}

export default Card