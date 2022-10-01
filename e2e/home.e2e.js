describe('PLA', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  it('check checkout status', async () => {
    await expect(element(by.id('checkout'))).toExist();
    await element(by.id('checkout')).tap();
  });
  it('add products', async () => {
    await element(by.id('add-1')).multiTap(2);
    await element(by.id('add-2')).multiTap(2);
    await element(by.id('add-3')).multiTap(2);
    await element(by.id('checkout')).tap();
  });
  it('remove products', async () => {
    await expect(element(by.id('placed_order'))).toExist();
    await element(by.id('remove-1')).multiTap(1);
    await element(by.id('remove-3')).multiTap(1);
    await element(by.id('remove-2')).multiTap(2);
    await element(by.id('placed_order')).tap();
  });
});
