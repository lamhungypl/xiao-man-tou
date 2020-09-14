import { Map, Record } from 'immutable';
import { BannerListResponse } from '../models/banner-list-response.model';
import { FeaturedProductResponse } from '../models/featured-product-response.model';
import { ProductsResponse } from '../models/products-response.model';
import { CategoryResponse } from '../models/category-response.model';
import { ManufacturerResponse } from '../models/manufacturer-response.model';
import { ProductDetailResponse } from '../models/product-details-response.model';
import { PageListResponse } from '../models/page-list-response.model';
import { SettingResponse } from '../models/setting-response.model';
import { CountryResponse } from '../models/country-response.model';
import { TodayDealsResponse } from '../models/today-deals-response.model';

export interface ListsState extends Map<string, any> {
  products: ProductsResponse[];
  maxProductPrice: any;
  productCount: number;
  category: CategoryResponse[];
  relatedProducts: any;
  manufacturer: ManufacturerResponse[];
  productDetail: ProductDetailResponse;
  // productDetailMandatory: ProductDetailMandatoryResponseModel;

  productLoading: boolean;

  bannerList: BannerListResponse[];
  bannerLoading: boolean;

  availableOptionsArray: any;

  bannerCount: any;
  countLoading: boolean;

  featuredList: FeaturedProductResponse[];
  featuredListLoading: boolean;

  relatedProductLoading: boolean;

  pageList: PageListResponse[];
  pageListLoading: boolean;

  settingDetail: SettingResponse;

  contactUsLoading: boolean;

  contactDetail: any;

  pageDetailLoading: boolean;

  pageDetail: any;

  manufacturerLoading: boolean;

  productDetailLoading: boolean;

  countryList: CountryResponse[];
  countryLoading: boolean;

  zoneList: CountryResponse[];
  zoneLoading: boolean;

  todayDeal: TodayDealsResponse[];
  todayDealLoading: boolean;

  subcategory: any;
  subcategoryLoading: boolean;

  selectedCategoryId: any;
}

export const listsRecord = Record({
  products: [],
  maxProductPrice: 0,
  productCount: 0,
  category: [],
  relatedProducts: [],
  manufacturer: [],
  productDetail: {},
  // productDetailMandatory: ProductDetailMandatoryResponseModel,

  productLoading: false,

  bannerList: [],
  bannerLoading: false,

  availableOptionsArray: [],

  bannerCount: 0,
  countLoading: false,

  featuredList: [],
  featuredListLoading: false,

  relatedProductLoading: false,

  pageList: [],
  pageListLoading: false,

  settingDetail: {},

  contactUsLoading: false,

  contactDetail: {},

  pageDetailLoading: false,

  pageDetail: {},

  manufacturerLoading: false,

  productDetailLoading: false,

  countryList: [],
  countryLoading: false,

  zoneList: [],
  zoneLoading: false,

  todayDeal: [],
  todayDealLoading: false,

  subcategory: {},
  subcategoryLoading: false,

  selectedCategoryId: {},
});
