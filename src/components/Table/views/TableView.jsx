import React from 'react';
import { Table } from 'reactstrap';
import md5 from 'blueimp-md5';

import { TableViewPropType } from '../propTypes';


function TableView({ history, autoBet }) {
  if (!autoBet) {
    return null;
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Bet number</th>
          <th>Bet amount</th>
          <th>Result</th>
          <th>Probably Fair Hash</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        { history.map(item => (
          <tr key={item.betNumber}>
            <th scope="row">{item.betNumber}</th>
            <td>{item.betAmount}</td>
            <td>{item.resultNumber} {item.win ? 'WIN' : 'LOSE'}</td>
            <td>{md5(item.resultNumber)}</td>
            <td>{item.balance}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

TableView.propTypes = TableViewPropType;

export default TableView;
