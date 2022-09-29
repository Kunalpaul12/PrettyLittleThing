import {compose} from 'redux';
import {connect} from 'react-redux';
import {add, remove} from '../../store/reducer/home';
import Checkout from './checkout';

const actions = {
  add,
  remove,
};

export default compose(connect(null, actions))(Checkout);
