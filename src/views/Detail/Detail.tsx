import { BannerDetail, CastList, Navbar } from 'components'
import { CAST } from 'examples'
import React from 'react'

const Detail: React.FC = () => {
  return (
    <div style={{ background: '#1E2833'}}>
      <Navbar className='active' />
      <BannerDetail />
      <CastList data={CAST} />
    </div>
  )
}

export default Detail