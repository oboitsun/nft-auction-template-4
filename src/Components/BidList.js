import React, { Component } from 'react'
import UserContext from '../Context'

export default class BidList extends Component {
  static contextType = UserContext
  render() {
    return (
      <div className='overflow-hidden w-full h-full text-xl '>
        <ul className=' pr-8 h-full overflow-y-scroll scrollbar-track-border   scrollbar scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-thumb-rounded-full'>
          <li className=' w-full flex justify-between '>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>{' '}
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
          <li className='w-full flex justify-between'>
            <span>@OliveAllen </span> <span> 0.11 WAX</span>
          </li>
        </ul>
      </div>
    )
  }
}
