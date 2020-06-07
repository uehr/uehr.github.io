import React from 'react';
import '../../assets/css/section.css';
import Section from '../molecules/section.js';
import Product from '../../components/molecules/product.js'
import floav_img from "../../assets/img/floav.png"
import weekly575_img from "../../assets/img/weekly575.png"
import kokun_img from "../../assets/img/kokun.png"
import wever_img from "../../assets/img/wever.png"
import ptss_img from "../../assets/img/ptss.png"
import discord_manage_img from "../../assets/img/discord_manage.png"
import auction_img from "../../assets/img/auction.png"
import ahkviwer_img from "../../assets/img/ahkviwer.png"

function Products() {
    return (
        <Section
            headline={{
                "title": "Products",
                "fontawesome": ["fas", "wrench"]
            }}
            className="products"
            body={
                <div className="text-center">
                    <div className="text-left d-inline-block">
                        <Product
                            name="face-blur"
                            link="https://face-blur.netlify.com"
                            youtube_id="33wjysV_Oxg"
                            description="写真に写り込んだ人にモザイク処理を施すWEBサービス"
                            techs={["TensorFlow.js", "JavaScript"]}
                        />

                        <Product
                            name="Floav"
                            link="https://floav.herokuapp.com"
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
                </div>
            }
        />
    );
}

export default Products;