import { connect } from 'react-redux';

import { TableView } from '../views';

import { finishMakeBets } from '../../../actions/diceGame';



const mapDispatchToProps = {
  finishMakeBets,
};

const mapStateToProps = ({ history, autoBet }) => ({
  history,
  autoBet,
});

export default connect(mapStateToProps, mapDispatchToProps)(TableView);
