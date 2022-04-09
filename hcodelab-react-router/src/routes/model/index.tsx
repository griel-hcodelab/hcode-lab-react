import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

import './model.scss';

export const Model = () => {

    const params = useParams(); //Recupera os parâmetros da url

    const [query] = useSearchParams(); //Recupera a query da url

    const name = query.get('name');
    const image = query.get('image');

    return (
        
        <section id="model">
            <h2>{name && name}</h2>
            {image && <img src={require(`../../assets/images/${image}`)} alt={name! && name} />}
        </section>

    )
}
