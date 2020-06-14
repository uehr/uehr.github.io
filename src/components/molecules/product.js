import React from 'react';
import '../../assets/css/products.css';
import InlineTags from '../atoms/inline-tags.js'
import YoutubeEmbed from '../atoms/youtube-embed.js'
import LinkWithIcon from '../atoms/link-with-icon.js'
import RepositoryLink from '../atoms/repository-link.js'

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
        props.techs.push(
            <RepositoryLink
                repository={props.repository}
                username="uehr"
                link_text_class="product-link"
            />
        )
    }

    return (
        <div className="product text-center align-top">
            <div className="product-view text-left">
                {props.image &&
                    <img src={props.image} className="product-image d-inline-block" />
                }
                {props.youtube_id &&
                    <YoutubeEmbed
                        youtube_id={props.youtube_id}
                        class="product-video"
                        iframe_class="youtube-frame"
                    />
                }
            </div>
            <div className="product-details text-left">
                <div className="product-name large-font">
                    {props.name}
                </div>
                <div className="product-description align-top">{props.description}</div>
                <InlineTags
                    tags={props.techs}
                    class="product-techs"
                    tag_class="product-tech"
                />
            </div>
        </div >
    );
}

export default Product;