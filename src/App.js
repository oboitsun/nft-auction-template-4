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
        <div className=''>
          <Header />
          <div className=' w-full '>
            <AuctionPreview />
          </div>
        </div>
      </UserProvider>
    )
  }
}

export default App
