import { Map, Record } from 'immutable';
import { ProfileModel } from '../models/profile.model';

export interface CommonState extends Map<string, any> {
  wishlistCount: number;
  profile: ProfileModel;
  languageList: any;

  wishlistCountLoading: boolean;

  getProfileLoading: boolean;

  getLanguageLoading: boolean;
}

export const CommonRecord = Record({
  wishlistCount: 0,
  profile: {},
  languageList: [],

  wishlistCountLoading: false,

  getProfileLoading: false,

  getLanguageLoading: false,
});
