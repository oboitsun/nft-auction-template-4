import React, { Component } from 'react'
import ColorPicker from '../ColorPicker'
import UserContext from '../../Context'
import PatternPicker from '../PatternPicker'
export default class BidSectionEditor extends Component {
  static contextType = UserContext
  render() {
    const { state, changeSectionProp } = this.context
    const sectionProps = {
      where: 'bidSection',
      function: changeSectionProp,
    }

    return (
      <div className='text-white h-full p-4 flex'>
        <div className='w-32 mr-2'>
          <ColorPicker
            name='Main Background'
            keyProp='bckColor'
            color={state.bidSection.bckColor}
            {...sectionProps}
          />
        </div>

        <div className='mr-2'>
          <h3 className='mb-1'>Pattern:</h3>
          <PatternPicker
            color={state.bidSection.patternColor}
            keyProp='pattern'
            {...sectionProps}
          />
        </div>
        <div className='w-32 mr-2'>
          <ColorPicker
            name='Pattern Color'
            keyProp='patternColor'
            color={state.bidSection.patternColor}
            {...sectionProps}
          />
        </div>

        <div className='w-32 h-1/2'>
          <ColorPicker
            name='Border Color'
            keyProp='borderColor'
            color={state.bidSection.borderColor}
            {...sectionProps}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='borderWidth'>Border Width:</label>
          <input
            id='borderWidth'
            className='rounded-lg overflow-hidden appearance-none bg-gray-400 h-3 w-128 mt-1'
            onChange={(event) => {
              changeSectionProp('bidSection', 'borderWidth', event.target.value)
            }}
            defaultValue={state.bidSection.borderWidth}
            step='2'
            type='range'
            min='0'
            max='4'
          />
        </div>
      </div>
    )
  }
}
