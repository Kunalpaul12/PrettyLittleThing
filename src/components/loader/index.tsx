import React from 'react';
import {ActivityIndicator} from 'react-native';
import {_Text, ComponentsContainer} from '../../styles';

type Props = {
  size: string;
  loadingText: string;
};

const Loader: React.FC<Props> = ({size, loadingText}) => {
  return (
    <ComponentsContainer>
      <ActivityIndicator size={size || 'large'} />
      <_Text paddingTop={15}>{loadingText}</_Text>
    </ComponentsContainer>
  );
};

export default Loader;
