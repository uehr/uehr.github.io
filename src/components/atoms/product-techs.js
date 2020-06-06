import React from 'react';

function ProductTechs(props) {
    return (
        props.techs.map(tech => {
            return <p className="product-tech d-inline-block mx-2">
                {tech}
            </p>
        })
    );
}

export default ProductTechs;