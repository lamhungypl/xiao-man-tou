import { ZoneCountryResponse } from './zone-country-response.model';

export interface ZoneResponseModel {
  code: string;
  isActive: number;
  name: string;
  zoneId: string;
  country: ZoneCountryResponse;
}
