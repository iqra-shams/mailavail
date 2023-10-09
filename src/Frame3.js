import React from 'react'
import smile from './assest/sec.svg'
import thumbup from './assest/acc.svg'
import star from './assest/fast.svg'
import fmc from './assest/free.svg'
import save from './assest/sps.svg'
import cross from './assest/knt.svg'
import benefit from  './benefit.json';

const Frame3 = () => {
  return (
    <div>
{/* <div className='text-center my-20'>
<div className=' flex flex-col justify-center items-center  '>
<div className='text-center my-20'>
<p className='  md:text-[38px] lg:text-[48px]  md:leading-[72px] font-bold text-center'>Benefits of using our Platform</p>
</div>
<div className=' w-[1200px]  md:flex flex-wrap  gap-6 justify-center items-center  '>
{
      benefit.map((benefit,i)=>{
        return(
            <div className='w-[300px] h-[240px] '>
  
  <p className='font-sans font-semibold text-[24px] leading-8'>{benefit.name}</p>
  <p className='my-5 font-sans font-medium text-[16px] leading-[24px] text-left'>{benefit.description}</p>
</div>
        )
      }
       
 )
}



</div>
    </div>

    </div> */}



        <div className='text-center my-20'>

<p className='  md:text-[38px] lg:text-[48px]  md:leading-[72px] font-bold text-center'>Benefits of using our Platform</p>
</div>
<div className='mx-[8%] md:mx-[18%]  lg:mx-[28%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[320px] md:w-[620px]  lg:w-[1200px] content-center space-x-4 '>
<div className='w-[300px] h-[240px]'>
  <div className='my-5'><img src={smile} alt='not found'/></div>
  <div className='font-sans font-semibold text-[24px] leading-8'>Secure</div>
  <div className='my-5 font-sans font-medium text-[16px] leading-[24px]'>Verify Your Email Addresses with Confidence, Thanks to Our Secure SAAS Solution</div>
</div>
<div className='w-[300px] h-[240px]'>
<div className='my-5'><img src={thumbup} alt='not found'/></div>
  <div className='font-sans font-semibold text-[24px] leading-8'>Accurate Results</div>
  <div className='my-5 font-sans font-medium text-[16px] leading-[24px]'>
  Ensure the Success of Your Email Campaigns with Our Exceptionally Accurate Verification Results
  </div>
</div>
<div className='w-[300px] h-[240px]'>
<div className='my-5'><img src={star} alt='not found'/></div>
  <div className='font-sans font-semibold text-[24px] leading-8'>Fast and reliable</div>
  <div className='my-5 font-sans font-medium text-[16px] leading-[24px]'>Say Goodbye to Slow Email Verification with Our Swift and Trustworthy System with maximum productivity.</div>
</div>
<div className='w-[300px] h-[240px]'> 
<div className='my-5'><img src={fmc} alt='not found'/></div>
<div className='font-sans font-semibold text-[24px] leading-8'>Free Email Checking</div>
<div className='my-5 font-sans font-medium text-[16px] leading-[24px]'>Get Accurate Results Without Breaking the Bank with Our Free Single Email Verification Service</div>
</div>
<div className='w-[300px] h-[240px]'>
<div className='my-5'><img src={save} alt='not found'/></div>
  <div className='font-sans font-semibold text-[24px] leading-8'>Secure Payment System</div>
  <div className='my-5 font-sans font-medium text-[16px] leading-[24px]'>Your Financial Information is Safe with Our Secure Payment System for Email Verification</div>
</div>
<div className='w-[300px] h-[240px]'>
<div className='my-5'><img src={cross} alt='not found'/></div>
  <div className='font-sans font-semibold text-[24px] leading-8'>Keep No Track of emails</div>
  <div className='my-5 font-sans font-medium text-[16px] leading-[24px]'>Worry Less & ensure Confidentiality About Privacy with Our No-Tracking Email Validation Solution</div>
</div>
</div >
    </div>
  )
}

export default Frame3;