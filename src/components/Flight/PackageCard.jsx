import React from 'react' ;
import icon from '../../assets/icons/true.png';
function PackageCard() {
  return (
    <div className='flex flex-col gap-4 p-6 rounded-xl border-[1px] border-[#D1D5DB] bg-[#FAFAFA] ' >
        <div><h1>Paris Evening Cruise</h1></div>
        <div className='flex gap-1' ><h1 className='font-semibold text-[40px]' >$75</h1>
                <h2 className='text-[#6B7280] font-medium ' >/person</h2>
        </div>
        <div className='flex flex-col gap-2' >
            <div className='flex gap-3'>
                <img src={icon}/>
                <h1>Duration: 3 hours</h1>
            </div>
            <div className='flex gap-3'>
                <img src={icon}/>
                <h1>Highlights: </h1>
            </div>
            <div className='flex gap-3'>
                <img src={icon}/>
                <h1>Avalibality: </h1>
            </div>
            <div className='flex gap-3'>
                <img src={icon}/>
                <h1>Guide: </h1>
            </div>
            <div className='flex gap-3'>
                <img src={icon}/>
                <h1>Transportation: </h1>
            </div>
        </div>
       
    </div>
  )
}

export default PackageCard