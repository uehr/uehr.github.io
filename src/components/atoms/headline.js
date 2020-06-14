import React from 'react';
import '../../assets/css/headline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Headline(props) {
    return (
        <div className="headline">
            <div className="dark-font-color headline-body">
                {props.fontawesome &&
                    <FontAwesomeIcon icon={props.fontawesome} className="headline-fontawesome" />
                }
                {props.image &&
                    <img src={props.image} className="headline-image"></img>
                }
                {props.title}
            </div>
        </div>
    );
}

export default Headline;