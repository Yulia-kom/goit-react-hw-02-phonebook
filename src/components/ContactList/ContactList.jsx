import React from "react";

const ContactList = ({ contacts }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li key={id}>
                <p>{name}: </p>
                <p>{number}</p>
                <button>Delete</button>
            </li>
        ))}
        
    </ul>
);

export default ContactList;