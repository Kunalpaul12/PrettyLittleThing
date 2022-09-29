import React from 'react';
import {_Text} from '../../styles';
import {AddRemoveButton, AddRemoveContainer} from './styles';
import {FONTS_TYPE} from '../../constants';
import Colors from '../../colors';

type Props = {
  add: (index: number) => void;
  remove: (index: number) => void;
  index: number;
  quantity: number;
};

const AddRemove: React.FC<Props> = ({add, remove, index, quantity}) => {
  return (
    <AddRemoveContainer>
      <AddRemoveButton onPress={() => add(index)}>
        <_Text
          fontSize={11}
          color={Colors?.addRemoveButton}
          fontFamily={FONTS_TYPE?.semiBold}>
          +
        </_Text>
      </AddRemoveButton>
      <_Text fontSize={12} fontFamily={FONTS_TYPE?.semiBold}>
        {quantity}
      </_Text>
      <AddRemoveButton
        disable={!quantity}
        onPress={() => (!quantity ? null : remove(index))}>
        <_Text
          fontSize={11}
          color={!quantity ? Colors?.productBorder : Colors?.addRemoveButton}
          fontFamily={FONTS_TYPE?.semiBold}>
          -
        </_Text>
      </AddRemoveButton>
    </AddRemoveContainer>
  );
};

export default AddRemove;
