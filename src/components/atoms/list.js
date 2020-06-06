import React from 'react';
import '../../assets/css/list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function List(props) {
    return (
        <p className="List">
            <FontAwesomeIcon icon={["fas", "caret-right"]} className="list-fontawesome light-theme-color" />
            {props.body}
        </p>
    );
}

export default List;