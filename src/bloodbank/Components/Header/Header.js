/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {Header, Item, Text, Left, Button} from 'native-base';
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default class StackedLabelExample extends Component {
  render() {
    console.log(this.props.navigation);
    return (
      <SafeAreaView>
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}> */}
        <View>
          <Header
            style={{
              color: '#fff',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <Left>
              <TouchableOpacity>
                <Button
                  // transparent
                  onPress={() =>
                    this.props.navigation.navigate('Home', {name: 'Jane'})
                  }>
                  <Icons name="arrow-back" style={styles.HeaderIcon} />
                </Button>
              </TouchableOpacity>
            </Left>
            <Item
              style={{
                color: '#fff',
                // width: '60%',
                marginLeft: '15%',
                borderColor: 'none',
              }}>
              <Text style={styles.text}>Blood Bank</Text>
            </Item>
          </Header>
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  HeaderIcon: {
    color: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
    // marginBottom: 50,
    fontSize: 24,
  },
});
