import images from 'assets/images'
import { Star } from 'components'
import React from 'react'
import './BannerDetail.scss'


const BannerDetail: React.FC = () => {
  return(
    <div className='banner'>
      <div className='banner-wrap'>
        <div className='banner-img' style={{ backgroundImage: `url(${images.img_banner_detail})` }}>
          <div className='banner-overlay'>
            <div className="container">
              <div className='d-flex align-items-start'>
                <div className="me-5 mt-5">
                  <img src={images.img_card} width='200px' alt="cover" />
                </div>
                <div className="row mt-5 g-2">
                  <div className='fw-bolder fs-3'>Wonder Woman 1984</div>
                  <div className='fs-6'>20/01/2019 - Action, Adventure, Thriller - 2h 8m</div>
                  <div className='d-flex align-items-center gap-3'>
                    <Star width={30} height={30} spacing={5} value={4} />
                    <div className='fw-bolder fs-4'>4.0</div>
                    <a href="#" className='btn btn-sm btn-danger'>Play Trailer</a>
                  </div>
                  <div className='fw-bolder fs-4'>Overview</div>
                  <p className='fs-6'>
                    Wonder Woman comes into conflict with the Soviet Union during the 
                    Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.
                  </p>
                  <div className="d-flex gap-4">
                    <div>
                      <div className='fw-bolder fs-6'>Lee Hee-jun</div>
                      <div>Director</div>
                    </div>
                    <div>
                      <div className='fw-bolder fs-6'>Lee Hee-jun</div>
                      <div>Director</div>
                    </div>
                    <div>
                      <div className='fw-bolder fs-6'>Lee Hee-jun</div>
                      <div>Director</div>
                    </div>
                  </div>
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