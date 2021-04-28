import React, { Component } from 'react'
import BidList from './BidList'

export default class Offers extends Component {
  render() {
    return (
      <div className='w-full h-full box-border flex flex-col justify-start flex-shrink  relative z-10 '>
        {/* {editMode && <div className={`absolute top-0 left-0  w-full ${hover} `}></div>} */}
        <div className='items-center justify-between w-full flex-shrink  z-10'>
          <span className='uppercase text-2xl leading-none'>OFFERS</span>
        </div>
        <div className='relative h-px w-full  bg-gray-500 my-2 z-10'></div>
        <div className='absolute top-2/3 transform -translate-y-1/2 w-full h-2/3 overflow-hidden'>
          <BidList />
        </div>
        {/* <div style={{ ...categoryPattern }} className={`absolute top-0 left-0  w-full   `}></div> */}
      </div>
    )
  }
}
