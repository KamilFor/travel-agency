import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = (dispatch) => ({
  setOrderOption: (item) => dispatch(setOrderOption(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
