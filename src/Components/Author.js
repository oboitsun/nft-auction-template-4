import React, { Component } from 'react'

export default class Author extends Component {
  render() {
    return (
      <div className='flex flex-col items-start text-xl relative z-10'>
        <span className='w-10 h-10 rounded-full bg-blue-300 mr-2'></span>

        <span className='mr-1'>Created by</span>
        <span className='mr-1'>Olive Allen</span>
      </div>
    )
  }
}
