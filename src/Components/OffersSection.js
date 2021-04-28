import React, { Component } from 'react'
import Offers from './Offers'
import UserContext from '../Context'
import { choosePattern } from './patternLibrary'
import Button from './Button'
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
        className='relative flex flex-col w-full h-full overflow-hidden text-black p-5 px-5 py-5 '>
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
        <div className='w-auto flex justify-center'>
          <Button />
        </div>
        <Offers />
      </div>
    )
  }
}
