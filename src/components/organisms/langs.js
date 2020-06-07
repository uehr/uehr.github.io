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
                <div className="text-center">
                    <div className="d-inline-block text-left langs-section">
                        <p className="p-large">業務</p>
                        <List body="Java (Spring)" />
                        <List body="Python" />
                        <List body="Ruby (Rails)" />
                    </div>

                    <div className="d-inline-block text-left align-top langs-section">
                        <p className="p-large">個人開発</p>
                        <List body="Nim" />
                        <List body="Go" />
                        <List body="JS (React/Node.js)" />
                        <List body="C/C++" />
                    </div>
                </div>
            }
        />
    );
}

export default Langs;