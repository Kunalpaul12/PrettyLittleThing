describe('PLA', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  it('check checkout status', async () => {
    await expect(element(by.id('checkout'))).toExist();
    await element(by.id('checkout')).tap();
  });
  it('check product list', async () => {
    await expect(element(by.id('product_list'))).toExist();
  });
  it('add products', async () => {
    await element(by.id('add_1')).multiTap(2);
    await element(by.id('add_2')).multiTap(2);
    await element(by.id('add_3')).multiTap(2);
    await element(by.id('checkout')).tap();
  });
  it('check place order status', async () => {
    await expect(element(by.id('placed_order'))).toExist();
  });
  it('remove products', async () => {
    await element(by.id('remove_1')).multiTap(1);
    await element(by.id('remove_3')).multiTap(1);
    await element(by.id('remove_2')).multiTap(2);
    await element(by.id('placed_order')).tap();
  });
});
