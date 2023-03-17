import React from 'react';
import { Contact } from '../models/contact.class';
import { ContactComponet  } from '../component/contactComponent';


export const ContactListComponent = props => {

    const contactDefault = new Contact('luis','Martinez','luis@gmail.com',false);

    return (
    <div>
        <h1>Contactos.</h1>
        <ContactComponet contact = { contactDefault } ></ContactComponet>
    </div>
  )
}
 