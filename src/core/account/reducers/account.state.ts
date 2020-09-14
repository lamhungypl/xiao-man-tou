import { Map, Record } from 'immutable';
import { OrderHistoryModel } from '../models/orderHistory.model';

interface ObjectType {
  [key: string]: any;
}
export interface AccountState extends Map<string, any> {
  newPassword: any;
  orderHistory: Array<OrderHistoryModel> | ObjectType;
  orderHistoryCount: number;
  orderHistoryDetail: any;
  orderHistoryDetailLoading: boolean;
  historyListLoading: boolean;

  changePasswordLoading: boolean;

  edited: any;
  editProfileLoading: boolean;

  addressList: any;
  addressListLoading: boolean;

  addAddress: any;
  addAddressLoading: boolean;

  updateCustomerAddress: any;
  updateCustomerAddressLoading: boolean;

  deleteCustomerAddress: any;
  deleteCustomerAddressLoading: boolean;

  review?: any;
  reviewLoading?: boolean;

  rating?: any;
  ratingLoading?: boolean;
}
export const accountRecord = Record({
  newPassword: {},
  orderHistory: [],
  orderHistoryCount: 0,
  orderHistoryDetail: {},
  addressList: {},
  updateCustomerAddress: {},
  deleteCustomerAddress: {},

  orderHistoryDetailLoading: false,

  historyListLoading: false,

  changePasswordLoading: false,

  editProfileLoading: false,

  addressListLoading: false,

  updateCustomerAddressLoading: false,

  deleteCustomerAddressLoading: false,

  reviewLoading: false,

  ratingLoading: false,
});
