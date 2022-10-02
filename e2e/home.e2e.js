const {
  checkoutButton,
  productList,
  addButton,
  removeButton,
  placedOrderButton,
} = global.testing;

const backButton = () => {
  if (device.getPlatform() === 'ios') {
    return element(by.traits(['button'])).atIndex(0);
  } else {
    return element(by.label('Navigate Up'));
  }
};

describe('PLA', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  it(`check ${checkoutButton} status`, async () => {
    await expect(element(by.id(checkoutButton))).toExist();
    await element(by.id(checkoutButton)).tap();
  });
  it('check product list', async () => {
    await expect(element(by.id(productList))).toExist();
  });
  it('check descendant of product list ', async () => {
    element(by.id(productList).withDescendant(by.id(`${addButton}0`)));
  });
  it('add products', async () => {
    await element(by.id(`${addButton}1`)).multiTap(2);
    await element(by.id(`${addButton}2`)).multiTap(2);
    await element(by.id(`${addButton}3`)).multiTap(2);
    await element(by.id(checkoutButton)).tap();
  });
  it('check place order status', async () => {
    await expect(element(by.id(placedOrderButton))).toExist();
  });
  it('remove products', async () => {
    await element(by.id(`${removeButton}1`)).multiTap(1);
    await element(by.id(`${removeButton}3`)).multiTap(1);
    await element(by.id(`${removeButton}2`)).multiTap(2);
    await element(by.id(placedOrderButton)).tap();
  });
  it('check back button', async () => {
    await backButton().tap();
  });
});
