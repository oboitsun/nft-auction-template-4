import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
      <div className={` text-black`}>
        <div className='text-2xl tracking-wide z-10 flex'>
          <span className='z-10'>Category:</span>
          <span className='z-10'>Polkamon</span>
        </div>
        <span className='texl-xl xl:text-3xl 2xl:text-5xl z-10'>A piece of something</span>
      </div>
    )
  }
}
