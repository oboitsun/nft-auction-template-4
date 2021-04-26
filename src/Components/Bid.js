import React, { Component } from 'react'

export default class Bid extends Component {
  render() {
    return (
      <div className='flex flex-col  text-lg uppercase'>
        <span className='font-semibold'>Current bid:</span>
        <span className='font-semibold text-3xl'>0.8888 Eth</span>
        <span className='font-light'>$2,154.84</span>
      </div>
    )
  }
}
