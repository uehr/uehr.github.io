import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductLink(props) {
    return (
        <a href={props.link} target="_blank">
            <p className="product-link">
                <FontAwesomeIcon icon={["fas", "external-link-alt"]} /> link
            </p>
        </a>
    );
}

export default ProductLink;