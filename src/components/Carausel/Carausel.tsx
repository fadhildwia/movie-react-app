/* eslint-disable jsx-a11y/alt-text */
import images from 'assets/images'
import { Star } from 'components'
import React, { useState } from 'react'
import './Carausel.scss'

type Props = {
  data: any[]
}

const Carausel: React.FC<Props> = ({ data }) => {
  const [indexActive, setIndexActive] = useState<number>(0)

  const handleNext = () => {
    let slide = indexActive + 1 < data.length ? indexActive + 1 : 0

    setIndexActive(slide)
  }

  const handlePrev = () => {
    let slide = indexActive - 1 < 0 ? data.length - 1 : indexActive - 1

    setIndexActive(slide)
  }

  return (
    <div className="component__carousel d-flex align-items-center position-relative">
      {data.map((item, index) => <>
          <div className='carousel position-absolute' key={index} data-active={index === indexActive} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})` }}></div>
          <div className="carousel-text row position-absolute w-50 ms-5 text-white g-3" style={{ opacity: `${index === indexActive ? '1' : '0'}`}}>
            <div className='border-genre w-auto' style={{ color: "#0FEFFD"}}>{item.genre}</div>
            <div>
              <Star width={35} height={35} spacing={5} value={item.rating} />
            </div>
            <div className='fs-1 fw-bolder'>{item.original_title}</div>
            <div>{item.desc}</div>
          </div>
        </>
      )}
      <div onClick={handlePrev} className='d-flex align-items-center position-absolute arrow-left'>
        <img src={images.ic_arrow} />
      </div>
      <div onClick={handleNext} className='d-flex align-items-center position-absolute end-0 arrow-right'>
        <img src={images.ic_arrow} className="rotate-180" />
      </div>
      <div className='d-flex end-50 position-absolute bottom-0 mb-5 gap-3'>
        {data.map((item, index) => 
          <div key={index} onClick={() => setIndexActive(index)} className={`dot ${index === indexActive ? 'active' : ''}`}></div>
        )}
      </div>
    </div>
  )
}

export { Carausel }