import React from 'react'
import { Hero, About, Gallery, Clients, Contacts, Footer } from "./components";

const App = () => {
  return (
    <div className='bg-whiteG text-dimBlack'>
      <div>
          <Hero />
      </div>

      <div>
          <About />
          <Gallery />
          <Clients />
          <Contacts />
          <Footer />
      </div>
    </div>
  )
}

export default App