import React, { Component } from 'react'

export default class Bid extends Component {
  render() {
    return (
      <div className='flex flex-col  items-center text-3xl uppercase leading-none'>
        <span className=''>Current bid:</span>
        <span className='tracking-tighter '>0.8888 Eth</span>
        <span className=''>$2,154.84</span>
      </div>
    )
  }
}
