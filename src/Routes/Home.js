import React from 'react';
import {FormattedMessage} from "react-intl";

function Home() {
  return (
    <div className="home">
      <h1><FormattedMessage id="home.tittle"/></h1>
    </div>
  );
}

export default Home;