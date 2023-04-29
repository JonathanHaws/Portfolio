import React, { useState } from 'react';

const Header = ({ setPage }) => {
  return (
    <header>
      <h1 id = "header-title"> Jonathan Haws {' '} <span id = "header-subtitle"> Portfolio </span> </h1>
      <nav>
        <h2 class = "nav-link" onClick={() => setPage('about')}> About </h2>
        <h2 class = "nav-link" onClick={() => setPage('work')}> Work </h2>
        <h2 class = "nav-link" onClick={() => setPage('contact')}> Contact </h2>
      </nav>
    </header>
  );
};

export default Header;