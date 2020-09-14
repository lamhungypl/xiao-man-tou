import { ProductOptionsDetailResponse } from './product-options-detail-response.model';

export interface ProductDetailResponse {
  Category: Array<any>;
  dateAvailable: string;
  description: string;
  location: string;
  manufacturerId: string;
  metaTagTitle: string;
  minimumQuantity: string;
  name: string;
  price: string;
  productId: string;
  productImage: string[];
  quantity: string;
  shipping: string;
  sku: string;
  sortOrder: string;
  stockStatusId: string;
  subtractStock: string;
  priceRefer: number;
  flag: any;
  upc: string;
  productOption: ProductOptionsDetailResponse;
  rating: number;
}
