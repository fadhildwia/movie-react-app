import images from 'assets/images'
import { Star } from 'components'
import React from 'react'
import './Card.scss'

type Props = {
  data: any
  onWatch?: (e?: any) => void
}

const Card: React.FC<Props> = ({ data, onWatch = () => {} }) => {
  return(
    <div className='me-3 text-white font-roboto'>
      <div className='component__card align-items-end' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.poster_path})` }}>
        <div className='card-overlay position-relative'>
          <div className="row px-2 position-absolute bottom-0 g-3">
            <div className='col-auto'>
              <div className='fs-8 card-genre p-1' style={{ color: "#0FEFFD"}}>{data.genre}</div>
            </div>
            <div className='col-12'>
              <div className='fs-6 fw-bold'>{data.title}</div>
              <div className="d-flex">
                <Star width={25} height={25} spacing={1} value={data.vote_average / 2} />
              </div>
            </div>
            <div className='col-10 mb-2'>
              <div onClick={() => onWatch(data.id)} className='fs-7' style={{ cursor: 'pointer' }}>Show Detail</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Card }