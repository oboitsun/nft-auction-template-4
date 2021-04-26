import React, { Component } from 'react'

const UserContext = React.createContext()

class UserProvider extends Component {
  // Context state
  state = {
    button: {
      bckColor: 'green',
      borderColor: 'white',
      borderRadius: 4,
    },
    mainSection: {
      bckColor: 'red',
      borderColor: 'white',
      pattern: 'flat',
      patternColor: 'white',
    },
    categorySection: {
      bckColor: 'red',
      borderColor: 'white',
      pattern: 'flat',
      patternColor: 'white',
    },
    bidSection: {
      bckColor: 'red',
      borderColor: 'white',
      pattern: 'flat',
      patternColor: 'white',
    },
    offersSection: {
      bckColor: 'red',
      borderColor: 'white',
      pattern: 'flat',
      patternColor: 'white',
    },
  }

  // Method to update state
  setUser = (user) => {
    this.setState((prevState) => ({ user }))
  }

  render() {
    const { children } = this.props
    const { state } = this.state
    const { setUser } = this

    return (
      <UserContext.Provider
        value={{
          state,
          setUser,
        }}>
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserContext

export { UserProvider }
