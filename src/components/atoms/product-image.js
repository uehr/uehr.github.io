import React from 'react';

function ProductImage(props) {
    return (
        <img src={props.image} className="ProductImage d-inline-block" />
    );
}

export default ProductImage;