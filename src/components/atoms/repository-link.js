import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RepositoryLink(props) {
    return (
        < a href={`https://github.com/${props.uesrname}/${props.repository}`} target="_blank">
            <div className={props.link_text_class}>
                <FontAwesomeIcon icon={["fab", "github"]} /> repository
            </div>
        </a>
    );
}

export default RepositoryLink;