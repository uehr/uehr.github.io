import React from 'react';
import '../../assets/css/langs.css';
import Section from '../molecules/section.js';
import List from '../../components/atoms/list.js'
import VerticalList from '../../components/molecules/vertical-list.js'

function Langs() {
    return (
        <Section
            headline={
                {
                    "title": "Langs",
                    "fontawesome": ["fas", "code"]
                }
            }
            className="langs"
            body={
                <div className="lang-section-body d-flex flex-row justify-content-center default-font">
                    <VerticalList
                        title="業務開発"
                        contents={["Java (Spring)", "Python (Django)", "Ruby (Rails)"]}
                    />

                    <VerticalList
                        title="個人開発"
                        contents={["Go", "JS (React/Jquery)", "TypeScript(Node.js)", "C/C++", "Rust", "Nim"]}
                    />
                </div>
            }
        />
    );
}

export default Langs;