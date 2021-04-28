import React, { Component } from 'react'

export default class Author extends Component {
  render() {
    return (
      <div className='flex items-center text-xl relative z-10'>
        <span className='w-10 h-10 rounded-full bg-blue-300 mr-2'></span>
        <span className='mr-1'>Created by Olive Allen</span>
      </div>
    )
  }
}
