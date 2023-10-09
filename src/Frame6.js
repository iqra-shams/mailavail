import React from 'react'

const Frame6 = (props) => {
  return (
    
        <div> 
           
    
        <div className='  md:w-[700px] lg:w-[1160px] h-[440px] m-10 bg-slate-100 rounded-[24px]  mx-[10%] md:mx-[15%] lg:mx-[27%] my-[5%] flex flex-wrap justify-center '>
        {/* <button className={`p-2 text-center text-[#F97316]   ${ props.offer === '500 Free Credits' ? 'text-pink-500 leading-6  font-bold text-[16px] w-[20%]   rounded-[25px] mx-96 bg-pink-300' : 'text-[#F97316] font-semibold text-[14px] leading-4 ' }`}><img src={props.icon}/> {props.offer} </button>  */}
        <button className='p-3 rounded-[25px] flex gap-1 md:mx-[30%] lg:mx-[40%] mt-10 items-center   text-pink-500 leading-6 text-center font-bold text-[16px] w-[174px] bg-pink-300'><img src={props.icon}  />{props.offer}</button>
        <p className='text-center font-sans md:text-[32px] lg:text-[48px] leading-[58px] font-semibold pt-10'> {props.title}</p>
        <p className='md:text-[14px] lg:text-[18px] font-medium font-sans leading-[28px] text-center my-10'>{props.desc}</p>
        <button className='md:mx-[35%]  lg:mx-[39%] h-[48px] font-semibold text-center  flex  items-center gap-4  bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent w-[196px] leading-[28px] text-[18px]'>{props.butn} <img src={props.symbol}  /></button>
       
        <img src={props.img1} className='mx-[86%] my-[-28.5%]'/>
        <img src={props.img2} className='mx-[96%]  my-[67px]' />
        </div>
        </div>
      
  )
}

export default Frame6