import React from 'react'

import './not-found.scss';

import notFoundImage from '../../assets/images/not-found.webp';

export const NotFound = () => {
  return (
    <section id="not-found">
        <h2>Essa página não foi encontrada</h2>
        <img src={notFoundImage} alt="Not Found" />
    </section>
  )
}
