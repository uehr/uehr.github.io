import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LinkWithIcon(props) {
    return (
        <a className={props.link_class} href={props.link} style={{ color: props.color }} target="_blank">
            <div className={props.link_text_class}>
                <FontAwesomeIcon icon={props.fontawesome} />
                {props.text}
            </div>
        </a>
    );
}

export default LinkWithIcon;