export interface CustomerInformation {
  avatar: any;
  avatarPath: string | null;
  email: string;
  firstname: string;
  id: number;
  mobileNumber: string;
}
export interface CustomerData {
  token: string;
  user: CustomerInformation;
}

export interface CustomerLoginSuccess {
  data: CustomerData;
  message: string;
  status: number;
}
export interface CustomerLoginFail {
  message: string;
  status: number;
}
