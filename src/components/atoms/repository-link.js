import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RepositoryLink(props) {
    return (
        < a href={`https://github.com/${props.uesrname}/${props.repository}`} target="_blank">
            <p className={props.link_text_class}>
                <FontAwesomeIcon icon={["fab", "github"]} /> repository
            </p>
        </a>
    );
}

export default RepositoryLink;