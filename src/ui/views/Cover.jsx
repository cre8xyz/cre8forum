import React from 'react';

import Cre8Logo from '../components/Cre8Logo';
import NYC from '../../assets/nyc.png';
import '../styles/index.scss';

const Cover = ({ handleLogin, disableLogin }) => (
  <div className="coverPage">
    <section className="coverPage_hero">
      <img src={NYC} alt="nyc" />
    </section>
    <section className="coverPage_ui">
      <div className="coverPage_ui_wrapper">
        <div className="coverPage_ui_wrapper_logo">
          <Cre8Logo />
        </div>
        <p className="coverPage_ui_wrapper_line">meaningful discussion</p>
        <button onClick={handleLogin} disabled={disableLogin}>
          Get Started
        </button>
        <p className="coverPage_ui_wrapper_tech">created with 3Box</p>
      </div>
    </section>
  </div>
);

export default Cover;
