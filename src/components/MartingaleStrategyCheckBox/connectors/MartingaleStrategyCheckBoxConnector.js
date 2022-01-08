import { connect } from 'react-redux';

import { setMartingaleStrategy } from '../../../actions/diceGame';
import { MartingaleStrategyCheckBoxContainer } from '../containers';


const mapStateToProps = ({ autoBet, customStrategy }) => ({
  autoBet,
  customStrategy
});

const mapDispatchToProps = {
  setMartingaleStrategy,
};

export default connect(mapStateToProps, mapDispatchToProps)(MartingaleStrategyCheckBoxContainer);
