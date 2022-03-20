import React from 'react';
import Contactos from '../componetes/contactos';
import { v4 as uuid } from 'uuid';
//import '../styles/Scroll.css'

export default function listcontacto({ Contactos }) {
  const style = {
    position: 'sticky',
    top: 0
  };

  return (
    <>
    {/*Contact List*/}
      <div className='Scroll mt-2'>
        <table className='table table-light table-striped table-bordered'>
          {/* Columns */}
          <thead style={style} className="thead-primary">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows */}
            {Contactos.map((contactos) =>
              (<Contacto key={uuid()} source={contactos} />))}
          </tbody>
        </table>
      </div>
    </>
  )
}