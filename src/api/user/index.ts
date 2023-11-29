// import { defHttp } from '@/utils/http/axios';
import { loginData } from "../model/index";

// enum Api {
//   ACCOUNT_INFO = "/login",
// }

// Get personal center-basic settings

export const loginApi = (data: loginData) => {
  console.log(data);
  return Promise.resolve(data);
};
// defHttp.post
// defHttp.get
