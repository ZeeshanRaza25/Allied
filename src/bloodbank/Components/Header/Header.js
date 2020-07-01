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
export default class StackedLabelExample extends Component {
  render() {
    console.log(this.props);
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            <Header rounded style={{backgroundColor: '#FFFFFF'}}>
              {/* <Left>
                <Button
                  transparent
                  onPress={() => this.props.navigation.openDrawer()}>
                  <Icon name="menu" />
                </Button>
              </Left> */}
              <Item>
                <Text style={styles.text}>Blood Bank</Text>
                {/* <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-people" /> */}
              </Item>
              {/* <Button transparent>
                <Text>Search</Text>
              </Button> */}
            </Header>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: 'black',
    fontSize: 23,
  },
});
