import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
      <div className='border border-white p-2 lg:py-4 lg:px-2 xl:py-8 xl:px-5 bg-gray-600 2xl:min-h-[180px]'>
        <div className='uppercase text-blue-300 font-semibold'>
          <span>Category:</span>
          <span>Polkamon</span>
        </div>
        <span className='font-semibold text-white texl-lg xl:text-2xl 2xl:text-4xl'>
          A piece of something
        </span>
      </div>
    )
  }
}
