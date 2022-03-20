import React from 'react';
import React from '../src/App.js';
import React from '..';

export default function Contactos({source}) {
    return (
        <tr>
            <td>{source.nom}</td>
            <td>{source.ape}</td>
            <td>{source.Nume}</td>
        </tr>
    );
}