export interface OrderHistoryModel {
  createdDate: string;
  orderId: string;
  total: number;
  orderStatusId: string;
  orderPrefixId: string;
  orderStatus: { [key: string]: any };
}
