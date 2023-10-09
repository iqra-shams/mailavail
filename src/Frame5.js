import React from 'react'
import data from  './data.json';
import bulb from './assest/light-bulb.svg'
const Frame5 = () => {
  return (
    <div >
<div className=' flex flex-col justify-center items-center  md:ml-30 lg:ml-50  '>
  <p className='sm:text-[24px] md:text-[30px] lg:text-[48px] font-bold leading-[72px] text-center mb-20'>Email Verification Solutions Include</p>
<div className=' md:w-[900] lg:w-[1200px]  flex flex-wrap  sm:ml-20 gap-x-20 '>
{
      data.map((data,i)=>{
        return(
            <div className='w-[550px] h-[292px]  '>
  <div className='w-[100px] h-[28px] rounded-[32px] text-[#EA580C] bg-[#FED7AA] text-[14px] leading-[20px] font-sans font-bold flex justify-center items-center'> <img src={bulb} className='w-5 h-5 '/> Features</div>
  <p className='my-8 font-sans font-semibold text-[24px] leading-9'>{data.name}</p>
  <p className='w-[494px] h-[84px] text-[18px] font-medium leading-[28px] text-[#424867]'>{data.description}</p>
</div>
        )
      }
       
 )
}



</div>
    </div>
    </div>
  )
}

export default Frame5;