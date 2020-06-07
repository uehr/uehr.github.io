import React from 'react';
import '../../assets/css/fields.css';
import Section from '../molecules/section.js';
import List from '../../components/atoms/list.js'

function Fields() {
    return (
        <Section
            headline={
                {
                    "title": "Fields",
                    "fontawesome": ["fas", "layer-group"]
                }
            }
            className="fields"
            body={
                <div className="text-center">
                    <div className="text-left p-large d-inline-block">
                        <List body="インフラ: AWS EC2 / EKS / Lambda" />
                        <List body="バック: Spring / Django / Rails / Express" />
                        <List body="フロント: Rails / jQuery" />
                    </div>
                </div>
            }
        />
    );
}

export default Fields;