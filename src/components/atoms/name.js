import React from 'react';
import icon from "../../assets/img/icon.png"
import '../../assets/css/name.css';

function Name() {
    return (
        <div className="Name">
            <img id="icon" src={icon}></img>
            <p className="dark-font-color" id="name">uehara</p>
        </div>
    );
}

export default Name;