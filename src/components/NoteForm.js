import React from "react";
import { Button, Form, Input, TextArea } from "semantic-ui-react";

const NoteForm = props => {
  return (
    <Form>
      <Form.Field>
        <label>Title</label>
        <Input focused onChange={props.changeNoteTitle} placeholder="Title" />
      </Form.Field>
      <Form.Field>
        <TextArea
          focused
          onChange={props.changeNoteTxt}
          placeholder="What is worth remembering?"
        />
      </Form.Field>
      <Button onClick={props.onAddNote} type="submit" color="green" inverted>
        Submit
      </Button>
    </Form>
  );
};

export default NoteForm;
