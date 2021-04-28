import React, { Component } from 'react'
import Details from './Details'
import Favorites from './Favorites'
import UserContext from '../Context'
import { choosePattern } from './patternLibrary'
import Author from './Author'
import Category from './Category'
import Button from './Button'
import Bid from './Bid'
import AuctionEnds from './AuctionEnds'
import OffersSection from './OffersSection'
import BidSection from './BidSection'
export default class MainSection extends Component {
  static contextType = UserContext
  render() {
    const {
      state,
      state: { editMode },
      showEditor,
    } = this.context
    const hover = editMode ? 'hover:bg-gray-500 hover:bg-opacity-40 cursor cursor-pointer' : ``
    const headerPattern = choosePattern(state.mainSection.pattern, state.mainSection.patternColor)
    return (
      <div
        style={{
          backgroundColor: state.mainSection.bckColor,
          border: `${state.mainSection.borderWidth}px solid ${state.mainSection.borderColor}`,
        }}
        className={`relative w-full h-full text-black font-vt flex flex-col rounded-tl-2xl rounded-bl-2xl overflow-hidden z-10`}>
        <div className='relative w-full h-full'>
          {editMode && (
            <div
              className={`edit absolute top-0 left-0  w-full h-full ${hover}  z-20`}
              onClick={() => {
                showEditor('mainSection')
              }}></div>
          )}

          <div
            style={{ ...headerPattern }}
            className={`absolute top-0 left-0 h-full w-full z-10`}></div>
          <div className='w-full h-full flex flex-col  px-12 pt-12 pb-8'>
            <div className='mb-4'>
              <Author />
            </div>
            <div className='flex justify-start ml-10 mb-10'>
              <Favorites />
            </div>
            <div className='mb-10'>
              <Category />
            </div>
            <div className='w-full overflow-hidden'>
              <Details />
            </div>
            <div className='flex justify-center items-center'>
              <div className='flex justify-center 2xl:w1/4 xl:w-1/3 w-1/2 z-20'>
                <Button />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: `${
              state.mainSection.borderWidth > 0 ? state.mainSection.borderColor : 'transparent'
            }`,
          }}
          className='flex w-full max-h-60 pt-0.5 z-10'>
          <div className='w-1/2 h-full box-border flex flex-col  text-black'>
            <BidSection />
          </div>
          <div className='w-1/2 h-full box-border flex flex-col ml-0.5 '>
            <OffersSection />
          </div>
        </div>
      </div>
    )
  }
}
