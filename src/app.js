import React from 'react';
import './assets/css/app.css';
import Header from './components/molecules/header.js';
import Section from './components/molecules/section.js';
import List from './components/atoms/list.js'
import SNSLink from './components/atoms/sns-link.js'
import site_icon from "./assets/img/site-icon.png"
import my_icon from "./assets/img/my-icon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <Section
        headline={
          {
            "title": "uehara",
            "image": site_icon
          }
        }
        is_first={true}
        image={my_icon}
        body={
          <p className="text-center">
            オプティム社エンジニア / N高等学校OB / 2002年沖縄県生まれ
          </p>
        }
      />
      <Section
        headline={
          {
            "title": "Experiences",
            "fontawesome": ["fas", "shoe-prints"]
          }
        }
        body={
          <div>
            <List body="2015 沖縄海洋ロボコンROV部門 特別賞" />
            <List body="2016 Google ウェブレンジャープロジェクト 奨励賞" />
            <List body="2017 N高等学校 入学" />
            <List body="2018 株式会社ドワンゴ インターン" />
            <List body="2019 GMOペパボ株式会社 インターン" />
            <List body="2019 株式会社オプティム インターン" />
            <List body="2020 N高等学校 卒業" />
            <List body="2020 株式会社オプティム 入社" />
          </div>
        }
      />
      <Section
        headline={
          {
            "title": "SNS",
            "fontawesome": ["fas", "user-friends"]
          }
        }
        body={
          <div className="sns-links text-center">
            <div className="sns-link">
              <SNSLink
                link="https://twitter.com/uehr37"
                fontawesome={["fab", "twitter"]}
                text=" Twitter"
                color="#1DA1F2"
              />
            </div>
            <div className="sns-link">
              <SNSLink
                link="https://github.com/uehr"
                fontawesome={["fab", "github"]}
                text=" Github"
                color="#24292E"
              />
            </div>
            <div className="sns-link">
              <SNSLink
                link="https://qiita.com/uehr"
                fontawesome={["fas", "feather-alt"]}
                text=" Qiita"
                color="#55C500"
              />
            </div>
          </div>
        }
      />
      <Section
        headline={
          {
            "title": "Programing Langs",
            "fontawesome": ["fas", "code"]
          }
        }
        body={
          <div className="text-center">
            <div className="d-inline-block align-top text-left mr-5">
              <p>業務</p>
              <List body="Java (Spring)" />
              <List body="Python" />
              <List body="Ruby (Rails)" />
            </div>

            <div className="d-inline-block text-left ml-5 align-top">
              <p>個人開発</p>
              <List body="Nim" />
              <List body="Go" />
              <List body="JavaScript (React/Node.js)" />
              <List body="C/C++" />
            </div>
          </div>
        }
      />
    </div>
  );
}

export default App;
