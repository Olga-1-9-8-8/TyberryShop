import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductItem } from '../../../interfaces';
import { RootState } from '../../../redux/rootReducer';

interface IinitialState {
  goodsItems: IProductItem[];
}

const initialState: IinitialState = {
  goodsItems: [
    {
      id: 1,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-psd/amber-glass-cosmetic-jar-mockup_358694-1012.jpg',
      price: 2400,
      sale: 0.3,
      count: 1,
    },
    {
      id: 2,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-psd/cooking-oil-bottle-mockup_358694-995.jpg',
      price: 5600,
      sale: 0.1,
      count: 1,
    },
    {
      id: 3,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-photo/milk_93675-83337.jpg',
      price: 1100,
      sale: 0.2,
      count: 1,
    },
    {
      id: 4,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-vector/cosmetic-realistic-vector-background_88138-57.jpg',
      price: 1700,
      sale: 0.4,
      count: 1,
    },
    {
      id: 5,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-psd/neon-light-glow-sale-3d-realistic-podium-product-promo-display_125755-586.jpg',
      price: 11000,
      sale: 0.1,
      count: 1,
    },
    {
      id: 6,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-vector/beauty-skin-care-background_52683-728.jpg',
      price: 800,
      sale: 0.23,
      count: 1,
    },
    {
      id: 7,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-vector/realistic-ad-sun-screen-product_52683-44033.jpg',
      price: 1350,
      sale: 0.4,
      count: 1,
    },
    {
      id: 8,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-vector/vector-realistic-poster-with-plastic-pail-filled-with-olive-mayonnaise-nearby-twig-with-olives_1441-546.jpg',
      price: 4000,
      sale: 0.1,
      count: 1,
    },
    {
      id: 9,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-vector/pink-background-with-moisturizing-cosmetic-day-night-premium-products_1441-281.jpg',
      price: 2300,
      sale: 0.6,
      count: 1,
    },
    {
      id: 10,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-vector/juice-ad-with-gradients-lettering_52683-30650.jpg',
      price: 2900,
      sale: 0.8,
      count: 1,
    },
    {
      id: 11,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-vector/natural-beauty-cosmetics-product-face-body-care-orange_33099-1658.jpg',
      price: 1500,
      sale: 0.1,
      count: 1,
    },
    {
      id: 12,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-psd/natural-cosmetic-products-spa-treatment_23-2148346072.jpg',
      price: 2900,
      sale: 0.34,
      count: 1,
    },
    {
      id: 13,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-vector/summer-line-perfume-ad-banner_33099-1927.jpg',
      price: 1200,
      sale: 0.12,
      count: 1,
    },
    {
      id: 14,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-vector/shiny-pink-background-with-moisturizing-cosmetic-premium-products_1441-228.jpg',
      price: 350,
      sale: 0.3,
      count: 1,
    },
    {
      id: 15,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-psd/cosmetic-cream-container-mockup-cream_1150-34630.jpg',
      price: 1560,
      sale: 0.1,
      count: 1,
    },
    {
      id: 16,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-psd/awesome-mug-mockup_308775-91.jpg',
      price: 600,
      sale: 0.25,
      count: 1,
    },
    {
      id: 17,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-vector/women-s-night-cosmetics-3d-realistic-banner_33099-1078.jpg',
      price: 1580,
      sale: 0.2,
      count: 1,
    },
    {
      id: 18,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-psd/soda-cans-table-with-typography_23-2148245497.jpg',
      price: 90,
      sale: 0.1,
      count: 1,
    },
    {
      id: 19,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-vector/milk-cosmetics-realistic-vector-background-with-lotion-roll-deodorant_107791-54.jpg?1',
      price: 700,
      sale: 0.5,
      count: 1,
    },
    {
      id: 20,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-vector/bottle-cold-pressed-bio-juice-with-strawberries-pink-waves-background-realistic_1268-15915.jpg',
      price: 100,
      sale: 0.1,
      count: 1,
    },
    {
      id: 21,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-vector/realistic-natural-cream-ad-template_52683-19298.jpg',
      price: 120,
      sale: 0.1,
      count: 1,
    },
    {
      id: 22,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-vector/micellar-water-with-ginkgo-biloba-extract-makeup-cleaning-3d-realistic-vector-advertising-banner-poster_33099-1252.jpg',
      price: 1320,
      sale: 0.1,
      count: 1,
    },
    {
      id: 23,
      text: 'Tyberry Product',
      img: 'https://image.freepik.com/free-photo/bottles-milk-mozzarella-burlap-fabric_23-2148239863.jpg',
      price: 4000,
      sale: 0.1,
      count: 1,
    },
  ],
};

export const goodsSlice = createSlice({
  name: 'showProducts',
  initialState,
  reducers: {
    sortProducts: (state, action: PayloadAction<string>) => {
      state.goodsItems.sort((a, b) => {
        if (action.payload === 'Min') {
          return a.price - a.price * a.sale > b.price - b.price * b.sale
            ? 1
            : -1;
        }
        if (action.payload === 'Max') {
          return a.price - a.price * a.sale < b.price - b.price * b.sale
            ? 1
            : -1;
        }
        return a.id - b.id;
      });
    },
  },
});

export const arrGoods = (state: RootState) => state.goods.goodsItems;
export const { sortProducts } = goodsSlice.actions;
export default goodsSlice.reducer;
