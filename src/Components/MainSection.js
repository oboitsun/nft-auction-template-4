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
        className={` w-full h-full  flex flex-col rounded-3xl relative z-30`}>
        {editMode && (
          <div
            className={`edit absolute top-0 left-0  w-full h-full ${hover} rounded-2xl z-30`}></div>
        )}

        <div
          style={{ ...headerPattern }}
          className={`absolute top-0 left-0 h-full w-full  rounded-3xl z-0`}></div>

        <div className=' h-16 flex justify-end items-end 2xl:px-20 xl:px-16 lg:px-10 px-2 py-2 z-10'>
          <Favorites />
        </div>
        <section className='horizontal-ratio w-full flex  z-10'>
          <iframe
            className='absolute top-0 w-full h-full border-none'
            src='https://www.youtube.com/embed/KS9fsToCwWo'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>
        </section>
        <div className=' 2xl:h-60 py-2 lg:py-3 2xl:py-7 pl-3 lg:pl-6 2xl:pl-12 pr-3 xl:pr-4 2xl:pr-8  overflow-hidden  z-10'>
          <Details />
        </div>
      </div>
    )
  }
}
