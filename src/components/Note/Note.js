import React from "react";
import moment from "moment";

import { Card, Button, Icon, Divider } from "semantic-ui-react";

import "../../styles/Note.css";

const Note = props => {
  const deleteNote = () => props.onDeleteNote(props.id);

  return (
    <Card className="Note" color='blue'>
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>
          <span className="date">
            {moment(props.createdAt.toDate()).calendar()}
          </span>
        </Card.Meta>
        <Divider />
        <Card.Description>{props.text}</Card.Description>
      </Card.Content>
      <Button animated basic onClick={deleteNote}>
        <Button.Content visible>
          <Icon name="trash"/>
        </Button.Content>
        <Button.Content hidden>Remove</Button.Content>
      </Button>
    </Card>
  );
};

export default Note;
