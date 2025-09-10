import React from 'react'
import round from '../../assets/icons/Vector (Stroke).png'
import round2 from '../../assets/icons/Vector (Stroke)-1.png'
import round3 from '../../assets/icons/Vector (Stroke)-2.png'

function TripTypeSelector() {
  return (
    <div className='flex justify-between gap-2.5'>
        <div className='flex' >
            <img src={round} alt="" />
            <button>Round Trip</button>
        </div>
        <div className='flex' >
            <img src={round2} alt="" />
            <button>MultiCity</button>
        </div>
        <div className='flex' >
            <img src={round3} alt="" />
            <button>One Way</button>
        </div>
        
    </div>
  )
}

export default TripTypeSelector