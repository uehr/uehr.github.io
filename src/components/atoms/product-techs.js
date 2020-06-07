import React from 'react';

function ProductTechs(props) {
    return (
        <div className="product-techs">
            {
                props.techs.map(tech => {
                    return <p className="product-tech d-inline-block mx-2">
                        {tech}
                    </p>
                })
            }
        </div>
    );
}

export default ProductTechs;