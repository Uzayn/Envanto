import React from 'react'
import { Hero, About, Gallery, Clients } from "./components";

const App = () => {
  return (
    <div className='bg-white'>
      <div>
          <Hero />
      </div>

      <div>
          <About />
          <Gallery />
          <Clients />
          Contact
          Footer
      </div>
    </div>
  )
}

export default App