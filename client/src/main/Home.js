import React, { Component } from 'react';
import Title from '../layout/Title.js';


class Home extends Component {
  render(){
    return (
        <div className="home">

          <Title text="Dream Home Page" style="Home__title" />

          <div className="login-box">
            <a href="#" className="home__btn--signup">Signup</a>
            <a href="#" className="home__btn--login">Login</a>
          </div>
        </div>
    );
  }
}

export default Home;

