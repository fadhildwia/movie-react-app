import React from 'react'
import { Carausel, List, Navbar } from 'components'
import { EXAMPLE, LIST } from 'examples'
import { useHistory } from 'react-router-dom'

const Home: React.FC = () => {
  const history = useHistory()

  const handleClickWatch = () => {
    history.push('/detail')
  }

  return (
    <div style={{ background: '#1E2833'}}>
      <Navbar />
      <Carausel data={EXAMPLE} />
      <List data={LIST} onWatch={handleClickWatch} />
    </div>
  )
}

export { Home }