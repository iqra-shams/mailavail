import React from 'react'
import clp from './assest/circle.svg'
import tag from './assest/pot.svg'
const Frame4 = (props) => {
  return (
    <div>
       

   <div className='w-[400px] md:w-[600px]   lg:w-[1200px]  h-[440px]  bg-slate-100 rounded-[24px] py-[10] mx-[10%] md:mx-[19%] lg:mx-[27%] my-[5%] flex    justify-center text-center items-center'>
   <div className=''>
    <p className='  rounded-[25px] flex gap-1  lg:mx-[25%] items-center  lg:p-10 text-[#F97316] font-semibold px-10 md:px-40 text-[14px] leading-4 '>{props.offer}</p>
    <p className='text-center font-sans lg:text-[44px] md:text-[24px]  sm:text-[18px]  font-semibold pt-10 '> {props.title}</p>
    <p className='sm:text-[12] md:text-[16] lg:text-[18px] font-medium font-sans leading-[28px] text-center my-10 sm:p-5'>{props.desc}</p>
    <button className=' h-[48px] font-semibold text-center text-white md:ml-[-20%] $ bg-[#2563EB] w-[136px] text-[16px] rounded-[12px]'>{props.butn} </button>
    </div>
    {/* <div className='flex mt-10'> */}
    <img src={props.img1} className='flex lg:mt-[-12%] md:mt-[-25%]  md:mr-[-12%] lg:mr-[-32%]'/>
    {/* <img src={props.img2} className='flex lg:mt-[-32%] md:mt-[-65%] lg:mr-[20%] ' /> */}
    {/* </div> */}
    </div>
    </div>
  )
}

export default Frame4;