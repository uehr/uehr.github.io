import React from 'react';

function InlineTags(props) {
    return (
        <div className={props.class}>
            {
                props.tags.map(tag => {
                    return <p className={`${props.tag_class} d-inline-block`}>
                        {tag}
                    </p>
                })
            }
        </div>
    );
}

export default InlineTags;