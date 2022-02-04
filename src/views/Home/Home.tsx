import React from 'react'
import { Carausel, Navbar } from 'components'
import { EXAMPLE } from 'examples'

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Carausel data={EXAMPLE} />
    </div>
  )
}

export default Home