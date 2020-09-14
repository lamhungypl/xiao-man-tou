import { createSelector } from 'reselect';

import * as listsSelector from './lists.reducer';
import { AppState } from '../../appState';

export const getState = (State: AppState) => State.lists;
export const getProductList = createSelector(getState, listsSelector.productList);
export const getMaxProductPrice = createSelector(getState, listsSelector.maxProductPrice);
export const getProductCount = createSelector(getState, listsSelector.getProductCount);
export const getCategoryList = createSelector(getState, listsSelector.categoryList);
export const getRelatedProducts = createSelector(getState, listsSelector.relatedProducts);
export const getManufacturer = createSelector(getState, listsSelector.manufacturer);
export const getProductDetail = createSelector(getState, listsSelector.productDetail);

export const getProductLoading = createSelector(getState, listsSelector.productLoading);

export const getAvailableOptionsArray = createSelector(getState, listsSelector.getAvailableOptionsArray);

export const bannerList = createSelector(getState, listsSelector.getBannerList);
export const bannerLoadingStatus = createSelector(getState, listsSelector.getListLoading);

export const bannerCount = createSelector(getState, listsSelector.getBannerCount);
export const countLoadingStatus = createSelector(getState, listsSelector.getCountLoading);

export const featuredList = createSelector(getState, listsSelector.getFeaturedList);
export const featuredListLoadingStatus = createSelector(getState, listsSelector.getFeaturedListLoading);

export const relatedProductLoadingStatus = createSelector(getState, listsSelector.getRelatedProductLoading);

export const getPageList = createSelector(getState, listsSelector.getPageList);
export const pageListLoadingStatus = createSelector(getState, listsSelector.getPageListLoading);

export const settingDetail = createSelector(getState, listsSelector.getSettingDetail);

export const contactUsLoadingStatus = createSelector(getState, listsSelector.getContactUsLoading);

export const getContactDetail = createSelector(getState, listsSelector.getContactDetail);

export const pageDetailLoadingStatus = createSelector(getState, listsSelector.getPageDetailLoading);

export const pageDetail = createSelector(getState, listsSelector.getPageDetail);

export const manufacturerLoadingStatus = createSelector(getState, listsSelector.getManufacturerLoading);

export const productDetailLoadingStatus = createSelector(getState, listsSelector.getProductDetailLoading);

export const countryList = createSelector(getState, listsSelector.getCountryList);
export const countryLoading = createSelector(getState, listsSelector.getCountryLoading);

export const zoneList = createSelector(getState, listsSelector.getZoneList);
export const zoneLoading = createSelector(getState, listsSelector.getZoneLoading);

export const todayDealList = createSelector(getState, listsSelector.getTodayDealList);
export const todayDealLoading = createSelector(getState, listsSelector.getTodayDealLoading);

export const subCategoryList = createSelector(getState, listsSelector.subCategoryList);
export const subCategoryLoading = createSelector(getState, listsSelector.subCategoryLoading);

export const subCategoryID = createSelector(getState, listsSelector.selectedCategoryId);
