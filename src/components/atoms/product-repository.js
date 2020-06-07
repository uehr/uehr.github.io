import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductRepository(props) {
    return (
        < a href={`https://github.com/uehr/${props.repository}`} target="_blank">
            <p className="product-link">
                <FontAwesomeIcon icon={["fab", "github"]} /> repository
            </p>
        </a>
    );
}

export default ProductRepository;