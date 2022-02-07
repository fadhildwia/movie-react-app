import { Card } from 'components'
import { CARD } from 'examples'
import React from 'react'

type Props = {
  data: any[]
  onWatch?: (e?: any) => void
}

const List: React.FC<Props> = ({ data, onWatch }) => {
  return (
    <>
      {data.map((item: any, key: number) => (
        <div className='text-white p-5'>
          <div className='d-flex align-items-center'>
            <div className='me-5'>
              <div className='fs-3 fw-bold'>{item.title}</div>
            </div>
            <div style={{ width: '150px' }}>
              <select name="" id="" className="form-select form-select-sm">
                {item.list.map((item: any, key: number) => (
                  <option value={item.value}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="d-flex flex-nowrap overflow-auto p-4">
            <Card data={CARD} onWatch={onWatch} />
            <Card data={CARD} onWatch={onWatch} />
            <Card data={CARD} onWatch={onWatch} />
            <Card data={CARD} onWatch={onWatch} />
            <Card data={CARD} onWatch={onWatch} />
            <Card data={CARD} onWatch={onWatch} />
            <Card data={CARD} onWatch={onWatch} />
            <Card data={CARD} onWatch={onWatch} />
            <Card data={CARD} onWatch={onWatch} />
            <Card data={CARD} onWatch={onWatch} />
          </div>
        </div>
      ))}
    </>
  )
}

export { List }