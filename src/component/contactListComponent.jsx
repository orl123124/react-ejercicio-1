import React from 'react';
import { Contact } from '../models/contact.class';
import { ContactComponet  } from '../component/contactComponent';


export const ContactListComponent = props => {

    const contactDefault = new Contact('luis','Martinez','luis@gmail.com',false);

    return (
    <div>
        <ContactComponet contact = { contactDefault } ></ContactComponet>
    </div>
  )
}
 