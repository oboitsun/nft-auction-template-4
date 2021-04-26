import React, { Component } from 'react'
import BidList from './BidList'

export default class Offers extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }
  handleShowOffers = () => {
    this.setState({ ...this.state, show: !this.state.show })
  }
  render() {
    return (
      <div className='w-full h-full flex flex-col items-start overflow-hidden'>
        <div
          onClick={this.handleShowOffers}
          className='flex items-center justify-between w-full text-white border border-white p-2 lg:p-4 bg-gray-600 mb-5 z-10 cursor-pointer'>
          <span className='uppercase font-semibold'>OFFERS</span>
          <span className='text-gray-500 w-5 h-4'>
            <svg
              className={
                this.state.show
                  ? 'fill-current w-full h-full transform transition-transform  rotate-180'
                  : 'fill-current w-full h-full transition-transform transform  rotate-0'
              }
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 13.16 7.84'>
              <g id='Layer_2' data-name='Layer 2'>
                <g id='Layer_2-2' data-name='Layer 2'>
                  <polyline fill='current' points='0.44 0.44 6.58 7.4 12.72 0.44' />
                </g>
              </g>
            </svg>
          </span>
        </div>

        <div
          className={
            this.state.show
              ? 'overflow-hidden px-2  w-full h-full text-white border  border-white p-2 lg:p-4 bg-gray-600 transform transition-all opacity-100 z-0'
              : 'overflow-hidden px-2 w-full h-full text-white border  border-white p-2 lg:p-4 bg-gray-600 transform transition-all -translate-y-full opacity-0 z-0'
          }>
          <BidList />
        </div>
      </div>
    )
  }
}
