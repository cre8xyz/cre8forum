import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import '../styles/index.scss';

const Cre8Logo = () => (
  <Link to='/'>
    <div className="logo">
      <img className="logo_png" src={Logo} alt="logo" />
      <h3>FORUM</h3>
    </div>
  </Link>
);

export default Cre8Logo;
