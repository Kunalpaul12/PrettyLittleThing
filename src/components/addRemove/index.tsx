import React from 'react';
import {_Text} from '../../styles';
import {AddRemoveButton, AddRemoveContainer} from './styles';
import {FONTS_TYPE} from '../../constants';
import Colors from '../../colors';

type Props = {
  add: (id: number) => void;
  remove: (id: number) => void;
  id: number;
  quantity: number;
};

const AddRemove: React.FC<Props> = ({add, remove, id, quantity}) => {
  return (
    <AddRemoveContainer>
      <AddRemoveButton onPress={() => add(id)}>
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
      <AddRemoveButton disable={!quantity} onPress={() => remove(id)}>
        <_Text
          fontSize={11}
          color={Colors?.addRemoveButton}
          fontFamily={FONTS_TYPE?.semiBold}>
          -
        </_Text>
      </AddRemoveButton>
    </AddRemoveContainer>
  );
};

export default AddRemove;
