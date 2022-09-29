import React, {useEffect} from 'react';
import {FlatList, Image} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Loader} from '../../components';
import {loadingProduct} from '../../language/en.json';
import {InnerContainer, Container, _Text} from '../../styles';
import {productProps} from '../../store/reducer/home';
import {NO_OF_PRODUCTS_PER_COLUMNS, PRODUCT_NAME_LENGTH} from '../../config';
import {ProductContainer, ProductSeparator, Styles} from './style';
import {FONTS_TYPE} from '../../constants';

type Props = {
  navigation: NavigationProp<ParamListBase>;
  fetchProducts: () => void;
  loading: boolean;
};

const Home: React.FC<Props> = ({navigation, fetchProducts}) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const loading = useSelector(state => state.homeReducer.loading);
  const products = useSelector(state => state.homeReducer.products);

  const ProductList = () => {
    const _renderProducts = (item: productProps) => {
      const {name, price} = item;
      const filterName =
        name.length > PRODUCT_NAME_LENGTH
          ? name.substring(0, PRODUCT_NAME_LENGTH) + '...'
          : name;
      return (
        <ProductContainer>
          <Image source={{uri: item?.img}} style={{width: 100, height: 100}} />
          <_Text fontSize={11}>{filterName}</_Text>
          <_Text fontSize={12} fontFamily={FONTS_TYPE?.semiBold}>
            ${price}
          </_Text>
        </ProductContainer>
      );
    };
    return (
      <FlatList
        data={products}
        numColumns={NO_OF_PRODUCTS_PER_COLUMNS}
        renderItem={({item}) => _renderProducts(item)}
        keyExtractor={(item, index) => String(item.id || index)}
        extraData={products}
        columnWrapperStyle={Styles?.columWrapper}
        ItemSeparatorComponent={() => <ProductSeparator />}
      />
    );
  };

  return (
    <Container>
      <InnerContainer>
        {loading && <Loader loadingText={loadingProduct} size="large" />}
        {!loading && ProductList()}
      </InnerContainer>
    </Container>
  );
};

export default Home;
