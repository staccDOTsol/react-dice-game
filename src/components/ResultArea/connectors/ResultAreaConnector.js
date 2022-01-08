import { connect } from 'react-redux';

import { ResultAreaView } from '../views';


const mapStateToProps = ({ win, prevResultNumber, resultNumber, history }) => ({
  win,
  prevResultNumber,
  resultNumber,
  history
});

export default connect(mapStateToProps)(ResultAreaView);
