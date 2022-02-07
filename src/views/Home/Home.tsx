import React from 'react'
import { Carausel, List, Navbar } from 'components'
import { EXAMPLE, LIST } from 'examples'

const Home: React.FC = () => {
  return (
    <div style={{ background: '#1E2833'}}>
      <Navbar />
      <Carausel data={EXAMPLE} />
      <List data={LIST} onWatch={() => {}} />
    </div>
  )
}

export default Home