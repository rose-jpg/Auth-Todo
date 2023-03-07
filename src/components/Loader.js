import React from "react"


function Loader() {
  return (
    <div className='relative h-[100vh] text-white '>
        
      
      <div className='absolute py-6  px-4'>
        <h1 className='text-[30px] top-0 uppercase font-bold'>Just</h1>
        <h5 className='text-[20px] font-bold'>
          Think How To <span className='italic'>Do it.</span>
        </h5>
      </div>
      <div className='absolute right-0 top-[15%] px-4  '>
        <h1 className='text-[30px] font-bold uppercase'>Not</h1>
        <h5 className='text-[20px] font-bold'>How to plan it</h5>
      </div>
      <div className=' flex flex-wrap w-[380px]  px-4 '>
        <div className='w-[170px] h-[200px] absolute top-[27%] bg-[#e40fac] rounded-[24px] rotate-[-7deg] p-2'>
            <h5 className="leading-[15px] mb-2">NOt sure where this is going</h5>
            <h6 className="text-[10px]">23th Feb 2000</h6>
            <p className="text-[10px] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elitsit amet consectetur adipisicing elit </p>
        </div>
        <div className='w-[170px] h-[200px] absolute top-[30%] right-[35px] bgg rounded-[24px] rotate-[-7deg] shadow-2xl p-2'>
        <h5 className="leading-[15px] mb-2">NOt sure where this is going</h5>
            <h6 className="text-[10px]">23th Feb 2000</h6>
            <p className="text-[10px] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elitsit amet consectetur adipisicing elit </p>
        </div>
        <div className='w-[170px] h-[200px] absolute top-[58%]  text-[#09E1E7] bgg rounded-[24px] rotate-[-7deg] p-2'>
        <h5 className="leading-[15px] mb-2">NOt sure where this is going</h5>
            <h6 className="text-[10px]">23th Feb 2000</h6>
            <p className="text-[10px] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elitsit amet consectetur adipisicing elit </p>
        </div>
        <div className='w-[170px] h-[200px] absolute top-[58%] right-[25px] bg-[#D75AE8] rounded-[24px] p-2 rotate-[-7deg] shadow-2xl'>
        <h5 className="leading-[15px] mb-2">NOt sure where this is going</h5>
            <h6 className="text-[10px]">23th Feb 2000</h6>
            <p className="text-[10px] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elitsit amet consectetur adipisicing elit </p>
        </div>
      </div>
    </div>
  )
}

export default Loader
