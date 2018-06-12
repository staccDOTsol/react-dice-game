import { connect } from 'react-redux';

import { TableView } from '../views';


const mapStateToProps = ({ history, autoBet }) => ({
  history,
  autoBet,
});

export default connect(mapStateToProps)(TableView);
