import React from 'react';
import '../../assets/css/products.css';
import ProductTechs from '../atoms/product-techs.js'
import ProductVideo from '../atoms/product-video.js'
import LinkWithIcon from '../atoms/link-with-icon.js'
import ProductRepository from '../atoms/product-repository.js'

function Product(props) {
    if (props.link) {
        props.techs.push(
            <LinkWithIcon
                link={props.link}
                link_text_class="product-link"
                fontawesome={["fas", "external-link-alt"]}
                text="Link"
            ></LinkWithIcon>
        )
    }
    if (props.repository) {
        props.techs.push(<ProductRepository repository={props.repository} />)
    }

    return (
        <div className="product text-center align-top">
            <div className="product-view text-left">
                {props.image &&
                    <img src={props.image} className="product-image d-inline-block" />
                }
                {props.youtube_id &&
                    <ProductVideo youtube_id={props.youtube_id} />
                }
            </div>
            <div className="product-details text-left">
                <p className="product-name p-large">
                    {props.name}
                </p >
                <p className="product-description align-top">{props.description}</p>
                <ProductTechs techs={props.techs} />
            </div>
        </div >
    );
}

export default Product;