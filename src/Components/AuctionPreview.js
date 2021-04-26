import React, { Component } from 'react'
import MainSection from './MainSection'
import SideSection from './SideSection'
export default class AuctionPreview extends Component {
  render() {
    return (
      <div className='px-10 max-w-[1440px] max-h-[825px] w-full h-full  m-auto flex font-barlow overflow-hidden'>
        <div className='xl:w-2/3 mr-3 h-full'>
          <MainSection />
        </div>
        <div className='xl:w-1/3 h-full'>
          <SideSection />
        </div>
      </div>
    )
  }
}
