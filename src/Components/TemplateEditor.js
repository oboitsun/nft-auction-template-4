import React, { Component } from 'react'
import UserContext from '../Context'
import MainSectionEditor from './Editors/MainSectionEditor'
import CategorySectionEditor from './Editors/CategorySectionEditor'
import BidSectionEditor from './Editors/BidSectionEditor'
import OffersSectionEditor from './Editors/OffersSectionEditor'
export default class TemplateEditor extends Component {
  static contextType = UserContext
  render() {
    const { state, showEditor } = this.context
    return (
      <div>
        {state.mainSection.edit && <MainSectionEditor />}
        {state.categorySection.edit && <CategorySectionEditor />}
        {state.bidSection.edit && <BidSectionEditor />}
        {state.offersSection.edit && <OffersSectionEditor />}
      </div>
    )
  }
}
