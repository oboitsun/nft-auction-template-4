import React, { Component } from 'react'
import AccountHeader from './AccountHeader'
import Nav from './Nav'

export default class Header extends Component {
  render() {
    return (
      <div className='h-44 w-full flex flex-col justify-between  bg-gray-900 '>
        <Nav />
        <AccountHeader />
      </div>
    )
  }
}
