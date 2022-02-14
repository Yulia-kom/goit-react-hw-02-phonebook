import React from "react";
import styles from "../Data/Contacts.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={styles.contactsList__item}>
                <p className={styles.contactsList__name}>{name}: </p>
                <p>{number} </p>
                <button className={styles.contactsList__button} onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        ))}
        
    </ul>
);

export default ContactList;