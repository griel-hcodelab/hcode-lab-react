import React, { useEffect, useState } from 'react';

import imgAlbum from '../../Assets/images/album.jpg';
import Button from '../Utils/Icons/Button';

import '../../Assets/sass/player.scss';
import Progress from '../Utils/Progress';


export default function Player() {

    const [contador, setContador] = useState(0)

    const [controls, setControls] = useState(false)


    useEffect(() => {

        if (!controls) {
            document.title = `Tocando - Música`
        } else {
            console.log(`Primeira vez, clicou ${contador} vezes`)
        }

        return () => {
            console.log(`Desmontou`)
        }


    }, [controls]);



    const play = ()=>{

        setContador(contador + 1);

        setControls(true)

    }




    return (
        <div className="player">
            <div className="album">
                <img src={imgAlbum} alt="" onClick={play} />
                <div>
                    <strong>Internet Killed the Video Star</strong>
                    <span>The Broad Band</span>
                </div>
                <Button type="favorite" />
            </div>

            <div className="controls">
                <div>
                    <Button type="random" />
                    <Button type="back" />
                    <Button type="play" />
                    <Button type="forward" />
                    <Button type="repeat" />
                </div>
                <div>
                    <span>0:00</span>
                    <Progress />
                    <span>5:00</span>
                </div>
            </div>

            <div className="optionsControl">
                <Button type="microphone" />
                <Button type="queue" />
                <Button type="devices" />
                <Button type="volume" />
                <Progress />
            </div>
        </div>
    );
}