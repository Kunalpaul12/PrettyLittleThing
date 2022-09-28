import {compose} from 'redux';
import {connect} from 'react-redux';
import {decrement, increment} from '../../store/reducer/home';
import Home from './home';

const selector = () => {
  return {};
};

const actions = {
  decrement,
  increment,
};

export default compose(connect(selector, actions))(Home);
