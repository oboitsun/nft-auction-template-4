import React, { Component } from 'react'
import UserContext from '../Context'
import { choosePattern } from './patternLibrary'
export default class Button extends Component {
  static contextType = UserContext
  render() {
    const {
      state,
      state: { editMode },
      showEditor,
    } = this.context
    const hover = editMode ? 'hover:bg-gray-500 hover:bg-opacity-40 cursor cursor-pointer' : ``
    const categoryPattern = choosePattern(state.button.pattern, state.button.patternColor)
    return (
      <button
        style={{
          backgroundColor: state.button.bckColor,
          border: `${state.button.borderWidth}px solid ${state.button.borderColor}`,
        }}
        onClick={() => {
          showEditor('button')
        }}
        className={`uppercase text-3xl px-6 py-1 rounded-lg  overflow-hidden relative`}>
        {editMode && <div className={`absolute top-0 left-0 h-full w-full ${hover} z-40  `}></div>}
        <div
          style={{ ...categoryPattern }}
          className={`absolute top-0 left-0 h-full w-full   z-0`}></div>
        Place a Bid
      </button>
    )
  }
}
