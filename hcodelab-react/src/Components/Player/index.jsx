import React from 'react';

import imgAlbum from '../../Assets/images/album.jpg';
import {Favorite} from '../Utils/Icons/Favorite';

export default function Player() {
    return (
        <div>
            <div className="album">
                <img src={imgAlbum} alt="" />
                <div>
                    <strong>Demons in You - Alissa Lead Vox Version</strong>
                    <span>Alissa White-Gluz</span>
                </div>
                <Favorite />
            </div>

            <div className="controls">

            </div>

            <div className="optionsControl">

            </div>
        </div>
    );
}