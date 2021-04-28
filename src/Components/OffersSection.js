import React, { Component } from 'react'
import Offers from './Offers'
import UserContext from '../Context'
import { choosePattern } from './patternLibrary'
export default class OffersSection extends Component {
  static contextType = UserContext

  render() {
    const {
      state,
      state: { editMode },
      showEditor,
    } = this.context
    const hover = editMode ? 'hover:bg-gray-500 hover:bg-opacity-40 cursor cursor-pointer' : ``
    const headerPattern = choosePattern(
      state.offersSection.pattern,
      state.offersSection.patternColor
    )
    return (
      <div
        style={{
          backgroundColor: state.offersSection.bckColor,
        }}
        className='relative w-full h-full overflow-hidden text-black  px-2 xl:px-5 xl:py-2 2xl:pt-8 2xl:pb-4'>
        {editMode && (
          <div
            onClick={() => {
              showEditor('offersSection')
            }}
            className={`edit absolute top-0 left-0  w-full h-full ${hover}  z-30`}></div>
        )}

        <div
          style={{ ...headerPattern }}
          className={`absolute top-0 left-0 h-full w-full z-0`}></div>
        <Offers />
      </div>
    )
  }
}
