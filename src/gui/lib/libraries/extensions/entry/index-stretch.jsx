/* eslint-disable import/no-unresolved */
import React from 'react';
import {FormattedMessage} from 'react-intl';

/**
 * This is an extension for Xcratch.
 */

import iconURL from './entry-icon.png';
import insetIconURL from './inset-icon.svg';
import connectionIconURL from './connection-icon.svg';
import connectionSmallIconURL from './connection-small-icon.svg';

const translations = {
    'en': {
        'xcxArduino.entry.name': 'Arduino',
        'xcxArduino.entry.description': 'Play with Arduino'
    },
    'ja': {
        'xcxArduino.entry.name': 'Arduino',
        'xcxArduino.entry.description': 'Arduinoで遊ぶ'
    },
    'ja-Hira': {
        'xcxArduino.entry.name': 'Arduino',
        'xcxArduino.entry.description': 'Arduino で あそぶ'
    }
};

const entry = {
    name: (
        <FormattedMessage
            defaultMessage="Arduino"
            id="xcxArduino.entry.name"
        />
    ),
    extensionId: 'xcxArduino',
    extensionURL: null,
    collaborator: 'yokobond',
    iconURL: iconURL,
    insetIconURL: insetIconURL,
    description: (
        <FormattedMessage
            defaultMessage="Play with Arduino"
            id="xcxArduino.entry.description"
        />
    ),
    tags: ['device', 'hardware', 'arduino', 'firmata'],
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    connectionIconURL: connectionIconURL,
    connectionSmallIconURL: connectionSmallIconURL,
    helpLink: 'https://yokobond.github.io/xcx-arduino/',
    translationMap: translations
};

export default entry;
