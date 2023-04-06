import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const userDetails = useLoaderData();
    const {name, phone, email, address, company} = userDetails;
    const navigate = useNavigate();
    const backToHomeHandler = () => {
        navigate(-1);
    }
    return (
        <div style={{border: '2px solid green', marginTop: '30px', padding: '15px', borderRadius: '10px'}}>
            <h2 style={{textDecoration: 'underline'}}>User details</h2>
            <h4>Name: {name}</h4>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Address: {address.city}</p>
            <h5>Company: {company.name}</h5>
            <button onClick={backToHomeHandler}>Back to Home</button>
        </div>
    );
};

export default UserDetails;