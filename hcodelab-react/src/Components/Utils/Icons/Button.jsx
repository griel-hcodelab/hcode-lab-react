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
        default:
            return null;
    }

}

export default Button