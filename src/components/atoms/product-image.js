import React from 'react';

function ProductImage(props) {
    return (
        <img src={props.image} className="product-image d-inline-block" />
    );
}

export default ProductImage;