import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'

export const ContactComponet = ({contact}) => {
  
  return (
    <div>
    <h1>Contacto:</h1>
    <h2>Nombre: {contact.nombre}</h2>
    <h2>Apellido:{contact.apellido}</h2>
    <h2>Email: {contact.email}</h2>
    <h2>Conectado: {!contact.conectado? 'Contacto En Línea':'Contacto No Disponible'}</h2>

    </div>
  )
}

ContactComponet.propTypes = {
    contact: PropTypes.instanceOf(Contact),
}
 