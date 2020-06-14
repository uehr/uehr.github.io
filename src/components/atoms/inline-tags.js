import React from 'react';

function InlineTags(props) {
    return (
        <div className={props.class}>
            {
                props.tags.map(tag => {
                    return <div className={`${props.tag_class} d-inline-block`}>
                        {tag}
                    </div>
                })
            }
        </div>
    );
}

export default InlineTags;