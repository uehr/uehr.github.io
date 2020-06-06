import React from 'react';
import '../../assets/css/section.css';
import Headline from '../atoms/headline.js';

function Section(props) {
    return (
        <div className={`Section ${props.is_first ? "" : "section-not-first"}`} >
            {
                props.headline.image &&
                <Headline
                    title={props.headline.title}
                    image={props.headline.image}
                />
            }
            {
                props.headline.fontawesome &&
                <Headline
                    title={props.headline.title}
                    fontawesome={props.headline.fontawesome}
                />
            }
            <div className="section-body">
                {props.image &&
                    <img className="section-image" src={props.image}></img>
                }
                {props.body}
            </div>
        </div >
    );
}

export default Section;