import React from 'react';
import '../../assets/css/section.css';
import Section from '../molecules/section.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Hobbies() {
    return (
        <Section
            headline={
                {
                    "title": "Hobbies",
                    "fontawesome": ["fas", "walking"]
                }
            }
            body={
                <div className="text-center">
                    <p className="d-inline-block mx-3 p-large">
                        <FontAwesomeIcon icon={["fas", "walking"]} /> 散歩
            </p>
                    <p className="d-inline-block mx-3 p-large">
                        <FontAwesomeIcon icon={["fas", "heartbeat"]} /> 筋トレ
            </p>
                    <p className="d-inline-block mx-3 p-large">
                        <FontAwesomeIcon icon={["fas", "book"]} /> 読書
            </p>
                    <p className="d-inline-block mx-3 p-large">
                        <FontAwesomeIcon icon={["fas", "laptop-code"]} /> 個人開発
            </p>
                </div>
            }
        />
    );
}

export default Hobbies;