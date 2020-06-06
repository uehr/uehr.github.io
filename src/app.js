import React from 'react';
import './assets/css/app.css';
import Header from './components/molecules/header.js';
import Section from './components/molecules/section.js';
import List from './components/atoms/list.js'
import SNSLink from './components/atoms/sns-link.js'
import Product from './components/molecules/product.js'
import site_icon from "./assets/img/site-icon.png"
import my_icon from "./assets/img/my-icon.png"
import floav_img from "./assets/img/floav.png"
import weekly575_img from "./assets/img/weekly575.png"
import kokun_img from "./assets/img/kokun.png"
import wever_img from "./assets/img/wever.png"
import ptss_img from "./assets/img/ptss.png"
import discord_manage_img from "./assets/img/discord_manage.png"
import auction_img from "./assets/img/auction.png"
import ahkviwer_img from "./assets/img/ahkviwer.png"
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
            <div className="d-inline-block mx-3">
              <SNSLink
                link="https://twitter.com/uehr37"
                fontawesome={["fab", "twitter"]}
                text=" Twitter"
                color="#1DA1F2"
              />
            </div>
            <div className="d-inline-block mx-3">
              <SNSLink
                link="https://github.com/uehr"
                fontawesome={["fab", "github"]}
                text=" Github"
                color="#24292E"
              />
            </div>
            <div className="d-inline-block mx-3">
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
      <Section
        headline={
          {
            "title": "My Hobbies",
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
      <Section
        headline={
          {
            "title": "Products",
            "fontawesome": ["fas", "wrench"]
          }
        }
        body={
          <div className="text-center">
            <Product
              name="face-blur"
              link="https://face-blur.netlify.com"
              youtube_id="33wjysV_Oxg"
              description="写真に写り込んだ人にモザイク処理を施すWEBサービス"
              techs={["TensorFlow.js", "JavaScript"]}
            />

            <Product
              name="Floav"
              link="https://www.uehr.co"
              image={floav_img}
              description="対象Twitterユーザが関心のあるワードを抽出するWEBサービス"
              techs={["Ruby on Rails", "Heroku", "MeCab"]}
            />

            <Product
              name="weekly575"
              image={weekly575_img}
              description="ツイッター上でその集に最も良いねを集めた川柳を紹介"
              techs={["Go", "Heroku", "PostgreSQL"]}
            />

            <Product
              name="Kokun"
              image={kokun_img}
              link="https://kokun.herokuapp.com/"
              description="川柳を画像化するWEBサービス"
              techs={["Go", "Heroku"]}
            />

            <Product
              name="Wever"
              image={wever_img}
              description="写真に写り込んだ人にモザイク加工を施すWEBサービス"
              techs={["TensorFlow", "OpenCV", "EC2"]}
            />

            <Product
              name="Boid Algo"
              youtube_id="DBj4KNE8gMY"
              description="Boidアルゴリズムで魚群の動きをシミュレート"
              techs={["OpenCV"]}
            />

            <Product
              name="PTSS"
              image={ptss_img}
              description="P2Pネットワークで構成するテキスト共有システム"
              techs={["Node.js", "WebSocket"]}
            />

            <Product
              name="管理BOT"
              image={discord_manage_img}
              description="Discordサーバーの管理を補助するBOT"
              techs={["Node.js"]}
            />

            <Product
              name="オークション"
              image={auction_img}
              description="学内通貨を用いたオークションサービス(OSSコミット)"
              techs={["Node.js"]}
            />

            <Product
              name="GA"
              youtube_id="UJQ-wbb7_gY"
              description="ランダムな形状を遺伝的アルゴリズムを用いて指定の形状へ"
              techs={["Nim"]}
            />

            <Product
              name="Coder-Assist"
              youtube_id="SaWr72u7SeY"
              description="括弧/引用符の入力をアシスト"
              techs={["C++", "Win32API"]}
            />

            <Product
              name="TypeCursor"
              youtube_id="fWVyHOpQVxA"
              description="キーボードでマウスカーソル操作"
              techs={["C++", "Win32API"]}
            />

            <Product
              name="AhkViewer"
              image={ahkviwer_img}
              description="キーリマップスクリプトを解析しキー配列のビジョンを出力"
              techs={["Rust", "AutoHotKey"]}
            />

          </div>
        }
      />
    </div>
  );
}

export default App;
