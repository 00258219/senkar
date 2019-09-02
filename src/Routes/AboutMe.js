import React from 'react';
import {FormattedMessage} from "react-intl";

function AboutMe() {
  return (
    <div>
      <h1 style={{marginBottom:0,}}>Oscar Enrique Orellana Monterrosa</h1>
      <p className="p-h3" style={{marginTop:0, marginLeft:10,}}>
        <FormattedMessage id="about.presentation"/>
      </p>
      
    </div>
  );
}

export default AboutMe;
