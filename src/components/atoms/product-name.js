import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductName(props) {
    return (
        <p className="product-name p-large">
            {props.name}
        </p >
    );
}

export default ProductName;