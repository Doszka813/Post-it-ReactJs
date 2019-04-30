import React from "react";
import { Icon, Divider } from "semantic-ui-react";
import "../../../styles/Footer.css";
const AuthorInfo = props => (
  <div className="Infos">
    <div>
      <h5>Copyrights &copy; 2019 All rights reserved</h5>
    </div>
    <Divider horizontal>
      <Icon name="angle down" color="blue" />
    </Divider>
    <div className="InfoLinks">
      <div className="Info">
        <Icon name="mail" color="blue" size="huge" />
        <br />
        lewillas@gmail.com
      </div>
      <div className="Info">
        <a href="https://github.com/Doszka813">
          <Icon name="github" target="_blank" size="huge" />
        </a>
        <br />
        GitHub
      </div>
      <div className="Info">
        <a href="https://www.linkedin.com/in/dominika-kaminska/">
          <Icon name="linkedin" target="_blank" size="huge" />
        </a>
        <br />
        LinkedIn
      </div>
    </div>
  </div>
);

export default AuthorInfo;
