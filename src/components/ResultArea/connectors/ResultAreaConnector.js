import { connect } from 'react-redux';

import { ResultAreaView } from '../views';


const mapStateToProps = ({ diceGame: { win, prevResultNumber } }) => ({
  win,
  resultNumber: prevResultNumber,
});

export default connect(mapStateToProps)(ResultAreaView);
