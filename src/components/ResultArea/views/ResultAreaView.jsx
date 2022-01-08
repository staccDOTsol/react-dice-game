import React from 'react';
import { Alert } from 'reactstrap';

import { Table } from 'reactstrap';
import { ResultAreaViewPropType } from '../propTypes';

function reverseArr(input) {
  var ret = new Array;
  for(var i = input.length-1; i >= 0; i--) {
      ret.push(input[i]);
  }
  return ret;
}

function ResultAreaView({ win, prevResultNumber, resultNumber, history }) {
 if (!prevResultNumber){
   return null;
 }
 
let history2 = reverseArr(history)
let wins = 0;
let losses = 0;
let t = 0;
let avg = 0;
for (var h in history2){
  try{ 
  history2[h].win ? wins++ : losses++;
  t+=parseInt(history2[h].resultNumber);
 avg = t /history2.length 
  }
  catch(err){
    console.log(err)
  }
}
  return (
    <div>
    <p>{wins} wins, {losses} losses, {wins + losses} total rolls</p>
    <p>{parseInt(avg)} average result...</p>
    <Alert color={win ? 'success' : 'danger'}>
      {resultNumber} {win ? 'WIN' : 'LOSE'}
    </Alert>
    <Table striped>
    <thead>
      <tr>
        <th>Bet number</th>
        <th>Bet amount</th>
        <th>Result</th>
        <th>Balance</th>
      </tr>
    </thead>
    <tbody>
      { history2.map(item => (
        <tr key={item.betNumber}>
          <th scope="row">{item.betNumber}</th>
          <td>{item.betAmount}</td>
          <td>{item.resultNumber} {item.win ? 'WIN' : 'LOSE'}</td>
          <td>{item.balance}</td>
        </tr>
      ))}
    </tbody>
  </Table>
  </div>
  );
}

ResultAreaView.propTypes = ResultAreaViewPropType;

export default ResultAreaView;
