import React from 'react';
import '../../assets/css/list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function List(props) {
    return (
        <div className="list">
            <FontAwesomeIcon icon={["fas", "caret-right"]} className="list-fontawesome light-theme-color" />
            {props.body}
        </div>
    );
}

export default List;