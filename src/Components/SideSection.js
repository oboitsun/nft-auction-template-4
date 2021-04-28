import React, { Component } from 'react'

export default class SideSection extends Component {
  render() {
    return (
      <div className=' h-full  overflow-hidden rounded-tr-2xl rounded-br-2xl'>
        <section className='vertical-ratio w-full h-full flex-grow  flex z-10 relative '>
          <iframe
            title='vertical'
            className='absolute top-0 w-full h-full'
            src='https://www.youtube.com/embed/tCCY31XxN_Y'
            frameBorder='0'
            allowFullScreen=''></iframe>
        </section>
      </div>
    )
  }
}
