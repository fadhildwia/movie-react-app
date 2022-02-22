import { Card } from 'components'
import React from 'react'

type Props = {
  data: any[]
  list: any[]
  title: string
  onSelect?: (e?: any) => void
  onWatch?: (e?: any) => void
}

const List: React.FC<Props> = ({ title, data, list, onSelect, onWatch }) => {
  return (
    <>
      <div className='text-white p-5'>
        <div className='d-flex align-items-center'>
          <div className='me-5'>
            <div className='fs-3 fw-bold'>{title}</div>
          </div>
          <div style={{ width: '150px' }}>
            <select onChange={onSelect} name={title} className="form-select form-select-sm">
              {data.map((item: any, key: number) => (
                <option key={key} value={item.value}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>
        { list? 
        <div className="d-flex flex-nowrap overflow-auto p-4">
          {list?.map((item: any, key: number) => (
            <Card key={key} data={item} onWatch={onWatch} />
          ))}
        </div> : 'Loading...'
        }
      </div>
    </>
  )
}

export { List }