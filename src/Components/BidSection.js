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
          border: `${state.bidSection.borderWidth}px solid ${state.bidSection.borderColor}`,
        }}
        onClick={() => {
          showEditor('bidSection')
        }}
        className={`flex justify-between  text-white p-2 lg:p-4 relative transition-all`}>
        {editMode && <div className={`absolute top-0 left-0 h-full w-full ${hover} `}></div>}

        <div
          style={{ ...categoryPattern }}
          className={`absolute top-0 left-0 h-full w-full   z-0`}></div>
        <div className='w-1/2 border-r p-1 z-10'>
          <Bid />
        </div>
        <div className='w-1/2 p-1 2xl:p-2 justify-center z-10'>
          <AuctionEnds />
        </div>
      </div>
    )
  }
}
