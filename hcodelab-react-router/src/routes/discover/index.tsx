import React from 'react'

import image1 from '../../assets/images/discover-1.webp';
import image2 from '../../assets/images/discover-2.webp';
import image3 from '../../assets/images/discover-3.webp';
import image4 from '../../assets/images/discover-4.webp';

import './discover.scss';

export const Discover = () => {
  return (

    <section id="discover">
        <h2>Descubra</h2>

        <div className="discover-container">
            <div className="discover-item">
                <img src={image1} alt="Porsche Exclusive Manufaktur" />
                <h3>Porsche Exclusive Manufaktur</h3>
            </div>
            <div className="discover-item">
                <img src={image2} alt="Porsche Finder" />
                <h3>Porsche Finder</h3>
            </div>
            <div className="discover-item">
                <img src={image3} alt="Porsche E-Performance" />
                <h3>Porsche E-Performance</h3>
            </div>
            <div className="discover-item">
                <img src={image4} alt="Porsche Lifestyle" />
                <h3>Porsche Lifestyle</h3>
            </div>
        </div>
    </section>

  )
}
