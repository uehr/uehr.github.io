import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductName(props) {
    return (
        <p className="product-name p-large">
            <FontAwesomeIcon icon={["fas", "chevron-left"]} />
            {props.name}
            <FontAwesomeIcon icon={["fas", "chevron-right"]} />
        </p >
    );
}

export default ProductName;