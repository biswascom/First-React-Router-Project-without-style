import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, phone, email, address, id} = user;
    return (
        <div style={{padding: '10px', margin: '10px', border: '2px solid red', borderRadius: '10px'}}>
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{email}</p>
            <h6>{address.city}</h6>
            <button><Link to={`/userDetails/${id}`}>User Details</Link></button>
        </div>
    );
};

export default User;