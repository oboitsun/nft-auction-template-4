import React, { Component } from 'react'
import Author from './Author'
import Button from './Button'
import BidSection from './BidSection'
import Category from './Category'
import Offers from './Offers'

export default class SideSection extends Component {
  render() {
    return (
      <div className='flex flex-col  2xl:pt-5 h-full '>
        <div className='pb-5'>
          <Author />
        </div>
        <div className='pb-1 lg:pb-5 2xl:pb-10'>
          <Category />
        </div>
        <div className='pb-1 lg:pb-5'>
          <BidSection />
        </div>
        <div className='flex justify-center items-center pb-1 lg:pb-5 2xl:pb-12'>
          <Button />
        </div>
        <div className='flex justify-between   overflow-hidden'>
          <Offers />
        </div>
      </div>
    )
  }
}
