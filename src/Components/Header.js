import React, { Component } from 'react'
import AccountHeader from './AccountHeader'
import Nav from './Nav'
import UserContext from '../Context'
import TemplateEditor from './TemplateEditor'
export default class Header extends Component {
  static contextType = UserContext
  render() {
    const {
      state: { editMode },
      showEditor,
    } = this.context
    return (
      <div className='h-44 w-full flex flex-col justify-between  bg-gray-900 '>
        {editMode ? (
          <TemplateEditor />
        ) : (
          <div>
            {' '}
            <Nav />
            <AccountHeader />
          </div>
        )}
      </div>
    )
  }
}
