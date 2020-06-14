import React from 'react';
import '../../assets/css/sns-link.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SNSLink(props) {
    return (
        <a className="sns-link" href={props.link} style={{ color: props.color }}>
            <div className="sns-link-text large-font">
                <FontAwesomeIcon icon={props.fontawesome} />
                {props.text}
            </div>
        </a>
    );
}

export default SNSLink;