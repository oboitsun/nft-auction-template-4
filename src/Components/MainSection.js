import React, { Component } from 'react'
import Details from './Details'
import Favorites from './Favorites'
import UserContext from '../Context'
import { choosePattern } from './patternLibrary'
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
        onClick={() => {
          showEditor('mainSection')
        }}
        className={` w-full h-full  flex justify-center rounded-3xl relative z-30`}>
        {editMode && (
          <div
            className={`edit absolute top-0 left-0  w-full h-full ${hover} rounded-2xl z-30`}></div>
        )}

        <div
          style={{ ...headerPattern }}
          className={`absolute top-0 left-0 h-full w-full  rounded-3xl z-0`}></div>
        <div className='w-1/12'></div>
        <section className='vertical-ratio w-1/12  flex z-10 relative '>
          <iframe
            title='vertical'
            className='absolute top-0 w-full h-full py-4 px-10'
            src='https://www.youtube.com/embed/tCCY31XxN_Y'
            frameBorder='0'
            allowFullScreen=''></iframe>
        </section>
        <div className='w-full py-5 flex flex-col  overflow-hidden relative  z-10'>
          <div className='flex h-1/2 pr-6'>
            <Details />
          </div>
          <div className='flex justify-start items-center flex-grow'>
            <Favorites />
          </div>
        </div>
      </div>
    )
  }
}
