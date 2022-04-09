import React from 'react'
import { useNavigate } from 'react-router-dom';

import './models.scss';

const Models = () => {

	const navigate = useNavigate();

	const handleClick = (event: React.MouseEvent<HTMLElement>)=>{

		const target = event.target as HTMLElement;

		if (target.dataset.id) {
			navigate(`/models/${target.dataset.id}?name=${target.dataset.name}&image=${target.dataset.image}`);
		}

	}

	return (

		<section id="models">
			<h2>Models</h2>

			<div className="models">


				<div 
					className="model-item"
					onClick={handleClick}
					data-name="718"
					data-image="porsche-small.webp"
					data-id="1"
				>
					<h3>718</h3>
				</div>

				<div 
					className="model-item"
					onClick={handleClick}
					data-name="911"
					data-image="porsche-small-2.webp"
					data-id="2"
				>
					<h3>911</h3>
				</div>

				<div 
					className="model-item"
					onClick={handleClick}
					data-name="Taycan"
					data-image="porsche-small-3.webp"
					data-id="3"
				>
					<h3>Taycan</h3>
				</div>

				<div 
					className="model-item"
					onClick={handleClick}
					data-name="Panamera"
					data-image="porsche-small-4.webp"
					data-id="4"
				>
					<h3>Panamera</h3>
				</div>

				<div 
					className="model-item"
					onClick={handleClick}
					data-name="Macan"
					data-image="porsche-small-5.webp"
					data-id="5"
				>
					<h3>Macan</h3>
				</div>

				<div 
					className="model-item"
					onClick={handleClick}
					data-name="Cayenne"
					data-image="porsche-small-6.webp"
					data-id="6"
				>
					<h3>Cayenne</h3>
				</div>

			</div>

		</section>

	)
}

export default Models;