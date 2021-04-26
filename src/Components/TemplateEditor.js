import React, { Component } from 'react'
import UserContext from '../Context'
import MainSectionEditor from './Editors/MainSectionEditor'
import CategorySectionEditor from './Editors/CategorySectionEditor'
import BidSectionEditor from './Editors/BidSectionEditor'
import OffersSectionEditor from './Editors/OffersSectionEditor'
import ButtonEditor from './Editors/ButtonSectionEditor'
import BackgroundEditor from './Editors/BackgroundEditor'
export default class TemplateEditor extends Component {
  static contextType = UserContext
  render() {
    const { state } = this.context
    return (
      <div className='w-full h-full flex justify-center items-center'>
        {state.mainSection.edit && <MainSectionEditor />}
        {state.categorySection.edit && <CategorySectionEditor />}
        {state.bidSection.edit && <BidSectionEditor />}
        {state.offersSection.edit && <OffersSectionEditor />}
        {state.button.edit && <ButtonEditor />}
        {state.background.edit && <BackgroundEditor />}
      </div>
    )
  }
}
