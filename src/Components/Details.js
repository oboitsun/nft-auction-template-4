import React, { Component } from 'react'
import UserContext from '../Context'
import { choosePattern } from './patternLibrary'
export default class Details extends Component {
  static contextType = UserContext
  render() {
    const {
      state,
      state: { editMode },
      showEditor,
    } = this.context
    const hover = editMode ? 'hover:bg-gray-500 hover:bg-opacity-40 cursor cursor-pointer' : ``
    const headerPattern = choosePattern(
      state.categorySection.pattern,
      state.categorySection.patternColor
    )
    return (
      <div
        style={{
          backgroundColor: state.offersSection.bckColor,
        }}
        className=' flex  flex-col w-full h-full  text-black z-10 relative p-5'>
        {editMode && (
          <div
            onClick={() => {
              showEditor('categorySection')
            }}
            className={`edit absolute top-0 left-0  w-full h-full ${hover}  z-30`}></div>
        )}

        <div
          style={{ ...headerPattern }}
          className={`absolute top-0 left-0 h-full w-full z-0`}></div>
        <h3 className='leading-none uppercase tracking-tighter text-2xl mb-1 z-10'>details</h3>
        <div className='w-full h-px bg-gray-400 my-1 `-z-10'></div>
        <div className='z-10 h-full  pr-6  text-xl overflow-y-scroll scrollbar-track-border  scrollbar scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-thumb-rounded-full'>
          <p>
            Not a day goes by that we have not heard of financial, crypto or property bubbles. Each
            passing day bubbles inflate even more. My interest as an artist is growing in this
            topic. It is unclear how it will end! Sooner or later we’ll find out... Video loop.
            2000x2000 pix
          </p>
          <p>
            Not a day goes by that we have not heard of financial, crypto or property bubbles. Each
            passing day bubbles inflate even more. My interest as an artist is growing in this
            topic. It is unclear how it will end! Sooner or later we’ll find out... Video loop.
            2000x2000 pix
          </p>
        </div>
      </div>
    )
  }
}
