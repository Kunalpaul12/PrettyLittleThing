import {compose} from 'redux';
import {connect} from 'react-redux';
import {fetchProducts} from '../../store/reducer/home';
import Home from './home';

const actions = {
  fetchProducts,
};

export default compose(connect(null, actions))(Home);
