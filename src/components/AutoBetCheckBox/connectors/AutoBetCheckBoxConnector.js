import { connect } from 'react-redux';

import { setAutoBet } from '../../../actions/diceGame';
import { AutoBetCheckBoxContainer } from '../containers';


const mapStateToProps = ({ numberOfBets }) => ({
  numberOfBets,
});

const mapDispatchToProps = {
  setAutoBet,
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoBetCheckBoxContainer);
