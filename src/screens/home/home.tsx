import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Loader, _Image, AddRemove} from '../../components';
import {loadingProduct} from '../../language/en.json';
import {InnerContainer, Container, _Text} from '../../styles';
import {productProps} from '../../store/reducer/home';
import {NO_OF_PRODUCTS_PER_COLUMNS, PRODUCT_NAME_LENGTH} from '../../config';
import {ProductContainer, ProductSeparator, Styles} from './style';
import {FONTS_TYPE} from '../../constants';
import StaticImage from '../../assets/icons';

type Props = {
  navigation: NavigationProp<ParamListBase>;
  fetchProducts: () => void;
  loading: boolean;
  add: (id: number) => void;
  remove: (id: number) => void;
};

const Home: React.FC<Props> = ({navigation, fetchProducts, add, remove}) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const loading = useSelector(state => state.homeReducer.loading);
  const products = useSelector(state => state.homeReducer.products);

  const ProductList = () => {
    const _renderProducts = (item: productProps) => {
      const {name, price, img, id, quantity = 0} = item;
      const filterName =
        name.length > PRODUCT_NAME_LENGTH
          ? name.substring(0, PRODUCT_NAME_LENGTH) + '...'
          : name;
      return (
        <ProductContainer>
          <_Image
            imageUrl={img}
            imageStyle={Styles?.productImage}
            staticImage={StaticImage?.downloadingImage}
          />

          <_Text fontSize={11} paddingTop={10}>
            {filterName}
          </_Text>

          <_Text fontSize={12} paddingTop={5} fontFamily={FONTS_TYPE?.semiBold}>
            ${price}
          </_Text>
          <AddRemove add={add} remove={remove} id={id} quantity={quantity} />
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
