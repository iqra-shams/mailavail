import React from 'react'
import logo from './assest/icongroup.svg'
import icon from './assest/Icon.svg'
import load from './assest/Ellipse.svg'
import smile from './assest/sec.svg'
import thumbup from './assest/acc.svg'
import star from './assest/fast.svg'
import fmc from './assest/free.svg'
import save from './assest/sps.svg'
import cross from './assest/knt.svg'
import clp from './assest/circle.svg'
import tag from './assest/pot.svg'
const Header = () => {
  return (
    <div> 

      {/* navigation bar */}
<div className='w-1440px h-68px p-2 border-2 border-solid-[#0000000D]  flex justify-between'> 

    <div className='w-201px h-44px gap-4 flex justify-between items-center'>
   <div>   <img className='w-73px.08 h-44px' src={logo} alt='logo'></img></div>
<div className='w-104px h-32px font-sans font-bold text-[24px] leading-32px text-center'>Mailavail</div>

    </div>
    <div className='w-344px h-44px gap-8 flex justify-between items-center'>
      <div>
        <button className='w-156px h-44px rounded-[12px] p-[
12px, 16px, 12px, 16px] gap-10px text-[16px] font-sans font-semibold text-center leading-20px'>Single Verification</button>
      </div>
      <div><button className='w-156px h-44px rounded-[12px] p-[
12px, 16px, 12px, 16px] gap-10px text-[16px] font-sans font-semibold text-center leading-20px'>Features</button></div>
      <div><button className='w-156px h-44px rounded-[12px] p-[
12px, 16px, 12px, 16px] gap-10px text-[16px] font-sans font-semibold text-center leading-20px'>Pricing</button></div>
    </div>
    <div className='w-251px h-44px gap-12  flex'>
      <div ><button className='w-150px h-44px px-4 py-3 rounded-[12px] border-2 border-solid-[#0000000D]    font-sans font-semibold text-center leading-20px '>Register or Login</button></div>
      <div><button className='w-150px h-44px px-4 py-3 rounded-[12px]  bg-[#0000000D]   font-sans font-semibold text-center leading-20px'>Try Now</button></div>
    </div>
</div>
{/* navigation bar end */}

<div className='w-970 h-231 mt-40 mx-56 font-inter  text-center leading-77.45px text-[64px] font-bold '>
Validated emails, a golden rule,<br></br>Limited time deals, don't miss<br></br> your cue
</div>
<div className='w-236 mx-64 p-  mt-4 font-medium text-[24px] leading-[34.93px] text-slate-500 text-center'>Unleashing the Power of Email Verification: A Scalable and Cost-Effective Solution<br></br> for Authenticating User Emails</div>
<div className='mt-12 flex items-center justify-center gap-4'>

<button className='w-44 h-11 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-[10px]  text-white'>Get free 500 credits</button>
<button className='w-44 h-11 border-2 border-[gradient-to-r from-indigo-500 via-purple-500 to-pink-500]  rounded-[10px]'>Try Now</button>

</div>
<div className='bg-[#F5F7FD] w-[1240px] h-[420px] mx-[25%] my-[3%] flex justify-center items-center rounded-lg '>
<div className='w-[450px] h-[380px]   ' >
  <div> <p className='font-bold text-[32px] leading-[38.73px] my-8'>Single Email Verification </p></div>
  <div className=''>write an email for Verification <br></br>
    <input type='email' className='border-2 border-black rounded-l-lg border-e-blue-600 my-3'> 
    </input>
    <button className='bg-blue-600 text-white rounded-r-lg h-7 w-28'> Test my Email</button>
  </div>

  <div className='flex-col p-1 '>
  <div className='my-3 '> <input type='radio' className=''></input>  Requesting Host </div> 
  <div className='my-3'><input type='radio'></input> Extracting Mx Record </div>  
    <div className='my-3'><input type='radio'></input> Validating Email </div>
    <div className='my-3'><input type='radio'></input> Calculating Score </div>
    
  </div>
</div> 
<div className='w-[700px] h-[380px] bg-[#FFFFFF] rounded-lg'>
  <div className=''>
    <p className='m-5 font-semibold text-[24px] leading-6'>Results</p> 
    <div className='flex'>
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
    <div className=' w-80  h-60 py-4 mx-20 flex flex-col items-center'>
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
<div className='mx-[35%] my-20'>

  <p className='text-[48px] leading-[72px] font-bold'>Benefits of using our Platform</p>
</div>
<div className=' mx-[28%] grid grid-cols-3 gap-6 w-[1200px] space-x-4 '>
  <div className='w-[300px] h-[240px]'>
    <div className='my-5'><img src={smile}/></div>
    <div className='font-sans font-semibold text-[24px] leading-8'>Secure</div>
    <div className='my-5 font-sans font-medium text-[16px] leading-[24px]'>Verify Your Email Addresses with Confidence, Thanks to Our Secure SAAS Solution</div>
  </div>
  <div className='w-[300px] h-[240px]'>
  <div className='my-5'><img src={thumbup}/></div>
    <div className='font-sans font-semibold text-[24px] leading-8'>Accurate Results</div>
    <div className='my-5 font-sans font-medium text-[16px] leading-[24px]'>
    Ensure the Success of Your Email Campaigns with Our Exceptionally Accurate Verification Results
    </div>
  </div>
  <div className='w-[300px] h-[240px]'>
  <div className='my-5'><img src={star}/></div>
    <div className='font-sans font-semibold text-[24px] leading-8'>Fast and reliable</div>
    <div className='my-5 font-sans font-medium text-[16px] leading-[24px]'>Say Goodbye to Slow Email Verification with Our Swift and Trustworthy System with maximum productivity.</div>
  </div>
  <div className='w-[300px] h-[240px]'> 
  <div className='my-5'><img src={fmc}/></div>
  <div className='font-sans font-semibold text-[24px] leading-8'>Free Email Checking</div>
  <div className='my-5 font-sans font-medium text-[16px] leading-[24px]'>Get Accurate Results Without Breaking the Bank with Our Free Single Email Verification Service</div>
  </div>
  <div className='w-[300px] h-[240px]'>
  <div className='my-5'><img src={save}/></div>
    <div className='font-sans font-semibold text-[24px] leading-8'>Secure Payment System</div>
    <div className='my-5 font-sans font-medium text-[16px] leading-[24px]'>Your Financial Information is Safe with Our Secure Payment System for Email Verification</div>
  </div>
  <div className='w-[300px] h-[240px]'>
  <div className='my-5'><img src={cross}/></div>
    <div className='font-sans font-semibold text-[24px] leading-8'>Keep No Track of emails</div>
    <div className='my-5 font-sans font-medium text-[16px] leading-[24px]'>Worry Less & ensure Confidentiality About Privacy with Our No-Tracking Email Validation Solution</div>
  </div>
</div >
<div className='w-[1250px] h-[440px] mx-[27%] my-[5%]'>

<div className='w-[1160px] h-[440px] bg-slate-100 rounded-[24px]  '>
<p className='pt-20 text-center text-[#F97316] leading-4 font-semibold text-[14px] '>Extremely affordable</p> 
<p className='text-center font-sans text-[48px] leading-[58px] font-semibold pt-10'> Unlock Unbeatable Savings</p>
<p className='text-[18px] font-medium font-sans leading-[28px] text-center my-10'>Enjoy the best prices in town with a bonus of 500 free credits upon registration.</p>
<button className='mx-[44%] w-[136px] h-[48px] rounded-[12px] bg-[#2563EB] text-white text-[16px] leading-6 font-semibold text-center'>Register Now</button>

<img src={tag} className='mx-[86%] my-[-28.5%]'/>
<img src={clp} className='mx-[96%]  my-[67px]' />



</div>

</div>
    </div>
  )
}

export default Header