/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';
import {View, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ImageSlider from './../../Components/ImageSlider/ImageSlider';
import ShowPost from './../../Components/ShowPost/ShowPost';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class StackedLabelExample extends Component {
  render() {
    console.log(this.props.navigation);
    return (
      <SafeAreaView>
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}> */}
        <View>
          <Header style={{color: '#fff'}}>
            <Left>
              <Text>{''}</Text>
            </Left>
            <Item
              style={{
                color: '#fff',
                width: '40%',
                marginLeft: '25%',
                borderColor: 'none',
              }}>
              <Text style={styles.text}>Blood Bank</Text>
            </Item>
            <Right style={{color: '#fff'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                {/* <Icon name="menu" /> */}
                <Text
                  style={{
                    // backgroundColor: '#fff',
                    color: '#fff',
                    fontSize: 18,
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </Right>
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
});
