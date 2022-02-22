/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import images from 'assets/images'
import './Navbar.scss'

type Props = {
  onHome?: (e: any) => void
  onProfile?: (e: any) => void
  onSearch?: (e: any) => void
  className?: string
}

const Navbar: React.FC<Props> = ({
  onHome,
  onProfile,
  onSearch,
  className
}) => {
  const [navbar, setNavbar] = useState<boolean>(false)

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  
  window.addEventListener('scroll', changeBackground)

  return (
    <>
      <nav className={`component__navbar font-inter-bold ${navbar ? 'active' : ''} ${className}`}>
        <div className="container">
          <div className="row align-items-center" style={{ height: "60px" }}>
            <div className="col-3 col-sm-auto">
              <a href='/' className='text-white fs-3 btn'>React Movie</a>
            </div>
            <div className="col-6 col-sm-auto ms-auto position-relative">
              <input type="text" onChange={onSearch} className='form-control transparent-input text-white rounded-pill bg-transparent' />
              <img src={images.ic_search} width={20} className='position-absolute top-50 end-0 me-4 translate-middle-y' />
            </div> 
            <div className="col-3 col-sm-auto">
              <div onClick={onProfile} style={{ cursor: 'pointer' }}>
                <img src={images.ic_profile} width={50} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export { Navbar }
