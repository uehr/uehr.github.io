import React from 'react';
import '../../assets/css/section.css';
import Headline from '../atoms/headline.js';
import Section from '../molecules/section.js';
import site_icon from "../../assets/img/site-icon.png"
import my_icon from "../../assets/img/my-icon.png"

function Header() {
    return (
        <Section
            is_first={true}
            image={my_icon}
            body={
                <div className="text-center">
                    <Headline
                        title="uehara"
                        image={site_icon}
                    />
                    <p className="text-center">
                        オプティム社エンジニア / N高等学校OB / 2002年沖縄県生まれ
                    </p>
                </div>
            }
        />
    );
}

export default Header;