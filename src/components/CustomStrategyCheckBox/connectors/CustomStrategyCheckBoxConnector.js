import { connect } from 'react-redux';

import { setCustomStrategyBool } from '../../../actions/diceGame';
import { CustomStrategyCheckBoxContainer } from '../containers';


const mapStateToProps = ({ autoBet, martingaleStrategy }) => ({
  autoBet,
  martingaleStrategy
});

const mapDispatchToProps = {
  setCustomStrategyBool,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomStrategyCheckBoxContainer);
