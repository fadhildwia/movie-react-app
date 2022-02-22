import images from 'assets/images'
import React from 'react'
import './CastList.scss'

type Props = {
  data: any
}


const CastList: React.FC<Props> = ({ data }) => {
  return (
    <div className='text-white p-5'>
      <div className='d-flex align-items-center'>
        <div className='me-5'>
          <div className='fs-3 fw-bold'>Top Billed Cast</div>
        </div>
      </div>
      <div className="d-flex flex-nowrap overflow-auto p-4">
        {data.cast.map((item: any) => (
          <div className='cast_list d-flex flex-column text-center me-3 font-roboto' style={{ width: '200px'}}>
            <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt="" width={'200px'} height={'300px'} />
            <div className='fw-bolder my-2'>{item.character}</div>
            <div className='mb-3'>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { CastList }