import images from 'assets/images'
import React from 'react'
import './CastList.scss'

type Props = {
  data: any[]
}


const CastList: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((item: any, key: number) => (
        <div className='text-white p-5'>
          <div className='d-flex align-items-center'>
            <div className='me-5'>
              <div className='fs-3 fw-bold'>{item.title}</div>
            </div>
          </div>
          <div className="d-flex flex-nowrap overflow-auto p-4">
            {item.list.map((item2: any) => (
              <div className='cast_list d-flex flex-column text-center me-3 font-roboto'>
                <img src={images.img_case} alt="" />
                <div className='fw-bolder my-2'>{item2.film}</div>
                <div className='mb-3'>{item2.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export { CastList }