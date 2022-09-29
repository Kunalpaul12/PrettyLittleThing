import {compose} from 'redux';
import {connect} from 'react-redux';
import {fetchProducts, add, remove} from '../../store/reducer/home';
import Home from './home';

const actions = {
  fetchProducts,
  add,
  remove,
};

export default compose(connect(null, actions))(Home);
