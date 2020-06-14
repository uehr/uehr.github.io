import React from 'react';
import '../../assets/css/langs.css';
import Section from '../molecules/section.js';
import List from '../../components/atoms/list.js'

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
                    <div className="text-left lang-section">
                        <div className="large-font">業務</div>
                        <List body="Java" />
                        <List body="Python" />
                        <List body="Ruby" />
                    </div>

                    <div className="text-left align-top lang-section">
                        <div className="large-font">個人開発</div>
                        <List body="Nim" />
                        <List body="Go" />
                        <List body="JS" />
                        <List body="C/C++" />
                        <List body="Rust" />
                    </div>
                </div>
            }
        />
    );
}

export default Langs;