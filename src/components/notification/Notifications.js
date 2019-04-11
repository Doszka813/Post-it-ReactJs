import React from "react";
import {
  Card,
  Segment,
  Header,
  Divider,
  Modal,
  Tab,
  Menu,
  Label
} from "semantic-ui-react";
import moment from "moment";
import "../../styles/Notifications.css";

const Notifications = props => {
  const { notifications } = props;
  return (
    <Segment>
        <Header as="h2">Notifications</Header>
      <div className="Notifications">
        {notifications &&
          notifications.map(notification => {
            return (
              <div className="Notification" key={notification.id}>
                <span className="Author">{notification.user} </span>
                <span>{notification.content} </span>
                <div>{moment(notification.time.toDate()).fromNow()}</div>
              </div>
            );
          })}
      </div>
    </Segment>
  );
};

export default Notifications;
