import React from 'react';
import './assets/css/app.css';
import Header from './components/molecules/header.js';
import Section from './components/molecules/section.js';
import List from './components/atoms/list.js'
import site_icon from "./assets/img/site-icon.png"
import my_icon from "./assets/img/my-icon.png"

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
    </div>
  );
}

export default App;
