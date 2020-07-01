import AsyncStorage from '@react-native-community/async-storage';
import setAuthToken from '../utils/gettoken';
import {AUTO_SIGN_IN, RegisterAction} from '../action/allActionTypes';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import {baseUrl} from './baseurl';
// import { SIGNUP,SIGNIN,FIREBASEURL,REFRESH } from '../../utils/misc';

import Toast from 'react-native-simple-toast';

export function signUp(data, cb) {
  return dispatch => {
    axios({
      method: 'POST',
      url: baseUrl + 'api/v1/users/signUp',
      data: {
        email: data.email,
        password: data.password,
        fullName: data.fullName,
        bloodGroup: data.bloodGroup,
        phoneNumber: data.phoneNumber,
      },
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        // 'Accept': 'application/json',
      },
    })
      .then(response => {
        return response.data;
      })
      .then(res => {
        AsyncStorage.setItem('jwtToken', res.token);
        Toast.show(res.status, Toast.SHORT, ['UIAlertController']);
        console.log(res.data.user);
        cb();
        dispatch(RegisterAction.Register(res.data.user));

        return res;
      })
      .catch(err => {
        cb();
        Toast.show(err.response.data.message, Toast.LONG, [
          'UIAlertController',
        ]);
        return err;
      });
  };
}

export function getAllUser() {
  return dispatch => {
    axios({
      method: 'Get',
      url: baseUrl + 'api/v1/users/allUser',

      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        // 'Accept': 'application/json',
      },
    })
      .then(response => {
        return response.data;
      })
      .then(res => {
        AsyncStorage.setItem('jwtToken', res.token);
        Toast.show(res.status, Toast.SHORT, ['UIAlertController']);
        console.log(res.data.user);
        // cb();
        dispatch(RegisterAction.Alluser(res.data.user));

        return res;
      })
      .catch(err => {
        // cb();
        Toast.show(err.response.data.message, Toast.LONG, [
          'UIAlertController',
        ]);
        return err;
      });
  };
}

export function signIn(data, cb) {
  return dispatch => {
    axios({
      method: 'POST',
      url: baseUrl + 'api/v1/users/login',
      data: {
        email: data.email,
        password: data.password,
      },
      headers: {'Content-Type': 'application/json;charset=UTF-8'},
    })
      .then(response => {
        return response.data;
      })
      .then(res => {
        AsyncStorage.setItem('jwtToken', res.token);
        Toast.show(res.status, Toast.SHORT, ['UIAlertController']);
        console.log(res.data.user);
        cb();
        dispatch(RegisterAction.Register(res.data.user));

        return res;
      })
      .catch(err => {
        cb();
        Toast.show(err.response.data.message, Toast.LONG, [
          'UIAlertController',
        ]);
        return err;
      });
  };
}

export function autoSignIn(token) {
  return dispatch => {
    axios({
      method: 'GET',
      url: baseUrl + 'api/v1/users/getUser',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        return response.data;
      })
      .then(res => {
        // AsyncStorage.setItem('jwtToken', res.token);
        // Toast.show(res.status, Toast.SHORT, ['UIAlertController']);
        console.log(res.data.user);
        // cb();
        dispatch(RegisterAction.Register(res.data.user));

        return res;
      })
      .catch(err => {
        // cb();
        Toast.show(err.response.data.message, Toast.LONG, [
          'UIAlertController',
        ]);
        return err;
      });
  };
}

export const logoutUser = () => dispatch => {
  try {
    AsyncStorage.removeItem('jwtToken');
  } catch (err) {
    alert('error in reomiving token');
  }
  setAuthToken(false);
  dispatch(RegisterAction.loginUser({}));
};

// const request=fetch(baseUrl + "check/signup", {
//     method: "POST",
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//      body:JSON.stringify({
//         email:data.email,
//         password:data.password,
//         name:data.fname,
//         phoneNumber:data.phoneNumber,

//         // returnSecureToken:true
//     }),
// export const loginUser = userData => dispatch => {
//     axios
//         .post(baseUrl + "user/login", userData)
//         .then(res => {
//             const { token } = res.data;
//             try {
//                 AsyncStorage.setItem("jwtToken", token);
//             } catch (err) {
//                 alert("error in adding token");
//             }
//             setAuthToken(token);
//             const decoded = jwtDecode(token);
//             dispatch(setCurrentUser(decoded));
//         })
//         .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
// };
