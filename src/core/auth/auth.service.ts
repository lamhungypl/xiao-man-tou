import axios from 'axios';
import { CustomerLogin } from 'src/@types/request/auth';
import { ApiUrls } from 'src/services/apiUrls';

import { baseUrl } from 'src/services/environment';

export const customerLogin = (params: CustomerLogin) => {
  return axios.post(`${baseUrl}${ApiUrls.customerLogin}`, params);
};
