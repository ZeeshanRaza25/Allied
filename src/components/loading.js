import Spinner from 'react-native-loading-spinner-overlay';

import React, {Component} from 'react';
import {StyleSheet } from "react-native"
export default class componentName extends Component {
  render() {
    return (
      <Spinner
        visible={this.props.spinner}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
});
