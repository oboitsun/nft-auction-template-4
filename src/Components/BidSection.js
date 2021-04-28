import React, { Component } from 'react'
import AuctionEnds from './AuctionEnds'
import Bid from './Bid'
import UserContext from '../Context'
import { choosePattern } from './patternLibrary'

export default class BidSection extends Component {
  static contextType = UserContext
  render() {
    const {
      state,
      state: { editMode },
      showEditor,
    } = this.context
    const hover = editMode ? 'hover:bg-gray-500 hover:bg-opacity-40 cursor cursor-pointer' : ``
    const categoryPattern = choosePattern(state.bidSection.pattern, state.bidSection.patternColor)
    return (
      <div
        style={{
          backgroundColor: state.bidSection.bckColor,
          // border: `${state.bidSection.borderWidth}px solid ${state.bidSection.borderColor}`,
        }}
        onClick={() => {
          showEditor('bidSection')
        }}
        className={`flex flex-col  items-center py-5 pb-10 h-full relative `}>
        {editMode && <div className={`absolute top-0 left-0 h-full w-full ${hover} z-20 `}></div>}

        <div
          style={{ ...categoryPattern }}
          className={`absolute top-0 left-0 h-full w-full   z-0`}></div>
        <div className='z-10 mb-10'>
          <Bid />
        </div>
        <div className='z-10'>
          <AuctionEnds />
        </div>
      </div>
    )
  }
}
