import React from 'react';
import { Button, Form, Input } from 'semantic-ui-react';

const BoardForm = (props) => (
  <Form>
    <Form.Field>
      <label>Board name</label>
      <Input focused onChange={props.changeBoardName} placeholder='Title' />
    </Form.Field>
    <Button onClick={props.onAddBoard} type='submit' color="green" inverted>Submit</Button>
  </Form>
)

export default BoardForm;
