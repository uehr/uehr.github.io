import React from 'react';
import '../../assets/css/vertical-list.css';
import List from '../../components/atoms/list.js'

function VerticalList(props) {
    return (
        <div className={`text-left vertical-list ${props.class}`}>
            <div className={`large-font ${props.title_class}`}>{props.title}</div>
            <div className={`${props.list_class}`}>
                {
                    props.contents.map(body => {
                        return <List body={body} />
                    })
                }
            </div>
        </div>
    )
}

export default VerticalList;