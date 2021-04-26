import React, { Component } from 'react'
import Author from './Author'

import BidSection from './BidSection'
import Category from './Category'
import Offers from './Offers'

export default class SideSection extends Component {
  render() {
    return (
      <div className='flex flex-col lg:pt-8 h-full '>
        <div className='mb-5'>
          <Author />
        </div>
        <div className='mb-1 lg:mb-5 2xl:mb-14'>
          <Category />
        </div>
        <div className='mb-1 lg:mb-5'>
          <BidSection />
        </div>
        <div className='flex justify-center items-center mb-1 lg:mb-5 2xl:mb-12'>
          <button className='uppercase font-semibold  px-4 py-2  bg-blue-300 border border-white'>
            Place a Bid
          </button>
        </div>
        <div className='flex justify-between items-stretch h-full overflow-hidden'>
          <Offers />
        </div>
      </div>
    )
  }
}
