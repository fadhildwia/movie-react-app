import images from 'assets/images'
import React from 'react'
import './Card.scss'

type Props = {
  data: any[]
  onWatch?: (e?: any) => void
}

const Card: React.FC<Props> = ({ data, onWatch }) => {
  return(
    <>
      {data.map((item: any, key: number) => (
        <div className='me-3 text-white font-roboto'>
          <div className='component__card align-items-end' style={{ backgroundImage: `url(${images.img_card})` }}>
            <div className='card-overlay position-relative'>
              <div className="row px-2 position-absolute bottom-0 g-3">
                <div className='col-auto'>
                  <div className='fs-8 card-genre p-1' style={{ color: "#0FEFFD"}}>{item.genre}</div>
                </div>
                <div className='col-12'>
                  {/* <Star width={25} height={25} spacing={1} value={3.4} /> */}
                </div>
                <div className='col-10'>
                  <div className='fs-6 fw-bold'>{item.title}</div>
                </div>
                <div className='col-10 mb-2'>
                  <div onClick={onWatch} className='fs-7' style={{ cursor: 'pointer' }}>Show Detail</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export { Card }