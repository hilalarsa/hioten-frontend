import React from 'react';
import axios from 'axios';

// notes
// ada masalah dengan react hooks sehingga showSnackbar dijadikan
// parameter dan disupply dari component
// unit test selanjutnya tidak perlu mengetes skenario error, hanya sukses

/**
 * @summary memanggil api tanpa auth
 * @param path (url setelah api/v1
 * @param method
 * @param showSnackbar gunakan this.props.showSnackbar jika ingin default atau gunakan () => {} jika ingin custom dari page
 * @param dataRequest (bisa dikosongi)
 * @param headers (bisa dikosongi)
 * @returns {Promise<AxiosResponse<any>>}
 * @constructor
 */

export async function CommonNetworkCall(path, method, dataRequest = '', headers = {}) {
  //const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const BASE_URL = "https://60db0397801dcb0017290d6c.mockapi.io/invoker/v1/"
  const url = `${BASE_URL}${path}`;

  // eslint-disable-next-line no-use-before-define,no-return-await
  return await axiosService(method, url, dataRequest, headers)
    .then((apiResponse) => {
      //const { response, result } = apiResponse.data;

      //if (response.code !== '000000') {
        //showSnackbar('Terjadi Gangguan', 'error');
      //  return null;
      //}
      return apiResponse.data;
    })
    .catch((error) => {
      //if (isNotUndefined(error.response)) {
      //  const { data } = error.response;
        //showSnackbar(data.response.user_errors, 'error');
      //} else {
        //showSnackbar(error.toString(), 'error');
     // }
      return null;
    });
}
//
// /**
//  * @summary call api using auth that placed at header, if get 401 we should call refresh token
//  * but now then refresh token end point not ready yet, so we directly go to login page and clear storage
//  * @param path
//  * @param method
//  * @param showSnackbar, gunakan this.props.showSnackbar jika ingin default atau gunakan () => {} jika ingin custom dari page
//  * @param dataRequest
//  * @param customHeader
//  * @returns {Promise<AxiosResponse<any>>}
//  * @constructor
//  */
// export async function AuthNetworkCall(path, method, showSnackbar, dataRequest = '', customHeader = {}) {
//   const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
//   const url = `${BASE_URL}${path}`;
//
//   const token = JSON.parse(localStorage.getItem('token'));
//   let headers;
//   if (token) {
//     headers = { ...customHeader, Authorization: `Bearer ${token.access_token}` };
//   } else {
//     showSnackbar('Silahkan login terlebih dahulu', 'error');
//     doLogout();
//     return null;
//   }
//   return await axiosService(method, url, dataRequest, headers)
//     .then((apiResponse) => {
//       const { response, result } = apiResponse.data;
//
//       if (response.code !== '000000') {
//         showSnackbar('Terjadi Gangguan', 'error');
//         return null;
//       }
//       return result;
//     })
//     .catch((error) => {
//       if (isNotUndefined(error.response)) {
//         const { data } = error.response;
//         if (error.response.status === 401) {
//           showSnackbar('Terjadi masalah, silahkan login terlebih dahulu', 'error');
//           doLogout();
//         } else if (error.response.status === 403) {
//           showSnackbar('Akun anda tidak aktif atau terblokir, silahkan gunakan akun lain', 'error');
//           doLogout();
//         } else showSnackbar(data.response.user_errors, 'error');
//       } else {
//         showSnackbar(error.toString(), 'error');
//       }
//       return null;
//     });
// }
//
// function doLogout() {
//   localStorage.clear();
//   Router.push('/login');
// }
//
function axiosService(method, url, dataRequest = '', headers = {}) {
  switch (method) {
    case 'get':
      return axios.get(url, { headers });
    case 'post':
      return axios.post(url, dataRequest, { headers });
    case 'delete':
      return axios.delete(url, { headers });
    case 'put':
      return axios.put(url, dataRequest, { headers });
    default:
      return axios();
  }
}
