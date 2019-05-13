import React from "react";
import { Statistic, Icon } from "semantic-ui-react";
import "../../styles/Profile.css";

const Statistics = props => {
  const countOfNotes = () => {
    let count = 0;
    props.boards &&
      props.boards.forEach(board => (count += board.notes.length));
    return count;
  };

  const countOfdoneTasks = () => {
    let count = 0;
    props.boards &&
      props.boards.forEach(board => {
          let done = board.notes.filter(note => note.done === true); 
          count += done.length;
      });
    return count;
  }
  return (
      <Statistic.Group className="Stats">
        <Statistic className="Stat">
          <Statistic.Value>
            <Icon color="violet" name="clipboard outline" />
            {props.boards && props.boards.length}
          </Statistic.Value>
          <Statistic.Label>Boards</Statistic.Label>
        </Statistic>
        <Statistic className="Stat">
          <Statistic.Value>
            <Icon color="violet" name="sticky note outline" />
            {countOfNotes()}
          </Statistic.Value>
          <Statistic.Label>Notes</Statistic.Label>
        </Statistic>
        <Statistic className="Stat">
          <Statistic.Value>
            {countOfdoneTasks()}
          </Statistic.Value>
          <Statistic.Label>Tasks Done</Statistic.Label>
        </Statistic>
        <Statistic className="Stat">
          <Statistic.Value>
            {countOfNotes()-countOfdoneTasks()}
          </Statistic.Value>
          <Statistic.Label>Tasks Pending</Statistic.Label>
        </Statistic>
      </Statistic.Group>
  );
}

export default Statistics;
