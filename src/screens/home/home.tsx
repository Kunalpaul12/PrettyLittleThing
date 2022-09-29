import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Loader, _Image, AddRemove} from '../../components';
import {loadingProduct} from '../../language/en.json';
import {InnerContainer, Container, _Text, ProductSeparator} from '../../styles';
import {productProps} from '../../store/reducer/home';
import {NO_OF_PRODUCTS_PER_COLUMNS} from '../../config';
import {ProductContainer, Styles, CheckoutButton} from './style';
import {FONTS_TYPE} from '../../constants';
import StaticImage from '../../assets/icons';
import Colors from '../../colors';
import {checkName} from '../../utils';

type Props = {
  navigation: NavigationProp<ParamListBase>;
  fetchProducts: () => void;
  loading: boolean;
  add: (index: number) => void;
  remove: (index: number) => void;
};

const Home: React.FC<Props> = ({navigation, fetchProducts, add, remove}) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const loading = useSelector(state => state?.homeReducer?.loading);
  const products = useSelector(state => state?.homeReducer?.products);
  const total = useSelector(state => state?.homeReducer?.total);

  const ProductList = () => {
    const _renderProducts = (item: productProps, index: number) => {
      const {name, price, img, quantity = 0} = item;
      return (
        <ProductContainer>
          <_Image
            imageUrl={img}
            imageStyle={Styles?.productImage}
            staticImage={StaticImage?.downloadingImage}
          />

          <_Text fontSize={11} paddingTop={10}>
            {checkName(name)}
          </_Text>

          <_Text
            fontSize={12}
            paddingTop={5}
            paddingBottom={5}
            fontFamily={FONTS_TYPE?.semiBold}>
            ${price}
          </_Text>
          <AddRemove
            add={add}
            remove={remove}
            index={index}
            quantity={quantity}
          />
        </ProductContainer>
      );
    };
    return (
      <FlatList
        data={products}
        numColumns={NO_OF_PRODUCTS_PER_COLUMNS}
        renderItem={({item, index}) => _renderProducts(item, index)}
        keyExtractor={(item, index) => String(item.id || index)}
        extraData={products}
        columnWrapperStyle={Styles?.columWrapper}
        ItemSeparatorComponent={() => <ProductSeparator />}
        style={Styles?.flatListContainer}
      />
    );
  };

  return (
    <Container>
      <InnerContainer>
        {loading && <Loader loadingText={loadingProduct} size="large" />}
        {!loading && ProductList()}
        {!loading && (
          <CheckoutButton
            disable={!total}
            onPress={() => {
              total ? navigation.push('CheckOut') : null;
            }}>
            <_Text fontSize={17} color={Colors?.white}>
              Checkout
            </_Text>
          </CheckoutButton>
        )}
      </InnerContainer>
    </Container>
  );
};

export default Home;
