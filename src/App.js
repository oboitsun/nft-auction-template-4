import React from 'react'
import Header from './Components/Header'
import AuctionPreview from './Components/AuctionPreview'
import { UserProvider } from './Context'
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <UserProvider>
        <div className='bg-red-500'>
          <Header />
          <div className='py-10 w-full h-screen min-h-screen'>
            <AuctionPreview />
          </div>
        </div>
      </UserProvider>
    )
  }
}

export default App
