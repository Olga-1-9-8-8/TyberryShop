export interface IProductItem {
  id: number;
  text: string;
  img: string;
  price: number;
  sale: number;
  count: number;
}

export interface IOrder {
  totalCountOrder: number;
  totalPriseOrder: number;
}

export interface IUser {
  id: string;
  totalOrderGoodsCount: number;
  totalOrderGoodsPrice: number;
  date: {
    month: number;
    year: number;
    day: number;
    hours: number;
    minute: number;
  };
  email: string;
}
