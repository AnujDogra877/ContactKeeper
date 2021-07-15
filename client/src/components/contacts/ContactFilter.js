import React,{ useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';


const ContactFilter = () => {


    const contactContext = useContext(ContactContext);

    const { filtered, filterContacts, clearFilter } = contactContext;

    const text = useRef('');

    useEffect(() => {
        if(filtered === null){
            text.current.value = '';
        }
    });
    const onChange = e =>{
        if(text.current.value !== '') {
            filterContacts(e.target.value);
        }else{
            clearFilter();
        }
    }

    return (
        <input type='text' name='text' ref={text} placeholder="Filter Contacts..." onChange={onChange} />
    )
}

export default ContactFilter;