/**
 * Демо-витрина мерч-шопа: окно «Попробуйте витрину» в панели «Мерч-шоп» (раздел «Механики и возможности»).
 * Товары, цены, остатки и лимиты условные: это иллюстрация механики, ничего никуда не отправляется.
 * Ассортимент и цены можно менять здесь; иконки товаров (`glyph`) нарисованы в `MerchShopDemo.tsx`.
 */

export type ShopGlyphName = 'stickers' | 'mug' | 'tee' | 'hoodie';

export type ShopProduct = {
  id: string;
  name: string;
  /** Цена в баллах. */
  price: number;
  /** Сколько штук на складе, когда демо начинается. */
  stock: number;
  /** Сколько штук можно получить в одни руки (если не задано — без ограничения). */
  limit?: number;
  glyph: ShopGlyphName;
};

/** Стартовый баланс совпадает с карточкой слайдера «Баллы, рейтинг и награды» (1 240). */
export const shopDemoBalance = 1240;

/**
 * Цены подобраны так, чтобы на 1 240 баллов был выбор: худи и кружка вместе не сходятся
 * (980 + 280 = 1 260), зато футболка, кружка и стикеры помещаются с запасом.
 */
export const shopDemoProducts: ShopProduct[] = [
  {
    id: 'stickers',
    name: 'Стикерпак',
    price: 120,
    stock: 40,
    glyph: 'stickers',
  },
  { id: 'mug', name: 'Кружка', price: 280, stock: 12, glyph: 'mug' },
  { id: 'tee', name: 'Футболка', price: 560, stock: 8, glyph: 'tee' },
  {
    id: 'hoodie',
    name: 'Худи',
    price: 980,
    stock: 3,
    limit: 1,
    glyph: 'hoodie',
  },
];
