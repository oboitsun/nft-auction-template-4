import React, { Component } from 'react'
import MainSection from './MainSection'
import SideSection from './SideSection'
import UserContext from '../Context'
export default class AuctionPreview extends Component {
  static contextType = UserContext
  render() {
    const {
      state,
      state: { editMode },
      setMode,
    } = this.context
    const status = Object.entries(state)
    return (
      <div className='px-10 max-w-[1440px] max-h-[825px] w-full h-full  m-auto flex font-barlow overflow-hidden'>
        <div className='xl:w-2/3 mr-3 h-full'>
          <MainSection />
        </div>
        <div className='xl:w-1/3 h-full'>
          <SideSection />
        </div>

        <div className='absolute top-56 left-4 text-white flex- flex-col'>
          <p className='mb-1 uppercase'>Edit Mode Is:</p>
          <button onClick={setMode} className='px-4 py-2 rounded-lg border border-white uppercase'>
            {editMode ? 'on' : 'off'}
          </button>
          {/* <div className='flex flex-col max-w-sm'>
            {status.map((k, i) => (
              <div key={i}>
                {k[0]}:{JSON.stringify(k[1], null, 2)}
              </div>
            ))}
          </div> */}
        </div>
      </div>
    )
  }
}
