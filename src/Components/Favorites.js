import React, { Component } from 'react'
import Like from './Icons/Like'
import Star from './Icons/Star'

export default class Favorites extends Component {
  render() {
    return (
      <div className='flex items-center justify-center'>
        <span className='w-5 h-6  mr-2 fill-current'>
          <Star />
        </span>
        <span className='font-semibold font-barlow leading-none text-2xl -mt-1 mr-2'>@</span>
        <span className='w-5 h-5  mr-2 fill-current'>
          <Like />
        </span>
        <span className='text-3xl leading-none'>40</span>
      </div>
    )
  }
}
