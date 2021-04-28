import React, { Component } from 'react'

export default class Bid extends Component {
  render() {
    return (
      <div className='flex flex-col  text-3xl uppercase leading-none'>
        <span className='leading-none'>Current bid:</span>
        <span className='tracking-tighter leading-none'>0.8888 Eth</span>
        <span className='leading-none'>$2,154.84</span>
      </div>
    )
  }
}
