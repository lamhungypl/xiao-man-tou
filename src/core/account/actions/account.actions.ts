import { AddressModel } from '../models/address.model';
import { AddressListRequest } from '../models/addressListRequest.model';
import { ChangePasswordModel } from '../models/changePassword.model';
import { EditProfileModel } from '../models/editProfile.model';
import { OrderHistoryModel } from '../models/orderHistory.model';
import { OrderHistoryRequest } from '../models/orderHistoryRequest.model';

export enum ActionTypes {
  // change password actions
  DO_CHANGE_PASSWORD = '[login] do change password',
  CHANGE_PASSWORD_SUCCESS = '[login] do change password success',
  CHANGE_PASSWORD_FAIL = '[login] do  change password fail',

  // Edit profile actions
  EDIT_PROFILE = '[login] edit profile',
  EDIT_PROFILE_SUCCESS = '[login] edit profile success',
  EDIT_PROFILE_FAIL = '[login] edit profile fail',

  // get order history actions
  GET_ORDER_HISTORY = '[history] edit profile',
  GET_ORDER_HISTORY_SUCCESS = '[history] edit profile success',
  GET_ORDER_HISTORY_FAIL = '[history] edit profile fail',

  // get order history count actions
  GET_ORDER_HISTORY_COUNT = '[history] history count',
  GET_ORDER_HISTORY_SUCCESS_COUNT = '[history] history count success',
  GET_ORDER_HISTORY_COUNT_FAIL = '[history] history count fail',

  // get order detail actions
  GET_ORDER_DETAIL = '[order_detail] order detail',
  CLEAR_ORDER_DETAIL = '[order_detail] clear order detail',
  GET_ORDER_DETAIL_SUCCESS = '[order_detail] order detail success',
  GET_ORDER_DETAIL_FAIL = '[order_detail] order detail fail',

  // get customer address list
  GET_CUSTOMER_ADDRESS_LIST = '[address] address list',
  GET_CUSTOMER_ADDRESS_LIST_SUCCESS = '[address] address list success',
  GET_CUSTOMER_ADDRESS_LIST_FAIL = '[address] address list fail',

  // Add customer address
  ADD_CUSTOMER_ADDRESS = '[add address] add address ',
  ADD_CUSTOMER_ADDRESS_SUCCESS = '[add address] add address success',
  ADD_CUSTOMER_ADDRESS_FAIL = '[add address] add address  fail',

  // Update customer address
  UPDATE_CUSTOMER_ADDRESS = '[update address] add address ',
  UPDATE_CUSTOMER_ADDRESS_SUCCESS = '[update address] add address success',
  UPDATE_CUSTOMER_ADDRESS_FAIL = '[update address] add address  fail',

  // Delete customer address
  DELETE_CUSTOMER_ADDRESS = '[delete address] delete address ',
  DELETE_CUSTOMER_ADDRESS_SUCCESS = '[delete address] delete address success',
  DELETE_CUSTOMER_ADDRESS_FAIL = '[delete address] delete address  fail',

  // TODO
  // get review
  GET_RATING_DETAIL = '[RATING_DETAIL] rating detail',
  GET_RATING_DETAIL_SUCCESS = '[RATING_DETAIL] rating detail success',
  GET_RATING_DETAIL_FAIL = '[RATING_DETAIL] rating detail fail',
  // get rating
  GET_REVIEW_DETAIL = '[REVIEW_DETAIL] review detail',
  GET_REVIEW_DETAIL_SUCCESS = '[REVIEW_DETAIL] review detail success',
  GET_REVIEW_DETAIL_FAIL = '[REVIEW_DETAIL] review detail fail',
}
export type Action =
  | { type: ActionTypes.DO_CHANGE_PASSWORD; payload: ChangePasswordModel }
  | { type: ActionTypes.CHANGE_PASSWORD_SUCCESS; payload: any }
  | { type: ActionTypes.CHANGE_PASSWORD_FAIL; payload: any }
  | { type: ActionTypes.EDIT_PROFILE; payload: EditProfileModel }
  | { type: ActionTypes.EDIT_PROFILE_SUCCESS; payload: any }
  | { type: ActionTypes.EDIT_PROFILE_FAIL; payload: any }
  | { type: ActionTypes.GET_ORDER_HISTORY; payload?: OrderHistoryModel }
  | { type: ActionTypes.GET_ORDER_HISTORY_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_ORDER_HISTORY_FAIL; payload?: any }
  | { type: ActionTypes.GET_ORDER_HISTORY_COUNT; payload?: OrderHistoryRequest }
  | { type: ActionTypes.GET_ORDER_HISTORY_SUCCESS_COUNT; payload?: any }
  | { type: ActionTypes.GET_ORDER_HISTORY_COUNT_FAIL; payload?: any }
  | { type: ActionTypes.GET_ORDER_DETAIL; payload?: any }
  | { type: ActionTypes.CLEAR_ORDER_DETAIL; payload?: any }
  | { type: ActionTypes.GET_ORDER_DETAIL_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_ORDER_DETAIL_FAIL; payload?: any }
  | { type: ActionTypes.GET_CUSTOMER_ADDRESS_LIST; payload?: AddressListRequest }
  | { type: ActionTypes.GET_CUSTOMER_ADDRESS_LIST_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_CUSTOMER_ADDRESS_LIST_FAIL; payload?: any }
  | { type: ActionTypes.ADD_CUSTOMER_ADDRESS; payload: any }
  | { type: ActionTypes.ADD_CUSTOMER_ADDRESS_SUCCESS; payload: any }
  | { type: ActionTypes.ADD_CUSTOMER_ADDRESS_FAIL; payload: any }
  | { type: ActionTypes.UPDATE_CUSTOMER_ADDRESS; payload?: AddressModel }
  | { type: ActionTypes.UPDATE_CUSTOMER_ADDRESS_SUCCESS; payload?: any }
  | { type: ActionTypes.UPDATE_CUSTOMER_ADDRESS_FAIL; payload?: any }
  | { type: ActionTypes.DELETE_CUSTOMER_ADDRESS; payload?: any }
  | { type: ActionTypes.DELETE_CUSTOMER_ADDRESS_SUCCESS; payload?: any }
  | { type: ActionTypes.DELETE_CUSTOMER_ADDRESS_FAIL; payload?: any };
