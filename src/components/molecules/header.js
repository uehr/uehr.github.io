import React from 'react';
import '../../assets/css/header.css';
import Name from '../atoms/name.js';

function Header() {
    return (
        <div className="Header">
            <Name />
        </div>
    );
}

export default Header;