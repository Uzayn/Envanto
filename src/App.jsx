import React from 'react'
import { Hero, About, Gallery, Clients, Contacts } from "./components";

const App = () => {
  return (
    <div className='bg-whiteG'>
      <div>
          <Hero />
      </div>

      <div>
          <About />
          <Gallery />
          <Clients />
          <Contacts />
          Footer
      </div>
    </div>
  )
}

export default App