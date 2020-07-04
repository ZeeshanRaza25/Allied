import AsyncStorage from '@react-native-community/async-storage';
import setAuthToken from '../utils/gettoken';
import {AUTO_SIGN_IN, RegisterAction} from '../action/allActionTypes';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import {baseUrl} from './baseurl';
// import { SIGNUP,SIGNIN,FIREBASEURL,REFRESH } from '../../utils/misc';

import Toast from 'react-native-simple-toast';

export function signUp(data, cb) {
  let success = true;
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
        cb(success);
        dispatch(RegisterAction.Register({...res.data.user, token: res.token}));

        return res;
      })
      .catch(err => {
        success = false;
        cb(success);
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
        // console.log({...res.data.user, token: res.token });
        // cb();
        dispatch(RegisterAction.Alluser({...res.data.user}));

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
  let success = true;
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
        console.log({...res.data.user, token: res.token});
        cb(success);
        dispatch(RegisterAction.Register({...res.data.user, token: res.token}));

        return res;
      })
      .catch(err => {
        success = false;
        cb(success);
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
        AsyncStorage.setItem('jwtToken', res.token);
        // Toast.show(res.status, Toast.SHORT, ['UIAlertController']);
        console.log({...res.data.user, token: res.token});
        // cb();
        dispatch(RegisterAction.Register({...res.data.user, token: res.token}));

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

export function changetoDoner(value, token) {
  return dispatch => {
    axios({
      method: 'GET',
      url: baseUrl + 'api/v1/users/wantToDonate?wantToDonate=' + value,
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
        dispatch(RegisterAction.change({...res.data.user}));

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
  dispatch(RegisterAction.logout({}));
};
