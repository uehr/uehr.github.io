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
        image={my_icon}
        body={
          <p className="text-center">
            オプティム社エンジニア / N高等学校OB / 2002年沖縄県生れ
          </p>
        }
      />
    </div>
  );
}

export default App;
