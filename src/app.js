import React from 'react';
import './assets/css/app.css';
import './assets/css/season/spring.css';
import './assets/css/season/summer.css';
import './assets/css/season/autumn.css';
import './assets/css/season/winter.css';
import Header from './components/organisms/header.js';
import Experiences from './components/organisms/experiences.js'
import SNS from './components/organisms/sns.js'
import Fields from './components/organisms/fields.js'
import Langs from './components/organisms/langs.js'
import Hobbies from './components/organisms/hobbies.js'
import Products from './components/organisms/products.js'
import Footer from './components/organisms/footer.js';

function App() {
  return (
    <div className="app">
      <Header />
      <Experiences />
      <Hobbies />
      <Fields />
      <Langs />
      <SNS />
      <Products />
      <Footer />
    </div>
  );
}

window.onload = () => {
    const month = new Date().getMonth() + 1
    const app = document.getElementsByClassName("app")[0]

    if(3 <= month && month <= 5) { // 春
        console.log("spring style")
        app.setAttribute("id", "spring")
    }else if(6 <= month && month <= 8) { // 夏
        console.log("summer style")
        app.setAttribute("id", "summer")
    }else if(9 <= month && month <= 11) { // 秋
        console.log("autumn style")
        app.setAttribute("id", "autumn")
    }else if(12 <= month || month <= 2) { //冬
        console.log("winter style")
        // app.setAttribute("id", "winter")
        app.setAttribute("id", "autumn")
    }
}

export default App;