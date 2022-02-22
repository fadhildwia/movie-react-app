/* eslint-disable jsx-a11y/anchor-is-valid */
import { Star } from 'components'
import React from 'react'
import './BannerDetail.scss'

type Props = {
  data: any
}

const BannerDetail: React.FC<Props> = ({ data }) => {
  return(
    <div className='banner'>
      <div className='banner-wrap'>
        <div className='banner-img' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data?.backdrop_path})` }}>
          <div className='banner-overlay'>
            <div className="container">
              <div className='d-flex align-items-start'>
                <div className="me-5 my-5">
                  <img src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} width='200px' alt="cover" />
                </div>
                <div className="row my-5 g-2">
                  <div className='fw-bolder fs-3'>{data.title}</div>
                  <div className='fs-6'>{data.release_date} - {data.runtime}m</div>
                  <div className='d-flex align-items-center gap-3'>
                    <Star width={30} height={30} spacing={5} value={data.vote_average / 2} />
                    <div className='fw-bolder fs-4'>{data.vote_average}</div>
                    <a href={data.homepage} className='btn btn-sm btn-danger'>Home Page</a>
                  </div>
                  <div className='fw-bolder fs-4'>Overview</div>
                  <p className='fs-6'>{data.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { BannerDetail }