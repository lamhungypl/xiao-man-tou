import { ProductOptionValueDetailResponse } from './product-option-value-detail-response.model';

export interface ProductOptionsDetailResponse {
  optionId: number;
  optionValue: ProductOptionValueDetailResponse;
  optionName: string;
  optionType: string;
  productId: any;
  productOptionId: number;
  required: number;
  value: string;
}
