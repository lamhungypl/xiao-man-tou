import { TodayDealImageModel } from './today-Deal-image.model';

export interface TodayDealsResponse {
  productId: string;
  sku: string;
  upc: string;
  location: string;
  quantity: string;
  minimumQuantity: number;
  subtractStock: number;
  stockStatusId: number;
  manufacturerId: number;
  shipping: number;
  todayDeals: number;
  price: number;
  dateAvailable: string;
  sortOrder: number;
  name: string;
  description: string;
  metaTagTitle: string;
  isFeatured: number;
  isActive: number;
  image: Array<any>;
  rating: number;
  flag: any;
  priceRefer: any;
}
