import React from "react";

import { Card, Button, Icon, Divider } from "semantic-ui-react";

import "../../styles/Note.css";

const Note = props => {
  const deleteNote = () => props.onDeleteNote(props.id);

  return (
    <Card className="Note">
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Divider />

        <Card.Description>{props.text}</Card.Description>
      </Card.Content>
      <Button animated basic onClick={deleteNote}>
        <Button.Content visible>
          <Icon name="trash" />
        </Button.Content>
        <Button.Content hidden>Remove</Button.Content>
      </Button>
    </Card>
  );
};

export default Note;
