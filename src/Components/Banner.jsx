import React from 'react'
import bannerImage from '../assets/images/nrna_tournament_banner.jpg';

function Banner() {
  return (
    <div className='Banner'>
        <img src={bannerImage} className="w-full" alt="logo" />
    </div>
  )
}

export default Banner