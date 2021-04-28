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
        className={`relative w-full h-full text-black font-vt flex flex-col rounded-2xl overflow-hidden z-10 `}>
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
            className={`absolute top-0 left-0 h-full w-full z-10 `}></div>
          <div className='w-full  flex flex-shrink '>
            <div className='w-1/5 pl-10  py-10'>
              <Author />
            </div>

            <div className='w-full  '>
              <section className='horizontal-ratio w-full flex  z-10'>
                <iframe
                  className='absolute top-0 w-full h-full border-none py-10'
                  src='https://www.youtube.com/embed/KS9fsToCwWo'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen></iframe>
              </section>
            </div>
            <div className='w-1/5 pl-5  py-10 items-start z-10'>
              <Favorites />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: `${
              state.mainSection.borderWidth > 0 ? state.mainSection.borderColor : 'transparent'
            }`,
          }}
          className='flex w-full  h-60 pt-0.5 z-10'>
          <div className='w-1/3 h-full box-border flex flex-col  text-black'>
            <Details />
          </div>
          <div className='w-1/3 h-full mx-0.5 box-border flex flex-col  text-black'>
            <BidSection />
          </div>
          <div className='w-1/3 h-full box-border flex flex-col  '>
            <OffersSection />
          </div>
        </div>
      </div>
    )
  }
}
