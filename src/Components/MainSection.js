import React, { Component } from 'react'
import Details from './Details'
import Favorites from './Favorites'

export default class MainSection extends Component {
  render() {
    return (
      <div className='hover:bg-gray-400 hover:bg-opacity-40 w-full h-full flex flex-col rounded-3xl bg-white'>
        <div className='h-[75px] flex justify-end items-end 2xl:px-20 xl:px-16 lg:px-10 px-2 py-3'>
          <Favorites />
        </div>
        <section className='horizontal-ratio w-full flex flex-grow'>
          <iframe
            className='absolute top-0 w-full h-full border-none'
            src='https://www.youtube.com/embed/KS9fsToCwWo'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>
        </section>
        <div className='h-60 py-2 lg:py-3 2xl:py-7 pl-3 lg:pl-6 2xl:pl-12 pr-3 xl:pr-4 2xl:pr-8  overflow-hidden'>
          <Details />
        </div>
      </div>
    )
  }
}
