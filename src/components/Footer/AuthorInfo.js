import React from "react";
import { Header, Icon, Divider } from "semantic-ui-react";
import '../../styles/Footer.css';
const AuthorInfo = props => (
  <div className="Info">
    <div>
      <p>Copyrights &copy; 2019 All rights reserved</p>
    </div>
    <Divider horizontal>
      <Icon name="angle down" color="blue" />
    </Divider>
    <div>
      <p>
        <Header>Contact info:</Header>
        <Icon name="mail outline" color="blue" />
        <br />
        lewillas@gmail.com
      </p>
      <p>
        Find us on GitHub
        <br />
        <a href="https://github.com/Doszka813">
          <Icon name="github" target="_blank" />
        </a>
      </p>
    </div>
  </div>
);

export default AuthorInfo;
