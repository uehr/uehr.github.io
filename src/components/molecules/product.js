import React from 'react';
import '../../assets/css/product.css';
import ProductName from '../atoms/product-name.js'
import ProductTechs from '../atoms/product-techs.js'
import ProductImage from '../atoms/product-image.js'
import ProductVideo from '../atoms/product-video.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Product(props) {
    return (
        <div className="Product text-center align-top">
            <div className="product-details text-left">
                {props.link &&
                    <ProductName name={props.name} link={props.link} />
                }
                {!props.link &&
                    <ProductName name={props.name} />
                }
                <p className="product-description align-top">{props.description}</p>
                <ProductTechs techs={props.techs} />
            </div>
            <div className="product-view text-left">
                {props.image &&
                    <ProductImage image={props.image} />
                }
                {props.youtube_id &&
                    <ProductVideo youtube_id={props.youtube_id} />
                }
            </div>
        </div >
    );
}

export default Product;