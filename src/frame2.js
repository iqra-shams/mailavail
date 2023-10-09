import React from 'react'
import icon from './assest/Icon.svg'
import load from './assest/Ellipse.svg'
const Frame2 = () => {
  return (
    <div>


<div className='bg-[#F5F7FD] md:w-[700px] w-[420px] lg:w-[1240px] h-[1050px] md:h-[700px] lg:h-[420px] mx-[5%] md:mx-[13%] lg:mx-[25%] my-[3%]  lg:flex justify-center items-center rounded-lg  '>
<div className='w-[450px] h-[380px]  px-5 md:py-8  ' >
  <div> <p className='font-bold lg:text-[32px] leading-[38.73px] my-8 '>Single Email Verification </p></div>
  <div className='text-[20] md:text-[24] '>write an email for Verification <br></br>
    <input type='email' className='border-2 border-black rounded-l-lg border-e-blue-600  w-[100px] md:w-[200px] h-7 my-5'> 
    </input>
    <button className='bg-blue-600 text-white rounded-r-lg h-7 w-20 md:w-28 '> Test my Email</button>
  </div>

  <div className='flex-col p-1 '>
  <div className='my-3 '> <input type='radio' className=''></input>  Requesting Host </div> 
  <div className='my-3'><input type='radio'></input> Extracting Mx Record </div>  
    <div className='my-3'><input type='radio'></input> Validating Email </div>
    <div className='my-3'><input type='radio'></input> Calculating Score </div>
    
  </div>
</div> 
<div className='  w-[380px] md:w-[700px] h-[700px]  md:h-[380px]  bg-[#FFFFFF] rounded-lg'>
  <div className='py-5'>
    <p className='m-5 font-semibold text-[24px] leading-6'>Results</p> 
    <div className='md:flex'>
    <div className=' w-96 px-8 py-4 grid grid-cols-2 gap-3 '>
    <p className='text-[#707384] text-[16px] font-medium leading-6 font-inter'>Status</p> 
    <p className=' text-[#707384] font-semibold text-[16px] leading-6 font-inter grid grid-flow-col '>    <img src={icon} alt='not fount'/>   Deliverable</p>
    <p className=' text-[#707384] font-medium text-[16px] leading-6 font-inter'>Name</p>
    <p className=' text-[#707384] font-semibold text-[16px] leading-6 font-inter'>Usama</p>
    <p className=' text-[#707384] font-medium text-[16px] leading-6 font-inter'>Gender</p>
    <p className=' text-[#707384] font-semibold text-[16px] leading-6 font-inter'>Male</p>
    <p className=' text-[#707384] font-medium text-[16px] leading-6 font-inter'>Domain</p>
    <p className=' text-[#707384] font-semibold text-[16px] leading-6 font-inter'>gmail.com</p>
    <p className=' text-[#707384] font-medium text-[16px] leading-6 font-inter'>SMTP</p>
    <p className=' text-[#707384] font-semibold text-[16px] leading-6 font-inter'>Google</p>
    <p className=' text-[#707384] font-medium text-[16px] leading-6 font-inter'>MX Record</p>
    <p className=' text-[#707384] font-semibold text-[16px] leading-6 font-inter'>gmail-smtp-in.l</p>
    <p className=' text-[#707384] font-medium text-[16px] leading-6 font-inter'>Reason</p>
    <p className=' text-[#707384] font-semibold text-[16px] leading-6 font-inter'>Accepted</p>
    </div> 
    <div className=' w-80  h-100 py-4 my-[30px] lg:mx-[20px]   flex flex-col items-center justify-center  '>
<p className='text-[18px] font-semibold leadding-[28px] font-sans text-center'>Score </p>
<div className='mt-10  ' > <img src={load} alt='not fount ' className='w-48 my-[-10%] '/>
<div className='flex flex-col justify-center items-center mt-[-60%]'>
<p className='font-semibold leading-9 text-[30px]'>90</p>
<p className='font-semibold leading-9 text-[14px]'>Good</p>
</div>
</div>

    </div>
    </div>
  </div>

</div>




</div>
    </div>
  )
}

export default Frame2;