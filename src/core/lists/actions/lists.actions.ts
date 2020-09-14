export enum ActionTypes {
  GET_PRODUCT_LIST = '[product] get product list',
  GET_PRODUCT_LIST_SUCCESS = '[product] get product list success',
  GET_PRODUCT_LIST_FAIL = '[product] get product list fail',

  GET_AVAILABLE_VALUE = '[available_data] get available  options',
  GET_VIEW_ALL = '[view] get view all',

  GET_ZONE_LIST = '[zone_list] zone list',
  GET_ZONE_LIST_SUCCESS = '[zone_list] zone list success',
  GET_ZONE_LIST_FAIL = '[zone_list] zone list fail',

  GET_COUNTRY_LIST = '[country_list] country list',
  GET_COUNTRY_LIST_SUCCESS = '[country_list] country list success',
  GET_COUNTRY_LIST_FAIL = '[country_list] country list fail',

  GET_PRODUCT_COUNT = '[product_count] get product count',
  GET_PRODUCT_COUNT_SUCCESS = '[product_count] get product count success',
  GET_PRODUCT_COUNT_FAIL = '[product_count] get product count fail',

  GET_CATEGORY_LIST = '[category] get category list',
  GET_CATEGORY_LIST_SUCCESS = '[category] get category list success',
  GET_CATEGORY_LIST_FAIL = '[category] get category list fail',

  GET_RELATED_PRODUCT_LIST = '[RELATED_product] get RELATED_product list',
  GET_RELATED_PRODUCT_LIST_SUCCESS = '[RELATED_product] get RELATED_product list success',
  GET_RELATED_PRODUCT_LIST_FAIL = '[RELATED_product] get RELATED_product list fail',

  GET_MANUFACTURER_LIST = '[manufacturer] get manufacturer list',
  GET_MANUFACTURER_LIST_SUCCESS = '[manufacturer] get manufacturer list success',
  GET_MANUFACTURER_LIST_FAIL = '[manufacturer] get manufacturer list fail',

  GET_PRODUCT_DETAIL = '[product detail] get product detail',
  GET_PRODUCT_DETAIL_SUCCESS = '[product detail] get product detail success',
  GET_PRODUCT_DETAIL_FAIL = '[product detail] get product detail fail',

  GET_PRODUCT_DETAIL_MANDATORY = '[product detail mandatory] get product detail mandatory',
  GET_PRODUCT_DETAIL_MANDATORY_SUCCESS = '[product detail mandatory] get product detail mandatory success',
  GET_PRODUCT_DETAIL_MANDATORY_FAIL = '[product detail mandatory] get product detail mandatory fail',

  GET_BANNER_LIST = '[banner] get banner list',
  GET_BANNER_LIST_SUCCESS = '[banner] get banner list success',
  GET_BANNER_LIST_FAIL = '[banner] get banner list fail',

  GET_BANNER_LIST_COUNT = '[banner_count] get banner list count',
  GET_BANNER_LIST_COUNT_SUCCESS = '[banner_count] get banner list count success',
  GET_BANNER_LIST_COUNT_FAIL = '[banner_count] get banner list count fail',

  GET_FEATURED_PRODUCT_LIST = '[featured_product] get featured product list ',
  GET_FEATURED_PRODUCT_LIST_SUCCESS = '[featured_product] get featured product list success',
  GET_FEATURED_PRODUCT_LIST_FAIL = '[featured_product] get featured product list fail',

  GET_PAGE_LIST = '[page_list] get page list ',
  GET_PAGE_LIST_SUCCESS = '[page_list] get page list success',
  GET_PAGE_LIST_FAIL = '[page_list] get page list fail',

  GET_SETTINGS_ACTION = '[setting] get settings ',
  GET_SETTINGS_SUCCESS_ACTION = '[setting] get settings success',
  GET_SETTINGS_FAIL_ACTION = '[setting] get settings fail',

  DO_CONTACT_US_ACTION = '[contact_us] contact us ',
  DO_CONTACT_US_SUCCESS_ACTION = '[contact_us] contact us success',
  DO_CONTACT_US_FAIL_ACTION = '[contact_us] contact us fail',

  GET_PAGE_DETAIL = '[page_detail] page detail ',
  GET_PAGE_DETAIL_SUCCESS = '[page_detail] page detail success',
  GET_PAGE_DETAIL_FAIL = '[page_detail] page detail fail',

  GET_TODAY_DEALS = '[top_deals] top deals',
  GET_TODAY_DEALS_SUCCESS = '[top_deals] top deals success',
  GET_TODAY_DEALS_FAIL = '[top_deals]top deals fail',

  GET_SUB_CATEGORY_LIST = '[SUB_CATEGORY] SUB CATEGORY',
  GET_SUB_CATEGORY_LIST_SUCCESS = '[SUB_CATEGORY] SUB CATEGORY SUCCESS',
  GET_SUB_CATEGORY_LIST_FAIL = '[SUB_CATEGORY] SUB CATEGORY FAIL',
}

/* get product action*/

/* get product detail action*/

/* get product detail mandatory option action*/

/* get category action*/

/* get related product action*/

/* get brand action*/

/* get banner action*/

/* get featured product action*/

/* get page list action*/

/* get settings action*/

/* do contact us action*/

/* get page detail action*/

/* available options */

/* get country list action*/

/* get Zone list action*/

/* get Top deals list action*/

// sub category

export type Actions =
  | { type: ActionTypes.GET_PRODUCT_LIST; payload: any }
  | { type: ActionTypes.GET_PRODUCT_LIST_SUCCESS; payload: any }
  | { type: ActionTypes.GET_PRODUCT_LIST_FAIL; payload: any }
  | { type: ActionTypes.GET_PRODUCT_COUNT; payload: any }
  | { type: ActionTypes.GET_PRODUCT_COUNT_SUCCESS; payload: any }
  | { type: ActionTypes.GET_PRODUCT_COUNT_FAIL; payload: any }
  | { type: ActionTypes.GET_PRODUCT_DETAIL; payload?: any }
  | { type: ActionTypes.GET_PRODUCT_DETAIL_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_PRODUCT_DETAIL_FAIL; payload?: any }
  | { type: ActionTypes.GET_CATEGORY_LIST; payload?: any }
  | { type: ActionTypes.GET_CATEGORY_LIST_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_CATEGORY_LIST_FAIL; payload?: any }
  | { type: ActionTypes.GET_RELATED_PRODUCT_LIST; payload?: any }
  | { type: ActionTypes.GET_RELATED_PRODUCT_LIST_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_RELATED_PRODUCT_LIST_FAIL; payload?: any }
  | { type: ActionTypes.GET_BANNER_LIST; payload?: any }
  | { type: ActionTypes.GET_BANNER_LIST_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_BANNER_LIST_FAIL; payload?: any }
  | { type: ActionTypes.GET_FEATURED_PRODUCT_LIST; payload?: any }
  | { type: ActionTypes.GET_FEATURED_PRODUCT_LIST_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_FEATURED_PRODUCT_LIST_FAIL; payload?: any }
  | { type: ActionTypes.GET_PAGE_LIST; payload?: any }
  | { type: ActionTypes.GET_PAGE_LIST_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_PAGE_LIST_FAIL; payload?: any }
  | { type: ActionTypes.GET_SETTINGS_ACTION; payload?: any }
  | { type: ActionTypes.GET_SETTINGS_SUCCESS_ACTION; payload?: any }
  | { type: ActionTypes.GET_SETTINGS_FAIL_ACTION; payload?: any }
  | { type: ActionTypes.DO_CONTACT_US_ACTION; payload?: any }
  | { type: ActionTypes.DO_CONTACT_US_SUCCESS_ACTION; payload?: any }
  | { type: ActionTypes.DO_CONTACT_US_FAIL_ACTION; payload?: any }
  | { type: ActionTypes.GET_PAGE_DETAIL; payload?: any }
  | { type: ActionTypes.GET_PAGE_DETAIL_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_PAGE_DETAIL_FAIL; payload?: any }
  | { type: ActionTypes.GET_COUNTRY_LIST; payload?: any }
  | { type: ActionTypes.GET_COUNTRY_LIST_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_COUNTRY_LIST_FAIL; payload?: any }
  | { type: ActionTypes.GET_ZONE_LIST; payload?: any }
  | { type: ActionTypes.GET_ZONE_LIST_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_ZONE_LIST_FAIL; payload?: any }
  | { type: ActionTypes.GET_TODAY_DEALS; payload?: any }
  | { type: ActionTypes.GET_TODAY_DEALS_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_TODAY_DEALS_FAIL; payload?: any }
  | { type: ActionTypes.GET_SUB_CATEGORY_LIST; payload?: any }
  | { type: ActionTypes.GET_SUB_CATEGORY_LIST_SUCCESS; payload?: any }
  | { type: ActionTypes.GET_SUB_CATEGORY_LIST_FAIL; payload?: any };
