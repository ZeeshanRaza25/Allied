import React, {Component} from 'react';
import {Text} from 'native-base';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TopHeader from './../../Components/Header/Header';
export default class Detail extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <TopHeader navigation={this.props.navigation} />
            <Text>Detail post</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});
