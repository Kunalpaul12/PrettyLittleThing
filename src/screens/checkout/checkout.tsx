import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {InnerContainer, Container, _Text, ProductSeparator} from '../../styles';
import Colors from '../../colors';
import {FONTS_TYPE} from '../../constants';
import {
  PlacedOrderButton,
  Styles,
  CheckoutListContainer,
  CheckoutDetailsContainer,
} from './styles';
import {checkName} from '../../utils';
import StaticImage from '../../assets/icons';
import {_Image, AddRemove} from '../../components';
import {productProps} from '../../store/reducer/home';

type Props = {
  add: (index: number) => void;
  remove: (index: number) => void;
};

const CheckOut: React.FC<Props> = ({add, remove}) => {
  const total = useSelector(state => state?.homeReducer?.total);
  const products = useSelector(state => state?.homeReducer?.products);

  const checkoutList = () => {
    const _renderCheckoutList = (item: productProps, index: number) => {
      const {name, price, img, quantity = 0} = item;
      if (quantity) {
        const totalPrice: number = Number((price * quantity).toFixed(2));
        return (
          <CheckoutListContainer>
            <_Image
              imageUrl={img}
              imageStyle={Styles?.productImage}
              staticImage={StaticImage?.downloadingImage}
            />
            <CheckoutDetailsContainer>
              <_Text textAlign={'left'} fontSize={12} paddingLeft={10}>
                {checkName(name)}
              </_Text>
              <_Text
                fontFamily={FONTS_TYPE?.semiBold}
                paddingTop={5}
                paddingBottom={5}
                fontSize={12}
                paddingLeft={10}>
                Total {totalPrice}
              </_Text>
              <AddRemove
                add={add}
                remove={remove}
                index={index}
                quantity={quantity}
              />
            </CheckoutDetailsContainer>
          </CheckoutListContainer>
        );
      }
      return <></>;
    };

    return (
      <FlatList
        data={products}
        renderItem={({item, index}) => _renderCheckoutList(item, index)}
        keyExtractor={(item, index) => String(item.id || index)}
        ItemSeparatorComponent={() => <ProductSeparator />}
        extraData={products}
      />
    );
  };

  return (
    <Container>
      <InnerContainer>
        {checkoutList()}
        <PlacedOrderButton>
          <_Text color={Colors?.white} fontFamily={FONTS_TYPE?.semiBold}>
            Placed Order of ${total}
          </_Text>
        </PlacedOrderButton>
      </InnerContainer>
    </Container>
  );
};

export default CheckOut;
