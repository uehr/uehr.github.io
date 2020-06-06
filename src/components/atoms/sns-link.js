import React from 'react';
import '../../assets/css/sns-link.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SNSLink(props) {
    return (
        <a className="SNSLink" href={props.link} style={{ color: props.color }}>
            <p className="sns-link-text">
                <FontAwesomeIcon icon={props.fontawesome} />
                {props.text}
            </p>
        </a>
    );
}

export default SNSLink;