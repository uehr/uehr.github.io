import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductName(props) {
    return (
        <p className="product-name p-large">
            <FontAwesomeIcon icon={["fas", "chevron-left"]} /> {props.name} {props.link && <a href={props.link} target="_blank"><p className="product-link"><FontAwesomeIcon icon={["fas", "external-link-alt"]} /></p></a>} <FontAwesomeIcon icon={["fas", "chevron-right"]} />
        </p>
    );
}

export default ProductName;