import { connect } from 'react-redux';

import { ProbablyFairHashView } from '../views';


const mapStateToProps = ({ diceGame: { nexBetNumber } }) => ({
  nexBetNumber,
});

export default connect(mapStateToProps)(ProbablyFairHashView);
