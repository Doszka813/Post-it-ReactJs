import React from "react";
import { Button, Form, Input } from "semantic-ui-react";

const BoardForm = props => {
  const handleClick = () => {
    props.onAddBoard();
    props.handleClose();
  };

  return (
    <Form>
      <Form.Field>
        <label>Board name</label>
        <Input onChange={props.changeBoardName} placeholder="Title" />
      </Form.Field>
      <Button onClick={handleClick} size="big" color="green" inverted>
        Submit
      </Button>
    </Form>
  );
};

export default BoardForm;
