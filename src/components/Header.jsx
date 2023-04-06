import React from 'react';
import ActiveLink from './ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div>
            <ul>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='users'>Users</ActiveLink>
                <ActiveLink to='posts'>Posts</ActiveLink>
                <ActiveLink to='about'>About</ActiveLink>
                <ActiveLink to='contact'>Contact</ActiveLink>
            </ul>
        </div>
    );
};

export default Header;