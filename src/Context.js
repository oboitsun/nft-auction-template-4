import React, { Component } from 'react'

const UserContext = React.createContext()

class UserProvider extends Component {
  // Context state

  state = {
    editMode: true,
    background: {
      edit: false,
      bckColor: '#a3e6ff',

      pattern: 'lined',
      patternColor: 'white',
    },
    button: {
      edit: false,
      bckColor: '#a3e6ff',
      borderWidth: 2,
      borderColor: 'white',
      pattern: 'lined',
      patternColor: 'white',
    },
    mainSection: {
      edit: false,
      bckColor: '#a3e6ff',
      borderWidth: 2,
      borderColor: 'white',
      pattern: 'lined',
      patternColor: 'white',
    },
    categorySection: {
      edit: false,
      bckColor: 'red',
      borderWidth: 2,
      borderColor: 'white',
      pattern: 'dotted',
      patternColor: 'white',
    },
    bidSection: {
      edit: true,
      bckColor: 'red',
      borderWidth: 2,
      borderColor: 'white',
      pattern: 'flat',
      patternColor: 'white',
    },
    offersSection: {
      edit: false,
      bckColor: 'red',
      borderWidth: 2,
      borderColor: 'white',
      pattern: 'flat',
      patternColor: 'white',
    },
  }

  // Method to update state
  setMode = () => {
    this.setState((prevState) => ({ ...prevState, editMode: !prevState.editMode }))
  }
  showEditor = (what) => {
    let oldState = this.state
    Object.entries(oldState).map((key) => {
      if (key[0] === what) {
        key[1].edit = true
      }
      if (key[0] !== what && key[1]?.edit) {
        key[1].edit = false
      }
      return key
    })
    this.setState({ ...oldState })
  }
  changeSectionProp = (where, keyProp, color) => {
    console.log(where, keyProp, color)
    this.setState({ ...this.state, [where]: { ...this.state[where], [keyProp]: color } })
  }
  render() {
    const { children } = this.props
    const state = this.state
    const { setMode, showEditor, changeSectionProp } = this

    return (
      <UserContext.Provider
        value={{
          state,
          setMode,
          showEditor,
          changeSectionProp,
        }}>
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserContext

export { UserProvider }
