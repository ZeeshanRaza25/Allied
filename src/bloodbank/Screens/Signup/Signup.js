/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Content, Form, Item, Input, Label, Text} from 'native-base';
import {
  Image,
  View,
  TouchableOpacity,
  Picker,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
export default class StackedLabelExample extends Component {
  state = {
    fullName: '',
    email: '',
    password: '',
    bloodGroup: '',
  };

  onChange = e => {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
  };

  onSubmitForm = e => {
    console.log(this.state);
  };

  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={{alignItems: 'center', backgroundColor: '#eceef3'}}>
              <Text />
              <Image
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}
                source={{
                  uri:
                    'http://pluspng.com/img-png/blood-donation-png-hd-blood-blood-drop-donation-hand-health-care-medical-transfusion-blood-512.png',
                }}
              />
              <Text style={{color: '#e42c34', fontWeight: 'bold'}}>
                WelCome to Blood Bank
              </Text>
              <Content>
                <Form>
                  <Item stackedLabel>
                    <Label style={{color: '#e42c34', fontWeight: 'bold'}}>
                      Full Name
                    </Label>
                    <Input
                      onValueChange={this.onChange}
                      name="fullName"
                      placeholder="H****** R**"
                    />
                  </Item>
                  <Item stackedLabel>
                    <Label style={{color: '#e42c34', fontWeight: 'bold'}}>
                      Mobile Number
                    </Label>
                    <Input
                      keyboardType="numeric"
                      type="number"
                      onValueChange={this.onChange}
                      name="phoneNumber"
                      placeholder="03** *******"
                    />
                  </Item>
                  <Item stackedLabel>
                    <Label style={{color: '#e42c34', fontWeight: 'bold'}}>
                      Select Blood Group
                    </Label>
                    <Picker
                      selectedValue="Hishmat"
                      style={{height: 50, width: '100%'}}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({bloodGroup: itemValue})
                      }>
                      <Picker.Item
                        label="A + (Positive)"
                        value="A + (Positive)"
                      />
                      <Picker.Item
                        label="A - (Negative)"
                        value="A - (Negative)"
                      />
                      <Picker.Item
                        label="B + (Positive)"
                        value="B + (Positive)"
                      />
                      <Picker.Item
                        label="B - (Negative)"
                        value="B - (Negative)"
                      />
                      <Picker.Item
                        label="O + (Positive)"
                        value="O + (Positive)"
                      />
                      <Picker.Item
                        label="O - (Negative)"
                        value="O - (Negative)"
                      />
                      <Picker.Item
                        label="AB + (Positive)"
                        value="AB + (Positive)"
                      />
                      <Picker.Item
                        label="AB - (Negative)"
                        value="AB - (Negative)"
                      />
                    </Picker>
                  </Item>
                  <Item stackedLabel>
                    <Label style={{color: '#e42c34', fontWeight: 'bold'}}>
                      Email
                    </Label>
                    <Input
                      autoCapitalize="none"
                      autoCorrect={false}
                      name="email"
                      onValueChange={this.onChange}
                      placeholder="xyz@gmail.com"
                    />
                  </Item>
                  <Item stackedLabel last>
                    <Label style={{color: '#e42c34', fontWeight: 'bold'}}>
                      Password
                    </Label>

                    <Input
                      onValueChange={this.onChange}
                      name="password"
                      secureTextEntry={true}
                      placeholder="**********"
                    />
                  </Item>
                  <Text />
                  <View style={{textAlign: 'center'}}>
                    <TouchableOpacity
                      rounded
                      style={{
                        backgroundColor: '#e42c34',
                        borderRadius: 50,
                        alignItems: 'center',
                        color: '#FF00FF',
                        padding: 10,
                      }}
                      onPress={() => this.onSubmitForm('Signup')}>
                      <Text style={{fontWeight: 'bold'}}> Sign up </Text>
                    </TouchableOpacity>
                    <Text />
                    <Text
                      style={{
                        color: '#e42c34',
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      Already a member ?
                    </Text>
                    <Text />
                    <TouchableOpacity
                      rounded
                      style={{
                        backgroundColor: '#e42c34',
                        alignItems: 'center',
                        borderRadius: 50,
                        color: 'black',
                        padding: 10,
                      }}
                      onPress={() => this.props.navigation.navigate('Login')}>
                      <Text style={{fontWeight: 'bold'}}> Login </Text>
                    </TouchableOpacity>
                    <Text />
                  </View>
                </Form>
              </Content>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    borderWidth: 5,
    width: null,
    height: null,
  },
});
