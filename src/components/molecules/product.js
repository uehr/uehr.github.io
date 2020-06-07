import React from 'react';
import '../../assets/css/products.css';
import ProductName from '../atoms/product-name.js'
import ProductTechs from '../atoms/product-techs.js'
import ProductImage from '../atoms/product-image.js'
import ProductVideo from '../atoms/product-video.js'
import ProductLink from '../atoms/product-link.js'
import ProductRepository from '../atoms/product-repository.js'

function Product(props) {
    if (props.link) {
        props.techs.push(<ProductLink link={props.link} />)
    }
    if (props.repository) {
        props.techs.push(<ProductRepository repository={props.repository} />)
    }

    return (
        <div className="Product text-center align-top">
            <div className="product-view text-left">
                {props.image &&
                    <ProductImage image={props.image} />
                }
                {props.youtube_id &&
                    <ProductVideo youtube_id={props.youtube_id} />
                }
            </div>
            <div className="product-details text-left">
                <ProductName name={props.name} link={props.link} repository={props.repository} />
                <p className="product-description align-top">{props.description}</p>
                <ProductTechs techs={props.techs} />
            </div>
        </div >
    );
}

export default Product;