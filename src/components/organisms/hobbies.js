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
                    "fontawesome": ["fas", "heart"]
                }
            }
            className="hobbies"
            body={
                <div className="text-center">
                    <div className="d-inline-block mx-3 large-font">
                        <FontAwesomeIcon icon={["fas", "walking"]} /> 散歩
            </div>
                    <div className="d-inline-block mx-3 large-font">
                        <FontAwesomeIcon icon={["fas", "heartbeat"]} /> 筋トレ
            </div>
                    <div className="d-inline-block mx-3 large-font">
                        <FontAwesomeIcon icon={["fas", "book"]} /> 読書
            </div>
                    <div className="d-inline-block mx-3 large-font">
                        <FontAwesomeIcon icon={["fas", "laptop-code"]} /> 個人開発
            </div>
                </div>
            }
        />
    );
}

export default Hobbies;