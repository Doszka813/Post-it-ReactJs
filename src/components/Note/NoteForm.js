import React from "react";
import { Button, Form, Input, TextArea } from "semantic-ui-react";

const NoteForm = props => {
  const handleClick = () => {
    props.onAddNote();
    props.handleClose();
  };
  return (
    <Form>
      <Form.Field>
        <label>Title</label>
        <Input onChange={props.changeNoteTitle} placeholder="Title" />
      </Form.Field>
      <Form.Field>
        <TextArea
          onChange={props.changeNoteTxt}
          placeholder="What is worth remembering?"
        />
      </Form.Field>
      <Button onClick={handleClick} size="big" color="green" inverted>
        Submit
      </Button>
    </Form>
  );
};

export default NoteForm;
