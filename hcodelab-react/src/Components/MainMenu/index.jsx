import React from 'react'
import Button from '../Utils/Icons/Button';

import './MainMenu.scss';

const playlists = [
    "Rock","Heavy Metal","PodCasts","Electronic","Pop","Jazz","Classical","Blues","Country","Reggae","R&B","Soul","Folk","World","Indie","Hip-Hop","Rap","Dance","House","Techno","Trance","Ambient","Drum & Bass","Other"
];

export default class MainMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {language: 'pt-br'};
        //Sempre que quero armazenar um valor no estado, uso o this.state({})

        this.handleNewPlaylist = this.handleNewPlaylist.bind(this);
        //Sempre que quero usar o this dentro de uma função, uso o bind(this)

    }


    render() {

        this.setState({language: 'en'});
        //Sempre que quero alterar o valor do estado, uso o this.setState({})

        return (
            <div className='mainMenu'>
                <div className="icons">
                    <Button type="logo"/>
                    <ul>
                        <li>
                            <a href="/"><Button type="home" /> Início</a>
                        </li>
                        <li>
                            <a href="/"><Button type="search" /> Buscar</a>
                        </li>
                        <li>
                            <a href="/"><Button type="library" /> Sua Biblioteca</a>
                        </li>
                        <hr />
                        <li>
                            <a href="/"><Button type="new" /> Criar playlist</a>
                        </li>
                        <li>
                            <a href="/"><Button type="favorites" /> Músicas Curtidas</a>
                        </li>
                    </ul>

                </div>
                <div className="playlist">
                    <ul>
                        {playlists.map((playlist, index) => (
                            <li key={index}>
                                <a href={`#${playlist}`} key={index}>
                                    {playlist}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <button onClick={this.handleNewPlaylist}>Spotify Premium</button>
            </div>
        )
    }

    handleNewPlaylist(e) {

        alert('Adicionar nova playlist');

    }


}
