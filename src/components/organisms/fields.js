import React from 'react';
import '../../assets/css/fields.css';
import Section from '../molecules/section.js';
import VerticalList from '../../components/molecules/vertical-list.js'

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
                <div className="field-section-body d-flex flex-row justify-content-center default-font">
                    <VerticalList
                        title="Infrastructure"
                        contents={["AWS (EKS,ECS,Lambda,...)", "Heroku", "Kubernetes"]}
                    />
                    <VerticalList
                        title="Backend"
                        contents={["Go", "Java", "Python", "Ruby(Rails)", "C++", "Rust", "Nim"]}
                    />
                    <VerticalList
                        title="Frontend"
                        contents={["React", "JavaScript", "TypeScript"]}
                    />
                </div>
            }
        />
    );
}

export default Fields;