import React from 'react';

import {Back} from './Back';
import {Favorite} from './Favorite';
import {Forward} from './Forward';
import {Play} from './Play';
import {Random} from './Random';
import {Repeat} from './Repeat';
import {Microphone} from './Microphone';
import {Queue} from './Queue';
import {Devices} from './Devices';
import {Volume} from './Volume';
import {Home} from './Home';
import {Library} from './Library';
import {New} from './New';
import {Search} from './Search';
import { Favorites } from './Favorites';
import { Logo } from './Logo';

const Button = (props) => {

    switch(props.type) {

        case 'back':
            return <Back />;
        case 'favorite':
            return <Favorite />;
        case 'forward':
            return <Forward />;
        case 'play':
            return <Play />;
        case 'random':
            return <Random />;
        case 'repeat':
            return <Repeat />;
        case 'microphone':
            return <Microphone />;
        case 'queue':
            return <Queue />;
        case 'devices':
            return <Devices />;
        case 'volume':
            return <Volume />;
        case 'favorites':
            return <Favorites />;
        case 'home':
            return <Home />;
        case 'library':
            return <Library />;
        case 'new':
            return <New />;
        case 'search':
            return <Search />;
        case 'logo':
            return <Logo />;
        default:
            return null;
    }

}

export default Button