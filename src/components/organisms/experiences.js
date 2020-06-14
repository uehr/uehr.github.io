import React from 'react';
import '../../assets/css/experiences.css';
import Section from '../molecules/section.js';
import List from '../../components/atoms/list.js'

function Header() {
    return (
        <Section
            headline={
                {
                    "title": "Experiences",
                    "fontawesome": ["fas", "shoe-prints"]
                }
            }
            className="experiences"
            body={
                <div className="text-center">
                    <div className="d-inline-block text-left default-font">
                        <List body="2015 沖縄海洋ロボコンROV部門 特別賞" />
                        <List body="2016 Google ウェブレンジャーPJ 奨励賞" />
                        <List body="2017 N高等学校 入学" />
                        <List body="2018 株式会社ドワンゴ インターン" />
                        <List body="2019 GMOペパボ株式会社 インターン" />
                        <List body="2019 株式会社オプティム インターン" />
                        <List body="2020 N高等学校 卒業" />
                        <List body="2020 株式会社オプティム 入社" />
                    </div>
                </div>
            }
        />
    );
}

export default Header;