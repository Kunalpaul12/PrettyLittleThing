import styled from 'styled-components/native';
import Colors from '../../colors';

export const AddRemoveContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100px;
`;

export const AddRemoveButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-color: ${props =>
    props?.disable ? Colors?.productBorder : Colors?.addRemoveButton};
  border-width: 1px;
  justify-content: center;
  align-items: center;
`;
