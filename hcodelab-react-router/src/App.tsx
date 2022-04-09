import React from 'react';
import { Link } from 'react-router-dom';
import './App.scss';
import Logo from './assets/images/porsche-logo@2x.png';

function App() {
	return (
		<div className="app">
			<header className="App-header">
				<a href="/" className="logo" aria-label='Logo'>
					<img src={Logo} alt="Porsche" />
				</a>

				<div className="menu">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/models">Models</Link></li>
						<li><Link to="/">Descubra</Link></li>
					</ul>
				</div>
			</header>

			<section id="hero">
				<div className="container">
					<h2 className='hero-title'>Bem-vindo à vida.</h2>
					<h3 className='hero-subtitle'>Modelos 718 T.</h3>
				</div>
			</section>

			<footer>
				<div className="content">
					<div className="copyright">
						<p>
						© 2022 Hcode Treinamentos. Indicações Legais. Política de Privacidade. Compliance Porsche. Licence Agreement.
						</p>
						<p>
						* As informações encontradas neste site referentes ao Porsche Connect não se aplicam ao Brasil, já que o programa ainda não está disponível no mercado brasileiro. Para mais informações sobre os produtos disponíveis no Brasil entre em contato com o Porsche Center de sua preferência.
						</p>
					</div>
				</div>

			</footer>
		</div>
	);
}

export default App;
