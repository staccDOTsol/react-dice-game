import { connect } from 'react-redux';

import { ProbablyFairHashView } from '../views';


const mapStateToProps = ({ diceGame: { resultNumber } }) => ({
  resultNumber,
});

export default connect(mapStateToProps)(ProbablyFairHashView);
