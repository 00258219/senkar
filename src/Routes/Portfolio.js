import React from 'react';
import {FormattedMessage} from "react-intl";

function Portfolio() {
  return (
    <div>
      <h1><FormattedMessage id="port.tittle"/></h1>
      <p className="p-h3">
        <FormattedMessage id="port.subT"/>
      </p>
      <p>
        1 - FastAudit
      </p>
      <p>
        2 - CrowCodding
      </p>
      <p>
        3 - My First Website
      </p>
      <p>
        4 - Blockchain UNAM
      </p>
    </div>
  );
}

export default Portfolio;
