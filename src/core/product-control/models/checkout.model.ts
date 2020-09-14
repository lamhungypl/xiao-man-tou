import { CheckoutOptionsArrayModel } from './checkoutOptionsArray.model';

export interface CheckoutProductModel {
  products: any[];
  productOptions: CheckoutOptionsArrayModel;
}

export interface CheckoutModel {
  productDetails: any;
  shippingFirstName: any;
  shippingLastName: any;
  shippingCompany: any;
  shippingAddress_1: any;
  shippingAddress_2: any;
  shippingCity: any;
  shippingPostCode: any;
  shippingCountry: any;
  shippingZone: any;
  shippingAddressFormat: any;
  phoneNumber: any;
  emailId: any;
}
