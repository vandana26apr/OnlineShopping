
import { Selector } from 'testcafe';

fixture `test`
    .page `http://localhost:3000/`;

test('New Test 2', async t => {
    await t
        .click(Selector('.shelf-item[data-sku="12064273040195392"]').find('div').withText('Add to cart'))
        .click(Selector('.shelf-item[data-sku="51498472915966370"]').find('div').withText('Add to cart'))
        .click(Selector('.float-cart__close-btn'))
        .click(Selector('.shelf-item[data-sku="8552515751438644"]').find('div').withText('Add to cart'))
        .click(Selector('.float-cart__close-btn'))
        .click(Selector('.sort').find('select'))
        .click(Selector('option').withText('Lowest to highest'))
        .click(Selector('span').withText('ML'))
        .click(Selector('label').withText('XL').find('.checkmark'))
        .click(Selector('.shelf-item[data-sku="10547961582846888"]').find('div').withText('Add to cart'))
        .click(Selector('.float-cart__close-btn'))
        .click(Selector('.shelf-item[data-sku="6090484789343891"]').find('div').withText('Add to cart'))
        .click(Selector('.float-cart__close-btn'))
        .click(Selector('.bag.bag--float-cart-closed'))
        .click(Selector('div').withText('Cat Tee Black T-Shirt').nth(6).find('.shelf-item__del'))
        .click(Selector('div').withText('Cat Tee Black T-Shirt').nth(6).find('.shelf-item__del'))
        .click(Selector('.float-cart__close-btn'));
});