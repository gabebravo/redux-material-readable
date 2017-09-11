import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import ScoreButtons from '../components/ScoreButtons'

const PostInfoTable = ({ date, score, comments }) => (
  <Table>
    <TableHeader displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}>
      <TableRow>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Score<ScoreButtons/></TableHeaderColumn>
        <TableHeaderColumn># of Comments</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}
            deselectOnClickaway={false}
            showRowHover={false}
            stripedRows={false}>
      <TableRow>
        <TableRowColumn>{date}</TableRowColumn>
        <TableRowColumn>{score}</TableRowColumn>
        <TableRowColumn>{comments}</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default PostInfoTable;