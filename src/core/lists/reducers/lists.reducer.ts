import { ActionTypes, Actions } from '../actions/lists.actions';
import { ListsState, listsRecord } from './lists.state';

export const initialState: ListsState = (new listsRecord() as unknown) as ListsState;

export function reducer(state = initialState, action: Actions): ListsState {
  switch (action.type) {
    case ActionTypes.GET_PRODUCT_LIST: {
      return state;
    }

    case ActionTypes.GET_PRODUCT_LIST_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_PRODUCT_LIST_FAIL: {
      return state;
    }

    case ActionTypes.GET_PRODUCT_COUNT: {
      return state;
    }

    case ActionTypes.GET_PRODUCT_COUNT_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_PRODUCT_COUNT_FAIL: {
      return state;
    }

    case ActionTypes.GET_CATEGORY_LIST: {
      return state;
    }

    case ActionTypes.GET_CATEGORY_LIST_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_CATEGORY_LIST_FAIL: {
      return state;
    }
    case ActionTypes.GET_RELATED_PRODUCT_LIST: {
      return state;
    }

    case ActionTypes.GET_RELATED_PRODUCT_LIST_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_RELATED_PRODUCT_LIST_FAIL: {
      return state;
    }
    // case ActionTypes.GET_MANUFACTURER_LIST: {
    //   return state;
    // }

    // case ActionTypes.GET_MANUFACTURER_LIST_SUCCESS: {
    //   return state;
    // }
    // case ActionTypes.GET_MANUFACTURER_LIST_FAIL: {
    //   return state;
    // }

    case ActionTypes.GET_PRODUCT_DETAIL: {
      return state;
    }

    case ActionTypes.GET_PRODUCT_DETAIL_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_PRODUCT_DETAIL_FAIL: {
      return state;
    }

    // product detail mandatory details

    // case ActionTypes.GET_PRODUCT_DETAIL_MANDATORY: {
    //   return state;
    // }

    // case ActionTypes.GET_PRODUCT_DETAIL_MANDATORY_SUCCESS: {
    //   return state;
    // }
    // case ActionTypes.GET_PRODUCT_DETAIL_MANDATORY_FAIL: {
    //   return state;
    // }

    // case ActionTypes.GET_AVAILABLE_VALUE: {
    //   return state;
    // }
    case ActionTypes.GET_BANNER_LIST: {
      return state;
    }
    case ActionTypes.GET_BANNER_LIST_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_BANNER_LIST_FAIL: {
      return state;
    }
    // case ActionTypes.GET_BANNER_LIST_COUNT: {
    //   return state;
    // }
    // case ActionTypes.GET_BANNER_LIST_COUNT_SUCCESS: {
    //   return state;
    // }
    // case ActionTypes.GET_BANNER_LIST_COUNT_FAIL: {
    //   return state;
    // }
    case ActionTypes.GET_FEATURED_PRODUCT_LIST: {
      return state;
    }
    case ActionTypes.GET_FEATURED_PRODUCT_LIST_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_FEATURED_PRODUCT_LIST_FAIL: {
      return state;
    }
    case ActionTypes.GET_PAGE_LIST: {
      return state;
    }
    case ActionTypes.GET_PAGE_LIST_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_PAGE_LIST_FAIL: {
      return state;
    }
    case ActionTypes.DO_CONTACT_US_ACTION: {
      return state;
    }
    case ActionTypes.DO_CONTACT_US_SUCCESS_ACTION: {
      return state;
    }
    case ActionTypes.DO_CONTACT_US_FAIL_ACTION: {
      return state;
    }
    case ActionTypes.GET_PAGE_DETAIL: {
      return state;
    }
    case ActionTypes.GET_PAGE_DETAIL_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_PAGE_DETAIL_FAIL: {
      return state;
    }
    case ActionTypes.GET_SETTINGS_ACTION: {
      return state;
    }
    case ActionTypes.GET_SETTINGS_SUCCESS_ACTION: {
      return state;
    }

    case ActionTypes.GET_SETTINGS_FAIL_ACTION: {
      return state;
    }

    case ActionTypes.GET_COUNTRY_LIST: {
      return state;
    }

    case ActionTypes.GET_COUNTRY_LIST_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_COUNTRY_LIST_FAIL: {
      return state;
    }

    case ActionTypes.GET_ZONE_LIST_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_ZONE_LIST_FAIL: {
      return state;
    }
    case ActionTypes.GET_TODAY_DEALS: {
      return state;
    }
    case ActionTypes.GET_TODAY_DEALS_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_TODAY_DEALS_FAIL: {
      return state;
    }

    // subcategory
    case ActionTypes.GET_SUB_CATEGORY_LIST: {
      return state;
    }
    case ActionTypes.GET_SUB_CATEGORY_LIST_SUCCESS: {
      return state;
    }
    case ActionTypes.GET_SUB_CATEGORY_LIST_FAIL: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export const productList = (state: ListsState) => state.products;
export const maxProductPrice = (state: ListsState) => state.maxProductPrice;
export const getProductCount = (state: ListsState) => state.productCount;
export const productLoading = (state: ListsState) => state.productLoading;

export const categoryList = (state: ListsState) => state.category;
export const relatedProducts = (state: ListsState) => state.relatedProducts;
export const manufacturer = (state: ListsState) => state.manufacturer;
export const productDetail = (state: ListsState) => state.productDetail;
// export const productDetailMandatory = (state: ListsState) => state.productDetailMandatory;

export const getAvailableOptionsArray = (state: ListsState) => state.availableOptionsArray;

export const getBannerList = (state: ListsState) => state.bannerList;
export const getListLoading = (state: ListsState) => state.bannerLoading;

export const getBannerCount = (state: ListsState) => state.bannerCount;
export const getCountLoading = (state: ListsState) => state.countLoading;

export const getFeaturedList = (state: ListsState) => state.featuredList;
export const getFeaturedListLoading = (state: ListsState) => state.featuredListLoading;

export const getRelatedProductLoading = (state: ListsState) => state.relatedProductLoading;

export const getPageList = (state: ListsState) => state.pageList;
export const getPageListLoading = (state: ListsState) => state.pageListLoading;

export const getSettingDetail = (state: ListsState) => state.settingDetail;

export const getContactUsLoading = (state: ListsState) => state.contactUsLoading;

export const getContactDetail = (state: ListsState) => state.contactDetail;

export const getPageDetailLoading = (state: ListsState) => state.pageDetailLoading;

export const getPageDetail = (state: ListsState) => state.pageDetail;

export const getManufacturerLoading = (state: ListsState) => state.manufacturerLoading;

export const getProductDetailLoading = (state: ListsState) => state.productDetailLoading;

export const getCountryList = (state: ListsState) => state.countryList;
export const getCountryLoading = (state: ListsState) => state.countryLoading;

export const getZoneList = (state: ListsState) => state.zoneList;
export const getZoneLoading = (state: ListsState) => state.zoneLoading;

export const getTodayDealList = (state: ListsState) => state.todayDeal;
export const getTodayDealLoading = (state: ListsState) => state.todayDealLoading;

export const subCategoryList = (state: ListsState) => state.subcategory;
export const subCategoryLoading = (state: ListsState) => state.subcategoryLoading;

export const selectedCategoryId = (state: ListsState) => state.selectedCategoryId;
